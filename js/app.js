/* ============================================================
   General Chemistry Knowledge Hub — App Logic
   Vanilla JS · hash router · localStorage progress
   ============================================================ */
(function () {
  'use strict';

  var DATA = window.CHEM_DATA;
  var CHAPTERS = DATA.chapters;

  /* ---------- helpers ---------- */
  function $(sel, el) { return (el || document).querySelector(sel); }
  function $all(sel, el) { return Array.prototype.slice.call((el || document).querySelectorAll(sel)); }
  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function stripTags(s) { return String(s).replace(/<[^>]+>/g, ''); }

  /* ---------- state / storage ---------- */
  var KEY = 'gck_state_v1';
  var state = { learned: {}, history: [] };
  try {
    var raw = localStorage.getItem(KEY);
    if (raw) { var p = JSON.parse(raw); state.learned = p.learned || {}; state.history = p.history || []; }
  } catch (e) {}
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} }

  function learnedSet(chId) { return state.learned[chId] || (state.learned[chId] = []); }
  function learnedCount(ch) { return learnedSet(ch.id).length; }
  function totalSections() { return CHAPTERS.reduce(function (n, c) { return n + c.sections.length; }, 0); }
  function totalLearned() { return CHAPTERS.reduce(function (n, c) { return n + learnedCount(c); }, 0); }
  function chapterById(id) { for (var i = 0; i < CHAPTERS.length; i++) if (CHAPTERS[i].id === id) return CHAPTERS[i]; return null; }

  /* ---------- quiz session (in memory) ---------- */
  var session = null; // {chId, answers[], submitted}

  /* ---------- search index ---------- */
  var INDEX = null;
  function buildIndex() {
    INDEX = [];
    CHAPTERS.forEach(function (ch) {
      ch.sections.forEach(function (sec) {
        sec.points.forEach(function (p) {
          INDEX.push({
            ch: ch, sec: sec,
            term: p.term, zh: p.zh,
            text: stripTags([p.term, p.zh, p.def, p.formula || '', p.example || ''].join(' ')).toLowerCase()
          });
        });
      });
    });
  }
  function search(q) {
    if (!INDEX) buildIndex();
    q = q.toLowerCase().trim();
    if (!q) return [];
    return INDEX.filter(function (it) { return it.text.indexOf(q) !== -1; });
  }

  /* ---------- shared ui bits ---------- */
  function progressBar(pct, cls) {
    return '<div class="bar ' + (cls || '') + '"><span style="width:' + pct + '%"></span></div>';
  }
  function ring(pct, label, sub) {
    return '<div class="ring" style="--p:' + pct + '"><div class="ring-in"><b>' + label + '</b><span>' + sub + '</span></div></div>';
  }

  /* ---------- sidebar ---------- */
  function renderSidebar(route) {
    var total = totalSections(), done = totalLearned();
    var pct = Math.round(done / total * 100);
    var item = function (href, icon, label, badge, active) {
      return '<a class="nav-item' + (active ? ' active' : '') + '" href="' + href + '"><span class="nav-icon">' + icon + '</span><span class="nav-label">' + label + '</span>' + (badge ? '<span class="nav-badge">' + badge + '</span>' : '') + '</a>';
    };
    var html = '' +
      '<a class="brand" href="#/home"><span class="brand-mark">C</span><div><b>ChemHub</b><span>普通化学知识库</span></div></a>' +
      '<div class="side-progress">' + ring(pct, pct + '%', done + '/' + total + ' sections') + '</div>' +
      '<nav class="nav">' +
      item('#/home', '⌂', 'Overview', '', route.name === 'home') +
      item('#/index', '⌗', 'Index 目录', totalPoints() + ' pts', route.name === 'index') +
      '<div class="nav-sep">Lectures · 讲义</div>';
    CHAPTERS.forEach(function (ch) {
      var lc = learnedCount(ch);
      html += item('#/ch/' + ch.id, esc(ch.lecture.replace('Lecture ', 'L')), esc(ch.title),
        lc + '/' + ch.sections.length, route.name === 'ch' && route.chId === ch.id);
    });
    html += '<div class="nav-sep">Practice · 练习</div>' +
      item('#/quiz', '✎', 'Self-Test Center', '', route.name === 'quiz' && !route.chId) +
      item('#/stats', '▦', 'Progress & Stats', '', route.name === 'stats') +
      '</nav>' +
      '<div class="side-foot">进度自动保存于本地浏览器<br>Progress auto-saved (localStorage)</div>';
    $('#sidebar').innerHTML = html;
  }

  /* ---------- router ---------- */
  function parseHash() {
    var h = location.hash.replace(/^#\/?/, '');
    var parts = h.split('/');
    if (parts[0] === 'ch' && parts[1]) return { name: 'ch', chId: parts[1], secId: parts[2] || null };
    if (parts[0] === 'quiz') return { name: 'quiz', chId: parts[1] || null };
    if (parts[0] === 'stats') return { name: 'stats' };
    if (parts[0] === 'index') return { name: 'index' };
    if (parts[0] === 'search') return { name: 'search' };
    return { name: 'home' };
  }
  function render() {
    var route = parseHash();
    document.body.classList.remove('sidebar-open');
    renderSidebar(route);
    var main = $('#main');
    if (route.name === 'home') main.innerHTML = viewHome();
    else if (route.name === 'ch') main.innerHTML = viewChapter(route.chId, route.secId);
    else if (route.name === 'index') main.innerHTML = viewIndex();
    else if (route.name === 'quiz') main.innerHTML = route.chId ? viewQuiz(route.chId) : viewQuizCenter();
    else if (route.name === 'stats') main.innerHTML = viewStats();
    else if (route.name === 'search') main.innerHTML = viewSearchPlaceholder();
    bindEvents(main);
    if (route.name === 'ch' && route.secId) {
      var el = document.getElementById('sec-' + route.secId);
      if (el) {
        el.classList.add('flash');
        setTimeout(function () { if (el.scrollIntoView) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 40);
        setTimeout(function () { el.classList.remove('flash'); }, 2400);
      }
    }
  }

  /* ---------- views ---------- */
  function viewHome() {
    var c = DATA.course, total = totalSections(), done = totalLearned();
    var pct = Math.round(done / total * 100);
    var cards = CHAPTERS.map(function (ch) {
      var lc = learnedCount(ch), p = Math.round(lc / ch.sections.length * 100);
      var best = bestScore(ch.id);
      return '<div class="ch-card">' +
        '<div class="ch-top"><span class="ch-lec">' + esc(ch.lecture) + '</span><span class="ch-src">' + esc(ch.source) + '</span></div>' +
        '<h3>' + esc(ch.title) + '</h3><div class="ch-zh">' + esc(ch.zh) + '</div>' +
        '<div class="ch-meta">' + ch.sections.length + ' sections · ' + ch.quiz.length + ' quiz Qs' +
        (best !== null ? ' · best <b>' + best + '%</b>' : '') + '</div>' +
        progressBar(p) +
        '<div class="ch-actions"><a class="btn btn-primary" href="#/ch/' + ch.id + '">Study</a>' +
        '<a class="btn" href="#/quiz/' + ch.id + '">Self-Test</a></div>' +
        '</div>';
    }).join('');
    var next = nextSection();
    return '<div class="view">' +
      '<header class="hero">' +
      '<div class="hero-txt"><h1>' + esc(c.name) + ' <span class="zh">· ' + esc(c.zh) + '</span></h1>' +
      '<p class="hero-sub">' + esc(c.school) + ' · ' + esc(c.textbook) + '<br>' + esc(c.instructor) + ' · ' + esc(c.midterm) + '</p>' +
      '<div class="hero-grade">' + esc(c.grading) + '</div>' +
      '<div class="hero-cta">' +
      (next ? '<a class="btn btn-primary" href="#/ch/' + next.ch.id + '/' + next.sec.id + '">Continue: ' + esc(next.sec.title) + '</a>' : '<span class="done-all">All sections learned 🎉</span>') +
      '<a class="btn" href="#/quiz">Self-Test Center</a>' +
      '</div></div>' +
      '<div class="hero-ring">' + ring(pct, pct + '%', done + '/' + total) + '<span class="hero-ring-label">Overall Mastery</span></div>' +
      '</header>' +
      '<div class="grid">' + cards + '</div>' +
      '</div>';
  }

  function viewChapter(chId, secId) {
    var ch = chapterById(chId);
    if (!ch) return '<div class="view"><p>Chapter not found. <a href="#/home">Back home</a></p></div>';
    var lc = learnedCount(ch), pct = Math.round(lc / ch.sections.length * 100);
    var idx = CHAPTERS.indexOf(ch);
    var prev = CHAPTERS[idx - 1], next = CHAPTERS[idx + 1];

    var secs = ch.sections.map(function (sec, i) {
      var learned = learnedSet(ch.id).indexOf(sec.id) !== -1;
      var pts = sec.points.map(function (p) {
        return '<div class="point">' +
          '<div class="pt-head"><span class="pt-term">' + p.term + '</span>' + (p.zh ? '<span class="pt-zh">' + esc(p.zh) + '</span>' : '') + '</div>' +
          '<div class="pt-def">' + p.def + '</div>' +
          (p.formula ? '<div class="pt-formula">' + p.formula + '</div>' : '') +
          (p.example ? '<div class="pt-example"><span class="tag tag-ex">Example 例</span>' + p.example + '</div>' : '') +
          '</div>';
      }).join('');
      var tips = (sec.tips && sec.tips.length)
        ? '<div class="pt-tip"><span class="tag tag-tip">Exam Tip 考点</span>' + sec.tips.map(esc).join('<br>') + '</div>' : '';
      return '<section class="card sec' + (learned ? ' learned' : '') + '" id="sec-' + sec.id + '">' +
        '<header class="sec-head">' +
        '<span class="sec-num">' + (i + 1) + '</span>' +
        '<div class="sec-titles"><h3>' + esc(sec.title) + '</h3><span class="zh">' + esc(sec.zh) + '</span></div>' +
        '<button class="learn-toggle' + (learned ? ' on' : '') + '" data-ch="' + ch.id + '" data-sec="' + sec.id + '" title="Mark as learned">' +
        '<svg viewBox="0 0 24 24" width="14" height="14"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
        '</button></header>' +
        '<div class="points">' + pts + '</div>' + tips +
        '</section>';
    }).join('');

    return '<div class="view">' +
      '<header class="ch-head">' +
      '<a class="crumb" href="#/home">Overview</a> <span class="crumb-sep">/</span> <span class="crumb-cur">' + esc(ch.lecture) + '</span>' +
      '<h1>' + esc(ch.title) + ' <span class="zh">' + esc(ch.zh) + '</span></h1>' +
      '<p class="ch-sub">' + esc(ch.source) + ' · Brown &amp; LeMay</p>' +
      '<div class="ch-progress"><div class="ch-progress-txt"><span>' + lc + '/' + ch.sections.length + ' sections learned</span><span>' + pct + '%</span></div>' + progressBar(pct) + '</div>' +
      '<div class="ch-head-actions"><button class="btn btn-sm" id="markAllCh">' + (lc === ch.sections.length ? 'Unmark all' : 'Mark all learned') + '</button>' +
      '<a class="btn btn-sm btn-primary" href="#/quiz/' + ch.id + '">Self-Test ' + ch.quiz.length + ' Qs</a></div>' +
      '</header>' +
      secs +
      '<nav class="pager">' +
      (prev ? '<a class="btn" href="#/ch/' + prev.id + '">← ' + esc(prev.title) + '</a>' : '<span></span>') +
      (next ? '<a class="btn" href="#/ch/' + next.id + '">' + esc(next.title) + ' →</a>' : '<span></span>') +
      '</nav>' +
      '</div>';
  }

  function viewQuizCenter() {
    var rows = CHAPTERS.map(function (ch) {
      var best = bestScore(ch.id), attempts = attemptsOf(ch.id);
      return '<a class="qz-row" href="#/quiz/' + ch.id + '">' +
        '<div><b>' + esc(ch.lecture) + ' · ' + esc(ch.title) + '</b><span class="qz-zh">' + esc(ch.zh) + '</span></div>' +
        '<div class="qz-meta">' + ch.quiz.length + ' Qs' + (best !== null ? ' · best <b>' + best + '%</b>' : '') + ' · ' + attempts + ' attempt(s)</div>' +
        '<span class="qz-go">Start →</span></a>';
    }).join('');
    return '<div class="view">' +
      '<header class="ch-head"><h1>Self-Test Center <span class="zh">自测中心</span></h1>' +
      '<p class="ch-sub">Real-exam conditions: fixed question sequence, no immediate feedback — submit to see score &amp; explanations.<br>模拟考试条件：固定题序、不作即时反馈，交卷后查看得分与解析。</p></header>' +
      '<div class="card qz-list">' + rows + '</div>' +
      '<p class="muted-note">Every attempt is saved locally — see <a href="#/stats">Progress &amp; Stats</a>.</p>' +
      '</div>';
  }

  function viewQuiz(chId) {
    var ch = chapterById(chId);
    if (!ch) return '<div class="view"><p>Quiz not found.</p></div>';
    if (!session || session.chId !== ch.id) {
      var best = bestScore(ch.id);
      return '<div class="view">' +
        '<header class="ch-head"><h1>' + esc(ch.lecture) + ' · ' + esc(ch.title) + '</h1>' +
        '<p class="ch-sub">' + ch.quiz.length + ' questions · fixed order · answers revealed after submission' + (best !== null ? ' · your best: <b>' + best + '%</b>' : '') + '</p></header>' +
        '<div class="card qz-intro"><h3>Rules 考试规则</h3><ul>' +
        '<li>Questions appear in <b>fixed order</b> (固定题序), like the real exam.</li>' +
        '<li>No immediate feedback (不作即时反馈) — choose your answers, then submit.</li>' +
        '<li>Score, correct answers and explanations (解析) appear after submission.</li>' +
        '</ul><button class="btn btn-primary" id="startQuiz" data-ch="' + ch.id + '">Start 开始</button> ' +
        '<a class="btn" href="#/quiz">Back</a></div></div>';
    }
    var s = session;
    if (s.submitted) {
      var pct = Math.round(s.answers.filter(function (a, i) { return a === ch.quiz[i].a; }).length / ch.quiz.length * 100);
      var review = ch.quiz.map(function (q, i) {
        var my = s.answers[i], ok = my === q.a;
        return '<div class="card qz-q ' + (ok ? 'qz-ok' : 'qz-bad') + '">' +
          '<div class="qz-qnum">Q' + (i + 1) + ' <span class="' + (ok ? 'ok' : 'no') + '">' + (ok ? '✓ Correct' : '✗ Incorrect') + '</span></div>' +
          '<p class="qz-qt">' + q.q + '</p>' +
          '<div class="qz-opts">' + q.opts.map(function (o, j) {
            var cls = 'qz-opt';
            if (j === q.a) cls += ' right';
            else if (j === my) cls += ' wrong';
            else cls += ' dim';
            return '<div class="' + cls + '">' + '<b>' + 'ABCD'[j] + '</b> ' + o + '</div>';
          }).join('') + '</div>' +
          '<div class="qz-ex"><span class="tag tag-tip">Explanation 解析</span>' + q.ex + '</div>' +
          '</div>';
      }).join('');
      return '<div class="view">' +
        '<header class="ch-head"><h1>Result — ' + esc(ch.lecture) + '</h1>' +
        '<p class="ch-sub">' + esc(ch.title) + '</p></header>' +
        '<div class="card qz-score">' + ring(pct, pct + '%', s.correct + '/' + ch.quiz.length) +
        '<div class="qz-score-txt"><h3>' + (pct >= 90 ? 'Excellent! 优秀' : pct >= 75 ? 'Good job! 良好' : pct >= 60 ? 'Pass — keep going 及格' : 'Needs review 需要复习') + '</h3>' +
        '<p>Saved to your history. Review the explanations below.</p>' +
        '<button class="btn btn-primary" id="retakeQuiz" data-ch="' + ch.id + '">Retake 重测</button> ' +
        '<a class="btn" href="#/ch/' + ch.id + '">Back to notes</a> <a class="btn" href="#/stats">Stats</a></div></div>' +
        review + '</div>';
    }
    // question form
    var qs = ch.quiz.map(function (q, i) {
      return '<div class="card qz-q"><div class="qz-qnum">Q' + (i + 1) + ' <span class="qz-answered" data-q="' + i + '"></span></div>' +
        '<p class="qz-qt">' + q.q + '</p>' +
        '<div class="qz-opts">' + q.opts.map(function (o, j) {
          return '<label class="qz-opt pick"><input type="radio" name="q' + i + '" value="' + j + '"><b>' + 'ABCD'[j] + '</b> ' + o + '</label>';
        }).join('') + '</div></div>';
    }).join('');
    return '<div class="view">' +
      '<header class="ch-head"><h1>' + esc(ch.lecture) + ' Self-Test</h1>' +
      '<p class="ch-sub">Fixed sequence · no feedback until submit · <span id="answeredCount">0</span>/' + ch.quiz.length + ' answered</p></header>' +
      qs +
      '<div class="qz-submit"><button class="btn btn-primary" id="submitQuiz" data-ch="' + ch.id + '">Submit 交卷</button> ' +
      '<button class="btn" id="cancelQuiz">Cancel</button></div>' +
      '</div>';
  }

  function viewStats() {
    var total = totalSections(), done = totalLearned();
    var pct = Math.round(done / total * 100);
    var rows = CHAPTERS.map(function (ch) {
      var lc = learnedCount(ch), p = Math.round(lc / ch.sections.length * 100);
      var best = bestScore(ch.id), att = attemptsOf(ch.id);
      return '<tr><td><a href="#/ch/' + ch.id + '">' + esc(ch.lecture) + ' · ' + esc(ch.title) + '</a></td>' +
        '<td class="td-bar">' + progressBar(p) + '</td><td>' + lc + '/' + ch.sections.length + '</td>' +
        '<td>' + (best !== null ? best + '%' : '—') + '</td><td>' + att + '</td></tr>';
    }).join('');
    var hist = state.history.slice().reverse().map(function (h) {
      var ch = chapterById(h.ch);
      return '<tr><td>' + h.date + '</td><td>' + (ch ? esc(ch.lecture + ' · ' + ch.title) : esc(h.ch)) + '</td>' +
        '<td>' + h.score + '/' + h.total + '</td><td><b>' + h.pct + '%</b></td></tr>';
    }).join('');
    return '<div class="view">' +
      '<header class="ch-head"><h1>Progress &amp; Stats <span class="zh">学习进度与分析</span></h1></header>' +
      '<div class="card stats-top">' + ring(pct, pct + '%', done + '/' + total) +
      '<div><h3>Knowledge Mastery 知识掌握</h3><p>Sections marked as learned across all 6 lectures.</p>' +
      '<div class="stats-actions">' +
      '<button class="btn btn-sm" id="exportBtn">Export 导出进度</button>' +
      '<label class="btn btn-sm">Import 导入<input type="file" id="importFile" accept="application/json" hidden></label>' +
      '<button class="btn btn-sm btn-danger" id="resetBtn">Reset 重置</button>' +
      '</div></div></div>' +
      '<div class="card"><h3>By Chapter 各章进度</h3><table class="tbl"><thead><tr><th>Chapter</th><th style="width:34%">Mastery</th><th>Sections</th><th>Quiz Best</th><th>Attempts</th></tr></thead><tbody>' + rows + '</tbody></table></div>' +
      '<div class="card"><h3>Quiz History 测验记录</h3>' +
      (hist ? '<table class="tbl"><thead><tr><th>Date</th><th>Chapter</th><th>Score</th><th>Percent</th></tr></thead><tbody>' + hist + '</tbody></table>'
        : '<p class="muted">No attempts yet — take a quiz from the <a href="#/quiz">Self-Test Center</a>.</p>') +
      '</div>' +
      '</div>';
  }

  function viewSearchPlaceholder() { return '<div class="view"><p>Search results appear here.</p></div>'; }

  function totalPoints() {
    return CHAPTERS.reduce(function (n, c) {
      return n + c.sections.reduce(function (m, s) { return m + s.points.length; }, 0);
    }, 0);
  }

  /* ---------- index view: chapter → section → term tree ---------- */
  function viewIndex() {
    var html = '<div class="view">' +
      '<header class="ch-head"><h1>Index <span class="zh">知识索引</span></h1>' +
      '<p class="ch-sub">' + CHAPTERS.length + ' lectures · ' + totalSections() + ' sections · ' + totalPoints() +
      ' knowledge points. Click a section or term to jump to its card.<br>三级结构：章 → 节 → 术语知识点，点击即可跳转。</p></header>';
    CHAPTERS.forEach(function (ch) {
      var set = learnedSet(ch.id), lc = set.length;
      var pct = Math.round(lc / ch.sections.length * 100);
      var nPts = ch.sections.reduce(function (m, s) { return m + s.points.length; }, 0);
      var rows = ch.sections.map(function (sec, i) {
        var learned = set.indexOf(sec.id) !== -1;
        var chips = sec.points.map(function (p) {
          return '<a class="idx-chip" href="#/ch/' + ch.id + '/' + sec.id + '" title="' + esc(p.zh || '') + '">' + esc(p.term) + '</a>';
        }).join('');
        return '<div class="idx-row' + (learned ? ' learned' : '') + '">' +
          '<div class="idx-line">' +
          '<span class="idx-num">' + (i + 1) + '</span>' +
          '<a class="idx-link" href="#/ch/' + ch.id + '/' + sec.id + '">' + esc(sec.title) + '</a>' +
          '<span class="zh idx-zh">' + esc(sec.zh) + '</span>' +
          (learned ? '<span class="idx-check" title="Learned 已掌握">✓</span>' : '') +
          '<span class="idx-count">' + sec.points.length + '</span>' +
          '</div>' +
          '<div class="idx-chips">' + chips + '</div>' +
          '</div>';
      }).join('');
      html += '<div class="card idx-ch">' +
        '<header class="idx-ch-head"><a class="idx-ch-link" href="#/ch/' + ch.id + '">' +
        '<span class="ch-lec">' + esc(ch.lecture) + '</span><b>' + esc(ch.title) + '</b>' +
        '<span class="zh">' + esc(ch.zh) + '</span></a>' +
        '<span class="idx-ch-meta">' + ch.sections.length + ' sec · ' + nPts + ' pts · ' + lc + ' learned · ' + esc(ch.source) + '</span>' +
        '</header>' + progressBar(pct) + rows +
        '</div>';
    });
    return html + '</div>';
  }

  function renderSearch(q) {
    var res = search(q).slice(0, 60);
    var groups = {};
    res.forEach(function (r) {
      var k = r.ch.id;
      (groups[k] = groups[k] || { ch: r.ch, items: [] }).items.push(r);
    });
    var html = Object.keys(groups).map(function (k) {
      var g = groups[k];
      return '<div class="card sec"><header class="sec-head"><div class="sec-titles"><h3>' + esc(g.ch.lecture) + ' · ' + esc(g.ch.title) + '</h3></div></header>' +
        g.items.map(function (r) {
          return '<a class="sr-item" href="#/ch/' + g.ch.id + '/' + r.sec.id + '"><b>' + r.term + '</b> <span class="pt-zh">' + esc(r.zh) + '</span><span class="sr-sec">' + esc(r.sec.title) + '</span></a>';
        }).join('') + '</div>';
    }).join('');
    $('#main').innerHTML = '<div class="view"><header class="ch-head"><h1>Search <span class="zh">搜索</span></h1>' +
      '<p class="ch-sub">' + res.length + ' result(s) for "' + esc(q) + '"</p></header>' +
      (html || '<p class="muted">No matches. Try a term like "Hund", "lattice", "滴定", "molarity".</p>') + '</div>';
    document.body.classList.remove('sidebar-open');
  }

  function nextSection() {
    for (var i = 0; i < CHAPTERS.length; i++) {
      var ch = CHAPTERS[i], set = learnedSet(ch.id);
      for (var j = 0; j < ch.sections.length; j++)
        if (set.indexOf(ch.sections[j].id) === -1) return { ch: ch, sec: ch.sections[j] };
    }
    return null;
  }
  function bestScore(chId) {
    var b = null;
    state.history.forEach(function (h) { if (h.ch === chId && (b === null || h.pct > b)) b = h.pct; });
    return b;
  }
  function attemptsOf(chId) { return state.history.filter(function (h) { return h.ch === chId; }).length; }

  /* ---------- events ---------- */
  function bindEvents(root) {
    $all('.learn-toggle', root).forEach(function (btn) {
      btn.addEventListener('click', function () {
        var chId = btn.getAttribute('data-ch'), secId = btn.getAttribute('data-sec');
        var set = learnedSet(chId), i = set.indexOf(secId);
        if (i === -1) set.push(secId); else set.splice(i, 1);
        save(); render();
      });
    });
    var markAll = $('#markAllCh', root);
    if (markAll) markAll.addEventListener('click', function () {
      var ch = chapterById(parseHash().chId);
      var all = ch.sections.every(function (s) { return learnedSet(ch.id).indexOf(s.id) !== -1; });
      state.learned[ch.id] = all ? [] : ch.sections.map(function (s) { return s.id; });
      save(); render();
    });
    var start = $('#startQuiz', root);
    if (start) start.addEventListener('click', function () {
      var ch = chapterById(start.getAttribute('data-ch'));
      session = { chId: ch.id, answers: ch.quiz.map(function () { return null; }), submitted: false };
      render();
    });
    var retake = $('#retakeQuiz', root);
    if (retake) retake.addEventListener('click', function () {
      var ch = chapterById(retake.getAttribute('data-ch'));
      session = { chId: ch.id, answers: ch.quiz.map(function () { return null; }), submitted: false };
      render();
    });
    var cancel = $('#cancelQuiz', root);
    if (cancel) cancel.addEventListener('click', function () { session = null; render(); });

    $all('.qz-opt.pick input', root).forEach(function (inp) {
      inp.addEventListener('change', function () {
        if (!session) return;
        var m = inp.name.match(/q(\d+)/);
        session.answers[+m[1]] = +inp.value;
        var n = session.answers.filter(function (a) { return a !== null; }).length;
        var ac = $('#answeredCount'); if (ac) ac.textContent = n;
        var tag = document.querySelector('.qz-answered[data-q="' + m[1] + '"]');
        if (tag) tag.textContent = '· answered';
      });
    });
    var submit = $('#submitQuiz', root);
    if (submit) submit.addEventListener('click', function () {
      var ch = chapterById(submit.getAttribute('data-ch'));
      var unanswered = session.answers.filter(function (a) { return a === null; }).length;
      if (unanswered && !confirm(unanswered + ' question(s) unanswered — submit anyway?')) return;
      session.correct = session.answers.filter(function (a, i) { return a === ch.quiz[i].a; }).length;
      session.submitted = true;
      state.history.push({
        ch: ch.id, score: session.correct, total: ch.quiz.length,
        pct: Math.round(session.correct / ch.quiz.length * 100),
        date: new Date().toLocaleString()
      });
      if (state.history.length > 200) state.history = state.history.slice(-200);
      save(); render(); window.scrollTo(0, 0);
    });

    var exportBtn = $('#exportBtn', root);
    if (exportBtn) exportBtn.addEventListener('click', function () {
      var blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'chemhub-progress.json';
      a.click(); URL.revokeObjectURL(a.href);
    });
    var importFile = $('#importFile', root);
    if (importFile) importFile.addEventListener('change', function () {
      var f = importFile.files[0]; if (!f) return;
      var r = new FileReader();
      r.onload = function () {
        try {
          var p = JSON.parse(r.result);
          if (p && typeof p === 'object' && p.learned) {
            state.learned = p.learned || {}; state.history = p.history || [];
            save(); render(); alert('Progress imported.');
          } else alert('Invalid file.');
        } catch (e) { alert('Invalid JSON.'); }
      };
      r.readAsText(f);
    });
    var resetBtn = $('#resetBtn', root);
    if (resetBtn) resetBtn.addEventListener('click', function () {
      if (confirm('Reset ALL progress and quiz history? 此操作不可恢复')) {
        state = { learned: {}, history: [] }; save(); render();
      }
    });
  }

  /* ---------- search box ---------- */
  var searchTimer = null;
  function initSearch() {
    var box = $('#searchBox');
    box.addEventListener('input', function () {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(function () {
        var q = box.value.trim();
        if (q) renderSearch(q);
        else render();
      }, 160);
    });
    box.addEventListener('keydown', function (e) { if (e.key === 'Escape') { box.value = ''; render(); box.blur(); } });
    document.addEventListener('keydown', function (e) {
      if (e.key === '/' && document.activeElement !== box) { e.preventDefault(); box.focus(); }
    });
  }

  /* ---------- misc ---------- */
  var menuBtn = $('#menuBtn');
  if (menuBtn) menuBtn.addEventListener('click', function () {
    document.body.classList.toggle('sidebar-open');
  });

  /* ---------- theme (day/night) ---------- */
  var THEME_KEY = 'gck_theme';
  function applyTheme(t) {
    document.body.classList.toggle('light', t === 'light');
    var b = $('#themeBtn');
    if (b) {
      b.textContent = t === 'light' ? '☾' : '☀';
      b.title = t === 'light' ? '夜间模式' : '日间模式';
    }
  }
  var theme = 'dark';
  try { theme = localStorage.getItem(THEME_KEY) || 'dark'; } catch (e) {}
  applyTheme(theme);
  var themeBtn = $('#themeBtn');
  if (themeBtn) themeBtn.addEventListener('click', function () {
    theme = theme === 'light' ? 'dark' : 'light';
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
    applyTheme(theme);
  });

  window.addEventListener('hashchange', render);
  initSearch();
  render();
})();

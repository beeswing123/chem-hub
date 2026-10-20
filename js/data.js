/* ============================================================
   General Chemistry Knowledge Hub — Content Data
   Based on Brown & LeMay, "Chemistry: The Central Science"
   SUSTech 2026 Fall lectures (Ch 1-2, 3, 4, 6, 7, 8)
   ============================================================ */
window.CHEM_DATA = {
  course: {
    name: "General Chemistry",
    zh: "普通化学",
    school: "SUSTech · 2026 Fall",
    textbook: "Brown, LeMay — Chemistry: The Central Science (Pearson)",
    instructor: "Dr. Lizhi Tao 陶丽芝",
    midterm: "Midterm: Nov 8, 14:00–16:00 (Ch 1–8)",
    grading: "10% Homework · 20% Performance · 30% Midterm · 40% Final"
  },
  chapters: [

  /* ==================== LECTURE 1 ==================== */
  {
    id: "ch1-2",
    lecture: "Lecture 1",
    title: "Matter, Measurement & Nomenclature",
    zh: "物质、测量与命名法",
    source: "Chapter 1 + 2",
    sections: [
      {
        id: "s1", title: "What is Chemistry?", zh: "化学是什么",
        points: [
          { term: "Chemistry", zh: "化学", def: "The study of <b>matter</b> (物质) and the changes it undergoes. It is central to our fundamental understanding of many science-related fields — often called <i>the central science (中心科学)</i>.",
            example: "Lecture examples: nutrition labels on food, nitrogen fixation by <b>nitrogenase</b> (固氮酶, Fe₇MoS₉C M-cluster) vs the industrial <b>Haber–Bosch process</b> (合成氨, N₂ + 3H₂ → 2NH₃, ~230 million tonnes/yr; Nobel Prizes 1918/1931/2007), medicines such as aspirin (阿司匹林), penicillin (青霉素), and <b>artemisinin</b> (青蒿素, Tu Youyou, Nobel Prize 2015)." }
        ],
        tips: ["Hydrothermal vents (~400 °C, ~250 atm) drive redox chemistry — Darwin's 'warm little pond' (1871) idea of life's chemical origin."]
      },
      {
        id: "s2", title: "Properties of Matter", zh: "物质的性质",
        points: [
          { term: "Intensive properties", zh: "强度性质", def: "Independent of the <b>amount</b> of substance present.",
            example: "Density (密度), boiling point (沸点), color, temperature." },
          { term: "Extensive properties", zh: "广延性质", def: "Depend upon the amount of substance present.",
            example: "Mass (质量), volume (体积), energy (能量), length." }
        ],
        tips: ["Ratio of two extensive properties gives an intensive one: mass ÷ volume = density."]
      },
      {
        id: "s3", title: "Units of Measurement", zh: "测量与单位",
        points: [
          { term: "SI Units", zh: "国际单位制", def: "<i>Système International d'Unités</i>. A different base unit is used for each quantity: meter (m), kilogram (kg), second (s), ampere (A), kelvin (K), mole (mol), candela (cd)." },
          { term: "Metric prefixes", zh: "词头", def: "Convert base units into appropriate magnitudes: G (10⁹), M (10⁶), k (10³), d (10⁻¹), c (10⁻²), m (10⁻³), μ (10⁻⁶), n (10⁻⁹), p (10⁻¹²)." },
          { term: "Celsius & Kelvin", zh: "摄氏与开氏温标", def: "Celsius is based on water: 0 °C freezing, 100 °C boiling. Kelvin is the SI unit, based on gases — <b>no negative Kelvin temperatures</b>; lowest possible = absolute zero (绝对零度, 0 K).",
            formula: "K = °C + 273.15" },
          { term: "Fahrenheit", zh: "华氏温标", def: "Not used in scientific measurements, but common in US weather reports.",
            formula: "°F = 9/5(°C) + 32 &nbsp;·&nbsp; °C = 5/9(°F − 32) &nbsp;·&nbsp; 37 °C = 98.6 °F" }
        ]
      },
      {
        id: "s4", title: "Significant Figures", zh: "有效数字",
        points: [
          { term: "Definition", zh: "定义", def: "Digits that were <b>measured</b>. When rounding (修约) calculated numbers, we pay attention to sig figs so we do not overstate the accuracy of our answers." },
          { term: "Rule 1", zh: "规则一", def: "All nonzero digits are significant. (4.003 → 4 sf)" },
          { term: "Rule 2", zh: "规则二", def: "Zeros <b>between</b> two significant figures are themselves significant. (6.023 × 10²³ → 4 sf)" },
          { term: "Rule 3", zh: "规则三", def: "Zeros at the <b>beginning</b> of a number are never significant. (0.0034 → 2 sf)" },
          { term: "Rule 4", zh: "规则四", def: "Zeros at the <b>end</b> of a number are significant only if a decimal point is written. (5000 → ambiguous/1 sf; 5000. → 4 sf; 0.0500 → 3 sf)" },
          { term: "Addition / Subtraction", zh: "加减运算", def: "Round the answer to the <b>least significant decimal place</b> (小数位数最少) among the numbers." },
          { term: "Multiplication / Division", zh: "乘除运算", def: "Round to the <b>least number of significant figures</b> in any number used." },
          { term: "Exact numbers", zh: "精确数", def: "Counted or defined quantities (e.g., 12 in = 1 ft, 2 atoms in H₂) have an <b>infinite</b> number of significant figures — they never limit the result." }
        ],
        tips: ["Exam favorite: count sig figs of 5000 (1), 5000. (4), 0.0400 (3), 4.003 (4)."]
      },
      {
        id: "s5", title: "Chemical Formulas", zh: "化学式",
        points: [
          { term: "Subscript", zh: "下标", def: "The number to the right of an element symbol tells how many atoms of that element are in one molecule (e.g., H₂O — 2 H, 1 O)." },
          { term: "Molecular compounds", zh: "分子化合物", def: "Composed of molecules; almost always contain <b>only nonmetals</b> (e.g., H₂O, CO₂)." },
          { term: "Diatomic molecules", zh: "双原子分子", def: "Seven elements occur naturally as two-atom molecules: H₂, N₂, O₂, F₂, Cl₂, Br₂, I₂.",
            example: "Memory aid: H N O F Cl Br I — 'HONClBrIF' / 记忆口诀：氢氮氧氟氯溴碘" },
          { term: "Empirical formula", zh: "最简式", def: "Gives the <b>lowest whole-number ratio</b> of atoms of each element." },
          { term: "Molecular formula", zh: "分子式", def: "Gives the <b>exact number</b> of atoms of each element. Knowing MF lets you find EF, but <b>not vice versa</b> (EF = CH could be C₂H₂ or C₆H₆).",
            example: "Glucose: C₆H₁₂O₆ (MF) → CH₂O (EF)" },
          { term: "Structural formula", zh: "结构式", def: "Shows the <b>order in which atoms are attached</b>, but NOT the 3-D shape. Perspective drawings and models show 3-D arrangement." }
        ]
      },
      {
        id: "s6", title: "Ions & Ionic Compounds", zh: "离子与离子化合物",
        points: [
          { term: "Ion", zh: "离子", def: "An atom or group of atoms that <b>loses or gains electrons</b>." },
          { term: "Cation", zh: "阳离子", def: "Formed when at least one electron is <b>lost</b> (positive). Monatomic cations are formed by <b>metals</b>." },
          { term: "Anion", zh: "阴离子", def: "Formed when at least one electron is <b>gained</b> (negative). Monatomic anions are formed by <b>nonmetals</b>." },
          { term: "Ionic compounds", zh: "离子化合物", def: "Generally formed between <b>metals and nonmetals</b> (e.g., NaCl): electrons are transferred from metal to nonmetal; oppositely charged ions attract. Only <b>empirical formulas</b> are written for ionic compounds." },
          { term: "Writing formulas", zh: "化学式书写（十字交叉法）", def: "Compounds are electrically neutral (电中性): the charge on the cation becomes the subscript on the anion, and vice versa; reduce subscripts by the greatest common factor.",
            formula: "Al³⁺ + O²⁻ → Al₂O₃ &nbsp;·&nbsp; Ca²⁺ + PO₄³⁻ → Ca₃(PO₄)₂" }
        ]
      },
      {
        id: "s7", title: "Inorganic Nomenclature", zh: "无机物命名法",
        points: [
          { term: "Cations", zh: "阳离子命名", def: "Single-charge metals: name of element (Na⁺ = sodium). Multiple charges: Stock system (斯托克命名法) with Roman numerals — Fe²⁺ = iron(II), Fe³⁺ = iron(III); or classical endings −ous (lower charge) / −ic (higher charge) — ferrous/ferric." },
          { term: "Monatomic anions", zh: "单原子阴离子", def: "Element stem + <b>−ide</b>: Cl⁻ chloride, O²⁻ oxide, N³⁻ nitride, S²⁻ sulfide." },
          { term: "Oxyanions", zh: "含氧阴离子", def: "Polyatomic anions with oxygen. <b>−ate</b> = more O; <b>−ite</b> = less O: NO₃⁻ nitrate / NO₂⁻ nitrite; SO₄²⁻ sulfate / SO₃²⁻ sulfite. Prefixes extend the series: ClO₄⁻ <b>per</b>chlor<b>ate</b>, ClO₃⁻ chlor<b>ate</b>, ClO₂⁻ chlor<b>ite</b>, ClO⁻ <b>hypo</b>chlor<b>ite</b>." },
          { term: "Oxyanion patterns", zh: "含氧阴离子规律", def: "Second-row central atoms bond to <b>at most 3</b> oxygens (C, N); third-row take <b>up to 4</b> (S, P, Cl). Charges increase going <b>right to left</b> across a period." }
        ],
        tips: ["Draw the Cl oxyanion ladder: ClO⁻ → ClO₂⁻ → ClO₃⁻ → ClO₄⁻ (hypo–ite, –ite, –ate, per–ate)."]
      },
      {
        id: "s8", title: "Binary Molecular Compounds", zh: "二元分子化合物命名",
        points: [
          { term: "Naming order", zh: "命名顺序", def: "The element <b>farther left</b> in the periodic table (closer to metals), or <b>lower in the same group</b>, is usually written first." },
          { term: "Greek prefixes", zh: "希腊数字前缀", def: "mono-, di-, tri-, tetra-, penta-, hexa-, hepta-, octa-, nona-, deca- denote the number of atoms. <b>mono- is omitted</b> on the first element." },
          { term: "−ide ending", zh: "第二元素词尾", def: "The second element's ending changes to <b>−ide</b>. If a prefix ending in a/o meets a vowel, elide (省略) it.",
            example: "CO₂ = carbon dioxide · CCl₄ = carbon tetrachloride · N₂O₅ = dinitrogen pent<b>oxide</b> (not pentaoxide)" }
        ]
      },
      {
        id: "s9", title: "Acid Nomenclature", zh: "酸的命名",
        points: [
          { term: "Anion ends in −ide", zh: "无氧酸", def: "Add prefix <b>hydro-</b> and change ending to <b>−ic acid</b>.",
            example: "HCl hydrochloric acid · HBr hydrobromic acid · HI hydroiodic acid" },
          { term: "Anion ends in −ate", zh: "含氧酸（多氧）", def: "Change ending to <b>−ic acid</b> (no hydro-).",
            example: "HClO₃ chloric acid · HClO₄ perchloric acid" },
          { term: "Anion ends in −ite", zh: "含氧酸（少氧）", def: "Change ending to <b>−ous acid</b>.",
            example: "HClO hypochlorous acid · HClO₂ chlorous acid" }
        ],
        tips: ["-ic acid has one MORE oxygen than -ous acid. More O → 'per…-ic'; fewer O → 'hypo…-ous'."]
      },
      {
        id: "s10", title: "Organic Nomenclature Basics", zh: "有机命名基础",
        points: [
          { term: "Organic chemistry", zh: "有机化学", def: "The study of <b>carbon</b> compounds; has its own nomenclature system." },
          { term: "Alkanes", zh: "烷烃", def: "Simplest hydrocarbons (烃 — only C and H, all single bonds). Name prefix = carbon count: meth- (1), eth- (2), prop- (3), but- (4), pent- (5)… → methane, ethane, propane…" },
          { term: "Functional groups", zh: "官能团", def: "Replacing an H in an alkane with another group derives the new name from the alkane; the <b>ending</b> denotes the compound type: alcohol ends in <b>−ol</b> (ethanol 乙醇), etc." }
        ]
      }
    ],
    quiz: [
      { q: "How many significant figures does 6.023 × 10²³ have?", opts: ["3", "4", "23", "6"], a: 1, ex: "Zeros between significant figures are significant: 6.023 → 4 sf." },
      { q: "Zeros at the beginning of a number (e.g., 0.0034) are:", opts: ["always significant", "never significant", "significant only if a decimal point is written", "significant if odd"], a: 1, ex: "Leading zeros are placeholders only — 0.0034 has 2 sf." },
      { q: "What is 0 K in Celsius?", opts: ["0 °C", "32 °C", "−273.15 °C", "100 °C"], a: 2, ex: "K = °C + 273.15, so 0 K = −273.15 °C (absolute zero)." },
      { q: "Which element occurs naturally as a diatomic molecule?", opts: ["He", "N", "Na", "Ne"], a: 1, ex: "N₂ is one of the seven diatomic elements: H₂ N₂ O₂ F₂ Cl₂ Br₂ I₂." },
      { q: "The empirical formula of glucose (C₆H₁₂O₆) is:", opts: ["C₆H₁₂O₆", "CH₂O", "C₂H₄O", "CHO"], a: 1, ex: "Divide all subscripts by 6 — lowest whole-number ratio." },
      { q: "The correct name for N₂O₅ is:", opts: ["nitrogen pentoxide", "dinitrogen pentoxide", "dinitrogen tetroxide", "pentanitrogen dioxide"], a: 1, ex: "di- + penta- + oxide; the 'a' of penta- elides before the vowel o." },
      { q: "HClO₃ is named:", opts: ["hypochlorous acid", "chlorous acid", "chloric acid", "perchloric acid"], a: 2, ex: "ClO₃⁻ = chlorate → -ate changes to -ic acid." },
      { q: "The formula for calcium phosphate is:", opts: ["CaPO₄", "Ca₂(PO₄)₃", "Ca₃(PO₄)₂", "Ca(PO₄)₂"], a: 2, ex: "Cross-over: Ca²⁺ and PO₄³⁻ → Ca₃(PO₄)₂, already lowest ratio." },
      { q: "Which of the following is an intensive property?", opts: ["mass", "volume", "density", "energy"], a: 2, ex: "Density does not depend on the amount of substance." },
      { q: "When adding or subtracting measurements, round the answer to:", opts: ["the fewest significant figures", "the least significant decimal place", "one decimal place always", "the largest number's precision"], a: 1, ex: "Addition/subtraction → least decimal places; multiplication/division → fewest sig figs." }
    ]
  },

  /* ==================== LECTURE 2 ==================== */
  {
    id: "ch3",
    lecture: "Lecture 2",
    title: "Chemical Reactions & Reaction Stoichiometry",
    zh: "化学反应与化学计量",
    source: "Chapter 3",
    sections: [
      {
        id: "s1", title: "Chemical Equations", zh: "化学方程式",
        points: [
          { term: "Structure", zh: "方程式结构", def: "<b>Reactants → Products</b> (反应物与生成物). Coefficients (化学计量数) balance the atoms — <b>never change subscripts</b> to balance." },
          { term: "States of matter", zh: "物质状态标注", def: "Written in parentheses after each compound: (g) gas, (l) liquid, (s) solid, (aq) aqueous solution (水溶液).",
            formula: "CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(g)" }
        ]
      },
      {
        id: "s2", title: "Three Basic Reaction Types", zh: "三种基本反应类型",
        points: [
          { term: "Combination reactions", zh: "化合反应", def: "Two or more substances react to form <b>one</b> product.",
            formula: "2Mg(s) + O₂(g) → 2MgO(s) · N₂(g) + 3H₂(g) → 2NH₃(g) · C₃H₆ + Br₂ → C₃H₆Br₂" },
          { term: "Decomposition reactions", zh: "分解反应", def: "One substance breaks down into two or more substances.",
            formula: "CaCO₃(s) → CaO(s) + CO₂(g) · 2KClO₃(s) → 2KCl(s) + 3O₂(g) · 2NaN₃(s) → 2Na(s) + 3N₂(g)",
            example: "NaN₃ decomposition inflates car airbags (安全气囊): from 100 g NaN₃ you can compute the N₂ volume via stoichiometry." },
          { term: "Combustion reactions", zh: "燃烧反应", def: "Rapid reactions that produce a flame; most often O₂ from air is a reactant. Hydrocarbons burn to CO₂ + H₂O.",
            formula: "CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(g) · C₃H₈(g) + 5O₂(g) → 3CO₂(g) + 4H₂O(g)" }
        ]
      },
      {
        id: "s3", title: "The Mole & Avogadro's Number", zh: "摩尔与阿伏伽德罗常数",
        points: [
          { term: "Mole", zh: "摩尔", def: "The amount of substance containing 6.02 × 10²³ particles — the lab-scale counting unit. One dozen = 12; one mole = 6.02 × 10²³.",
            formula: "N_A = 6.02 × 10²³ /mol" },
          { term: "Mole of ¹²C", zh: "一摩尔碳十二", def: "One mole of ¹²C has a mass of exactly <b>12.000 g</b> — the bridge between atomic mass and grams." },
          { term: "Atomic mass unit", zh: "原子质量单位", def: "1 amu = 1.66054 × 10⁻²⁴ g = 1 Da (dalton), defined as <b>1/12 of the mass of a free ¹²C atom</b> at rest in its ground state. Atoms are tiny: the heaviest ≈ 4 × 10⁻²² g.",
            example: "Protein sizes are quoted in kDa (e.g., a 64 kDa protein)." },
          { term: "Molar mass", zh: "摩尔质量", def: "Mass of one mole of a substance (g/mol). Numerically equal to the atomic/formula weight in amu.",
            formula: "moles = mass (g) ÷ molar mass (g/mol)" }
        ]
      },
      {
        id: "s4", title: "Percent Composition", zh: "质量百分比组成",
        points: [
          { term: "Formula", zh: "计算公式", def: "Percentage of a compound's mass contributed by each element.",
            formula: "% element = (number of atoms × atomic weight) ÷ formula weight (FW) × 100%" },
          { term: "Worked example", zh: "例题", def: "%C in ethane (乙烷, C₂H₆): (2)(12.011) / 30.070 × 100% = <b>79.887%</b>." }
        ]
      },
      {
        id: "s5", title: "Determining Empirical & Molecular Formulas", zh: "最简式与分子式的确定",
        points: [
          { term: "EF from % composition", zh: "由百分比求最简式", def: "① Assume <b>100.00 g</b> of compound (so % → grams); ② convert grams of each element to moles (÷ atomic weight); ③ divide all mole values by the <b>smallest</b>; ④ round to whole-number ratio.",
            example: "C 61.31%, H 5.14%, N 10.21%, O 23.33% → mol: 5.105, 5.09, 0.7288, 1.456 → ÷0.7288 → 7 : 7 : 1 : 2 → <b>EF = C₇H₇NO₂</b>" },
          { term: "MF from EF", zh: "由最简式求分子式", def: "n = molar mass ÷ empirical-formula weight; then MF = n × EF.",
            formula: "(empirical formula) × n = molecular formula",
            example: "EF = CH (13 g/mol), real molar mass 78 g/mol → n = 6 → MF = C₆H₆ (benzene 苯)" }
        ]
      },
      {
        id: "s6", title: "Stoichiometric Calculations", zh: "化学计量计算",
        points: [
          { term: "Mole ratio", zh: "摩尔比", def: "Coefficients of the balanced equation give the fixed ratio between reactants and products. This is the heart of stoichiometry.",
            formula: "grams A → moles A (÷M_A) → moles B (× mol ratio) → grams B (×M_B)" },
          { term: "Worked example", zh: "例题", def: "C₆H₁₂O₆(s) + 6O₂(g) → 6CO₂(g) + 6H₂O(l). Water from 1.00 g glucose: 1.00/180.0 = 5.56 × 10⁻³ mol glucose → × 6 = 0.0333 mol H₂O → × 18.0 = <b>0.600 g H₂O</b>." }
        ]
      },
      {
        id: "s7", title: "Limiting Reactants", zh: "限量试剂",
        points: [
          { term: "Limiting reactant", zh: "限量试剂", def: "The reactant that <b>runs out first</b>; it determines the maximum amount of product. !!! The amount of product depends <b>only</b> on the limiting reactant." },
          { term: "Excess reactant", zh: "过量试剂", def: "Left over after the reaction stops.",
            example: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O. 2 mol glucose + 15 mol O₂: glucose needs 12 mol O₂, so glucose is limiting and 3 mol O₂ remains in excess. But 2 mol glucose + 11 mol O₂: O₂ is limiting (needs 12), leaving 1 mol glucose unreacted." },
          { term: "Particle view", zh: "微观视角", def: "2H₂ + O₂ → 2H₂O: 7 O₂ molecules need 14 H₂ molecules; if only 10 H₂ are present, H₂ is limiting and some O₂ stays unreacted." }
        ]
      },
      {
        id: "s8", title: "Percent Yield", zh: "产率",
        points: [
          { term: "Definition", zh: "定义", def: "Compares what you actually obtain with what stoichiometry predicts for a perfect reaction.",
            formula: "Percent yield = (actual yield 实际产量 ÷ theoretical yield 理论产量) × 100%" },
          { term: "Worked example", zh: "例题", def: "1.00 g glucose + excess O₂ affords 0.42 g water (actual). Theoretical = 0.600 g → percent yield = 0.42/0.600 × 100% = <b>70%</b>." }
        ],
        tips: ["Exam chain: balance → find limiting reactant → theoretical yield → percent yield. Watch units and sig figs!"]
      }
    ],
    quiz: [
      { q: "One mole of ¹²C atoms has a mass of:", opts: ["6.02 g", "12.000 g", "1.66 g", "78 g"], a: 1, ex: "By definition, 1 mol of ¹²C = 12.000 g; 1 amu is 1/12 of one ¹²C atom's mass." },
      { q: "Avogadro's number is:", opts: ["6.02 × 10²³", "3.01 × 10²³", "6.626 × 10⁻³⁴", "1.097 × 10⁷"], a: 0, ex: "6.02 × 10²³ particles per mole." },
      { q: "1 amu is defined as:", opts: ["the mass of an electron", "1/12 the mass of a free ¹²C atom at rest in its ground state", "the mass of a proton", "the mass of one mole of carbon"], a: 1, ex: "1 amu = 1 Da = 1.66054 × 10⁻²⁴ g." },
      { q: "The mass %C in ethane (C₂H₆, FW = 30.070) is about:", opts: ["79.9%", "20.1%", "92.3%", "66.6%"], a: 0, ex: "(2)(12.011)/30.070 × 100% = 79.887%." },
      { q: "2 NaN₃ → 2 Na + 3 N₂ is which reaction type?", opts: ["combination", "decomposition", "combustion", "displacement"], a: 1, ex: "One substance breaks into two — decomposition (airbag reaction)." },
      { q: "In C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O, how many moles of water come from 1 mol glucose?", opts: ["1", "2", "6", "12"], a: 2, ex: "Mole ratio glucose : water = 1 : 6." },
      { q: "Theoretical mass of H₂O from 1.00 g glucose with excess O₂ (M = 180.0):", opts: ["0.100 g", "0.300 g", "0.600 g", "1.00 g"], a: 2, ex: "(1.00/180.0) × 6 × 18.0 = 0.600 g." },
      { q: "The amount of product formed is determined by the:", opts: ["excess reactant", "limiting reactant", "total mass of all reactants", "reaction flask size"], a: 1, ex: "The limiting reactant is consumed first and caps the product amount." },
      { q: "Actual yield 0.42 g vs theoretical 0.600 g → percent yield:", opts: ["30%", "42%", "70%", "100%"], a: 2, ex: "0.42/0.600 × 100% = 70%." },
      { q: "EF = CH (13 g/mol) and molar mass = 78 g/mol. The molecular formula is:", opts: ["CH", "C₂H₂", "C₆H₆", "C₄H₄"], a: 2, ex: "n = 78/13 = 6 → MF = C₆H₆." }
    ]
  },

  /* ==================== LECTURE 3 ==================== */
  {
    id: "ch4",
    lecture: "Lecture 3",
    title: "Reactions in Aqueous Solution",
    zh: "水溶液中的反应",
    source: "Chapter 4",
    sections: [
      {
        id: "s1", title: "Solutions", zh: "溶液",
        points: [
          { term: "Solution", zh: "溶液", def: "A <b>homogeneous mixture</b> (均相混合物) of two or more pure substances." },
          { term: "Solvent & solute", zh: "溶剂与溶质", def: "The <b>solvent</b> is present in greatest abundance; all other components are <b>solutes</b> (溶质)." },
          { term: "Aqueous solution", zh: "水溶液", def: "A solution in which <b>water is the solvent</b>. Ionic compounds dissolve by <b>dissociation</b> (电离/解离, water surrounds the separated ions); most molecular compounds do NOT dissociate; some react with water." }
        ]
      },
      {
        id: "s2", title: "Electrolytes", zh: "电解质",
        points: [
          { term: "Electrolyte", zh: "电解质", def: "A substance that <b>dissociates into ions</b> when dissolved in water → solution conducts electricity." },
          { term: "Nonelectrolyte", zh: "非电解质", def: "May dissolve in water but does <b>not</b> dissociate into ions (e.g., sugar 蔗糖)." },
          { term: "Strong electrolyte", zh: "强电解质", def: "Dissociates <b>completely</b>: soluble ionic salts, strong acids, strong bases." },
          { term: "Weak electrolyte", zh: "弱电解质", def: "Dissociates only <b>partially</b>: weak acids/bases (e.g., acetic acid CH₃COOH, ammonia NH₃)." }
        ]
      },
      {
        id: "s3", title: "Solubility Rules & Precipitation", zh: "溶度规则与沉淀反应",
        points: [
          { term: "Solubility rules", zh: "溶度规则", def: "Not all ionic compounds dissolve. A compound is considered insoluble if solubility < 0.01 mol/L. Key rules: Group 1A and NH₄⁺ salts are soluble; NO₃⁻/ClO₃⁻/CH₃COO⁻ soluble; Cl⁻/Br⁻/I⁻ soluble <b>except</b> Ag⁺, Pb²⁺, Hg₂²⁺; SO₄²⁻ soluble except Ca²⁺/Sr²⁺/Ba²⁺/Pb²⁺; CO₃²⁻/PO₄³⁻/S²⁻/OH⁻ generally insoluble except with Group 1A/NH₄⁺." },
          { term: "Precipitation reaction", zh: "沉淀反应", def: "Mixing two solutions of soluble salts can produce an <b>insoluble</b> salt that 'falls' out of solution like snow — the <b>precipitate</b> (沉淀).",
            example: "AgNO₃(aq) + KCl(aq) → AgCl(s)↓ + KNO₃(aq)" }
        ]
      },
      {
        id: "s4", title: "Metathesis (Exchange) Reactions", zh: "复分解反应",
        points: [
          { term: "Metathesis", zh: "复分解", def: "Greek for 'to transpose' — the ions of the reactant compounds <b>exchange partners</b>.",
            formula: "AgNO₃(aq) + KCl(aq) → AgCl(s) + KNO₃(aq)" },
          { term: "Completing & balancing", zh: "书写步骤", def: "① Identify the ions present in the reactants; ② write products: cation from one + anion from the other (use charges for subscripts); ③ check solubility rules — if a product is insoluble, a precipitate forms; ④ balance the equation." }
        ]
      },
      {
        id: "s5", title: "Ionic Equations", zh: "离子方程式",
        points: [
          { term: "Molecular equation", zh: "分子方程式", def: "Lists complete formulas of reactants/products without showing ionic nature." },
          { term: "Complete ionic equation", zh: "完全离子方程式", def: "All <b>strong electrolytes</b> (strong acids, strong bases, soluble ionic salts) are dissociated into ions — accurately reflects species in the mixture.",
            formula: "Ag⁺(aq) + NO₃⁻(aq) + K⁺(aq) + Cl⁻(aq) → AgCl(s) + K⁺(aq) + NO₃⁻(aq)" },
          { term: "Net ionic equation", zh: "净离子方程式", def: "Cross out <b>spectator ions</b> (旁观离子, unchanged on both sides); keep only species that react.",
            formula: "Ag⁺(aq) + Cl⁻(aq) → AgCl(s) &nbsp;&nbsp;(spectators: K⁺, NO₃⁻)" },
          { term: "Writing steps", zh: "书写步骤", def: "① Write balanced molecular equation; ② dissociate all strong electrolytes; ③ cross out unchanged species; ④ write the remaining net ionic equation (check mass & charge balance)." }
        ],
        tips: ["Only strong electrolytes dissociate. Weak acids, weak bases, gases, solids (precipitates) stay as molecules/formulas."]
      },
      {
        id: "s6", title: "Acids & Bases", zh: "酸与碱",
        points: [
          { term: "Arrhenius definition", zh: "阿伦尼乌斯定义", def: "Acid: increases <b>[H⁺]</b> when dissolved in water; Base: increases <b>[OH⁻]</b>." },
          { term: "Brønsted–Lowry definition", zh: "布朗斯特-劳里定义（质子理论）", def: "Acid = <b>proton donor</b> (质子给体); Base = <b>proton acceptor</b> (质子受体). In an acid–base reaction, H⁺ is transferred from acid to base (e.g., H₂O + NH₃)." },
          { term: "Strong acids", zh: "强酸", def: "Completely dissociate in water: HCl, HBr, HI, HNO₃, H₂SO₄, HClO₃, HClO₄." },
          { term: "Weak acids", zh: "弱酸", def: "Partially dissociate: HF, CH₃COOH (acetic 乙酸), H₂CO₃, HNO₂…" },
          { term: "Strong bases", zh: "强碱", def: "Dissociate to metal cations + OH⁻: Group 1A hydroxides (NaOH, KOH…) and heavier Group 2A hydroxides [Ca(OH)₂, Sr(OH)₂, Ba(OH)₂]." },
          { term: "Weak bases", zh: "弱碱", def: "Only partially react to produce OH⁻ (e.g., NH₃ + H₂O ⇌ NH₄⁺ + OH⁻)." }
        ]
      },
      {
        id: "s7", title: "Neutralization Reactions", zh: "中和反应",
        points: [
          { term: "Neutralization", zh: "中和反应", def: "Acid + base → <b>salt</b> (盐, an ionic compound) + water (when the base is a metal hydroxide).",
            formula: "HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)" },
          { term: "Net ionic (strong + strong)", zh: "强酸强碱中和的净离子式", def: "Na⁺ and Cl⁻ are spectators; every strong-acid/strong-base neutralization reduces to the same net equation.",
            formula: "H⁺(aq) + OH⁻(aq) → H₂O(l)" }
        ]
      },
      {
        id: "s8", title: "Gas-Forming Reactions", zh: "生成气体的反应",
        points: [
          { term: "Carbonates + acid", zh: "碳酸盐与酸", def: "Carbonate/bicarbonate + acid → salt + <b>CO₂</b> + H₂O.",
            formula: "CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + CO₂(g) + H₂O(l) · NaHCO₃ + HBr → NaBr + CO₂ + H₂O" },
          { term: "Sulfides + acid", zh: "硫化物与酸", def: "Sulfide + acid → salt + <b>H₂S</b> (foul odor — carry out in the fume hood 通风橱!).",
            formula: "Na₂S(aq) + H₂SO₄(aq) → Na₂SO₄(aq) + H₂S(g)" }
        ]
      },
      {
        id: "s9", title: "Oxidation-Reduction (Redox) Reactions", zh: "氧化还原反应",
        points: [
          { term: "Oxidation", zh: "氧化", def: "<b>Loss</b> of electrons (失电子). Mnemonic: <b>OIL</b> — Oxidation Is Loss." },
          { term: "Reduction", zh: "还原", def: "<b>Gain</b> of electrons (得电子). Mnemonic: <b>RIG</b> — Reduction Is Gain. One cannot occur without the other." },
          { term: "Oxidation number rules", zh: "氧化数规则", def: "① Elemental form (单质) = 0; ② monatomic ion = its charge; ③ O = −2 (in peroxides 过氧化物 = −1); ④ H = +1 with nonmetals, −1 with metals; ⑤ F = always −1; other halogens = −1 except in oxyanions; ⑥ sum = 0 for neutral compounds; sum = ion charge for polyatomic ions.",
            example: "HClO series: Cl goes +1 (HClO), +3 (HClO₂), +5 (HClO₃), +7 (HClO₄)." }
        ]
      },
      {
        id: "s10", title: "Displacement & Activity Series", zh: "置换反应与金属活动性顺序",
        points: [
          { term: "Displacement reaction", zh: "置换反应", def: "An ion oxidizes an element. The reverse does NOT occur — why? Activity differences!",
            formula: "Cu(s) + 2Ag⁺(aq) → Cu²⁺(aq) + 2Ag(s) &nbsp;(Cu is oxidized; Ag⁺ is reduced)" },
          { term: "Activity series", zh: "金属活动性顺序", def: "Elements <b>higher</b> on the series are more reactive, more likely to exist as ions, and can displace ions of elements below them." },
          { term: "Metal + acid", zh: "金属与酸", def: "Elements <b>above hydrogen</b> react with acids to produce H₂ gas; the metal is oxidized to a cation (e.g., Zn + 2H⁺ → Zn²⁺ + H₂↑)." }
        ]
      },
      {
        id: "s11", title: "Molarity, Dilution & Titration", zh: "浓度、稀释与滴定",
        points: [
          { term: "Molarity", zh: "物质的量浓度", def: "Concentration measured in moles of solute per liter of <b>solution</b>.",
            formula: "M = moles of solute ÷ liters of solution" },
          { term: "Mixing a solution", zh: "配液", def: "Weigh a known mass (→ moles) of solute, transfer to a <b>volumetric flask</b> (容量瓶), add solvent to the calibration line." },
          { term: "Dilution", zh: "稀释", def: "Moles of solute are conserved when diluting with solvent.",
            formula: "M_c V_c = M_d V_d",
            example: "To make 250 mL of 0.500 M from 12.0 M stock: V_c = (0.500 × 250)/12.0 = 10.4 mL." },
          { term: "Titration", zh: "滴定", def: "Analytical technique to find an unknown concentration using a <b>standard solution</b> (标准溶液, known concentration). The reaction is complete at the <b>equivalence point</b> (等当点/化学计量点)." }
        ],
        tips: ["Titration calc chain: M_a V_a → mol → mole ratio → mol_b → M_b. Combine molarity with stoichiometry for solution reactions."]
      }
    ],
    quiz: [
      { q: "Which is a strong electrolyte?", opts: ["C₆H₁₂O₆ (sugar)", "CH₃COOH (acetic acid)", "NaCl", "H₂O"], a: 2, ex: "Soluble ionic salts dissociate completely; sugar is a nonelectrolyte; acetic acid is weak." },
      { q: "Net ionic equation for HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l):", opts: ["H⁺ + OH⁻ → H₂O", "HCl + NaOH → NaCl + H₂O", "Na⁺ + Cl⁻ → NaCl", "H⁺ + Cl⁻ → HCl"], a: 0, ex: "Na⁺ and Cl⁻ are spectators — every strong acid/strong base pair gives this net equation." },
      { q: "Spectator ions in AgNO₃ + KCl → AgCl(s) + KNO₃:", opts: ["Ag⁺ and Cl⁻", "K⁺ and NO₃⁻", "Ag⁺ and K⁺", "NO₃⁻ and Cl⁻"], a: 1, ex: "They remain dissolved and unchanged on both sides." },
      { q: "A precipitate forms when:", opts: ["both products are soluble", "an insoluble product forms", "a gas is produced", "the solution heats up"], a: 1, ex: "Insoluble salt 'falls out' of solution as a solid." },
      { q: "A Brønsted–Lowry base is a:", opts: ["proton donor", "proton acceptor", "electron donor", "substance producing OH⁻ only"], a: 1, ex: "B–L: acid = proton donor, base = proton acceptor (e.g., NH₃)." },
      { q: "Oxidation number of O in H₂O₂ (peroxide):", opts: ["−2", "−1", "+1", "0"], a: 1, ex: "Exception: oxygen is −1 in peroxides." },
      { q: "Oxidation number of S in SO₄²⁻:", opts: ["−2", "+2", "+4", "+6"], a: 3, ex: "4(−2) + x = −2 → x = +6." },
      { q: "In Cu(s) + 2Ag⁺(aq) → Cu²⁺(aq) + 2Ag(s), copper is:", opts: ["reduced", "oxidized", "a spectator ion", "unchanged"], a: 1, ex: "Cu loses electrons → oxidation (Ag⁺ gains → reduction)." },
      { q: "Volume of 12.0 M stock needed for 250 mL of 0.500 M solution:", opts: ["10.4 mL", "20.8 mL", "41.7 mL", "104 mL"], a: 0, ex: "M_cV_c = M_dV_d → V_c = (0.500 × 250)/12.0 = 10.4 mL." },
      { q: "Metals above hydrogen in the activity series:", opts: ["do not react with acids", "react with acids to produce H₂ gas", "always form precipitates", "are unreactive"], a: 1, ex: "The metal is oxidized to a cation while H⁺ is reduced to H₂." }
    ]
  },

  /* ==================== LECTURE 4 ==================== */
  {
    id: "ch6",
    lecture: "Lecture 4",
    title: "Electronic Structure of Atoms",
    zh: "原子的电子结构",
    source: "Chapter 6",
    sections: [
      {
        id: "s1", title: "Electronic Structure & Electron Configuration", zh: "电子结构与电子排布",
        points: [
          { term: "Electronic structure", zh: "电子结构", def: "The <b>arrangement</b> (where electrons are located relative to the nucleus) and <b>energy</b> of electrons (core vs valence). Similar chemical behavior of elements comes from similar electronic structure → periodicity (Ch 7)." },
          { term: "Atomic picture", zh: "原子图像", def: "Nucleus = protons + neutrons. Electrons are the 'trouble makers' — <b>responsible for chemical reactions</b>." },
          { term: "Electron configuration", zh: "电子排布", def: "The way electrons are distributed in an atom. Most stable = lowest possible energy = <b>ground state</b> (基态). Each component: number (energy level n) + letter (orbital type l) + superscript (electron count) — e.g., <b>2p²</b>." },
          { term: "Orbital diagram", zh: "轨道图", def: "Each box = one orbital; half-arrows = electrons; arrow direction = relative spin (mₛ)." }
        ]
      },
      {
        id: "s2", title: "Three Filling Rules", zh: "电子排布三原则",
        points: [
          { term: "Pauli exclusion principle", zh: "泡利不相容原理", def: "No two electrons in the same atom can have identical sets of the four quantum numbers (n, l, m_l, mₛ). → An orbital holds at most 2 electrons with <b>opposite spins</b>." },
          { term: "Hund's rule", zh: "洪特规则", def: "For <b>degenerate orbitals</b> (简并轨道, same energy), the lowest energy is attained when the number of electrons with the <b>same spin is maximized</b> — one electron per orbital before pairing." },
          { term: "Aufbau principle", zh: "构造原理", def: "Electrons fill atomic orbitals of the <b>lowest available energy</b> before occupying higher levels." }
        ],
        tips: ["Exam trap: Hund's rule = fill singly with parallel spins first; Pauli = 2 e⁻ max per orbital, opposite spins."]
      },
      {
        id: "s3", title: "Condensed Configurations & Periodic Table Blocks", zh: "简写排布与周期表分区",
        points: [
          { term: "Valence electrons", zh: "价电子", def: "Electrons in the <b>outermost shell</b>. Elements in the same group have the same number of valence electrons → similar chemistry." },
          { term: "Core electrons", zh: "芯电子", def: "Filled inner-shell electrons, including completely filled d or f sublevels." },
          { term: "Condensed (noble-gas) notation", zh: "稀有气体简写", def: "[Noble gas core] + valence configuration: Na = 1s²2s²2p⁶3s¹ = <b>[Ne]3s¹</b>; Cl = [Ne]3s²3p⁵." },
          { term: "Blocks", zh: "周期表分区", def: "s-block + p-block = representative (main-group) elements 主族元素; d-block = transition elements 过渡元素; f-block = lanthanides & actinides 内过渡元素. Orbitals fill in increasing energy order — the periodic table itself is the filling map." }
        ]
      },
      {
        id: "s4", title: "Anomalies", zh: "排布例外",
        points: [
          { term: "Chromium anomaly", zh: "铬的例外", def: "Cr is <b>[Ar]4s¹3d⁵</b>, not the expected [Ar]4s²3d⁴ — because 4s and 3d are very close in energy and the half-filled 3d⁵ arrangement is more stable (symmetric distribution). Cu ([Ar]4s¹3d¹⁰) is the classic fully-filled analogue." },
          { term: "General rule", zh: "规律", def: "Irregularities occur when enough electrons exist to half-fill (or fill) s and d orbitals on a given row; f-block shows anomalies too." }
        ]
      },
      {
        id: "s5", title: "The Wave Nature of Light", zh: "光的波动性",
        points: [
          { term: "Wave characteristics", zh: "波动特征", def: "Light is electromagnetic radiation (电磁辐射) with wavelength (波长 λ), frequency (频率 ν), amplitude (振幅), and speed." },
          { term: "Speed of light", zh: "光速", def: "All electromagnetic waves travel at the same speed in vacuum.",
            formula: "c = λν = 2.998 × 10⁸ m/s" },
          { term: "Energy–frequency", zh: "能量与频率", def: "Higher frequency (shorter λ) → higher energy photons. Spectrum order (low→high energy): radio, microwave, IR, visible, UV, X-ray, γ-ray." }
        ]
      },
      {
        id: "s6", title: "Quantization: Planck, Einstein & Spectra", zh: "量子化：普朗克、爱因斯坦与光谱",
        points: [
          { term: "Classical theory fails", zh: "经典理论的失败", def: "Wave theory cannot explain: ① <b>blackbody radiation</b> (黑体辐射, emission from hot objects), ② <b>photoelectric effect</b> (光电效应, electron emission from metal surfaces under light), ③ <b>emission spectra</b> (发射光谱, discrete light from excited gas atoms)." },
          { term: "Planck's quantum hypothesis", zh: "普朗克量子假说", def: "Energy comes in packets called <b>quanta</b> (量子). Energy is proportional to frequency.",
            formula: "E = hν, h = 6.626 × 10⁻³⁴ J·s (Planck's constant)" },
          { term: "Photoelectric effect", zh: "光电效应", def: "Einstein: light is a swarm of discrete energy packets — <b>photons</b> (光子). Each metal has a threshold energy; below it, no electrons are emitted <b>regardless of intensity</b>. Application: X-ray photoelectron spectroscopy (XPS, X射线光电子能谱)." },
          { term: "Line spectra", zh: "线状光谱", def: "Atoms emit only <b>discrete wavelengths</b> (线状谱), not a continuous rainbow; each element has a unique line spectrum — its fingerprint." }
        ]
      },
      {
        id: "s7", title: "The Bohr Model", zh: "玻尔模型",
        points: [
          { term: "Postulates", zh: "玻尔假设", def: "① Electrons occupy only certain <b>allowed orbits</b> (specific energies); ② electrons in permitted orbits do not radiate; ③ energy is absorbed/emitted <b>only in transitions</b> (跃迁) between allowed states, with ΔE = hν." },
          { term: "Rydberg equation", zh: "里德伯公式", def: "Balmer (1885) found the formula for H's visible lines; Rydberg generalized it; Bohr explained <b>why</b> it works.",
            formula: "ΔE = −hcR_H (1/n_f² − 1/n_i²), R_H = 1.097 × 10⁷ m⁻¹" },
          { term: "Legacy", zh: "遗留要点", def: "① Electrons exist only in certain <b>discrete</b> energy levels (energy is <b>quantized</b> 能量子化); ② energy is involved in <b>transitions</b> between levels." }
        ]
      },
      {
        id: "s8", title: "Wave Behavior of Matter & Uncertainty", zh: "物质波与不确定性原理",
        points: [
          { term: "de Broglie hypothesis", zh: "德布罗意物质波", def: "If radiation can behave as particles, matter can behave as waves. The wave nature is negligible for macroscopic objects (golf ball λ ≈ 10⁻³⁴ m) but significant for electrons.",
            formula: "λ = h/(mv) = h/p" },
          { term: "Both Thomsons were right", zh: "波粒二象性", def: "J. J. Thomson (Nobel 1906) showed the electron is a <b>particle</b>; G. P. Thomson (Nobel 1937) showed it diffracts like a <b>wave</b> — matter and radiation display <b>wave-particle duality</b> (波粒二象性)." },
          { term: "Heisenberg uncertainty principle", zh: "海森堡不确定性原理", def: "There is a fundamental limit to how precisely we can know <b>both the position and momentum</b> of an object at a given instant — important only at the subatomic level. We can never know both exactly for an electron." }
        ]
      },
      {
        id: "s9", title: "Quantum Mechanics & Quantum Numbers", zh: "量子力学与量子数",
        points: [
          { term: "Schrödinger's wave equation", zh: "薛定谔方程", def: "Incorporates both wave-like and particle-like behavior (quantum/wave mechanics). Solution = wave function <b>ψ</b> (psi); <b>ψ²</b> gives the <b>electron density</b> — probability of finding the electron at a given point." },
          { term: "Orbitals", zh: "原子轨道", def: "Solutions of the wave equation; each orbital describes a spatial distribution of electron density and is defined by <b>three quantum numbers</b>." },
          { term: "n — principal", zh: "主量子数", def: "Energy level & size of the orbital; integers ≥ 1 (n = 1, 2, 3…). Orbitals with the same n form a <b>shell</b> (电子层). House analogy: how many stories." },
          { term: "l — angular momentum", zh: "角量子数", def: "Shape of the orbital; 0 ≤ l ≤ n−1. Letters: l=0 → s, 1 → p, 2 → d, 3 → f. Same-n different-l types are <b>subshells</b> (亚层). Analogy: room designs on the same floor." },
          { term: "m_l — magnetic", zh: "磁量子数", def: "3-D orientation of the orbital; −l ≤ m_l ≤ +l → 1 s, 3 p, 5 d, 7 f orbitals per subshell. Analogy: how the rooms are oriented." },
          { term: "mₛ — spin", zh: "自旋量子数", def: "Describes the electron's magnetic field ('spin'); only two values: <b>+½ and −½</b>." }
        ]
      },
      {
        id: "s10", title: "Orbital Shapes & Energies", zh: "轨道形状与能级",
        points: [
          { term: "s orbitals", zh: "s 轨道", def: "l = 0; <b>spherical</b>. Radius increases with n. An ns orbital has <b>n peaks</b> and <b>n−1 nodes</b> (节面, zero-probability surfaces); higher n → density more spread out." },
          { term: "p orbitals", zh: "p 轨道", def: "l = 1; two lobes with a node between them (哑铃形/dumbbell); 3 mutually perpendicular orientations (p_x, p_y, p_z)." },
          { term: "d orbitals", zh: "d 轨道", def: "l = 2; four have four lobes (四瓣苜蓿形), one resembles a p orbital with a doughnut around the center (d_z²); 5 orbitals." },
          { term: "f orbitals", zh: "f 轨道", def: "l = 3; very complicated shapes; 7 equivalent orbitals per sublevel." },
          { term: "Hydrogen vs many-electron atoms", zh: "氢原子与多电子原子", def: "In the one-electron H atom, orbitals of the same n are <b>degenerate</b> (简并, same energy). In many-electron atoms, e⁻–e⁻ repulsion makes same-n orbitals <b>non-degenerate</b> and energy levels overlap: <b>4s is lower in energy than 3d</b>; orbitals of the same subshell remain degenerate." }
        ],
        tips: ["Memory hook for quantum numbers: n = floor (楼层), l = room type, m_l = room orientation, mₛ = bed direction."]
      }
    ],
    quiz: [
      { q: "The Pauli exclusion principle states that:", opts: ["electrons fill lowest-energy orbitals first", "no two electrons in an atom can have the same set of four quantum numbers", "degenerate orbitals fill singly first", "energy comes in quanta"], a: 1, ex: "Each electron must differ by at least one of n, l, m_l, mₛ → max 2 e⁻ per orbital." },
      { q: "Hund's rule requires that, for degenerate orbitals:", opts: ["electrons pair immediately", "electrons occupy separate orbitals with the same spin before pairing", "electrons always have opposite spins in different orbitals", "orbitals fill from highest energy"], a: 1, ex: "Maximize same-spin electrons — one per orbital before pairing." },
      { q: "The ground-state electron configuration of Cr is:", opts: ["[Ar]4s²3d⁴", "[Ar]4s¹3d⁵", "[Ar]4s²3d⁶", "[Ar]4s²3p⁶"], a: 1, ex: "Anomaly: half-filled 3d⁵ is more stable; 4s and 3d are very close in energy." },
      { q: "In E = hν, h is:", opts: ["the Rydberg constant", "Planck's constant, 6.626 × 10⁻³⁴ J·s", "the speed of light", "the electron mass"], a: 1, ex: "Planck explained blackbody radiation with energy quanta." },
      { q: "The photoelectric effect was explained by:", opts: ["Bohr", "Planck", "Einstein, using photons", "de Broglie"], a: 2, ex: "Light = discrete photon packets; below the threshold energy no electrons are emitted regardless of intensity." },
      { q: "How many orbitals are in the n = 3 shell?", opts: ["3", "6", "9", "12"], a: 2, ex: "1 (3s) + 3 (3p) + 5 (3d) = 9." },
      { q: "l = 2 corresponds to which orbital type?", opts: ["s", "p", "d", "f"], a: 2, ex: "s=0, p=1, d=2, f=3." },
      { q: "The allowed values of the spin quantum number mₛ are:", opts: ["0 and 1", "+½ and −½", "−1, 0, +1", "any integer"], a: 1, ex: "Only two spin states exist." },
      { q: "A 3s orbital has how many nodes?", opts: ["0", "1", "2", "3"], a: 2, ex: "ns orbital has n−1 nodes → 3s has 2 (and 3 peaks)." },
      { q: "In a many-electron atom, which orbital is LOWER in energy?", opts: ["3d", "4s", "they are exactly degenerate", "it depends on color"], a: 1, ex: "Energy levels overlap in multi-electron atoms: E(4s) < E(3d)." },
      { q: "ψ² (psi squared) from Schrödinger's equation gives:", opts: ["electron charge", "probability density (electron density)", "bond length", "nuclear mass"], a: 1, ex: "Quantum mechanics describes the electron's location in terms of probabilities." },
      { q: "The de Broglie wavelength of a particle is λ =", opts: ["hν", "h/(mv)", "mc²", "hc/ΔE"], a: 1, ex: "λ = h/p — matter waves; significant only for very light particles like electrons." }
    ]
  },

  /* ==================== LECTURE 5 ==================== */
  {
    id: "ch7",
    lecture: "Lecture 5",
    title: "Periodic Properties of the Elements",
    zh: "元素周期性",
    source: "Chapter 7",
    sections: [
      {
        id: "s1", title: "Development of the Periodic Table", zh: "周期表的发展",
        points: [
          { term: "Mendeleev & Meyer", zh: "门捷列夫与迈耶尔", def: "Dmitri Mendeleev (俄) and Lothar Meyer (德) independently concluded how elements should be grouped. Mendeleev is mostly credited because he also used <b>chemical properties</b> to organize the table and <b>predicted missing elements</b> (e.g., germanium, 'eka-silicon') and their properties." },
          { term: "Atomic number basis", zh: "原子序数", def: "Mendeleev's table was based on atomic <b>weight</b> (with anomalies like Ar/K). ~35 years later, Rutherford discovered the nuclear atom and <b>Henry Moseley</b> established the concept of <b>atomic number</b> (proton count) as the true basis of periodicity." }
        ]
      },
      {
        id: "s2", title: "Effective Nuclear Charge", zh: "有效核电荷",
        points: [
          { term: "Zeff concept", zh: "有效核电荷概念", def: "Valence electrons are attracted by the nucleus but <b>repelled/screened</b> by other electrons. Zeff = net attraction felt by a valence electron.",
            formula: "Zeff = Z − S (Z = atomic number; S = screening constant 屏蔽常数 ≈ number of core electrons)" },
          { term: "Trend across a period", zh: "同周期趋势", def: "Zeff <b>increases left → right</b>: protons increase while core electron count stays the same.",
            example: "Si 1s²2s²2p⁶3s²3p² → Zeff ≈ 14 − 10 = +4; P → +5; S → +6." },
          { term: "Trend down a group", zh: "同族趋势", def: "Zeff changes far less down a column, and in fact <b>increases slightly</b>: the more diffuse core cloud screens less effectively. Li ≈ +1.3, Na ≈ +2.5, K ≈ +3.5." },
          { term: "Slater's approach", zh: "斯莱特规则", def: "Estimate S: electrons with the <b>same n</b> contribute 0.35 each; electrons with n−1 contribute 0.85; smaller n contribute 1.00.",
            example: "F (1s²2s²2p⁵): S = 0.35×6 + 0.85×2 = 3.8 → Zeff = 9 − 3.8 = +5.2; Li: S = 0.85×2 = 1.7 → +1.3; Na: S = 0.85×8 + 1.00×2 = 8.8 → +2.2." }
        ]
      },
      {
        id: "s3", title: "Sizes of Atoms & Ions", zh: "原子与离子半径",
        points: [
          { term: "van der Waals radius", zh: "非成键原子半径", def: "The <b>nonbonding</b> atomic radius: half the shortest distance separating two nuclei during a <b>collision</b> of atoms." },
          { term: "Bonding atomic radius", zh: "成键原子半径", def: "Half the internuclear distance when atoms are <b>bonded</b>." },
          { term: "Atomic radius trend", zh: "原子半径趋势", def: "Bonding radius <b>decreases</b> left → right across a period (Zeff ↑ pulls electrons in); <b>increases</b> top → bottom down a group (n ↑, larger orbitals)." },
          { term: "Cations & anions", zh: "阳离子与阴离子大小", def: "<b>Cations are smaller</b> than parent atoms (outermost electron removed, less e⁻–e⁻ repulsion). <b>Anions are larger</b> (electrons added, repulsion increased)." },
          { term: "Isoelectronic series", zh: "等电子系列", def: "Ions with the <b>same number of electrons</b>. Ionic size <b>decreases</b> with increasing nuclear charge.",
            example: "O²⁻ (1.26 Å) > F⁻ (1.19) > Na⁺ (1.16) > Mg²⁺ (0.86) > Al³⁺ (0.68) — all 10 e⁻." }
        ]
      },
      {
        id: "s4", title: "Ionization Energy", zh: "电离能",
        points: [
          { term: "Definition", zh: "定义", def: "The <b>minimum energy</b> required to remove an electron from the <b>ground state</b> of a gaseous atom/ion: M(g) → M⁺(g) + e⁻. The higher the IE, the harder to remove an electron. I₁ < I₂ < I₃ (successive removals need more energy; a huge jump occurs after valence electrons are exhausted)." },
          { term: "Periodic trend", zh: "周期趋势", def: "I₁ generally <b>increases across a period</b> (Zeff ↑, smaller atoms) and <b>decreases down a group</b> (electron farther from nucleus). s/p-blocks show a large range; d-block increases slowly; f-block varies little." },
          { term: "Irregularities", zh: "反常", def: "Trend breaks when the next electron ① enters a <b>new, higher-energy sublevel</b> (Be → B: 2p easier to remove than 2s), or ② is the <b>first paired electron</b> in an orbital (N → O: pairing repulsion lowers removal energy)." }
        ]
      },
      {
        id: "s5", title: "Electron Configurations of Ions", zh: "离子的电子排布",
        points: [
          { term: "Cations", zh: "阳离子排布", def: "Electrons are lost from the <b>highest n level first</b> — even if it wasn't filled last! Li⁺ = 1s² (2s electron lost); Fe²⁺ = [Ar]3d⁶ (two 4s electrons lost, NOT 3d); Sn²⁺/Sn⁴⁺ from 5p then 5s." },
          { term: "Anions", zh: "阴离子排布", def: "Electrons added until ns²np⁶ (noble-gas configuration): F⁻ = 1s²2s²2p⁶ (same as Ne — isoelectronic).",
            example: "Na⁺ and Cl⁻ are both isoelectronic with Ne/Ar respectively — ionic bonding in NaCl." }
        ]
      },
      {
        id: "s6", title: "Electron Affinity", zh: "电子亲和能",
        points: [
          { term: "Definition", zh: "定义", def: "The energy change when an electron is <b>added</b> to a gaseous atom: Cl(g) + e⁻ → Cl⁻(g). Typically <b>exothermic → negative</b> for most elements." },
          { term: "Trend", zh: "趋势", def: "Little change down a group; generally <b>increases (more negative)</b> across a period. Three notable exceptions (positive/unstable X⁻): <b>Group 2A</b> (s sublevel full), <b>Group 5A</b> (p sublevel half-full), <b>Group 8A</b> (p sublevel full)." }
        ]
      },
      {
        id: "s7", title: "Metals, Nonmetals & Metalloids", zh: "金属、非金属与准金属",
        points: [
          { term: "Metals", zh: "金属", def: "Left/center of the table. Shiny luster; conduct heat & electricity; <b>malleable</b> (可延展) and <b>ductile</b> (可拉丝); solids at RT (except Hg); <b>low ionization energies → form cations easily</b>. Metal + nonmetal compounds are ionic; <b>metal oxides are basic</b>." },
          { term: "Nonmetals", zh: "非金属", def: "Right side. Solid, liquid, or gas; solids are dull, brittle, poor conductors; <b>large negative electron affinity → form anions readily</b>. Nonmetal-only substances are molecular (CH₄; exception NH₄Cl-type salts); <b>nonmetal oxides are acidic</b> (CO₂, P₄O₁₀)." },
          { term: "Metalloids", zh: "准金属", def: "Intermediate properties; several are electrical <b>semiconductors</b> — basis of integrated circuits/computer chips (Si). Metallic character decreases up and to the right → B is the least metallic metalloid." }
        ]
      },
      {
        id: "s8", title: "Group Trends", zh: "族趋势",
        points: [
          { term: "Alkali metals (1A)", zh: "碱金属", def: "Soft metallic solids; only found in compounds in nature; low density & melting points; <b>low IE</b>. React with water <b>exothermically</b> → H₂ + basic solution. With O₂: Li → oxide (Li₂O), Na → peroxide (Na₂O₂), K/Rb/Cs → superoxide (MO₂). Identified by <b>flame tests</b> (焰色反应). Application: Li₂CO₃ for bipolar disorder (~70% effective)." },
          { term: "Alkaline earth metals (2A)", zh: "碱土金属", def: "Higher densities & melting points than 1A; IEs low but not as low. Be does not react with water; Mg reacts only with steam (MgO); Ca/Sr/Ba react readily with water (Ca(OH)₂). Reactivity increases down the group." },
          { term: "Oxygen group (6A)", zh: "氧族", def: "Metallic character increases down: O, S, Se are nonmetals; Te is a metalloid; radioactive Po is a metal." },
          { term: "Halogens (7A)", zh: "卤素", def: "Typical nonmetals; <b>highly negative electron affinities</b> → exist as anions in nature; react directly with metals to form metal halides." },
          { term: "Noble gases (8A)", zh: "稀有气体", def: "Very <b>large ionization energies</b>; positive electron affinities (can't form stable anions) → relatively unreactive; monatomic gases with filled s and p subshells." }
        ],
        tips: ["Allotrope (同素异形体) reminder: O₂ vs O₃ (ozone) — same element, different molecular form."]
      }
    ],
    quiz: [
      { q: "The first periodic table was created by:", opts: ["Amadeo Avogadro", "Dmitri Mendeleev", "Henry Moseley", "Ernest Rutherford"], a: 1, ex: "Mendeleev organized by properties and predicted missing elements (germanium)." },
      { q: "Zeff felt by valence electrons (X) left→right and (Y) down a column:", opts: ["X increases, Y increases", "X increases, Y decreases", "X decreases, Y increases", "X decreases, Y decreases"], a: 0, ex: "Zeff rises across a period and rises slightly down a group (poorer screening by diffuse cores)." },
      { q: "T/F: The large number of valence electrons in a chlorine atom greatly reduces its effective nuclear charge.", opts: ["True", "False"], a: 1, ex: "False — screening comes mainly from CORE electrons; valence electrons screen poorly." },
      { q: "The atom with the smallest atomic radius is:", opts: ["Ca", "Cr", "Co", "Br"], a: 3, ex: "Br is farthest right in period 4 → highest Zeff → smallest." },
      { q: "Correct order of increasing atomic radius:", opts: ["Na < Mg < K < Rb", "Mg < Na < K < Rb", "Rb < K < Na < Mg", "Rb < K < Mg < Na"], a: 1, ex: "Mg < Na (same period, Zeff), then down the group Na < K < Rb." },
      { q: "The shortest distance between the nuclei of two identical atoms during collision is the ___ radius.", opts: ["anionic", "cationic", "effective", "van der Waals"], a: 3, ex: "Nonbonding (van der Waals) radius = half that collision distance." },
      { q: "Which statement about ionic radii is FALSE?", opts: ["Br⁻ is larger than Cl⁻", "Se²⁻ is larger than Br⁻", "K⁺ is larger than Ca²⁺", "Na⁺ is larger than K⁺"], a: 3, ex: "False — K⁺ > Na⁺ (down a group, more shells). All others are true." },
      { q: "Two ions are isoelectronic if they have the same:", opts: ["charge", "number of protons", "number of electrons", "number of neutrons"], a: 2, ex: "Isoelectronic = same electron count, e.g., Se²⁻, Br⁻, Rb⁺, Sr²⁺ (36 e⁻)." },
      { q: "When a main-group metal forms a cation, its radius is ___ the atomic radius.", opts: ["greater than", "less than", "the same as", "impossible to predict"], a: 1, ex: "Losing the outermost electron shrinks the ion." },
      { q: "Correct order of increasing first ionization energy:", opts: ["Na < Ca < Al < Sn", "Na < Al < Ca < Sn", "Na < Al < Sn < Ca", "Ca < Na < Sn < Al"], a: 1, ex: "IE₁: Na 496 < Al 578 < Ca 590 < Sn 709 kJ/mol." },
      { q: "Correct order of decreasing electron affinity (most → least negative):", opts: ["O < Cl < B < C", "O < Cl < C < B", "Cl < O < C < B", "Cl < O < B < C"], a: 2, ex: "Cl (−349) most negative; O (−141) less than Cl (small atom, pairing repulsion); C (−122); B (−27)." },
      { q: "Most metal oxides dissolved in water form ___ solutions.", opts: ["acidic", "basic", "neutral", "amphoteric"], a: 1, ex: "Metal oxides → basic (CaO + H₂O → Ca(OH)₂); nonmetal oxides → acidic." },
      { q: "The metalloid with the least metallic character is:", opts: ["As", "B", "Ge", "Sb", "Si"], a: 1, ex: "Metallic character decreases up a group — B sits highest among metalloids." },
      { q: "A soft gray solid reacts with water forming a flammable gas and a basic solution. It is most likely:", opts: ["a noble gas", "a halogen", "a Group 2A (IIA) metal", "a transition metal"], a: 2, ex: "Active metal + water → H₂ (flammable) + metal hydroxide (basic)." },
      { q: "Ozone is an allotrope of which element?", opts: ["hydrogen", "oxygen", "sulfur", "chlorine"], a: 1, ex: "O₂ and O₃ are allotropes of oxygen." },
      { q: "The noble gases:", opts: ["are monatomic", "have filled s and p subshells", "are generally unreactive", "All of the above"], a: 3, ex: "All true — large IE, positive EA, filled ns²np⁶." }
    ]
  },

  /* ==================== LECTURE 6 ==================== */
  {
    id: "ch8",
    lecture: "Lecture 6",
    title: "Basic Concepts of Chemical Bonding",
    zh: "化学键的基本概念",
    source: "Chapter 8",
    sections: [
      {
        id: "s1", title: "Three Types of Chemical Bonds", zh: "三种化学键",
        points: [
          { term: "Ionic bond", zh: "离子键", def: "<b>Electrostatic attraction</b> (静电引力) between oppositely charged ions — complete electron transfer from metal to nonmetal." },
          { term: "Covalent bond", zh: "共价键", def: "<b>Sharing</b> of electron pairs between atoms (typically nonmetal + nonmetal)." },
          { term: "Metallic bond", zh: "金属键", def: "Metal atoms bonded to several other atoms; electrons are delocalized over the whole lattice." }
        ]
      },
      {
        id: "s2", title: "Lewis Symbols & the Octet Rule", zh: "路易斯符号与八隅律",
        points: [
          { term: "Lewis symbols", zh: "路易斯符号", def: "G. N. Lewis: element symbol + <b>one dot per valence electron</b> (价电子). Example: :Cl̇ with 7 dots." },
          { term: "Octet rule", zh: "八隅律", def: "When forming compounds, atoms tend to gain, lose, or share electrons until surrounded by <b>eight</b> valence electrons — a noble-gas (isoelectronic) configuration. H needs only 2." }
        ]
      },
      {
        id: "s3", title: "Ionic Bonding: Born–Haber Cycle", zh: "离子键与玻恩-哈伯循环",
        points: [
          { term: "Formation steps", zh: "生成步骤", def: "Na(s) + ½Cl₂(g) → NaCl(s). ① Vaporize metal & dissociate Cl₂ into gaseous atoms (<b>endothermic</b>); ② create Na⁺ (ionization energy, endothermic); ③ create Cl⁻ (electron affinity, exothermic); ④ combine gaseous ions into the solid — releases a <b>huge</b> amount of energy." },
          { term: "Net result", zh: "净结果", def: "Formation of salts from the elements is overall <b>exothermic</b> — driven by the large lattice stabilization." }
        ]
      },
      {
        id: "s4", title: "Lattice Energy", zh: "晶格能",
        points: [
          { term: "Definition", zh: "定义", def: "The energy required to <b>completely separate one mole of a solid ionic compound into its gaseous ions</b> (always positive; the reverse formation step is hugely exothermic)." },
          { term: "Coulomb's law", zh: "库仑定律", def: "Electrostatic energy between two charges governs lattice energy.",
            formula: "E_el = κQ₁Q₂ ÷ d (κ = constant; Q = charges; d = interionic distance)" },
          { term: "Trends", zh: "晶格能变化规律", def: "Lattice energy <b>increases</b> with ① increasing ionic <b>charge</b>, ② decreasing ionic <b>size</b> (smaller d).",
            example: "MgO (2+/2−) ≫ NaCl (1+/1−); LiF > LiBr (smaller anion)." }
        ]
      },
      {
        id: "s5", title: "Covalent Bonding & Lewis Structures", zh: "共价键与路易斯结构",
        points: [
          { term: "Bond formation", zh: "共价键的形成", def: "Several electrostatic interactions exist: e⁻–nucleus <b>attractions</b>, e⁻–e⁻ and nucleus–nucleus <b>repulsions</b>. A bond forms when attractions exceed repulsions — energy is lowered." },
          { term: "Lone pairs vs bonding pairs", zh: "孤对电子与成键电子", def: "<b>Lone pairs</b>: located on only ONE atom. <b>Bonding pairs</b>: shared between two atoms, drawn as two dots or one line." },
          { term: "Multiple bonds", zh: "多重键", def: "<b>Single</b> bond = 1 shared pair; <b>double</b> bond = 2 pairs (CO₂, O=CO); <b>triple</b> bond = 3 pairs (N≡N)." }
        ]
      },
      {
        id: "s6", title: "Writing Lewis Structures — 5 Steps", zh: "路易斯结构书写五步法",
        points: [
          { term: "Step 1", zh: "数价电子", def: "Sum valence electrons of all atoms; <b>add</b> one e⁻ per negative charge (anion), <b>subtract</b> one per positive charge (cation).",
            example: "PCl₃: 5 + 3(7) = 26 e⁻" },
          { term: "Step 2", zh: "搭骨架", def: "Write the atom skeleton and connect with single bonds (2 e⁻ each). The least electronegative atom is usually <b>central</b>. 26 − 6 = 20 left." },
          { term: "Step 3", zh: "补满外围原子", def: "Complete octets of atoms <b>surrounding</b> the central atom first. 20 − 18 = 2 left." },
          { term: "Step 4", zh: "剩余电子给中心原子", def: "Place any leftover electrons on the <b>central</b> atom. 2 − 2 = 0 → P has the lone pair." },
          { term: "Step 5", zh: "不成八隅则成多重键", def: "If the central atom still lacks an octet, move lone pairs from outer atoms to make <b>multiple bonds</b>.",
            example: "[BrO₃]⁻: 26 e⁻ → after filling, Br short → form one Br=O double bond (resonance!)" }
        ]
      },
      {
        id: "s7", title: "Polar Covalent Bonds & Electronegativity", zh: "极性共价键与电负性",
        points: [
          { term: "Polar covalent bond", zh: "极性共价键", def: "Electrons are shared <b>unequally</b>: electron density shifts toward the more electronegative atom → partial charges <b>δ−</b> and <b>δ+</b> (not a full transfer)." },
          { term: "Electronegativity", zh: "电负性", def: "The ability of an atom <b>in a molecule</b> to attract electrons to itself. Increases <b>left → right</b> across a period and <b>bottom → top</b> up a group; <b>F is the most electronegative</b>. Greater ΔEN → more polar bond (nonpolar covalent → polar covalent → ionic)." },
          { term: "Dipole moment", zh: "偶极矩", def: "A dipole = two equal but opposite charges separated by distance r.",
            formula: "μ = Qr, measured in debyes (D); the dipole arrow points toward the δ− end." }
        ]
      },
      {
        id: "s8", title: "Formal Charge", zh: "形式电荷",
        points: [
          { term: "Definition", zh: "定义", def: "The charge an atom <b>would have if all bonding electrons were shared equally</b>.",
            formula: "Formal charge = valence e⁻ − ½(bonding e⁻) − nonbonding e⁻" },
          { term: "Choosing the dominant structure", zh: "选择主导结构", def: "The dominant Lewis structure ① has formal charges <b>closest to zero</b> (smallest magnitude), and ② puts any <b>negative</b> formal charge on the <b>most electronegative</b> atom.",
            example: "COCl₂: the structure with C=O double bond + two C–Cl single bonds gives all FC = 0 → dominant." }
        ]
      },
      {
        id: "s9", title: "Exceptions to the Octet Rule", zh: "八隅律的例外",
        points: [
          { term: "Type 1 — few electrons", zh: "少于八隅", def: "H needs only <b>2</b> electrons (duet). Also Be (4 e⁻) and B (6 e⁻) form stable compounds with <b>incomplete octets</b>: BF₃." },
          { term: "BF₃ lesson", zh: "BF₃ 的启示", def: "Giving B a full octet (B=F double bond) puts a <b>negative</b> charge on B and a <b>positive</b> charge on the more electronegative F — inaccurate. Rule: if filling the central octet creates this situation, <b>don't fill it</b>." },
          { term: "Type 2 — odd electrons", zh: "奇电子物种", def: "Ions/molecules with an odd number of electrons (free radicals, typically N): NO, NO₂ — rare, unstable, very reactive." },
          { term: "Type 3 — expanded octet", zh: "超价/扩展八隅", def: "Period 3 and below can accommodate >8 valence electrons because <b>3d orbitals</b> are energetically accessible (hypervalent 超价): PF₅, PO₄³⁻, [ICl₄]⁻, SF₆." }
        ]
      },
      {
        id: "s10", title: "Resonance", zh: "共振",
        points: [
          { term: "Resonance structures", zh: "共振结构", def: "When <b>one</b> Lewis structure cannot accurately depict a molecule, we use multiple resonance structures; the true structure is a <b>hybrid</b> (杂化体), not flipping between forms.",
            example: "Ozone O₃: drawn with one single + one double bond, but experimentally <b>both O–O bonds are identical</b> (equal, intermediate length)." },
          { term: "Localized vs delocalized", zh: "定域与离域", def: "<b>Localized</b> electrons: on one atom or shared between two. <b>Delocalized</b>: shared among multiple atoms. Benzene C₆H₆ is drawn as a hexagon with a circle = delocalized π electrons over the ring; two equivalent resonance (Kekulé) structures." }
        ]
      },
      {
        id: "s11", title: "Ionic or Covalent?", zh: "离子型还是共价型？",
        points: [
          { term: "Simplest rule", zh: "粗略判断", def: "Metal + nonmetal → ionic; nonmetal + nonmetal → covalent." },
          { term: "Limitations", zh: "局限性", def: "Ignores the metal's <b>oxidation number</b> (higher oxidation states give covalent bonding, e.g., SnCl₄). Electronegativity difference helps but has the same flaw. Compound <b>properties</b> are often best evidence: lower melting points → covalent character." }
        ]
      },
      {
        id: "s12", title: "Bond Enthalpy & Bond Length", zh: "键焓与键长",
        points: [
          { term: "Bond enthalpy", zh: "键焓", def: "Energy required to <b>break 1 mol</b> of a particular bond in gas phase — always <b>positive</b> (breaking bonds is endothermic). D(Cl–Cl) = 242 kJ/mol. Table values are <b>averages</b> over many compounds.",
            formula: "Cl–Cl → 2 Cl· (ΔH = +242 kJ/mol)" },
          { term: "Estimating ΔHrxn", zh: "估算反应焓", def: "Energy is added to break bonds and released when bonds form.",
            formula: "ΔH_rxn = Σ(bond enthalpies of bonds BROKEN) − Σ(bond enthalpies of bonds FORMED)",
            example: "CH₄ + Cl₂ → CH₃Cl + HCl: [(413) + (242)] − [(328) + (431)] = 655 − 759 = <b>−104 kJ</b> (exothermic). Via Hess's law with ΔH°f: −99 kJ — close, since bond enthalpies are averages." },
          { term: "Bond order & length", zh: "键级与键长", def: "As the number of bonds between two atoms (<b>bond order</b>) increases, the bond gets <b>shorter and stronger</b>: C–C (154 pm) > C=C (133) > C≡C (120)." }
        ],
        tips: ["Exam chain: count bonds broken/formed from the balanced equation → look up D values → subtract. Bonds FORMED release energy (negative term)."]
      }
    ],
    quiz: [
      { q: "Lattice energy increases with:", opts: ["larger ions and lower charge", "higher charge and smaller ions", "lower charge and larger ions", "more neutrons"], a: 1, ex: "Coulomb: E = κQ₁Q₂/d — bigger Q and smaller d → stronger attraction." },
      { q: "Coulomb's law for electrostatic energy is:", opts: ["E = κQ₁Q₂/d", "E = hν", "E = mc²", "μ = Qr"], a: 0, ex: "Governs ionic (lattice) energy; μ = Qr is for dipoles." },
      { q: "In the Born–Haber cycle, the hugely exothermic step is:", opts: ["vaporizing the metal", "ionizing the metal", "combining gaseous ions into the solid (lattice energy)", "adding an electron to Cl"], a: 2, ex: "This drives the overall exothermic formation of salts from elements." },
      { q: "BF₃ violates the octet rule because boron:", opts: ["has an expanded octet", "has only 6 electrons (incomplete octet)", "has an odd number of electrons", "is a metal"], a: 1, ex: "Filling B's octet would wrongly put − charge on B and + on F." },
      { q: "PF₅ is possible because:", opts: ["P is very electronegative", "period-3 atoms can access d orbitals (expanded octet)", "F donates lone pairs", "it is ionic"], a: 1, ex: "Hypervalent species form from period 3 and below." },
      { q: "Formal charge equals:", opts: ["valence − bonding − nonbonding", "valence − ½(bonding) − nonbonding", "valence + nonbonding − bonding", "½(valence − bonding)"], a: 1, ex: "Assumes perfectly equal sharing of bonding electrons." },
      { q: "The dominant Lewis structure:", opts: ["has the largest formal charges", "has formal charges closest to 0, with negative FC on the most electronegative atom", "always contains double bonds", "puts + charge on fluorine"], a: 1, ex: "Two criteria for the best structure." },
      { q: "Resonance structures are used when:", opts: ["one Lewis structure cannot accurately depict the molecule", "atoms move between structures", "the molecule is ionic", "the molecule contains metals"], a: 0, ex: "O₃: both bonds are experimentally identical — a hybrid of resonance forms." },
      { q: "The most electronegative element is:", opts: ["O", "Cl", "F", "N"], a: 2, ex: "EN increases right and up; F is highest (4.0)." },
      { q: "ΔH_rxn from bond enthalpies equals:", opts: ["ΣD(formed) − ΣD(broken)", "ΣD(broken) − ΣD(formed)", "ΣD(broken) + ΣD(formed)", "−ΣD(all bonds)"], a: 1, ex: "Breaking costs energy (+); forming releases it (−)." },
      { q: "CH₄ + Cl₂ → CH₃Cl + HCl: ΔH = [(413+242) − (328+431)] kJ =", opts: ["−104 kJ", "+104 kJ", "−99 kJ", "+655 kJ"], a: 0, ex: "655 broken − 759 formed = −104 kJ (−99 kJ via ΔH°f — averages differ slightly)." },
      { q: "As bond order increases between two atoms, bond length:", opts: ["increases", "decreases", "stays constant", "doubles"], a: 1, ex: "C–C (154 pm) > C=C (133) > C≡C (120) — more sharing pulls nuclei closer." }
    ]
  }
  ]
};

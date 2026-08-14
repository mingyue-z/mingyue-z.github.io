const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const englishMode = new URLSearchParams(window.location.search).get("lang") === "en";

const englishTranslations = {
  "张明月": "Mingyue Zhang",
  "梁珮瑶": "Peiyao Liang",
  "张静": "Jing Zhang",
  "马宝君": "Baojun Ma",
  "陈国青": "Guoqing Chen",
  "曾大军": "Daniel Dajun Zeng",
  "卫强": "Qiang Wei",
  "郭迅华": "Xunhua Guo",
  "钟学燕": "Xueyan Zhong",
  "孙磊磊": "Leilei Sun",
  "刘澜": "Lan Liu",
  "鲍丹": "Dan Bao",
  "李婷婷": "Tingting Li",
  "姜越": "Yue Jiang",
  "朱田成": "Tiancheng Zhu",
  "张明月头像": "Portrait of Mingyue Zhang",
  "张明月个人照片": "Portrait of Mingyue Zhang",
  "副教授 · 博士生导师": "Associate Professor · Doctoral Supervisor",
  "个人主页": "Home",
  "个人简介": "About",
  "科研工作": "Research",
  "教学工作": "Teaching",
  "上海外国语大学": "Shanghai International Studies University",
  "国际工商管理学院": "School of Business and Management",
  "张明月，上海外国语大学国际工商管理学院信息管理与决策科学系副教授、博士生导师，入选上海市东方英才计划青年项目。先后在北京理工大学、清华大学分别取得学士学位和管理学博士学位。主要从事数字平台治理、在线社区与激励机制、人机协同与群体智慧、生成式AI 赋能下的数字服务与用户行为等方向研究，关注数字经济与管理实践中的现实问题。": "Mingyue Zhang is an Associate Professor and Doctoral Supervisor in the Department of Information Management and Decision Sciences at the School of Business and Management, Shanghai International Studies University. She was selected for the Young Talent Program of the Shanghai Oriental Talent Plan. She received her bachelor's degree from Beijing Institute of Technology and her Ph.D. in Management from Tsinghua University. Her research focuses on digital platform governance, online communities and incentive mechanisms, human–AI collaboration and collective intelligence, and digital services and user behavior empowered by generative AI.",
  "近年来主持国家自然科学基金面上项目和青年项目，在": "She has led General and Young Scientists Fund projects of the National Natural Science Foundation of China and has published in",
  "等期刊发表多篇论文，获国家级教学成果奖、教育部人文社科优秀成果奖二等奖等荣誉。": "among other journals. Her honors include the Second Prize of the National Teaching Achievement Award and the Second Prize of the Ministry of Education’s Outstanding Achievement Award in Humanities and Social Sciences.",
  "查看科研工作": "View Research",
  "查看教学工作": "View Teaching",
  "当前关注的研究主题": "Current Research Interests",
  "人机协同与群体智慧": "Human–AI Collaboration and Collective Intelligence",
  "聚焦生成式AI背景下的人机协同场景中的判断整合、众包协作与群体智慧机制，关注算法系统与人的认知优势如何互补，并提升信息识别、内容生成与决策支持的质量。": "Examining judgment integration, crowdsourcing collaboration, and collective intelligence in human–AI settings, with an emphasis on how algorithmic systems and human cognition complement one another to improve information verification, content generation, and decision support.",
  "知识社区的激励机制与平台治理": "Incentives and Platform Governance in Knowledge Communities",
  "关注知识付费、知识共享与在线问答社区中的激励设计、内容贡献与平台治理问题，研究平台规则、信息披露和制度安排如何塑造用户参与和社区生态。": "Studying incentive design, content contribution, and platform governance in paid-knowledge, knowledge-sharing, and online Q&A communities, and how platform rules, information disclosure, and institutional arrangements shape participation and community ecosystems.",
  "数字服务中的偏差问题": "Bias in Digital Services",
  "研究数字服务场景中的认知偏差、平台偏差与算法偏差，尤其关注推荐系统、订阅服务、位置披露与外观线索等因素如何影响用户判断、选择与互动行为。": "Investigating cognitive, platform, and algorithmic biases in digital services, particularly how recommender systems, subscriptions, location disclosure, and appearance cues influence user judgment, choice, and interaction.",
  "工作经历": "Academic Appointments",
  "2020.01 至今": "Jan. 2020 – Present",
  "上海外国语大学，国际工商管理学院": "Shanghai International Studies University, School of Business and Management",
  "北京外国语大学，国际商学院": "Beijing Foreign Studies University, International Business School",
  "副教授、博士生导师": "Associate Professor and Doctoral Supervisor",
  "助理教授": "Assistant Professor",
  "教育背景": "Education",
  "清华大学，经济管理学院": "Tsinghua University, School of Economics and Management",
  "管理学博士（管理科学与工程系）": "Ph.D. in Management (Department of Management Science and Engineering)",
  "联合培养博士生（Department of MIS）": "Visiting Doctoral Student (Department of MIS)",
  "北京理工大学，管理与经济学院": "Beijing Institute of Technology, School of Management and Economics",
  "管理学学士（信息管理与信息系统专业）": "B.M. in Information Management and Information Systems",
  "科研获奖": "Research Awards",
  "教学获奖": "Teaching Awards",
  "第十届教育部科学研究优秀成果奖（人文社会科学）二等奖": "Second Prize, 10th Ministry of Education Outstanding Achievement Award in Humanities and Social Sciences",
  "上海外国语大学教育奖励基金教学科研奖": "Teaching and Research Award, SISU Education Award Foundation",
  "中国信息经济学会创新论文奖": "Innovative Paper Award, China Information Economics Society",
  "上海市哲学社会科学学科学术优秀成果奖一等奖（论文类）": "First Prize, Shanghai Outstanding Achievement Award in Philosophy and Social Sciences (Journal Article)",
  "第22届武汉国际电子商务会议（WHICEB）最佳论文提名奖": "Best Paper Nomination, 22nd Wuhan International Conference on E-Business (WHICEB)",
  "上海外国语大学优秀科研成果奖": "Outstanding Research Achievement Award, SISU",
  "中国系统工程学会信息系统工程专业委员会（CNAIS）最佳论文奖": "Best Paper Award, CNAIS",
  "《管理世界》2020年“十佳”优秀论文": "Top Ten Outstanding Paper of 2020, Management World",
  "中国计算机学会协同计算专业委员会（CCF TCCC）最佳论文奖": "Best Paper Award, CCF Technical Committee on Cooperative Computing",
  "上海外国语大学工作考核优秀": "Excellent Annual Performance Evaluation, SISU",
  "国家级教学成果奖二等奖": "Second Prize, National Teaching Achievement Award",
  "全国大学生市场调查与分析大赛上海市二等奖，指导教师": "Second Prize (Faculty Advisor), Shanghai Division of the National College Student Market Survey and Analysis Competition",
  "上海市优秀教学成果一等奖": "First Prize, Shanghai Outstanding Teaching Achievement Award",
  "上海外国语大学校级本科毕业论文优秀指导教师": "Outstanding Undergraduate Thesis Advisor, SISU",
  "上海高校青年教师教学竞赛三等奖": "Third Prize, Shanghai Young University Teachers Teaching Competition",
  "北京外国语大学青年教师教学基本功二等奖、最佳教案奖": "Second Prize and Best Lesson Plan Award, BFSU Young Faculty Teaching Competition",
  "科研概览": "Research Overview",
  "期刊论文": "Journal Articles",
  "工作论文": "Working Papers",
  "会议报告": "Conference Presentations",
  "主持项目": "Funded Projects",
  "主题筛选": "Filter by Topic",
  "信息提取与信息推荐": "Information Extraction and Recommendation",
  "其他": "Other",
  "答主自我呈现与提问者知识目标的形象一致性在付费问答平台中的作用：基于印象管理视角": "The Role of Image Congruence Between Answerers’ Self-Presentation and Askers’ Knowledge Goals on Paid Q&A Platforms: An Impression Management Perspective",
  "《管理学报》，已接收。": "Chinese Journal of Management, accepted.",
  "2025年度中国信息经济学会创新论文": "2025 Innovative Paper Award, China Information Economics Society",
  "第十七届上海市哲学社会科学学科学术优秀成果奖一等奖": "First Prize, 17th Shanghai Outstanding Achievement Award in Philosophy and Social Sciences",
  "大数据环境下的决策范式转变与使能创新": "Decision Paradigm Transformation and Enabling Innovation in the Big Data Environment",
  "《管理世界》，2。CSSCI；《新华文摘》转载；获评《管理世界》2020年十佳优秀论文。": "Management World, No. 2. CSSCI; reprinted by Xinhua Digest; selected as one of Management World’s Top Ten Papers of 2020.",
  "基于多视角特征融合的移动信息服务模式挖掘": "Mining Mobile Information Service Patterns Based on Multi-view Feature Fusion",
  "《系统工程理论与实践》，38(7): 1853-1861.": "Systems Engineering—Theory & Practice, 38(7): 1853–1861.",
  "短视频平台中 AI 披露策略对用户参与意愿的影响": "The Impact of AI Disclosure Strategies on User Participation Intention on Short-video Platforms",
  "头像效应的双面性：数字社区中回答者个人资料照片对提问者与观众回答质量感知的影响": "The Dual Impacts of Avatars: How Responders’ Profile Photos Influence Perceived Answer Quality Among Askers and Viewers in Digital Communities",
  "在线医美平台服务承诺对消费者购买意愿的影响研究": "The Impact of Service Commitments on Consumer Purchase Intention on Online Medical Aesthetics Platforms",
  "知识共享平台上的“整数效应”与用户内容贡献": "The Round-number Effect and User Content Contribution on Knowledge-sharing Platforms",
  "海口": "Haikou",
  "大连": "Dalian",
  "北京": "Beijing",
  "厦门": "Xiamen",
  "天津": "Tianjin",
  "南昌": "Nanchang",
  "武汉": "Wuhan",
  "线上": "Online",
  "湖南长沙": "Changsha, Hunan",
  "深圳": "Shenzhen",
  "最佳论文奖": "Best Paper Award",
  "主持科研项目": "Principal Investigator of Funded Research Projects",
  "在研": "Ongoing",
  "结题": "Completed",
  "后评估优": "Excellent Post-project Evaluation",
  "宽假设条件下的知识分享平台激励机制研究：影响效果与激励设计": "Incentive Mechanisms for Knowledge-sharing Platforms Under Relaxed Assumptions: Effects and Incentive Design",
  "国家自然科学基金委员会面上项目，项目号 72272101，45 万元。": "General Program of the National Natural Science Foundation of China, Grant No. 72272101, RMB 450,000.",
  "考虑产品互补替代关系的相关推荐方法及其影响机制研究": "Related-item Recommendation Methods Considering Product Complementarity and Substitutability and Their Impact Mechanisms",
  "国家自然科学基金委员会青年项目，项目号 71802024，19 万元。": "Young Scientists Fund of the National Natural Science Foundation of China, Grant No. 71802024, RMB 190,000.",
  "教学实践": "Teaching Experience",
  "上海外国语大学国际工商管理学院": "School of Business and Management, Shanghai International Studies University",
  "北京外国语大学国际商学院": "International Business School, Beijing Foreign Studies University",
  "任课教师": "Instructor",
  "展开内容": "Show Courses",
  "收起内容": "Hide Courses",
  "本科生": "Undergraduate",
  "硕博研究生": "Graduate",
  "Python 程序设计": "Python Programming",
  "进入课程题库": "Open Exercise Bank",
  "数据库原理与应用": "Database Principles and Applications",
  "数据库基础、Java 程序设计动态网页制作": "Database Fundamentals, Java Programming, and Dynamic Web Development",
  "数字营销": "Digital Marketing",
  "商务智能": "Business Intelligence",
  "数据挖掘": "Data Mining",
  "Python 数据分析与案例": "Python Data Analysis and Case Studies",
  "概率论与数理统计": "Probability Theory and Mathematical Statistics",
  "教材出版": "Textbook",
  "教材": "Textbook",
  "《数据库基础：基于 MySQL 的实例教程》": "Database Fundamentals: A MySQL-based Practical Tutorial",
  "清华大学出版社，ISBN：978-7-3026-6196-2。": "Tsinghua University Press, ISBN 978-7-3026-6196-2.",
  "主持的教学项目": "Teaching Projects as Principal Investigator",
  "已结项": "Completed",
  "上海市教育委员会，上海高校市级重点课程项目，主持（1/3）。": "Shanghai Municipal Education Commission Key Course Project, Principal Investigator (1/3).",
  "上海外国语大学，本科教学精品课程建设项目，主持（1/3）。": "SISU Undergraduate Excellence Course Development Project, Principal Investigator (1/3).",
  "上海外国语大学，2024 年度已出版优质教材后期资助项目。": "SISU 2024 Post-publication Funding Project for High-quality Textbooks.",
  "查看更多": "View More",
  "收起": "Show Less",
  "基于 GitHub Pages 构建。": "Built with GitHub Pages.",
};

if (englishMode) {
  document.documentElement.lang = "en";
  const pageName = window.location.pathname.split("/").pop() || "index.html";
  const englishMetadata = {
    "index.html": {
      title: "Mingyue Zhang | Academic Homepage",
      description: "Academic homepage of Mingyue Zhang, featuring her biography, research interests, appointments, education, and awards.",
    },
    "research.html": {
      title: "Mingyue Zhang | Research",
      description: "Research by Mingyue Zhang, including journal articles, working papers, conference presentations, and funded projects.",
    },
    "teaching.html": {
      title: "Mingyue Zhang | Teaching",
      description: "Teaching by Mingyue Zhang, including teaching experience, textbook publication, and teaching projects.",
    },
  };
  const metadata = englishMetadata[pageName] || englishMetadata["index.html"];
  document.title = metadata.title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", metadata.description);

  const translationEntries = Object.entries(englishTranslations).sort(
    ([sourceA], [sourceB]) => sourceB.length - sourceA.length,
  );
  const walker = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_TEXT);
  const textNodes = [];

  while (walker.nextNode()) {
    const parentTag = walker.currentNode.parentElement?.tagName;
    if (parentTag !== "SCRIPT" && parentTag !== "STYLE") {
      textNodes.push(walker.currentNode);
    }
  }

  textNodes.forEach((node) => {
    translationEntries.forEach(([source, translation]) => {
      if (node.nodeValue.includes(source)) {
        node.nodeValue = node.nodeValue.replaceAll(source, translation);
      }
    });
    node.nodeValue = node.nodeValue
      .replaceAll("，", ", ")
      .replaceAll("；", "; ")
      .replaceAll("。", ".")
      .replaceAll("：", ": ")
      .replaceAll("（", " (")
      .replaceAll("）", ")");
  });

  document.querySelectorAll("img[alt]").forEach((image) => {
    let alt = image.getAttribute("alt");
    translationEntries.forEach(([source, translation]) => {
      alt = alt.replaceAll(source, translation);
    });
    image.setAttribute("alt", alt);
  });

  document.querySelectorAll('a[href$=".html"], a[href*=".html#"]').forEach((link) => {
    const url = new URL(link.href);
    url.searchParams.set("lang", "en");
    link.href = `${url.pathname.split("/").pop()}${url.search}${url.hash}`;
  });

  const languageSwitch = document.querySelector("[data-language-switch]");
  if (languageSwitch) {
    languageSwitch.textContent = "中文";
    languageSwitch.href = window.location.pathname.split("/").pop() || "index.html";
  }

  const biography = document.querySelector(".about-intro-panel .lead");
  if (biography) {
    biography.textContent = "Mingyue Zhang is an Associate Professor and Doctoral Supervisor in the Department of Information Management and Decision Sciences at the School of Business and Management, Shanghai International Studies University. She was selected for the Young Talent Program of the Shanghai Oriental Talent Plan. She received her bachelor's degree from Beijing Institute of Technology and her Ph.D. in Management from Tsinghua University. Her research focuses on digital platform governance, online communities and incentive mechanisms, human–AI collaboration and collective intelligence, and digital services and user behavior empowered by generative AI.";
  }
}

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const collapsibleControllers = new WeakMap();
const collapsibleLists = document.querySelectorAll("[data-collapsible-list]");

collapsibleLists.forEach((list) => {
  const visibleCount = Number(list.getAttribute("data-visible-count")) || 4;
  const itemSelector = list.getAttribute("data-item-selector") || ".award-item";
  const items = Array.from(list.querySelectorAll(itemSelector));
  const toggleButton = list.nextElementSibling;

  if (!toggleButton || items.length <= visibleCount) {
    if (toggleButton) {
      toggleButton.hidden = true;
    }
    return;
  }

  const syncListState = (expanded) => {
    items.forEach((item, index) => {
      item.classList.toggle("is-hidden", !expanded && index >= visibleCount);
    });

    toggleButton.textContent = expanded
      ? (englishMode ? "Show Less" : "收起")
      : (englishMode ? "View More" : "查看更多");
    toggleButton.setAttribute("aria-expanded", String(expanded));
  };

  syncListState(false);
  collapsibleControllers.set(list, {
    apply(expanded) {
      syncListState(expanded);
    },
    collapse() {
      syncListState(false);
    },
    expand() {
      syncListState(true);
    },
    button: toggleButton,
  });

  toggleButton.addEventListener("click", () => {
    const expanded = toggleButton.getAttribute("aria-expanded") === "true";
    syncListState(!expanded);
  });
});

const publicationFilters = document.querySelector("[data-publication-filters]");
const publicationList = document.querySelector(".publication-list");

if (publicationFilters && publicationList) {
  const publicationItems = Array.from(publicationList.querySelectorAll(".publication-item"));
  const filterButtons = Array.from(publicationFilters.querySelectorAll("[data-filter-value]"));
  const controller = collapsibleControllers.get(publicationList);
  let activeFilter = null;

  const applyPublicationFilter = () => {
    filterButtons.forEach((button) => {
      const isActive = button.getAttribute("data-filter-value") === activeFilter;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    if (!activeFilter) {
      publicationItems.forEach((item) => {
        item.classList.remove("is-filtered-out");
      });

      if (controller) {
        controller.collapse();
        controller.button.hidden = false;
      }
      return;
    }

    publicationItems.forEach((item) => {
      const matches = Boolean(item.querySelector(`.tag-theme.${activeFilter}`));
      item.classList.toggle("is-filtered-out", !matches);
      item.classList.remove("is-hidden");
    });

    if (controller) {
      controller.button.hidden = true;
    }
  };

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const nextFilter = button.getAttribute("data-filter-value");
      activeFilter = activeFilter === nextFilter ? null : nextFilter;
      applyPublicationFilter();
    });
  });

  applyPublicationFilter();
}

const teachingAccordions = document.querySelectorAll(".teaching-accordion");

teachingAccordions.forEach((accordion) => {
  const indicator = accordion.querySelector(".accordion-indicator");

  if (!indicator) {
    return;
  }

  const syncIndicator = () => {
    indicator.textContent = accordion.open
      ? (englishMode ? "Hide Courses" : "收起内容")
      : (englishMode ? "Show Courses" : "展开内容");
  };

  syncIndicator();
  accordion.addEventListener("toggle", syncIndicator);
});

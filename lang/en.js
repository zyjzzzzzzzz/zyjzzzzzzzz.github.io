const enNavbarData = {
  title: "周雅洁",
  Home: "首页",
  publications: "发表成果",
  Research: "研究",
  Jobs: "经历",
  Contact: "联系",
};

const enHomePageData = {
  name: "周雅洁",
  jobTitle: "外科学硕士",
  home_title: "关于我",
  home_content: `
  <div class="about-section">
    <p class="lead">我是南昌大学外科学在读硕士研究生，主要研究方向为临床研究与循证医学。目前关注外科疗效评估、围术期管理及基于数据的临床决策。</p>
    <p>我热衷于将临床问题转化为研究课题，通过严谨的科学方法提升患者诊疗质量。临床之外，我喜欢阅读外科文献、向经验丰富的老师学习，并不断精进自己的临床技能。</p>
  </div>

  <h2 class='title mt-4'>主要工作</h2>
  
  <div class="work-item">
    <h3>📊 基于R语言的临床数据分析</h3>
    <p>使用R语言清洗并分析超过1500例外科手术患者数据，包括术前指标、术中变量及术后结局。为临床研究团队建立可复用的数据处理流程，数据处理时间缩短约40%。</p>
  </div>

  <div class="work-item">
    <h3>👥 临床研究项目团队带领</h3>
    <p>带领5人学生研究团队开展围术期并发症研究，负责任务分配、进度跟进及论文初稿撰写。组织每周文献讨论会及数据复盘会，提升团队协作效率与研究质量。</p>
  </div>

  <div class="work-item">
    <h3>🌐 学术个人网站搭建</h3>
    <p>独立使用GitHub Pages搭建并维护本学术网站，用于记录研究进展、与团队成员共享临床学习资源。</p>
  </div>

  <div class="skills-box mt-3">
    <strong>核心能力：</strong>
    <span class="badge">R语言数据分析</span>
    <span class="badge">临床研究</span>
    <span class="badge">团队协作</span>
  </div>
  `,
};

const enPublicationsPageData = {
  type_one_title: "已发表论文",
  type_one_items: [
    {
      title: "（待填写论文标题）",
      abstract: "（待填写论文摘要）",
      date: "",
      link: "",
      github: "",
      writers: ["周雅洁"],
    },
  ],
  type_two_title: "在审论文",
  type_two_items: [],
  type_three_title: "书籍章节",
  type_three_items: [],
  type_four_title: "",
  type_four_items: [],
};

const enResearchPageData = {
  title: "研究方向",
  content: `
    <div class='research_content'>
      <p>我的研究聚焦于外科临床数据的挖掘与分析，结合循证医学方法，探索影响外科疗效的关键因素。目前主要研究方向包括：</p>
      <h2>围术期并发症风险预测</h2>
      <p>基于R语言构建围术期并发症预测模型，分析术前、术中及术后多维度数据，识别高风险患者，辅助临床决策。</p>
      <h2>外科疗效评估与数据分析</h2>
      <p>利用真实世界临床数据，评估不同手术方案的效果差异，为临床实践提供数据支持。</p>
      <h2>临床研究团队协作与管理</h2>
      <p>带领学生研究团队开展多中心临床数据收集与分析，提升团队研究效率与产出质量。</p>
    </div>
  `,
};

const enJobsPageData = {
  title: "临床与科研经历",
  items: [
    {
      title: "临床实习医师",
      company: "南昌大学第一附属医院",
      startData: "2023年",
      endDate: "2024年",
      location: "南昌",
      abstract: "参与普通外科日常临床工作，协助完成术前评估、术中辅助及术后管理。",
      achievements: ["参与手术辅助50+台", "独立完成病历书写100+份", "参与科室病例讨论会"],
    },
    {
      title: "研究助理",
      company: "南昌大学外科实验室",
      startData: "2024年",
      endDate: "至今",
      location: "南昌",
      abstract: "负责临床数据收集与清洗，使用R语言进行数据分析，协助指导本科生科研。",
      achievements: ["建立临床数据库1个", "完成数据分析报告3份", "带领5人学生团队"],
    },
  ],
};

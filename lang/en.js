const enNavbarData = {
  title: "Yajie Zhou",
  Home: "Home",
  publications: "Publications",
  Research: "Research",
  Jobs: "Experience",
  Contact: "Contact",
};

const enHomePageData = {
  name: "Yajie Zhou",
  jobTitle: "Master of Surgery",
  home_title: "About Me",
  home_content: `
  <div class="about-section">
    <p class="lead">I am a master's student in Surgery at Nanchang University, specializing in clinical research and evidence-based medicine.</p>
    <p>I am passionate about translating clinical questions into research projects and improving patient care through scientific inquiry.</p>
  </div>

  <h2 class='title mt-4'>Main Works</h2>
  
  <div class="work-item">
    <h3>📊 Clinical Data Analysis Using R</h3>
    <p>Analyzed 1,500+ surgical cases using R, covering preoperative indicators, intraoperative variables, and postoperative outcomes. Built reproducible data pipelines, reducing processing time by ~40%.</p>
  </div>

  <div class="work-item">
    <h3>👥 Team Leadership in Clinical Research</h3>
    <p>Led a 5-member student team in a perioperative complication study, coordinating task allocation, progress tracking, and manuscript drafting.</p>
  </div>

  <div class="skills-box mt-3">
    <strong>Core Skills:</strong>
    <span class="badge">R Data Analysis</span>
    <span class="badge">Clinical Research</span>
    <span class="badge">Team Leadership</span>
  </div>
  `,
};

const enPublicationsPageData = {
  type_one_title: "Publications",
  type_one_items: [
    {
      title: "(To be filled)",
      abstract: "(To be filled)",
      date: "",
      link: "",
      github: "",
      writers: ["Yajie Zhou"],
    },
  ],
  type_two_title: "Under Review",
  type_two_items: [],
  type_three_title: "Book Chapters",
  type_three_items: [],
  type_four_title: "",
  type_four_items: [],
};

const enResearchPageData = {
  title: "Research Interests",
  content: `
    <div class='research_content'>
      <p>My research focuses on surgical clinical data analysis and evidence-based medicine. Current directions include:</p>
      <h2>Perioperative Complication Risk Prediction</h2>
      <p>Building prediction models using R to identify high-risk patients and support clinical decision-making.</p>
      <h2>Surgical Outcome Evaluation</h2>
      <p>Evaluating different surgical approaches using real-world clinical data.</p>
      <h2>Clinical Research Team Leadership</h2>
      <p>Leading a student team in multi-center clinical data collection and analysis.</p>
    </div>
  `,
};

const enJobsPageData = {
  title: "Clinical & Research Experience",
  items: [
    {
      title: "Clinical Intern",
      company: "First Affiliated Hospital of Nanchang University",
      startData: "2023",
      endDate: "2024",
      location: "Nanchang",
      abstract: "Participated in general surgery clinical work, preoperative assessment, intraoperative assistance, and postoperative care.",
      achievements: ["Assisted in 50+ surgeries", "Completed 100+ medical records", "Participated in departmental case discussions"],
    },
    {
      title: "Research Assistant",
      company: "Nanchang University Surgical Laboratory",
      startData: "2024",
      endDate: "Present",
      location: "Nanchang",
      abstract: "Responsible for clinical data collection and cleaning, data analysis using R, assisting in undergraduate research guidance.",
      achievements: ["Built 1 clinical database", "Completed 3 data analysis reports", "Leading a 5-member student team"],
    },
  ],
};

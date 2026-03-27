export const SKILLS = [
  { cat: 'Frontend', items: ['React.js', 'HTML5', 'CSS3', 'JavaScript ES6+', 'Tailwind CSS'], color: '#60a5fa' },
  { cat: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'Oracle APEX'], color: '#4ade80' },
  { cat: 'Database', items: ['MongoDB', 'Oracle DB', 'SQL', 'Mongoose'], color: '#fbbf24' },
  { cat: 'ML & AI', items: ['Python', 'CNN', 'SVM', 'Streamlit', 'Isolation Forest'], color: '#a78bfa' },
  { cat: 'Tools', items: ['Git', 'GitHub', 'LaTeX', 'Unity', 'AR.js'], color: '#f87171' },
];

export const PROJECTS = [
  {
    n: '01', title: 'Sikshya-Sadan', role: 'Full Stack School System', year: '2026',
    desc: 'A complete MERN stack school management platform — student records, course management, user authentication, and real-time responsive dashboards. Built end-to-end.',
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js'], color: '#60a5fa',
    gh: 'https://github.com/nishanthapa906/Sikshya-Sadan-MERN',
  },
  {
    n: '02', title: 'Vehicle Renting System', role: 'Enterprise Platform + AI Chatbot', year: '2025',
    desc: 'Full-stack vehicle renting platform with real-time AI chatbot, built during internship at ArthaSoft Solutions. Owned full frontend UI and backend API workflows.',
    stack: ['Oracle APEX', 'Node.js', 'SQL', 'AI Chatbot'], color: '#4ade80',
    gh: 'https://github.com/nishanthapa906',
  },
  {
    n: '03', title: 'Voice Emotion Analyzer', role: 'Live CNN Model on HuggingFace', year: '2025',
    desc: 'Deep learning model that classifies human emotions from raw audio. Trained CNN on audio datasets, deployed live on Hugging Face Spaces with a Streamlit interface.',
    stack: ['Python', 'CNN', 'Streamlit', 'HuggingFace'], color: '#e8865a',
    gh: 'https://github.com/nishanthapa906/Voice-Emotion-Analyzer',
    live: 'https://92043jej-nissan-space.hf.space/',
  },
  {
    n: '04', title: 'Nepali Number Plate Recognition', role: 'Computer Vision — SVM', year: '2023',
    desc: 'SVM-based recognition system custom-trained on Nepali vehicle plate datasets. OpenCV preprocessing pipeline, achieving high real-world recognition accuracy.',
    stack: ['Python', 'SVM', 'OpenCV', 'Jupyter'], color: '#a78bfa',
    gh: 'https://github.com/nishanthapa906/Nepali-Number-plate-recognization',
  },
  {
    n: '05', title: 'AR E-Commerce Platform', role: 'Augmented Reality Shopping', year: '2023',
    desc: 'Marker-based AR experience where users scan physical cards to see 3D product models overlaid in their real environment before purchase.',
    stack: ['Unity', 'AR.js', 'JavaScript', '3D Modeling'], color: '#fbbf24',
    gh: 'https://github.com/nishanthapa906',
  },
  {
    n: '06', title: 'MomoHouse & ToDoApp', role: 'React & Vanilla JS Web Apps', year: '2026',
    desc: 'MomoHouse — a stylish restaurant web app in vanilla JS. ToDoApp — clean React task manager showcasing hooks, component architecture, and state management.',
    stack: ['React.js', 'JavaScript', 'CSS3', 'HTML5'], color: '#f87171',
    gh: 'https://github.com/nishanthapa906/ToDoApp-React',
  },
];

export const TICKER_ITEMS = [
  'React.js', 'Node.js', 'MongoDB', 'Express.js', 'Python', 'Machine Learning',
  'Git', 'Oracle APEX', 'Streamlit', 'JavaScript', 'CSS3', 'REST APIs',
  'OpenCV', 'CNN', 'SVM',
];

export const EXPERIENCE = {
  title: 'Full Stack Intern',
  company: 'ArthaSoft Solutions Pvt. Ltd.',
  location: 'Kathmandu, Nepal',
  year: '2025',
  bullets: [
    'Built a full-stack Vehicle Renting System from scratch using Oracle APEX (frontend) and Node.js (backend) — from design to production.',
    'Integrated a real-time AI chatbot feature, improving user engagement and automating support interactions.',
    'Sole owner of the complete frontend UI design and all backend RESTful API workflows across the project.',
    'Collaborated with senior engineers using Git branching, agile sprints, and formal code review processes.',
  ],
  tags: ['Oracle APEX', 'Node.js', 'SQL', 'Git', 'AI Integration'],
};

export const EDUCATION = {
  degree: 'Bachelor of Computer Application',
  school: 'Citizen College, Lalitpur · Pokhara University',
  years: '2021 – 2026',
};

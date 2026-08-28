export interface Experience {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  duration: string;
  description: string;
  points: string[];
  tech: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tech: string[];
  status: "completed" | "in-progress";
  github: string;
  demo?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Education {
  degree: string;
  school: string;
  year: string;
  detail: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface Achievement {
  icon: string;
  title: string;
  subtitle: string;
}

export const hero = {
  name: "Gaurav Nitesh Gandhi",
  subtitle: "Full Stack Developer | M.Tech CSE @ VIT",
  description:
    "Passionate about building robust, elegant systems — from backend services to immersive interfaces.",
};

export const stats: Stat[] = [
  { value: 3, suffix: "+", label: "Projects" },
  { value: 1, suffix: "", label: "Internship" },
  { value: 10, suffix: "+", label: "Technologies" },
];

export const education: Education[] = [
  {
    degree: "M.Tech, Computer Science",
    school: "VIT University",
    year: "Expected May 2028",
    detail: "CGPA 7.72",
  },
  {
    degree: "Pre-University (XII)",
    school: "Pupil Tree PU College",
    year: "May 2023",
    detail: "93.33%",
  },
];

export const experiences: Experience[] = [
  {
    company: "FinFactor",
    role: "Software Developer Intern",
    location: "Bengaluru, India (On-site)",
    start: "May 2025",
    end: "June 2025",
    duration: "May 2025 – June 2025",
    description:
      "Built backend components and maintained full-stack applications in a product-focused environment.",
    points: [
      "Developed backend components using Java and Spring Boot",
      "Built and maintained frontend features using TypeScript",
      "Collaborated with the development team to build full-stack applications",
      "Gained practical experience in software development and debugging",
    ],
    tech: ["Java", "Spring Boot", "TypeScript", "React"],
  },
];

export const projectCategories = ["All", "Full Stack", "IoT", "Distributed", "ML"];

export const projects: Project[] = [
  {
    id: "automate-hub",
    title: "Automate Hub",
    description:
      "Backend-driven order management system with secure database connectivity and CRUD operations.",
    category: "Full Stack",
    tech: ["Java", "JDBC", "MySQL"],
    status: "completed",
    github: "https://github.com/gaurav3611/automate-hub",
    demo: "https://automate-hub.demo.com",
  },
  {
    id: "ipfs-cancer-ehr",
    title: "IPFS Cancer EHR",
    description:
      "Decentralized health records built on the MERN stack, secured with IPFS for distributed storage.",
    category: "Full Stack",
    tech: ["MongoDB", "Express", "React", "Node.js", "IPFS"],
    status: "completed",
    github: "https://github.com/gaurav3611/ipfs-cancer-ehr",
    demo: "https://ipfs-ehr.demo.com",
  },
  {
    id: "iot-cricket-swing",
    title: "IoT Cricket Swing Analyzer",
    description:
      "Analyzes cricket swing using an ESP32 and IMU, streamed over BLE and visualized in real time with Three.js.",
    category: "IoT",
    tech: ["ESP32", "MPU6050", "BLE", "Three.js", "Firebase", "Flask"],
    status: "completed",
    github: "https://github.com/gaurav3611/iot-cricket-swing",
    demo: "https://swing-analyzer.demo.com",
  },
  {
    id: "distributed-ecommerce",
    title: "Distributed E-Commerce",
    description:
      "Scalable e-commerce platform leveraging distributed systems for high availability and fault tolerance.",
    category: "Distributed",
    tech: ["Spring Boot", "React", "Hadoop", "ZooKeeper"],
    status: "completed",
    github: "https://github.com/gaurav3611/distributed-ecommerce",
    demo: "https://ecommerce.demo.com",
  },
  {
    id: "ml-churn-prediction",
    title: "ML Churn Prediction",
    description:
      "Machine learning model that predicts customer churn with feature engineering and model evaluation.",
    category: "ML",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    status: "completed",
    github: "https://github.com/gaurav3611/ml-churn-prediction",
    demo: "https://churn-ml.demo.com",
  },
];

export const skillGroups: SkillGroup[] = [
  { category: "Languages", skills: ["Java", "TypeScript", "JavaScript", "Python", "SQL", "Kotlin"] },
  {
    category: "Web Development",
    skills: ["HTML", "CSS", "React", "Node.js", "Express", "Spring Boot", "Flask", "JDBC"],
  },
  { category: "Databases", skills: ["MySQL", "MongoDB", "Firebase"] },
  { category: "Distributed Systems", skills: ["Hadoop", "ZooKeeper", "Apache Ignite"] },
  { category: "IoT & Embedded", skills: ["ESP32", "MPU6050", "BLE", "Blynk"] },
  { category: "Machine Learning", skills: ["Scikit-learn", "TensorFlow", "Keras", "Pandas", "NumPy"] },
  { category: "Tools & Platforms", skills: ["Git", "GitHub", "Postman", "Vercel", "Docker", "AWS"] },
];

export const achievements: Achievement[] = [
  {
    icon: "🏗️",
    title: "Versatile Builder",
    subtitle: "Built multiple full-stack, distributed, and IoT projects end to end.",
  },
  {
    icon: "💻",
    title: "Industry Exposure",
    subtitle: "Completed a Full Stack Web Development internship at FinFactor.",
  },
  {
    icon: "📊",
    title: "Academic Standing",
    subtitle: "M.Tech CSE @ VIT with a CGPA of 7.72.",
  },
  {
    icon: "🎯",
    title: "Academic Excellence",
    subtitle: "Scored 93.33% at Pupil Tree PU College.",
  },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/gaurav3611", icon: "gh" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/gaurav-gandhi-700a8a29a/", icon: "li" },
  { label: "Email", href: "mailto:gandhigaurav1145@gmail.com", icon: "em" },
];

export const contact = {
  email: "gandhigaurav1145@gmail.com",
  emailHref: "mailto:gandhigaurav1145@gmail.com",
  phone: "+91 9346663611",
  phoneHref: "tel:+919346663611",
  location: "Vellore, India",
};

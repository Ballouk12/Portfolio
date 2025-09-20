import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin, Share2, GraduationCap, Briefcase, ExternalLink, Download, Award } from 'lucide-react';
import { Globe, Smartphone, Server, BarChart3, Brain, Layers } from "lucide-react";
import { Typewriter } from 'react-simple-typewriter';


const technologies = {
  languages: [
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
    { name: 'SQL', icon: '/images/sql.png' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' }
  ],
  frameworks: [
    { name: 'Spring Boot', icon: '/images/spring.png' },
    { name: 'Laravel', icon: '/images/laravel.png' },
    { name: 'Express.js', icon: '/images/express.png' },
    { name: 'React.js', icon: '/images/react.png' },
    { name: 'Next.js', icon: '/images/next.png' },
    { name: 'NumPy', icon: '/images/numpy.png' },
    { name: 'Pandas', icon: '/images/pandas.png' },
    { name: 'Scikit-learn', icon: '/images/scikt_learn.png' },
    { name: 'TensorFlow', icon: '/images/tensorflow.png' },
    { name: 'PyTorch', icon: '/images/pytorch.png' },
    { name: 'Hadoop', icon: '/images/hadoop.png' },
    { name: 'Sqoop', icon: '/images/sqoop.png' }
  ],
  databases: [
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Oracle', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
    { name: 'Cassandra', icon: '/images/cassandra.png' },
    { name: 'HBase', icon: 'https://hbase.apache.org/images/hbase_logo_with_orca_large.png' },
    { name: 'Neo4j', icon: 'https://neo4j.com/wp-content/themes/neo4jweb/assets/images/neo4j-logo-2015.png' }
  ],
  devops: [
    { name: 'Jenkins', icon: '/images/jenkins.png' },
    { name: 'Ansible', icon: '/images/ansible.png' },
    { name: 'Terraform', icon: '/images/terraform.png' },
    { name: 'Kubernetes', icon: '/images/kubernites.png' },
    { name: 'Docker', icon: '/images/docker.png' },
    { name: 'Grafana', icon: '/images/graphana.png' },
    { name: 'Sonarqube', icon: '/images/sonarcube.png' },
    { name: 'AWS', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' }
  ],
};

const projects = [
  {
    title: 'Application de Surveillance des Examens',
    description: 'Développement d\'une application de gestion des examens avec ReactJS et SpringCloud, implémentation de Kafka pour la communication asynchrone entre microservices.',
    techStack: ['ReactJS', 'Spring Cloud', 'Kafka', 'Java'],
    preview: '/images/gestion-ex.png',
    category: 'web',
    githubUrl: 'https://github.com/username/exam-surveillance',
    liveUrl: null
  },
  {
    title: 'ExcelliaBource - Gestion des Bourses d\'Excellence',
    description: 'Architecture microservices avec Spring Cloud, sécurisation via Spring Security et OAuth2, communication interservices avec Kafka, frontend Next.js.',
    techStack: ['Spring Cloud', 'Next.js', 'Kafka', 'MySQL', 'OAuth2'],
    preview: '/images/excellia.png ',
    category: 'web',
    githubUrl: 'https://github.com/username/excelliabource',
    liveUrl: '/videos/excellia.mp4'
  },
  {
    title: 'DevOps - Automatisation de Pipeline CI/CD pour ExcelliaBource',
    description: 'Automatisation des tests avec Selenium, mise en place de pipelines CI/CD sur AWS avec Jenkins, Ansible, Terraform et Docker, déploiement sur EC2 et EKS.',
    techStack: ['Jenkins', 'Ansible', 'Terraform', 'Docker', 'AWS', 'Selenium'],
    preview: '/images/ci-cd.png',
    category: 'devops',
    githubUrl: 'https://github.com/username/cicd-pipeline',
    liveUrl: '/videos/devops.mp4'
  },
  {
    title: 'Analyse des Salaires Data 2024',
    description: 'Projet BI utilisant Oracle Database et CloverDX pour l\'intégration de données et les processus ETL, création de rapports et dashboards interactifs.',
    techStack: ['Oracle', 'CloverDX', 'Jasper Studio', 'Pentaho', 'ETL'],
    preview: '/images/clover.png',
    category: 'bi',
    githubUrl: 'https://github.com/username/salary-analysis',
    liveUrl: '/videos/RAPPORT-PROJET-BI.pdf'
  },
  {
    title: 'Machine Learning - Détection de Fraudes Bancaires',
    description: 'Développement d\'un modèle de régression logistique en Python pour classifier les transactions bancaires, utilisation de Google Colab pour l\'entraînement.',
    techStack: ['Python', 'Scikit-learn', 'Pandas', 'Google Colab', 'Régression Logistique'],
    preview: '/images/card-det.png',
    category: 'ml',
    githubUrl: 'https://github.com/username/fraud-detection',
    liveUrl: null
  },
{
  title: 'Fake News Classification App',
  description: 'Application Streamlit intégrant un modèle de réseau de neurones (Embedding + LSTM + Dense Sigmoid) pour classifier les articles en Real News ou Fake News, avec prétraitement des textes et intégration du modèle entraîné.',
  techStack: ['Python', 'Streamlit', 'TensorFlow/Keras', 'NLP', 'LSTM'],
  preview: '/images/streamlit.png',
  category: 'ml',
  githubUrl: 'https://github.com/username/fake-news-classification',
  liveUrl: '/videos/FAKE_Last.mp4'
}
,
  {
    title: 'AssabVision - ERP/CRM Web',
    description: 'Développement d\'une application web ERP/CRM intégrant une architecture microservices avec Next.js, Express.js et Kafka pour une communication asynchrone et scalable.',
    techStack: ['Next.js', 'Express.js', 'Kafka', 'UML', 'Microservices'],
    category: 'web',
    preview: '/images/assablogo.png',
    githubUrl: 'https://github.com/username/assabvision',
    liveUrl: null
  },
  {
  title: 'Application de Gestion des Annonces',
  description: 'Application fullstack sécurisée (Spring Boot + React) avec sauvegarde des images, protection via Spring Security, et déploiement automatisé avec Docker, Jenkins sur GCP (GCE).',
  techStack: ['Spring Boot', 'React', 'Spring Security', 'PostgreSQL', 'Docker', 'Jenkins', 'Ansible', 'AWS EKS'],
  preview: '/images/landing.png',
  category: 'devops',
  githubUrl: 'https://github.com/username/annonces-app',
  liveUrl: '/videos/stage.mp4'
}

];

const categories = [
  { id: 'all', name: 'Tous', icon: Layers },        // Icône générique
  { id: 'web', name: 'Web', icon: Globe },          // Icône globe
  { id: 'mobile', name: 'Mobile', icon: Smartphone }, // Icône mobile
  { id: 'devops', name: 'DevOps', icon: Server },   // Icône serveur
  { id: 'bi', name: 'BI', icon: BarChart3 },        // Icône graphique
  { id: 'ml', name: 'ML', icon: Brain },            // Icône cerveau (IA/ML)
];

const certifications = [
  {
    name: 'AWS Academy Graduate - Cloud Architecting',
    issuer: 'Amazon Web Services',
    date: '2024',
    credentialId: 'AWS-ARCH-123456',
    description: 'Certification en architecture cloud AWS',
    skills: ['AWS', 'Cloud Architecture', 'DevOps', 'Security'],
    badge: '/images/cloud-arc.png',
    url: 'https://www.credly.com/badges/9505dbb1-d5e9-47fe-8409-52471612e654/public_url'
  },
  {
    name: 'AWS Academy Graduate - Cloud Developing',
    issuer: 'Amazon Web Services',
    date: '2024',
    credentialId: 'AWS-DEV-789012',
    description: 'Certification en développement cloud AWS',
    skills: ['AWS', 'Cloud Development', 'API Development', 'Serverless'],
    badge: '/images/cloud-dev.png',
    url: 'https://www.credly.com/badges/2d421073-00a9-42c1-a6d3-13d9e3329a98/public_url'
  },
  {
    name: 'AWS Academy Graduate - Cloud Foundations',
    issuer: 'Amazon Web Services',
    date: '2024',
    credentialId: 'AWS-FOUND-345678',
    description: 'Certification en bases du cloud AWS',
    skills: ['AWS', 'Cloud Fundamentals', 'EC2', 'S3'],
    badge: '/images/cloud-foun.png',
    url: 'https://www.credly.com/badges/2d421073-00a9-42c1-a6d3-13d9e3329a98/public_url'
  },
  {
    name: 'Hands-On Essentials: Data Warehouse',
    issuer: 'Snowflake',
    date: '2024',
    credentialId: 'SNOW-DW-901234',
    description: 'Certification en entrepôt de données',
    skills: ['Data Warehouse', 'ETL', 'SQL', 'Data Analytics'],
    badge: '/images/hand-data.png',
    url: 'https://achieve.snowflake.com/a22fda26-711b-41c9-8b2a-9007a2ccb140#acc.bhIqwxrs'
  }
];

const education = [
  {
    degree: 'Ingénierie informatique et technologies émergentes',
    institution: 'École Nationale des Sciences Appliquées El Jadida',
    period: 'Sept 2021 - May 2026',
    description: 'Formation en ingénierie informatique axée sur le Big Data, l’intelligence artificielle, le développement logiciel et l’innovation.'
  },
  {
    degree: 'Sciences Mathématiques - Option A',
    institution: 'Lycée El Mansour Dahabi, Akka, Tata',
    period: 'Sept 2020 - May 2021',
    description: 'Formation en sciences mathématiques  option A .',  }
];

const experience = [
  {
    position: 'Développeur Web - Stage',
    company: 'AssabVision',
    period: 'Juin 2025 - Juillet 2025',
    description: 'Développement d\'une application web ERP/CRM intégrant une architecture microservices avec Next.js, Express.js et Kafka pour une communication asynchrone et scalable.',
    technologies: ['Next.js', 'Express.js', 'Kafka',  'StarUML'],
    achievements: [
      'Conception et modélisation du système avec UML via StarUML',
      'Architecture microservices avec communication asynchrone',
      'Développement frontend et backend intégré'
    ]
  } ,
  {
    position: 'Développeur Web full-stack & DevOps- Stage',
    company: 'Global Etik',
    period: 'Juin 2025 - Aout 2025',
    description: "Conception, développement et déploiement d’une application web de gestion de ventes des véhicules d'occasion, intégrant une architecture modulaire avec pipeline CI/CD sur GCP.",
    technologies: ['React.js', 'Spring Boot', 'Twilio SMS', 'PostgreSQL', 'Spring Security','Jenkins','Ansible','Docker','Docker Compose','GCP'],
    "achievements": [
    "Rédaction des spécifications fonctionnelles et techniques",
    "Conception de l’application (UML, architecture Repository-Service-Controller)",
    "Développement du backend avec Spring Boot et du frontend avec React.js",
    "Mise en place de la sécurisation de l’application avec Spring Security et chiffrement des informations sensibles",
    "Stockage des données dans PostgreSQL et gestion des images en dossier local",
    "Conteneurisation de l’application avec Docker et orchestration via Docker Compose",
    "Automatisation du déploiement avec Jenkins et Ansible sur Google Cloud (GCE)",
  ]
  }
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } }
};
const cardHover = {
  hover: { scale: 1.05, boxShadow: '0 8px 32px 0 rgba(16,185,129,0.15)' }
};
const buttonTap = {
  tap: { scale: 0.95 }
};
// Typewriter effect component
function TypewriterName() {
  return (
    <h1 className="text-4xl font-bold">
      Hello! I'm <span className="text-emerald-400">
        <Typewriter
          words={['Mohamed Ballouk']}
          loop={false}
          typeSpeed={60}
          cursor
          cursorStyle="|"
        />
      </span>
    </h1>
  );
}
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv/cv_mohamed_ballouk.pdf';
    link.download = 'cv_mohamed_ballouk.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const mailtoLink = `mailto:mohamedballouk165@gmail.com?subject=Message de ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AEmail: ${formData.email}`;
      window.open(mailtoLink);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToContact = () => {
    setActiveSection('contact');
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-sm z-50 p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-emerald-400">Mohamed Ballouk</div>
          <div className="flex gap-6">
            {['about', 'experience', 'education', 'certifications', 'projects', 'contact'].map((item) => (
              <motion.button
                key={item}
                onClick={() => {
                  setActiveSection(item);
                  const section = document.getElementById(`${item}-section`);
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`hover:text-emerald-400 transition-colors ${activeSection === item ? 'text-emerald-400' : ''}`}
                whileTap="tap"
                variants={buttonTap}
                initial={false}
                animate={false}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        id="about-section"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className={`pt-32 pb-20 px-4`}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold">
              <TypewriterName speed={60} />
            </h1>
            <p className="text-gray-300 text-lg">
              Étudiant en ingénierie des données et apprentissage automatique, passionné par le développement logiciel, le traitement en temps réel, la modélisation et les solutions innovantes en gestion des données.
            </p>
            <div className="flex gap-4">
              <motion.button 
                onClick={handleDownloadCV}
                className="bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
                whileTap="tap"
                variants={buttonTap}
              >
                <Download className="w-5 h-5" />
                Download CV
              </motion.button>
              <motion.button 
                onClick={scrollToContact}
                className="border border-emerald-500 hover:bg-emerald-500/10 px-6 py-3 rounded-lg transition-colors"
                whileTap="tap"
                variants={buttonTap}
              >
                Contact Me
              </motion.button>
            </div>
          </div>
          <div className="relative">
            <img
              src="./images/me.jpg"
              alt="Mohamed Ballouk"
              className="rounded-full w-64 h-64 mx-auto border-4 border-emerald-400"
            />
          </div>
        </div>
      </motion.section>

      {/* Technologies */}
      <motion.section
        id="technologies-section"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 bg-gray-800/50"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Technologies I Work With</h2>
          
          {/* Langages de Programmation */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-emerald-400 mb-6 text-center">Langages de Programmation</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {technologies.languages.map((tech) => (
                <motion.div 
                  key={tech.name} 
                  className="flex flex-col items-center p-4 bg-gray-700/50 rounded-lg hover:scale-105 transition-transform"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={tech.icon} alt={tech.name} className="w-12 h-12 mb-3" />
                  <span className="text-sm text-center">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Frameworks et Bibliothèques */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-emerald-400 mb-6 text-center">Frameworks et Bibliothèques</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {technologies.frameworks.map((tech) => (
                <motion.div 
                  key={tech.name} 
                  className="flex flex-col items-center p-4 bg-gray-700/50 rounded-lg hover:scale-105 transition-transform"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={tech.icon} alt={tech.name} className="w-12 h-12 mb-3" />
                  <span className="text-sm text-center">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bases de Données */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-emerald-400 mb-6 text-center">Bases de Données</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
              {technologies.databases.map((tech) => (
                <motion.div 
                  key={tech.name} 
                  className="flex flex-col items-center p-4 bg-gray-700/50 rounded-lg hover:scale-105 transition-transform"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={tech.icon} alt={tech.name} className="w-12 h-12 mb-3" />
                  <span className="text-sm text-center">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* DevOps et Cloud */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-emerald-400 mb-6 text-center">DevOps et Cloud</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {technologies.devops.map((tech) => (
                <motion.div 
                  key={tech.name} 
                  className="flex flex-col items-center p-4 bg-gray-700/50 rounded-lg hover:scale-105 transition-transform"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={tech.icon} alt={tech.name} className="w-12 h-12 mb-3" />
                  <span className="text-sm text-center">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        id="experience-section"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
            <Briefcase className="w-8 h-8 text-emerald-400" />
            Expérience Professionnelle
          </h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800/70 transition-colors"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-emerald-400">{exp.position}</h3>
                    <p className="text-lg text-gray-300">{exp.company}</p>
                  </div>
                  <span className="text-emerald-400 font-semibold mt-2 md:mt-0">{exp.period}</span>
                </div>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-2">Technologies utilisées:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Réalisations principales:</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        id="education-section"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 bg-gray-800/50"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
            <GraduationCap className="w-8 h-8 text-emerald-400" />
            Formation et Éducation
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-700/50 rounded-lg p-6 hover:bg-gray-700/70 transition-colors"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-emerald-400">{edu.degree}</h3>
                    <p className="text-lg text-gray-300">{edu.institution}</p>
                  </div>
                  <span className="text-emerald-400 font-semibold mt-2 md:mt-0">{edu.period}</span>
                </div>
                <p className="text-gray-300 mb-4">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Certifications Section */}
      <motion.section
        id="certifications-section"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
            <Award className="w-8 h-8 text-emerald-400" />
            Certifications et Accréditations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 rounded-lg p-6 transition-all duration-300"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.2 }}
                whileTap="tap"
                {...cardHover}
              >
                <div className="flex items-start gap-4 mb-4">
                  <img 
                    src={cert.badge} 
                    alt={cert.name}
                    className="w-16 h-16 rounded-lg object-cover"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iOCIgZmlsbD0iIzEwYjk4MSIvPgo8dGV4dCB4PSIzMiIgeT0iMzUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkNBPC90ZXh0Pgo8L3N2Zz4K';
                    }}
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-emerald-400 mb-1">{cert.name}</h3>
                    <p className="text-gray-300 text-sm mb-2">{cert.issuer}</p>
                    <p className="text-emerald-400 text-xs font-semibold">{cert.date}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{cert.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-white text-sm mb-2">Compétences validées:</h4>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-xs">ID: {cert.credentialId}</span>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 text-sm font-semibold transition-colors"
                  >
                    Vérifier →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section
        id="projects-section"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 bg-gray-800/50"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Mes Projets</h2>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-emerald-500 text-white shadow-lg'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                }`}
                whileTap="tap"
                variants={buttonTap}
              >
                <category.icon size={20} />
                <span>{category.name}</span>
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 shadow-lg"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.2 }}
                whileTap="tap"
                {...cardHover}
              >
                <div className="relative">
                  <img 
                    src={project.preview} 
                    alt={project.title} 
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      e.target.src = '/images/projects/placeholder.jpg';
                    }}
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.category === 'web' ? 'bg-blue-500/80' :
                      project.category === 'mobile' ? 'bg-green-500/80' :
                      project.category === 'devops' ? 'bg-purple-500/80' :
                      project.category === 'bi' ? 'bg-orange-500/80' :
                      'bg-red-500/80'
                    }`}>
                      {project.category.toUpperCase()}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors text-sm"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 rounded-lg transition-colors text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Projects Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">Aucun projet trouvé dans cette catégorie.</p>
            </div>
          )}
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section
        id="contact-section"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="text-emerald-400 w-6 h-6" />
                <span>mohamedballouk165@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-emerald-400 w-6 h-6" />
                <span>+212 615244229</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-emerald-400 w-6 h-6" />
                <span>El Jadida, Maroc</span>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Ballouk12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 hover:text-emerald-400 cursor-pointer transition-colors"
                >
                  <Github className="w-full h-full" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mohamed-ballouk-84a35928a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 hover:text-emerald-400 cursor-pointer transition-colors"
                >
                  <Linkedin className="w-full h-full" />
                </a>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Nom"
                required
                className="w-full p-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-400 outline-none"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                required
                className="w-full p-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-400 outline-none"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message"
                rows={4}
                required
                className="w-full p-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-400 outline-none"
              />
              <motion.button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-lg transition-colors ${
                  isSubmitting 
                    ? 'bg-gray-600 cursor-not-allowed' 
                    : 'bg-emerald-500 hover:bg-emerald-600'
                }`}
                whileTap="tap"
                variants={buttonTap}
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le Message'}
              </motion.button>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="text-green-400 text-center py-2">
                  Message envoyé avec succès ! Vérifiez votre email.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="text-red-400 text-center py-2">
                  Erreur lors de l'envoi. Veuillez réessayer.
                </div>
              )}
            </form>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
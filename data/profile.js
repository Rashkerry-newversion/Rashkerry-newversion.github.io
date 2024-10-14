const profileData = {
  title: "Resume",
  name: "Rashida Mohammed",
  sub_title: "Linux Systems Administrator",
  logoURL: "assets/images/dp.jpg",
  about: {
    intro: `I am a dedicated and solutions-driven Linux Systems Administrator with over 3 years of expertise in managing IT infrastructure, specializing in server administration, network optimization, and performance monitoring. With a strong focus on automation, security, and efficient system deployment, I am committed to delivering reliable and scalable solutions. I excel in fast-paced environments, continuously enhancing my technical skills while contributing to the overall success of teams by ensuring seamless operations and aligning IT initiatives with business objectives.`,
    contact: {
      email: "rashidamohammed666@gmail.com",
      phone: "+233 545521613",
      
    },
  },
  links: [
    {
      title: "LinkedIn",
      src: "www.linkedin.com/in/rashida-mohammed-454336187",
      iconClass: "fa-brands fa-linkedin-in",
    },
    {
      title: "Github",
      src: "https://github.com/Rashkerry-newversion",
      iconClass: "fa-brands fa-github",
    },
  ],
skills: [
    {
      title: "Operating System",
      value: "Linux, Windows, iOS",
    },
    {
      title: "Languages",
      value: "Bash, JavaScript, & Python Scripting",
    },
    {
      title: "Version Control",
      value: "Git, GitHub",
    },
    {
      title: "CI-CD",
      value: "Jenkins, GitHub Actions",
    },
    {
      title: "Container & Orchestration",
      value: "Docker, Kubernetes",
    },
    {
      title: "Monitoring & Observability",
      value: "Prometheus, Grafana, Nagios and, Zabbix",
    },
    {
      title: "Cloud Computing",
      value: "AWS",
    },
    {
      title: "Infrastructure-as-Code & Configuration Mgt.",
      value: "Terraform, Ansible",
    },
  ],
  experiences: [ 
    {
      organization: "Jomacs",
      title: `<strong>Linux Systems Administrator</strong> `,
      date: "April 2021 to Current",
      details: [
        `Installed, configured, and <strong>maintained Linux servers</strong> for high availability and reliability.`,
        `Administered user accounts, groups, and file system permissions.`,
        `Monitored system performance with <strong>Nagios, Zabbix, CheckMK, and Grafana,</strong> optimizing for high availability, security, and performance.`,
        `Implemented security measures, managed <strong>firewalls,</strong> and <strong>applied updates/patches</strong> to safeguard servers.`,
        `Developed and <strong>managed backups and disaster recovery plans</strong> using <strong>cron jobs.</strong>`,
        `Wrote and maintained <strong>shell script</strong> for <strong>task automation.</strong>`,
        `Configured network interfaces, <strong>DNS, DHCP, and VPN services.</strong>`,
        `Diagnosed and resolved connectivity issues; provided user support.`,
        `Managed <strong>system logs,</strong> analyzed issues, and performed <strong>root cause analysis.</strong>`,
        `Administered <strong>VMware virtual environments</strong> and managed <strong>AWS and Azure cloud infrastructure.</strong>`,
      ],
    }
  ],
  projects: [
    {
      title: "Web Hosting and Load Balancing:",
      duration: "2024",
      link: "",
      desc: `Built and configured personal Linus servers to host a simple website using Nginx and Apache ensuring and achieving 99.9% uptime and 25% faster page loads.`,
    },
    {
      title: "Linux Server Administration:",
      duration: "2024",
      link: "",
      desc: `Setup and configured Linux servers (instances) on AWS to host and test personal projects, and undertake several administration tasks using the CLI and basic bash scripts`,
    },
    {
      title: "Set up Monitoring systems/Servers:",
      duration: "2023",
      link: "",
      desc: `Configured and set up monitoring tools such as Nagios, Zabbix, and CheckMK on a Linux server to monitor my servers and services (Grafana and Prometheus are next)`,
    },
    {
      title: "Automated CI/CD Pipeline with Real-Time Slack Notifications:",
      duration: "2022",
      link: "",
      desc: `Configured an automated CI/CD pipeline using Jenkins for continuous integration, utilizing Maven (mvn goals) for build automation. Integrated SonarQube for code quality scanning and Nexus for artifact storage, followed by deployment to Apache Tomcat. Implemented webhooks to automatically trigger the pipeline upon source code updates in GitHub, and integrated Slack to send real-time notifications, ensuring immediate updates on the pipeline execution status.`,
    },
   
  ],
  education: [
    {
      alma: "NURSING AND MIDWIFERY TRAINING COLLEGE",
      duration: "AUG 2012 to NOV 2014",
      std: "Registered Nurse Assistat",
      score: "75.25%",
    },
    
  ],
  certifications: [
    {
      desc: `<strong>AWS Knowledge: Cloud Essentials</strong>.`,
      date: "July 2024",
    },

    {
      desc: `<strong>AWS Cloud Practitioner</strong>.`,
      date: "August 2024",
    },
    
    {
      desc: `<strong>NGD Linux unhatched</strong>.`,
      date: "August 2024",
    },

    {
      desc: `<strong>Cisco Networking Basics</strong>.`,
      date: "September 2024",
    },
  ],
  events: [],
};
export const profile = {
  name: 'Isha Vade',
  initials: 'IV',
  role: ' Data Analyst',
  location: 'Mumbai',
  email: 'ishavade0124@gmail.com',
}

export const heroStats = [
  { value: 6, label: "Portfolio Projects" },
  { value: 12, label: "Dashboards & Reports" },
  { value: 5, label: "SQL • Python • Power BI • Tableau • Excel" },
];

export const logos = ['The Cycle City']

export const heroChartData = [
  { week: 'W1', cohortA: 40, cohortB: 38 },
  { week: 'W2', cohortA: 44, cohortB: 39 },
  { week: 'W3', cohortA: 47, cohortB: 41 },
  { week: 'W4', cohortA: 52, cohortB: 40 },
  { week: 'W5', cohortA: 58, cohortB: 43 },
  { week: 'W6', cohortA: 61, cohortB: 45 },
  { week: 'W7', cohortA: 68, cohortB: 46 },
  { week: 'W8', cohortA: 74, cohortB: 49 },
]

export const dataSkills = [
  { name: 'SQL', level: 96 },
  { name: 'Excel', level: 90 },
  { name: 'Python (pandas, numpy)', level: 92 },
  { name: 'Statistical modeling', level: 88 },
  { name: 'A/B testing & causal inference', level: 90 },
]

export const vizSkills = [
  { name: 'Power BI', level: 72 },
  { name: 'Figma (dashboard prototyping)', level: 70 },
]

export const roleFitData = [
  { skill: 'Analysis', value: 95 },
  { skill: 'Communication', value: 88 },
  { skill: 'Modeling', value: 90 },
  { skill: 'Product sense', value: 84 },
  { skill: 'Engineering', value: 72 },
  { skill: 'Leadership', value: 78 },
]

export const projects = [
  {
    tag: 'Exploratory Analysis',
    title: 'Revenue Analysis of US Largest Companies',
    description:
      'Collected, cleaned, and analyzed revenue data of the top U.S. companies using Python and Pandas. Identified industry trends, revenue distribution, and business insights through exploratory analysis and visualizations.',
    metrics: [
      { value: '100', label: 'Companies' },
      { value: '15+', label: 'Visualizations' },
      { value: 'Skills', label: 'Python • Pandas' },
    ],
    link: "https://github.com/ishavade1/Largest-US-Companies-Revenue-Analysis",
    chartType: 'bar',
    chartData: [
      { label: 'Q1', value: 82 },
      { label: 'Q2', value: 74 },
      { label: 'Q3', value: 61 },
      { label: 'Q4', value: 54 },
    ],
  },
  {
    tag: 'Analysis & Retention Strategy',
    title: 'Telecom Customer Churn Analysis',
    description:'The primary objective of this project is to uncover patterns related to customer churn and provide actionable insights that help businesses improve customer retention, reduce revenue loss, and enhance overall customer experience.',
    metrics: [
      { value: '7k', label: 'Records' },
      { value: '30+', label: 'Features' },
      { value: '26%', label: 'Churn rate' },

    ],
    link: "https://github.com/ishavade1/Telecom-Customer-Churn-Analysis-and-Retention-strategy",
    chartType: 'line',
    chartData: [
      { label: 'V1', value: 30 },
      { label: 'V2', value: 34 },
      { label: 'V3', value: 33 },
      { label: 'V4', value: 38 },
      { label: 'V5', value: 41 },
      { label: 'V6', value: 44 },
    ],
  },
  {
    tag: 'Job Market Analysis',
    title: 'Job Market Intelligence Analysis ',
    description:
      'An end-to-end data analytics project that collects live job postings from the Adzuna API, cleans and transforms the data, extracts technical skills, performs exploratory data analysis, and visualizes hiring trends, salary insights, top companies, locations, and in-demand technologies through an interactive Power BI dashboard.',
    metrics: [
  { value: '4,580+', label: 'Job Postings' },
  { value: '80+', label: 'Skills Analyzed' },
  { value: 'Python • Power BI', label: 'Tech Stack' },
],
    link: "https://github.com/ishavade1/Job-Market-Intelligence-Analysis",
    chartType: 'bar',
    chartData: [
      { label: 'Q1', value: 82 },
      { label: 'Q2', value: 74 },
      { label: 'Q3', value: 61 },
      { label: 'Q4', value: 54 },
    ],
  },
  {
    tag: 'Retail Analytics',
    title: 'Customer Shopping Behavior Analysis',
    description:'An end-to-end data analytics project that analyzes customer demographics, purchasing patterns, product performance, and sales trends using Python, SQL, and Power BI. The project transforms raw transactional data into actionable business insights through data cleaning, exploratory analysis, SQL queries, and interactive dashboards.',
    metrics: [
      { value: '3.9k', label: 'Customers' },
      { value: 'Customer behavior, sales & segmentation', label: 'Skills' },

    ],
    link: "https://github.com/ishavade1/Customer_Shopping_Behavior_Analysis",
    chartType: 'donut',
    chartData: [
      { label: 'Retained', value: 70 },
      { label: 'At risk', value: 18 },
      { label: 'Churned', value: 12 },
    ],
  },
  {
    tag: 'Data Cleaning',
    title: 'SQL Data Cleaning & Analysis',
    description:'Cleaned the dataset by removing duplicate records using ROW_NUMBER(), trimming extra spaces with TRIM(), standardizing company names and industry values, handling missing values, and validating the data to ensure consistency and accuracy before analysis.',
    metrics: [
      { value: '2000+', label: 'Dataset' },
      { value: 'SQL', label: 'Skills' },
    ],
    link: "https://github.com/ishavade1/Data-Cleaning",
    chartType: 'donut',
    chartData: [
      { label: 'Retained', value: 70 },
      { label: 'At risk', value: 18 },
      { label: 'Churned', value: 12 },
    ],
  },
  {
    tag: 'Excel Dashboard',
    title: 'Call Center Performance Dashboard',
    description:'Developed an interactive Excel dashboard to analyze call center performance, agent productivity, customer satisfaction, and call trends. The project uses Pivot Tables, charts, slicers, and KPIs to monitor key metrics, identify top-performing agents, and provide actionable insights for improving operational efficiency and customer service.',
    metrics: [
      { value: '3.9', label: 'Avg. Rating' },
      { value: 'Business Reporting', label: 'Skills' },
    ],
    link: "https://github.com/ishavade1/Call_Center_Dashboard",
    chartType: 'donut',
    chartData: [
      { label: 'Retained', value: 50 },
      { label: 'At risk', value: 13 },
      { label: 'Churned', value: 10 },
    ],
  },
  {
    tag: 'Workforce insights',
    title: 'HR Analytics Dashboard',
    description:'The dashboard enables organizations to monitor workforce performance, understand employee attrition patterns, and make informed HR decisions through interactive analytics.',
    metrics: [
      { value: '1.4k', label: 'Employee Count' },
      { value: '16.12%', label: 'Attrition Rate' },
      { value: 'Tableau', label: 'Skills' },

    ],
    link: "https://github.com/ishavade1/HR_Analytics_Dashboard",
    chartType: 'line',
    chartData: [
      { label: 'V1', value: 30 },
      { label: 'V2', value: 34 },
      { label: 'V3', value: 33 },
      { label: 'V4', value: 38 },
      { label: 'V5', value: 41 },
      { label: 'V6', value: 44 },
    ],
  },
]

export const experience = [
  {
    role: 'Freelance Data Analyst',
    company: 'The Cycle City',
    date: 'Nov 2025 — May 2026',
    description:
      'Lead analyst for the growth pod. Own experimentation strategy, and the self-serve metrics layer used by stakeholder.',
  },
]

export const themes = [
  {
    value: 'terracotta',
    name: 'Terracotta & Ivory',
    description: 'Warm, elegant, memorable',
    recommended: true,
  },
  {
    value: 'midnight',
    name: 'Midnight Violet',
    description: 'Focused, after-hours, precise',
  },
  {
    value: 'slate',
    name: 'Slate & Sand',
    description: 'Cool, analytical, understated',
  },
]

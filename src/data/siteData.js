export const navigationLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' }
]

export const heroHighlights = [
  'Dashboard-driven storytelling',
  'Clean, decision-ready reporting',
  'Insight-focused data workflows'
]

export const heroMetrics = [
  { label: 'Featured Dashboards', value: '03+' },
  { label: 'Core Analytics Skills', value: '10' },
  { label: 'Career Focus', value: 'Data Analytics' }
]

export const aboutPoints = [
  'I enjoy transforming raw information into clean, meaningful dashboards that help people make confident business decisions.',
  'My academic background in Bachelor of Computer Applications gives me a strong foundation in technology, systems thinking, and structured problem solving.',
  'I am focused on building practical analytics projects that showcase reporting, trend analysis, and business insight generation.'
]

export const impactStats = [
  { value: 'BCA', label: 'Academic Foundation' },
  { value: '10+', label: 'Analytics Skills' },
  { value: '100%', label: 'Responsive Experience' }
]

export const skills = [
  {
    name: 'Excel',
    level: 94,
    icon: 'excel',
    description: 'Advanced spreadsheet analysis, lookup logic, pivots, and business-ready reporting.'
  },
  {
    name: 'SQL',
    level: 89,
    icon: 'sql',
    description: 'Querying structured datasets, joining tables, filtering insights, and trend extraction.'
  },
  {
    name: 'Power BI',
    level: 90,
    icon: 'powerbi',
    description: 'Interactive dashboard design, KPI tracking, and storytelling with connected visuals.'
  },
  // {
  //   name: 'Python',
  //   level: ,
  //   icon: 'python',
  //   description: 'Using Python for analytics workflows, data preparation, and exploratory analysis.'
  // },
  {
    name: 'Data Visualization',
    level: 93,
    icon: 'visualization',
    description: 'Turning complex datasets into clear charts, layouts, and performance views.'
  },
  {
    name: 'Data Cleaning',
    level: 88,
    icon: 'cleaning',
    description: 'Preparing reliable, analysis-ready datasets through validation and transformation.'
  },
  {
    name: 'Dashboard Development',
    level: 90,
    icon: 'dashboard',
    description: 'Designing polished dashboard experiences focused on readability and action.'
  },
  {
    name: 'Data Analysis',
    level: 92,
    icon: 'analysis',
    description: 'Finding patterns, outliers, and opportunities that support better decisions.'
  },
  {
    name: 'Statistics',
    level: 81,
    icon: 'statistics',
    description: 'Applying descriptive statistics and trend logic to evaluate performance clearly.'
  },
  {
    name: 'Problem Solving',
    level: 95,
    icon: 'solving',
    description: 'Breaking ambiguous questions into structured, measurable, insight-driven steps.'
  }
]

export const projects = [
  {
    id: 'sales-dashboard',
    title: 'Sales Dashboard',
    description: 'A performance dashboard focused on monthly sales, revenue growth, product contribution, and profit visibility.',
    tools: ['Power BI', 'Excel', 'SQL', 'Recharts'],
    focus: ['Monthly Sales', 'Revenue Trends', 'Top Products', 'Profit Analysis'],
    accent: 'from-cyan-400/35 via-sky-500/15 to-violet-500/10',
    kpis: [
      { label: 'Monthly Sales', value: '$128K', delta: '+14.6%' },
      { label: 'Gross Revenue', value: '$1.42M', delta: '+8.9%' },
      { label: 'Profit Margin', value: '22.4%', delta: '+2.1 pts' },
      { label: 'Top Product Share', value: '31%', delta: 'Smart Devices' }
    ],
    lineChart: {
      title: 'Monthly Sales Trend',
      description: 'Actual sales compared with target performance over the last six months.',
      primaryLabel: 'Sales',
      secondaryLabel: 'Target',
      data: [
        { label: 'Jan', primary: 72, secondary: 68 },
        { label: 'Feb', primary: 81, secondary: 70 },
        { label: 'Mar', primary: 78, secondary: 74 },
        { label: 'Apr', primary: 92, secondary: 81 },
        { label: 'May', primary: 108, secondary: 92 },
        { label: 'Jun', primary: 128, secondary: 108 }
      ]
    },
    barChart: {
      title: 'Top Products vs Profit',
      description: 'Revenue and profit contribution by key product category.',
      primaryLabel: 'Revenue',
      secondaryLabel: 'Profit',
      data: [
        { label: 'Smart Devices', primary: 94, secondary: 28 },
        { label: 'Accessories', primary: 62, secondary: 18 },
        { label: 'Wearables', primary: 74, secondary: 23 },
        { label: 'Audio', primary: 58, secondary: 16 }
      ]
    },
    pieChart: {
      title: 'Revenue Mix',
      description: 'Share of revenue by sales channel.',
      data: [
        { name: 'Online', value: 42 },
        { name: 'Retail', value: 28 },
        { name: 'Marketplace', value: 18 },
        { name: 'Wholesale', value: 12 }
      ]
    },
    insights: [
      'Sales momentum accelerated in Q2, with May and June outperforming target by the widest margin.',
      'Smart Devices lead both revenue and profitability, making them the strongest growth lever.',
      'Online channels contribute the largest revenue share, supporting digital-first expansion decisions.'
    ]
  },
  {
    id: 'customer-analysis-dashboard',
    title: 'Customer Analysis Dashboard',
    description: 'An interactive dashboard that highlights customer segments, purchase behaviour, and retention performance.',
    tools: ['Excel', 'Power BI', 'Python', 'Recharts'],
    focus: ['Customer Segmentation', 'Purchase Trends', 'Retention Rate'],
    accent: 'from-violet-400/35 via-fuchsia-500/15 to-cyan-500/10',
    kpis: [
      { label: 'Active Customers', value: '8.4K', delta: '+11.3%' },
      { label: 'Retention Rate', value: '84%', delta: '+4.8 pts' },
      { label: 'Avg. Order Value', value: '$186', delta: '+7.2%' },
      { label: 'Repeat Purchases', value: '61%', delta: 'Healthy loyalty' }
    ],
    lineChart: {
      title: 'Purchase Trend',
      description: 'Monthly purchase volume compared with repeat-customer orders.',
      primaryLabel: 'Purchases',
      secondaryLabel: 'Repeat Orders',
      data: [
        { label: 'Jan', primary: 380, secondary: 218 },
        { label: 'Feb', primary: 402, secondary: 236 },
        { label: 'Mar', primary: 448, secondary: 262 },
        { label: 'Apr', primary: 472, secondary: 284 },
        { label: 'May', primary: 526, secondary: 322 },
        { label: 'Jun', primary: 564, secondary: 346 }
      ]
    },
    barChart: {
      title: 'Segment Value Comparison',
      description: 'Order volume and average spend by customer segment.',
      primaryLabel: 'Orders',
      secondaryLabel: 'Avg Spend',
      data: [
        { label: 'New', primary: 164, secondary: 102 },
        { label: 'Returning', primary: 238, secondary: 184 },
        { label: 'Loyal', primary: 126, secondary: 246 },
        { label: 'VIP', primary: 36, secondary: 322 }
      ]
    },
    pieChart: {
      title: 'Customer Segments',
      description: 'Distribution of customers across engagement segments.',
      data: [
        { name: 'Returning', value: 38 },
        { name: 'New', value: 29 },
        { name: 'Loyal', value: 21 },
        { name: 'VIP', value: 12 }
      ]
    },
    insights: [
      'Retention is improving alongside repeat order volume, showing stronger customer loyalty over time.',
      'VIP customers are fewer in number but contribute the highest average spend and deserve premium nurturing.',
      'Returning customers make up the largest segment, making lifecycle marketing a strong opportunity.'
    ]
  },
  {
    id: 'employee-performance-dashboard',
    title: 'Employee Performance Dashboard',
    description: 'A people analytics dashboard covering team productivity, attendance consistency, and performance movement.',
    tools: ['Excel', 'Power BI', 'Statistics', 'Recharts'],
    focus: ['Performance Metrics', 'Attendance', 'Productivity'],
    accent: 'from-cyan-400/35 via-emerald-500/15 to-violet-500/10',
    kpis: [
      { label: 'Productivity Score', value: '87%', delta: '+6.4 pts' },
      { label: 'Attendance Rate', value: '96%', delta: '+1.8 pts' },
      { label: 'Top Team', value: 'Operations', delta: '92% output' },
      { label: 'Training Completion', value: '89%', delta: '+12.0%' }
    ],
    lineChart: {
      title: 'Productivity Trend',
      description: 'Monthly productivity compared with attendance consistency.',
      primaryLabel: 'Productivity',
      secondaryLabel: 'Attendance',
      data: [
        { label: 'Jan', primary: 72, secondary: 91 },
        { label: 'Feb', primary: 76, secondary: 92 },
        { label: 'Mar', primary: 79, secondary: 93 },
        { label: 'Apr', primary: 82, secondary: 94 },
        { label: 'May', primary: 85, secondary: 95 },
        { label: 'Jun', primary: 87, secondary: 96 }
      ]
    },
    barChart: {
      title: 'Team Performance Snapshot',
      description: 'Output score and attendance by team.',
      primaryLabel: 'Performance',
      secondaryLabel: 'Attendance',
      data: [
        { label: 'Operations', primary: 92, secondary: 97 },
        { label: 'Support', primary: 84, secondary: 95 },
        { label: 'Sales', primary: 88, secondary: 94 },
        { label: 'Admin', primary: 79, secondary: 96 }
      ]
    },
    pieChart: {
      title: 'Performance Distribution',
      description: 'Share of employees by performance band.',
      data: [
        { name: 'High', value: 34 },
        { name: 'Strong', value: 29 },
        { name: 'Steady', value: 23 },
        { name: 'Needs Support', value: 14 }
      ]
    },
    insights: [
      'Productivity has improved steadily each month, supported by consistently strong attendance.',
      'Operations is the leading team across both output and attendance, offering a useful benchmark for others.',
      'Training completion growth appears to align with the rise in overall productivity performance.'
    ]
  }
]

export const learningJourney = [
  {
    phase: 'Step 01',
    title: 'Learning Data Analytics',
    description: 'Started building a strong foundation in analytics concepts, problem framing, and data-driven thinking.'
  },
  {
    phase: 'Step 02',
    title: 'Working with Excel',
    description: 'Practiced reporting, formulas, pivot tables, and spreadsheet-based analysis for real-world scenarios.'
  },
  {
    phase: 'Step 03',
    title: 'Learning SQL',
    description: 'Developed the ability to query datasets, combine tables, filter information, and answer business questions.'
  },
  {
    phase: 'Step 04',
    title: 'Learning Power BI',
    description: 'Focused on creating interactive visuals, KPI storytelling, and polished business dashboards.'
  },
  {
    phase: 'Step 05',
    title: 'Building Dashboards',
    description: 'Turned analytical concepts into complete personal projects with attractive and practical interfaces.'
  },
  {
    phase: 'Step 06',
    title: 'Continuous Skill Development',
    description: 'Continuing to improve across Python, visualization, data cleaning, and insight communication.'
  }
]

export const services = [
  {
    title: 'Data Analysis',
    icon: 'analysis',
    description: 'Extracting meaningful findings from structured and semi-structured datasets.'
  },
  {
    title: 'Dashboard Creation',
    icon: 'dashboard',
    description: 'Designing professional dashboards that make KPIs easy to monitor and understand.'
  },
  {
    title: 'Data Cleaning',
    icon: 'cleaning',
    description: 'Preparing reliable data through transformation, validation, and standardization.'
  },
  {
    title: 'Data Visualization',
    icon: 'visualization',
    description: 'Presenting trends, comparisons, and patterns with clear, modern visual storytelling.'
  },
  {
    title: 'Reporting',
    icon: 'reporting',
    description: 'Building concise reports that translate numbers into useful business direction.'
  },
  {
    title: 'Business Insights',
    icon: 'insights',
    description: 'Connecting data with action so teams can decide faster and more confidently.'
  }
]

export const contactCards = [
  {
    label: 'Email',
    value: 'kamleshkhani490@gmail.com',
    href: 'kamleshkhani490@gmail.com',
    icon: 'email'
  },
  {
    label: 'Phone',
    value: '+91 9053261488',
    href: 'tel:+919053261488',
    icon: 'phone'
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/kamlesh-singh',
    href: 'https://www.linkedin.com/in/kamlesh-singh-435265291?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    icon: 'linkedin'
  }
]

export const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kamlesh-singh-435265291?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    icon: 'linkedin'
  },
  {
    label: 'Email',
    href: 'mailto:kamleshkhani490@gmail.com',
    icon: 'email'
  },
  {
    label: 'Phone',
    href: 'tel:+919053261488',
    icon: 'phone'
  }
]

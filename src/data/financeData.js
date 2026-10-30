export const financialStats = {
  totalBalance: "$24,850.40",
  balanceTrend: "+14.2%",
  monthlyIncome: "$6,420.00",
  monthlyExpenses: "$2,845.50",
  savingsRate: "55.7%",
  netSavingsThisMonth: "$3,574.50",
};

export const chartMonthlyData = {
  "1M": [
    { label: "W1", income: 1600, expense: 620, savings: 980 },
    { label: "W2", income: 1550, expense: 780, savings: 770 },
    { label: "W3", income: 1620, expense: 540, savings: 1080 },
    { label: "W4", income: 1650, expense: 905, savings: 745 },
  ],
  "6M": [
    { label: "May", income: 5200, expense: 2900, savings: 2300 },
    { label: "Jun", income: 5400, expense: 3100, savings: 2300 },
    { label: "Jul", income: 5800, expense: 2750, savings: 3050 },
    { label: "Aug", income: 6100, expense: 2800, savings: 3300 },
    { label: "Sep", income: 6250, expense: 2650, savings: 3600 },
    { label: "Oct", income: 6420, expense: 2845, savings: 3575 },
  ],
  "1Y": [
    { label: "Nov", income: 4800, expense: 2900, savings: 1900 },
    { label: "Jan", income: 5000, expense: 2800, savings: 2200 },
    { label: "Mar", income: 5150, expense: 2850, savings: 2300 },
    { label: "May", income: 5400, expense: 3000, savings: 2400 },
    { label: "Jul", income: 5800, expense: 2750, savings: 3050 },
    { label: "Sep", income: 6250, expense: 2650, savings: 3600 },
    { label: "Oct", income: 6420, expense: 2845, savings: 3575 },
  ],
};

export const spendingCategories = [
  { name: "Housing & Rent", amount: "$967.50", percentage: 34, color: "#126B46", icon: "Home" },
  { name: "Food & Groceries", amount: "$682.90", percentage: 24, color: "#2E8B57", icon: "Utensils" },
  { name: "Tech & Education", amount: "$512.20", percentage: 18, color: "#4EAA78", icon: "GraduationCap" },
  { name: "Transportation", amount: "$341.45", percentage: 12, color: "#7BC49C", icon: "Car" },
  { name: "Entertainment", amount: "$341.45", percentage: 12, color: "#A8DEC0", icon: "Film" },
];

export const savingsGoals = [
  {
    title: "Apartment Security Deposit",
    target: "$4,000",
    current: "$3,200",
    percentage: 80,
    targetDate: "Dec 2026",
    category: "Housing",
    icon: "KeyRound",
  },
  {
    title: "Graduation Europe Trip",
    target: "$3,000",
    current: "$2,150",
    percentage: 71,
    targetDate: "June 2027",
    category: "Travel",
    icon: "Plane",
  },
  {
    title: "Emergency Rainy Day Buffer",
    target: "$5,000",
    current: "$5,000",
    percentage: 100,
    targetDate: "Achieved!",
    category: "Safety",
    icon: "ShieldCheck",
  },
];

export const recentTransactions = [
  {
    id: 1,
    merchant: "Spotify Student Premium",
    category: "Entertainment",
    date: "Today, 2:45 PM",
    amount: "-$5.99",
    type: "expense",
    status: "Completed",
    icon: "Music",
  },
  {
    id: 2,
    merchant: "Freelance UI Client Deposit",
    category: "Side Income",
    date: "Yesterday",
    amount: "+$1,450.00",
    type: "income",
    status: "Completed",
    icon: "ArrowDownLeft",
  },
  {
    id: 3,
    merchant: "Campus Bookstore & Supplies",
    category: "Education",
    date: "Oct 28, 2026",
    amount: "-$124.50",
    type: "expense",
    status: "Completed",
    icon: "BookOpen",
  },
  {
    id: 4,
    merchant: "Trader Joe's Groceries",
    category: "Groceries",
    date: "Oct 26, 2026",
    amount: "-$68.20",
    type: "expense",
    status: "Completed",
    icon: "ShoppingBag",
  },
  {
    id: 5,
    merchant: "Monthly Stipend & Research Grant",
    category: "Salary",
    date: "Oct 24, 2026",
    amount: "+$2,800.00",
    type: "income",
    status: "Completed",
    icon: "Landmark",
  },
];

export const testimonials = [
  {
    name: "Maya Lin",
    role: "Computer Science Senior @ UC Berkeley",
    quote: "Finora completely changed how I manage my stipend. I went from dreading checking my bank balance to actually saving $450 every single month effortlessly.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
    highlight: "Saved $4,200 in 1 year",
    rating: 5,
  },
  {
    name: "Jordan Rivera",
    role: "Junior Product Designer @ Austin, TX",
    quote: "The roommate split and smart dining budget saved our apartment from so many awkward money conversations. The UI is honestly gorgeous and calm.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    highlight: "Cut dining overspend by 35%",
    rating: 5,
  },
  {
    name: "Samira Patel",
    role: "Associate Financial Analyst @ Chicago",
    quote: "Most finance apps are cluttered and stressful. Finora feels thoughtful, intelligent, and focused on helping you build long-term sustainable habits.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80",
    highlight: "Maxed emergency fund early",
    rating: 5,
  },
];

export const faqs = [
  {
    question: "Is Finora really free for college students?",
    answer: "Yes! Our Student Starter plan is 100% free with your student email (.edu or campus equivalent). You get full access to transaction tracking, monthly smart budgeting, and up to 3 custom savings goals with zero ads or hidden charges.",
  },
  {
    question: "How does Finora protect my sensitive financial data?",
    answer: "We use bank-grade 256-bit AES encryption at rest and TLS 1.3 in transit. We partner with regulated Open Banking providers, meaning Finora operates with read-only permissions and can never move or withdraw your money.",
  },
  {
    question: "Can I connect multiple accounts and credit cards?",
    answer: "Absolutely. You can link your student checking accounts, high-yield savings accounts, credit cards, and student loans so you see your complete financial picture in one place.",
  },
  {
    question: "What if I have irregular income from freelancing or gigs?",
    answer: "Finora includes an 'Adaptive Cashflow' mode tailored specifically for freelancers, gig workers, and students with variable income. It recalculates safe-to-spend limits based on rolling averages rather than rigid salaries.",
  },
  {
    question: "Can I export my financial reports?",
    answer: "Yes, you can export your spending summaries, category breakdowns, and tax-deductible expense logs into CSV, PDF, or Excel sheets with one click at any time.",
  },
];

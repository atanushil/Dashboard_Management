export const navBarOptions = [
  {
    id: 1,
    name: "Option 1",
  },
  {
    id: 2,
    name: "Option 2",
  },
  {
    id: 3,
    name: "Option 3",
  },
  {
    id: 4,
    name: "Option 4",
  },
  {
    id: 5,
    name: "Option 5",
  },
];
export const DaysOptions = [
  {
    id: 1,
    name: "Last 2 Days",
  },
  {
    id: 2,
    name: "Last 7 Days",
  },
  {
    id: 3,
    name: "Last 30 Days",
  },
  {
    id: 4,
    name: "Last 6 Months",
  },
  {
    id: 5,
    name: "Last 1 Year",
  },
];

export const colorArray = [
  '#3498db',  // Blue
  '#2ecc71',  // Green
  '#e74c3c',  // Red
  '#ecf0f1',  // Light Gray
  '#2c3e50',  // Dark Blue-Grey
  '#f39c12',  // Orange
  '#27ae60',  // Dark Green
  '#8e44ad'   // Purple
];

export const categoryList = [
  {
    id: 1,
    categoryName: "CSPM",
    widget: [
      {
        id: 1,
        heading: "Security Overview",
        chart: "PieChart",
        tooltip: "Number of Incidents",
        data: [
          // { color: "#dc2626", text: "Failed", num: 45 },
          // { color: "#16a34a", text: "Passed", num: 75 },
          // { color: "#f59e0b", text: "In Progress", num: 30 },
          // { color: "#f87171", text: "Not Available", num: 35 },
          // { color: "#3b82f6", text: "Compliant", num: 70 },
        ],
      },
      {
        id: 2,
        heading: "Monthly Trends",
        chart: "SplineChart",
        tooltip: "Monthly View",
        data: [
          // { color: "#dc2626", text: "Failed", num: 40 },
          // { color: "#16a34a", text: "Passed", num: 85 },
          // { color: "#f59e0b", text: "In Progress", num: 25 },
          // { color: "#f87171", text: "Not Available", num: 45 },
          // { color: "#3b82f6", text: "Compliant", num: 65 },
        ],
      },
      {
        id: 3,
        heading: "Compliance Score",
        chart: "StackBarChart",
        tooltip: "Compliance Rate",
        data: [
          // { color: "#dc2626", text: "Failed", num: 55 },
          // { color: "#16a34a", text: "Passed", num: 70 },
          // { color: "#f59e0b", text: "In Progress", num: 20 },
          // { color: "#f87171", text: "Not Available", num: 50 },
          // { color: "#3b82f6", text: "Compliant", num: 60 },
        ],
      },
    ],
  },
  {
    id: 2,
    categoryName: "CWPP",
    widget: [
      {
        id: 1,
        heading: "Threat Detection",
        chart: "PieChart",
        tooltip: "Threat Count",
        data: [
          { color: "#dc2626", text: "Critical", num: 40 },
          { color: "#16a34a", text: "Low", num: 90 },
          { color: "#f59e0b", text: "Medium", num: 35 },
          { color: "black", text: "Unknown", num: 30 },
          { color: "#3b82f6", text: "Safe", num: 50 },
        ],
      },
      {
        id: 2,
        heading: "Vulnerability Trends",
        chart: "SplineChart",
        tooltip: "Vulnerability Analysis",
        data: [
          { color: "#dc2626", text: "Critical", num: 60 },
          { color: "#16a34a", text: "Low", num: 70 },
          { color: "#f59e0b", text: "Medium", num: 20 },
          { color: "black", text: "Unknown", num: 25 },
          { color: "#3b82f6", text: "Safe", num: 55 },
        ],
      },
      {
        id: 3,
        heading: "Risk Assessment",
        chart: "StackBarChart",
        tooltip: "Risk Score",
        data: [
          { color: "#dc2626", text: "High", num: 50 },
          { color: "#16a34a", text: "Medium", num: 80 },
          { color: "#f59e0b", text: "Low", num: 30 },
          { color: "black", text: "Unclassified", num: 35 },
          { color: "#3b82f6", text: "No Risk", num: 60 },
        ],
      },
    ],
  },
  {
    id: 3,
    categoryName: "Application Security",
    widget: [
      {
        id: 1,
        heading: "Vulnerabilities by Severity",
        chart: "PieChart",
        tooltip: "Severity Count",
        data: [
          { color: "#dc2626", text: "Critical", num: 25 },
          { color: "#f59e0b", text: "High", num: 40 },
          { color: "#f87171", text: "Medium", num: 55 },
          { color: "#16a34a", text: "Low", num: 30 },
          { color: "#3b82f6", text: "Info", num: 20 },
        ],
      },
      {
        id: 2,
        heading: "Application Activity",
        chart: "SplineChart",
        tooltip: "Activity Trends",
        data: [
          { color: "#dc2626", text: "Errors", num: 15 },
          { color: "#16a34a", text: "Success", num: 90 },
          { color: "#f59e0b", text: "Warnings", num: 25 },
          { color: "#f87171", text: "Failures", num: 20 },
          { color: "#3b82f6", text: "Info", num: 40 },
        ],
      },
      {
        id: 3,
        heading: "User Access Levels",
        chart: "StackBarChart",
        tooltip: "Access Distribution",
        data: [
          { color: "#dc2626", text: "Admin", num: 10 },
          { color: "#16a34a", text: "User", num: 70 },
          { color: "#f59e0b", text: "Guest", num: 20 },
          { color: "#f87171", text: "Pending", num: 15 },
          { color: "#3b82f6", text: "Restricted", num: 30 },
        ],
      },
    ],
  },
  {
    id: 4,
    categoryName: "Network Security",
    widget: [
      {
        id: 1,
        heading: "Incident Reports",
        chart: "PieChart",
        tooltip: "Incident Count",
        data: [
          { color: "#dc2626", text: "Critical", num: 20 },
          { color: "#16a34a", text: "Major", num: 60 },
          { color: "#f59e0b", text: "Minor", num: 50 },
          { color: "#f87171", text: "Trivial", num: 15 },
          { color: "#3b82f6", text: "No Issue", num: 45 },
          
        ],
      },
      {
        id: 2,
        heading: "Traffic Analysis",
        chart: "SplineChart",
        tooltip: "Traffic Trends",
        data: [
          { color: "#dc2626", text: "High Traffic", num: 30 },
          { color: "#16a34a", text: "Normal", num: 85 },
          { color: "#f59e0b", text: "Low Traffic", num: 20 },
          { color: "#f87171", text: "DDoS Attack", num: 10 },
          { color: "#3b82f6", text: "Healthy", num: 70 },
        ],
      },
      {
        id: 3,
        heading: "Firewall Status",
        chart: "StackBarChart",
        tooltip: "Status Overview",
        data: [
          { color: "#dc2626", text: "Blocked", num: 25 },
          { color: "#16a34a", text: "Allowed", num: 90 },
          { color: "#f59e0b", text: "Pending", num: 15 },
          { color: "#f87171", text: "Bypassed", num: 10 },
          { color: "#3b82f6", text: "Normal", num: 50 },
        ],
      },
    ],
  },
];


export const SmallSizePie={width:200,height:200,CX:100,CY:100,innerRadius:50,outerRadius:60}

export const BigSizePie={width:400,height:400,CX:200,CY:200,innerRadius:100,outerRadius:120}


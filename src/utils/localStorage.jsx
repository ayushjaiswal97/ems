const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Prepare report",
        description: "Complete the monthly sales report",
        date: "2025-05-20",
        category: "Reporting",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Team meeting",
        description: "Attend the weekly team sync-up",
        date: "2025-05-21",
        category: "Meetings",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Client call",
        description: "Discuss project requirements with client",
        date: "2025-05-22",
        category: "Communication",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Code review",
        description: "Review pull requests from the dev team",
        date: "2025-05-18",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "UI testing",
        description: "Test UI components for bugs",
        date: "2025-05-19",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Documentation",
        description: "Update the user manual",
        date: "2025-05-21",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Feedback session",
        description: "Give feedback to interns",
        date: "2025-05-23",
        category: "HR",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Backend integration",
        description: "Integrate API with frontend",
        date: "2025-05-17",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Security audit",
        description: "Run vulnerability scan",
        date: "2025-05-20",
        category: "Security",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Sprint planning",
        description: "Prepare for next sprint tasks",
        date: "2025-05-22",
        category: "Planning",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Bug fixing",
        description: "Fix critical issues in module A",
        date: "2025-05-16",
        category: "Debugging",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Design meeting",
        description: "Discuss UI/UX design improvements",
        date: "2025-05-18",
        category: "Design",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Database optimization",
        description: "Optimize DB queries for speed",
        date: "2025-05-19",
        category: "Database",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Deployment",
        description: "Deploy release v1.2.0",
        date: "2025-05-20",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Client onboarding",
        description: "Walk new client through the platform",
        date: "2025-05-15",
        category: "Customer Success",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "QA testing",
        description: "Perform regression testing",
        date: "2025-05-17",
        category: "Quality Assurance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Refactor code",
        description: "Improve code readability and performance",
        date: "2025-05-19",
        category: "Refactoring",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }  
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];

  export const setLocalStorage = () =>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
  } 

  
  export const getLocalStorage = () =>{
     const employees = JSON.parse(localStorage.getItem('employees'))
     const admin = JSON.parse(localStorage.getItem('admin'))

     console.log(employees , admin)
  } 
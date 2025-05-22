localStorage.clear()
const employees = [
  {
      "id": 1,
      "firstName": "Amit",
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
          {
              "taskTitle": "Fix UI Bug",
              "taskDescription": "Resolve the UI issue in the login form.",
              "taskDate": "2025-03-28",
              "category": "Frontend",
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
          },
          {
              "taskTitle": "API Integration",
              "taskDescription": "Integrate the payment API with the checkout page.",
              "taskDate": "2025-03-27",
              "category": "Backend",
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false
          }
      ],
      "taskCounts": {
          "active": 1,
          "newTask": 1,
          "completed": 1,
          "failed": 0
      }
  },
  {
      "id": 2,
      "firstName": "Rohit",
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
          {
              "taskTitle": "Database Optimization",
              "taskDescription": "Optimize the SQL queries for faster performance.",
              "taskDate": "2025-03-26",
              "category": "Database",
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false
          },
          {
              "taskTitle": "Bug Fix - Authentication",
              "taskDescription": "Fix the login session expiry issue.",
              "taskDate": "2025-03-29",
              "category": "Backend",
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
          }
      ],
      "taskCounts": {
          "active": 1,
          "newTask": 1,
          "completed": 1,
          "failed": 0
      }
  },
  {
      "id": 3,
      "firstName": "Priya",
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
          {
              "taskTitle": "Update User Dashboard",
              "taskDescription": "Redesign the user dashboard UI.",
              "taskDate": "2025-03-28",
              "category": "Frontend",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
          },
          {
              "taskTitle": "Security Audit",
              "taskDescription": "Conduct security testing on the web application.",
              "taskDate": "2025-03-30",
              "category": "Security",
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
          }
      ],
      "taskCounts": {
          "active": 2,
          "newTask": 1,
          "completed": 0,
          "failed": 0
      }
  },
  {
      "id": 4,
      "firstName": "Neha",
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
          {
              "taskTitle": "Performance Testing",
              "taskDescription": "Test server response times under load.",
              "taskDate": "2025-03-25",
              "category": "Testing",
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false
          },
          {
              "taskTitle": "Mobile Responsiveness",
              "taskDescription": "Ensure the homepage is fully responsive on mobile.",
              "taskDate": "2025-03-27",
              "category": "Frontend",
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
          }
      ],
      "taskCounts": {
          "active": 1,
          "newTask": 1,
          "completed": 1,
          "failed": 0
      }
  },
  {
      "id": 5,
      "firstName": "Sandeep",
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
          {
              "taskTitle": "Setup CI/CD Pipeline",
              "taskDescription": "Automate deployments using GitHub Actions.",
              "taskDate": "2025-03-26",
              "category": "DevOps",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
          },
          {
              "taskTitle": "Fix Memory Leak",
              "taskDescription": "Identify and fix memory leaks in the backend.",
              "taskDate": "2025-03-28",
              "category": "Backend",
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
          }
      ],
      "taskCounts": {
          "active": 2,
          "newTask": 1,
          "completed": 0,
          "failed": 0
      }
  },
  {
      "id": 6,
      "firstName": "Anjali",
      "email": "employee6@example.com",
      "password": "123",
      "tasks": [
          {
              "taskTitle": "Refactor Codebase",
              "taskDescription": "Improve code quality by refactoring old code.",
              "taskDate": "2025-03-29",
              "category": "Development",
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false
          },
          {
              "taskTitle": "Dockerize Application",
              "taskDescription": "Create a Docker container for easy deployment.",
              "taskDate": "2025-03-30",
              "category": "DevOps",
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
          }
      ],
      "taskCounts": {
          "active": 1,
          "newTask": 1,
          "completed": 1,
          "failed": 0
      }
  }
];

const admin = [
  {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))

  return { employees, admin }
}

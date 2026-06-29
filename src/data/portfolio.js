import acadTrackImage from '../assets/images/AcadTrack.png'
import examSphereImage from '../assets/images/ExamSphere.png'
import expenseTrackerImage from '../assets/images/Expense Tracker.png'

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#coding-profiles', label: 'Coding Profiles' },
  { href: '#contact', label: 'Contact' },
]

export const typingWords = [
  'AI Enthusiast',
  'Continuous Learner',
  'Problem Solver',
]

export const skillGroups = [
  { title: 'Languages', skills: ['Java', 'C++', 'JavaScript', 'C', 'Python'] },
  { title: 'Frontend', skills: ['HTML', 'CSS', 'React'] },
  { title: 'Backend', skills: ['Node.js', 'Express.js', 'Spring Boot'] },
  { title: 'Databases', skills: ['MySQL', 'PostgreSQL', 'MongoDB'] },
  { title: 'Tools', skills: ['Git', 'GitHub', 'AWS', 'VS Code', 'Figma'] },
]

export const projects = [
  {
    title: 'Expense Tracker',
    description:
      'A full-stack expense tracking application that helps users manage and categorize expenses securely with JWT authentication and interactive analytics.',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Chart.js'],
    githubUrl: 'https://github.com/Sachit-281206/Expense_Logger-MERN.git',
    image: expenseTrackerImage,
  },
  {
    title: 'Exam Sphere',
    description:
      'A full-stack MERN platform for classroom-based online exams where teachers manage exams and students take timed tests securely.',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Recharts'],
    githubUrl: 'https://github.com/Sachit-281206/online_exam_platform-MERN.git',
    image: examSphereImage,
  },
  {
    title: 'AcadTrack',
    description:
      'A web application for managing student attendance and academic performance with role-based dashboards for faculty and students.',
    stack: ['Spring Boot', 'Hibernate', 'Thymeleaf', 'MySQL', 'Maven'],
    githubUrl:
      'https://github.com/Sachit-281206/attendance-performance-tracker.git',
    image: acadTrackImage,
  },
]

export const profileLinks = [
  {
    name: 'LeetCode',
    topLabel: 'Max Rating',
    metric: '1471',
    bottomLabel: '300+ Problems Solved',
    url: 'https://leetcode.com/u/sachit_R/',
  },
  {
    name: 'SkillRack',
    metric: '1000+',
    bottomLabel: 'Problems Solved',
    url: 'http://www.skillrack.com/profile/515486/cec53601fad339725297d6437a7d0ecc3db8ef88',
  },
  {
    name: 'CodeChef',
    metric: '100+',
    bottomLabel: 'Problems Solved',
    url: 'https://www.codechef.com/users/sachit_28',
  },
]

export const contactLinks = [
  {
    name: 'GitHub',
    handle: 'github.com/Sachit-281206',
    url: 'https://github.com/Sachit-281206',
    type: 'github',
  },
  {
    name: 'LinkedIn',
    handle: 'linkedin.com/in/sachit-r-b29274336',
    url: 'https://www.linkedin.com/in/sachit-r-b29274336/',
    type: 'linkedin',
  },
  {
    name: 'Email',
    handle: 'sachit28122006@gmail.com',
    url: 'mailto:sachit28122006@gmail.com',
    type: 'email',
  },
]

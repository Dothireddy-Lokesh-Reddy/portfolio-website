import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Profile from './components/Profile.jsx'
import InterviewProblems from './components/InterviewProblems.jsx'
import Contact from './components/Contact.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import Projects from './components/Projects.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: < Layout />,
    children: [
      {
        path: "/",
        element: <Profile />
      },
      {
        path: "/problems",
        element: <InterviewProblems />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/projects",
        element: <Projects />
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)

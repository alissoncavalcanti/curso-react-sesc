import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Lista from './components/exercises/Lista.jsx'
// import TestUseState from '../src/excercises/class2.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import { HomePage, ProjectsPage, TasksPage } from './pages'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/tasks",
    element: <TasksPage/>,
  },
  {
    path: "/projects",
    element: <ProjectsPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
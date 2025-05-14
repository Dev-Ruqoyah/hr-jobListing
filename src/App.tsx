import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
const Home = React.lazy(() => import('./pages/Home'));

const JobBrowse = React.lazy(()=> import('./pages/Job'))
import { SearchContext } from './component/Context/SearchContext'
const ErrorPage = React.lazy(()=>import('./pages/ErrorPage'))



function App() {
  const [selectedCategory,setCategory] = useState<string>("")  
  const [role,setRole] = useState<string>("")
  
  const[location,setLocation] = useState<string>("")
  const categories = [
    {
      name:"Account Management",
      slug: "account management"
    },
    {
      name:"Healthcare",
      slug:"healthcare"
    },
    {
      name:"Software Engineering",
      slug:"software engineering"
    },
    {
      name:"Human Resources and Recruitment",
      slug:"Human Resources and Recruitment"
    },
    {
      name:"Legal Services",
      slug:"Legal Services"
    },
    {
      name:"Accounting and Finance",
      slug:"Accounting and Finance"
    },
  ]

  

  return (
    <>
    <SearchContext.Provider value={{categories,selectedCategory,setCategory,role,location,setRole,setLocation}}>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/jobs' element={<JobBrowse/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </SearchContext.Provider>
    
    </>
  )
}

export default App

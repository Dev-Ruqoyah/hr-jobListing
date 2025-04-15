import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { createContext, useState } from 'react'
import JobBrowse from './pages/Job'

export const SearchContext = createContext<saerchContextType | null>(null)
interface Category{
  name:string
  slug: string
}
interface saerchContextType{
  categories:Category[]
  selectedCategory: string
  setCategory: React.Dispatch<React.SetStateAction<string>>
  setRole: React.Dispatch<React.SetStateAction<string>>
  setLocation: React.Dispatch<React.SetStateAction<string>>
  role:string
  location:string
}
function App() {
  const [selectedCategory,setCategory] = useState("")  
  const [role,setRole] = useState("")
  
  const[location,setLocation] = useState("Remote")
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
    }
  ]

  

  return (
    <>
    <SearchContext.Provider value={{categories,selectedCategory,setCategory,role,location,setRole,setLocation}}>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/jobs' element={<JobBrowse/>}/>
      </Routes>
    </SearchContext.Provider>
    
    </>
  )
}

export default App

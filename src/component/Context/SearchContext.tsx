import { createContext } from "react"

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
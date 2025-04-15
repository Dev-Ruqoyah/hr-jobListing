import { useContext, useEffect } from "react";
import { SearchContext } from "../App";

const JobBrowse = () => {
    const context = useContext(SearchContext)
    console.log(context);
    if(!context) return null
    const {role,location,selectedCategory} = context
    useEffect(()=>{
        const  fetchJobs = async()=>{
            const {data}
        }
    })
    
    return ( 
        <>
        
        </>
     );
}
 
export default JobBrowse;
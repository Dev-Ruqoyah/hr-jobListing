import { useContext, useEffect } from "react";
import { SearchContext } from "../App";
import axios from "axios";

const JobBrowse = () => {
    const context = useContext(SearchContext)
    console.log(context);
    if(!context) return null
    const {role,location} = context
    useEffect(()=>{
        const  fetchJobs = async()=>{
            const {data} = await axios.get(`https://www.themuse.com/api/public/jobs?q=${role}&location=${location}&page=1`)
            // console.log(data);
            
        }
        fetchJobs()
    },[role,location])
    
    return ( 
        <>
        
        </>
     );
}
 
export default JobBrowse;
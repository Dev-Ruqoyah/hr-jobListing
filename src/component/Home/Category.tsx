import axios from "axios";
import { useEffect } from "react";

const JobCategory = () => {
    useEffect(()=>{
       try {
        const fetchCategory = async ()=>{
            const {data} = await axios.get('https://remotive.io/api/remote-jobs')
            const jobs = data.jobs
            console.log(jobs);
            
        }
        fetchCategory()
       } catch (error) {
        
       }

    },[])
    return ( 
        <>
            <div className="bg-white py-9 h-screen">
                <div className="container mx-auto">
                    <div className="flex flex-col justify-center items-center">
                        <h3 className="text-2xl font-semibold text-blue-950">Browse by Category</h3>
                        <p className="text-center">Find that job that's perfect for you, about 800+ of new jobs everyday</p>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default JobCategory;
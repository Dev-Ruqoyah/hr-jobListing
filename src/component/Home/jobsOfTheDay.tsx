import { useState } from "react";
import Header1 from "../Header/Header1";
import Header2 from "../Header/Header2";

const JobOfTheDay = () => {
    const Jobs = ["Content Writing","Finance","Human Resources","Management","Market Research","Sales","Software"]
    const[jobCategory,setJobCategory] = useState()
    const [searchQuery, setJobQuery] = useState<string>("");
    return ( 
        <>
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col justify-center items-center">
                    <Header1 headertitle="Jobs of the Day"/>
                    <Header2 subheadingtitle="Search and connect with the employer faster"/>
                </div>
                <div className="flex gap-3 my-3 items-center justify-center">
                    {Jobs.map((job)=>(
                        <button   onClick={() => setJobCategory({job})} key={job} className="py-2 px-3 cursor-pointer border border-blue-800 rounded-md">{job}</button>
                    ))}
                </div>
            </div>
        </>
     );
}
 
export default JobOfTheDay;
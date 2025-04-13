import { CalendarDays } from "lucide-react";
import { FaClock } from "react-icons/fa6";

interface CompanyDetails {
    id: number;
    short_name: string;
    name: string;
   
  }
  interface JobResult {
    name: string;
    jobDescription: string;
    id: number;
    company: CompanyDetails;
    locations:[]
    publication_date:string
    type:string
    contents: string
  }
  const formatDate = (dateStr:string) =>{
    return new Date(dateStr).toLocaleDateString("en-US",{
      year:"numeric",
      month:"long",
      day:"numeric"
    })
  }
const JobCard = ({job}:{job:JobResult}) => {
    return ( 
        <>
            <div className="shadow-sm py-5 px-3 border border-gray-300 rounded-md"  >
                 <div className="flex items-center gap-3">
                  <img src={`https://logo.clearbit.com/${job.company.short_name}.com`} alt={`${job.company.name}`} className="h-12 w-12 rounded-md" />
                  <div className="flex flex-col">
                    <h3 title={`${job.company.name}`} className="text-xxl font-semibold line-clamp-1">{job.company.name}</h3>
                    <p className="text-[12px] text-gray-500">{job.locations?.[0].name}</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-md font-semibold line-clamp-2 leading-snug min-h-[3.25rem]">{job.name}</h4>
                  <div className="flex justify-between items-center mt-3">
                    <div className="flex items-center gap-1">
                      <FaClock className="w-3 h-3"/>
                      <p className="text-[12px] text-gray-500">{job.type}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <CalendarDays className="w-3 h-3"/>
                      <p className="text-[12px] text-gray-500">{formatDate(job.publication_date)}</p>
                    </div>
                  </div>
                  <p className="line-clamp-4 text-sm text-gray-500 font-medium "dangerouslySetInnerHTML={{__html:job.contents}}></p>
                </div>
               </div>
        </>
     );
}
 
export default JobCard;
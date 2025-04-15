import axios from "axios";
import { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y, Grid } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/grid";
import Header1 from "../Header/Header1";
import Header2 from "../Header/Header2";

const JobCategory = () => {
  const [JCategory, setJobCategory] = useState<Record<string, number>>({});
  interface Job {
    categories: { name: string }[];
    [key: string]: any;
  }

  const fetchAllJobs = async () => {
    let allJobs: Job[] = [];
    try {
      const pages = Array.from({ length: 10 }, (_, i) => i + 1); // Create an array of page numbers [1, 2, ..., 10]
      const jobRequests = pages.map((page) =>
        axios
          .get(`https://www.themuse.com/api/public/jobs?page=${page}`)
          .then((response) => response.data.results)
      );

      const results = await Promise.all(jobRequests);
      allJobs = results.flat(); // Flatten the array of results into one array

      // console.log(`Fetched all pages`);

      // Group jobs by category
      const categoryJob = allJobs.reduce(
        (acc: Record<string, number>, job: Job) => {
          job.categories.forEach((cat) => {
            const category = cat.name || "Uncategorized";
            acc[category] = (acc[category] || 0) + 1;
          });
          return acc;
        },
        {}
      );

      // console.log("Jobs by Category:", categoryJob);
      setJobCategory(categoryJob);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  useEffect(() => {
    fetchAllJobs();
  }, []);

  return (
    <div className="bg-white py-9 ">
      <div className="container mx-auto ">
        <div className="flex flex-col justify-center items-center">
       <Header1 headertitle="Browse by Category"/>
       <Header2 subheadingtitle="Find that job that's perfect for you, about 800+ new jobs every day"/>
        
        </div>

        <div className=" mx-auto mt-4 max-w-6xl h-full">
          {JCategory && (
            <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Grid]}
            spaceBetween={30}
            slidesPerView={1} // Default
            grid={{
              rows: 2,
              fill: "row",
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                grid: { rows: 1 },
              },
              768: {
                slidesPerView: 1,
                grid: { rows: 1 },
              },
              1024: {
                slidesPerView: 4,
                grid: { rows: 2 },
              },
              1280: {
                slidesPerView: 5,
                grid: { rows: 2 },
              },
            }}
            pagination={{ clickable: true }}
            className="max-w-7xl mx-auto h-full mt-12"
          >
              {Object.entries(JCategory).map(
                ([categoryName, jobCount], index) => (
                  <SwiperSlide key={categoryName}>
                    <div className=" my-2 p-4 md:h-24 h-52 mb-7 overflow-hidden shadow-md rounded-md bg-white flex flex-col justify-center">
                      <h4 className="text-md font-medium text-blue-800">
                        {categoryName}
                      </h4>
                      <p className="text-gray-600">
                        {jobCount} job{jobCount > 1 ? "s" : ""} Available
                      </p>
                    </div>
                  </SwiperSlide>
                )
              )}
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobCategory;

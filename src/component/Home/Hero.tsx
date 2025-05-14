interface CountryResult {
  name: { common: string; official: string };
  ccn3: string;
}
import { FaMagnifyingGlass } from "react-icons/fa6";
import img1 from "../../assets/img.jpg";
import img2 from "../../assets/img2.jpg";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { SearchContext } from "../Context/SearchContext";
import { motion } from "framer-motion";

const Hero = () => {
  const context = useContext(SearchContext);
  const [country, setCountry] = useState<CountryResult[]>([]);
  const navigate = useNavigate();

  if (!context) return null;
  const { categories, setCategory, setRole, setLocation, role, location } =
    context;

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const { data } = await axios.get("https://restcountries.com/v3.1/all");
        const sortedCountries = data.sort(
          (a: CountryResult, b: CountryResult) => {
            const nameA = a.name.common.toLowerCase();
            const nameB = b.name.common.toLowerCase();
            return nameA.localeCompare(nameB);
          }
        );
        setCountry(sortedCountries);
      } catch (error) {
        console.error("Failed to fetch countries", error);
      }
    };
    fetchCountry();
  }, []);
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/jobs");
  };

  return (
    <>
      <div className="md:h-[87vh] min-h-screen pt-24 md:pt-16 bg-blue-50">
        <div className="container max-w-6xl mx-auto h-full md:px-0 px-4">
          <div className="grid md:grid-cols-2 gap-4 space-x-4 px-4  h-full">
            <div className="flex flex-col gap-3 justify-center">
              <h3 className="md:text-5xl text-3xl font-semibold">
                The <span className="text-blue-600">Easiest Way</span> <br /> to
                Get Your New Job.
              </h3>
              <p className="text-lg md:mt-4 mt-2">
                Browse thousands of job opportunities, connect with top
                companies, and land your perfect role with ease.
              </p>
              <form action="" className="" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row gap-4 bg-white py-4 px-4 md:mt-4 shadow-md rounded-md items-stretch md:items-center">
                  {/* First Column */}
                  <div className="flex-1">
                    <label
                      htmlFor="industry"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Category
                    </label>
                    <select
                      id="category"
                      className="border-0 focus:outline-0 w-full"
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option value="none" hidden disabled></option>
                      {categories?.map((category) => (
                        <option value={category.name} key={category.slug}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Divider - hide on small screens */}
                  <div className="hidden md:block w-px bg-gray-300 h-10 self-center" />

                  {/* Second Column */}
                  <div className="flex-1">
                    <label
                      htmlFor="role"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Role
                    </label>
                    <input
                      type="text"
                      className="border-0 focus:outline-0 w-full"
                      onChange={(e) => setRole(e.target.value)}
                      value={role}
                    />
                  </div>

                  {/* Divider */}
                  <div className="hidden md:block w-px bg-gray-300 h-10 self-center" />

                  {/* Third Column */}
                  <div className="flex-1">
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Location
                    </label>
                    <select
                      id="location"
                      className="border-0 focus:outline-0 w-full"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    >
                      <option value="Remote">Remote</option>
                      {country.map((coun: CountryResult) => (
                        <option value={coun.name.common} key={coun.ccn3}>
                          {coun.name.common}
                        </option>
                      ))}
                    </select>
                    
                  </div>

                  {/* Search Button */}
                  <div className="flex justify-end md:justify-start" >
                    <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.8}}
                      type="submit"
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 w-full md:w-auto justify-center"
                    >
                      <FaMagnifyingGlass className="text-white" />
                      <p>Search</p>
                    </motion.button>
                  </div>
                </div>
              </form>
            </div>

            <div className="images flex justify-center items-center overflow-hidden md:overflow-visible md:pb-0 pb-5">
              <motion.div
                className="relative flex flex-col md:flex-row items-center md:items-start w-full max-w-[500px] gap-4"
                initial="hidden"
                animate="show"
              >
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: -50 },
                    show: {
                      opacity: 1,
                      y: 1,
                      transition: {
                        duration: 0.4,
                        ease: "easeIn",
                        delay: 0.2,
                      },
                    },
                  }}
                >
                  <img
                    src={img1}
                    alt=""
                    className="w-[80%] md:w-[60%] rounded-t-4xl border-l-8 border-b-8 border-blue-600 rounded-br-4xl hover:scale-105 transition-all"
                  />
                </motion.div>
                <motion.div
            
                >
                  <img
                    src={img2}
                    alt=""
                    className="w-[70%] md:w-[50%] rounded-t-4xl border-l-8 border-b-8 border-blue-600 hover:scale-105 transition-all md:absolute md:right-0 md:top-24 rounded-br-4xl"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

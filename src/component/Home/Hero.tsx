import { FaMagnifyingGlass } from "react-icons/fa6";
import Divider from "../divider";
import img1 from "../../assets/img.jpg";
import img from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import axios from "axios";
import { useEffect, useState } from "react";

const Hero = () => {
  const [country, setCountry] = useState<string>("");
  useEffect(() => {
    try {
      const fetchCountry = async () => {
        const { data } = await axios.get("https://ipapi.co/json/");
        // console.log(data);
        setCountry(data.country_name);
      };
      fetchCountry();
    } catch (error) {
      console.error();
    }
  }, []);
  return (
    <>
      <div className="md:h-[87vh] min-h-screen pt-16 bg-blue-50">
        <div className="container max-w-6xl mx-auto h-full md:px-0 px-3">
          <div className="grid md:grid-cols-2 gap-4 space-x-4   h-full">
            <div className="flex flex-col gap-3 justify-center">
              <h3 className="md:text-5xl text-3xl font-semibold">
                The <span className="text-blue-600">Easiest Way</span> <br /> to
                Get Your New Job.
              </h3>
              <p className="text-lg md:mt-4 mt-2">
                Browse thousands of job opportunities, connect with top
                companies, and land your perfect role with ease.
              </p>
              <form action="" className="">
                <div className="flex flex-col md:flex-row gap-4 bg-white py-4 px-4 md:mt-4 shadow-md rounded-md items-stretch md:items-center">
                  {/* First Column */}
                  <div className="flex-1">
                    <label
                      htmlFor="industry"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Industry
                    </label>
                    <select
                      id="industry"
                      className="border-0 focus:outline-0 w-full"
                    >
                      <option value="" selected disabled></option>
                      <option value="te">Technical</option>
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
                    <select
                      id="role"
                      className="border-0 focus:outline-0 w-full"
                    >
                      <option value="" selected disabled></option>
                      <option value="dev">Developer</option>
                    </select>
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
                    <input
                      type="text"
                      className="border-0 focus:outline-0 w-full"
                      value={country}
                      disabled
                    />
                  </div>

                  {/* Search Button */}
                  <div className="flex justify-end md:justify-start">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 w-full md:w-auto justify-center">
                      <FaMagnifyingGlass className="text-white" />
                      <p>Search</p>
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className="images flex justify-center items-center overflow-hidden md:overflow-visible md:pb-0 pb-5">
              <div className="relative flex flex-col md:flex-row items-center md:items-start w-full max-w-[500px] gap-4">
                <img
                  src={img1}
                  alt=""
                  className="w-[80%] md:w-[60%] rounded-t-4xl border-l-8 border-b-8 border-blue-600 rounded-br-4xl hover:scale-105 transition-all"
                />
                <img
                  src={img2}
                  alt=""
                  className="w-[70%] md:w-[50%] rounded-t-4xl border-l-8 border-b-8 border-blue-600 hover:scale-105 transition-all md:absolute md:right-0 md:top-30 rounded-br-4xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

import { useAnimation, useInView, useScroll, useTransform ,motion} from "framer-motion";
import React, { useEffect, useRef } from "react";
import { Element } from "react-scroll";



const BlogSection: React.FC = () => {
  const containerRef = useRef(null)

  const isInView = useInView(containerRef, { once: true })
  const mainControls = useAnimation()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  })

  const paragraphOneValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["-100%", "0%"]
  )

  const paragraphTwoValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["100%", "0%"]
  )

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView])



  const blogs = [
    {
      id: 1,
      title: "How to Find Your Dream Job",
      description:
        "Discover strategies to land your perfect job in any industry.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      link: "#",
  
    },
    {
      id: 2,
      title: "Top Skills Employers Look For",
      description: "Master these skills to stand out from the crowd.",
      image:
        "https://images.unsplash.com/photo-1603575448878-868a20723f5d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
      style : { translateX: paragraphOneValue }

      
    },
    {
      id: 3,
      title: "Preparing for Job Interviews",
      description: "Tips and tricks to ace your next interview.",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
      link: "#",
      style : { translateX: paragraphTwoValue }
    },
  ];
  return (
    <Element name="blog">
      <section className="py-16 bg-gray-100 overflow-x-hidden" ref={containerRef}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Blog</h2>

          <div className="grid gap-8">
            {/* Featured First Blog */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden md:flex hover:shadow-lg transition duration-300">
              <img
                src={blogs[0].image}
                alt={blogs[0].title}
                className="w-full md:w-1/2 h-64 object-cover"
              />
              <div className="p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold mb-2">
                  {blogs[0].title}
                </h3>
                <p className="text-gray-600 mb-4">{blogs[0].description}</p>
                <a
                  href={blogs[0].link}
                  className="text-blue-600 hover:underline font-medium"
                >
                  Read More →
                </a>
              </div>
            </div>
            

            {/* Two Smaller Blogs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogs.slice(1).map((blog) => (
                <motion.div style={blog.style}

                  key={blog.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                    <p className="text-gray-600 mb-4">{blog.description}</p>
                    <a
                      href={blog.link}
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Read More →
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default BlogSection;

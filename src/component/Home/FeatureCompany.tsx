import { Link } from "react-router-dom";
import Header1 from "../Header/Header1";
import Header2 from "../Header/Header2";
import { Element } from "react-scroll";

const featuredCompanies = [
  {
    id: 1,
    name: "Google",
    logo: "https://logo.clearbit.com/google.com",
    description: "Innovating the world's information.",
    link: "/jobs?company=Google",
  },
  {
    id: 2,
    name: "Microsoft",
    logo: "https://logo.clearbit.com/microsoft.com",
    description: "Empowering every person and organization on the planet.",
    link: "/jobs?company=Microsoft",
  },
  {
    id: 3,
    name: "Amazon",
    logo: "https://logo.clearbit.com/amazon.com",
    description: "Building Earth's most customer-centric company.",
    link: "/jobs?company=Amazon",
  },
];

const FeaturedCompanies = () => {
  return (
    <Element name="company">
      <section className="py-12 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <Header1 headertitle="Featured Companies" />
          <Header2 subheadingtitle="Search By Featured Company" />
          <div className="grid md:grid-cols-3 mt-2 gap-8">
            {featuredCompanies.map((company) => (
              <div
                key={company.id}
                className="border border-blue-400 p-6 rounded-lg shadow hover:shadow-lg transition-all flex flex-col items-center text-center"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-24 h-24 object-contain mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{company.name}</h3>
                <p className="text-gray-600 mb-4">{company.description}</p>
                <Link
                  to={company.link}
                  className="mt-auto bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  View Jobs
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default FeaturedCompanies;

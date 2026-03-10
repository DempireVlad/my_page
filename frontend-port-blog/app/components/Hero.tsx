import { Link } from "react-router";
import AboutPreview from "./About_Preview";

interface HeroProps {
  name?: string;
  text?: string;
}

const Hero = ({
  name = "[Your Name]",
  text = "Frontend Developer passionate about creating modern and responsive web applications with React and TypeScript",
}: HeroProps) => {
  return (

<header className="relative overflow-hidden text-center py-14 my-8 bg-gray-800 text-white rounded-lg shadow-md">

  <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full z-0"></div>
 
  <div className="relative z-10">
    <AboutPreview />

    <div className="flex gap-6 justify-center flex-wrap mt-8">
      <Link
        to="/projects"
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 hover:scale-105 transition-all duration-200"
      >
        Show My Projects
      </Link>

      <Link
        to="/contact"
        className="px-6 py-3 border border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white hover:scale-105 transition-all duration-200"
      >
        Contact Me
      </Link>
    </div>
  </div>

</header>
  );
};
export default Hero;

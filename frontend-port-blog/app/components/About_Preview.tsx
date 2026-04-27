import { Link } from "react-router";

const AboutPreview = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-6 ">
        <img
          src="/images/myphoto.jpg"
          alt="Profile"
          className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-full mx-auto border-4 mb-4"
        />
        <h1 className="text-3xl font-bold mb-8 text-center">Hi, I'm Vlad</h1>
        <p className="text-gray-300 text-lg mb-4">Frontend Developer</p>

        <p className=" max-w-xl mx-auto leading-relaxed">
          I build modern and responsive web applications using React, TypeScript
          and JavaScript.
        </p>
      </div>
      <ul className="flex flex-wrap pb-4 justify-center gap-2 ">
        {["HTML", "CSS", "JavaScript", "React", "TypeScript", "Next.js"].map(
          (tech) => (
            <li
              key={tech}
              className="px-3 py-1 text-sm bg-gray-700 text-gray-200 rounded-full"
            >
              {tech}
            </li>
          ),
        )}
      </ul>
      <h2 className="text-2xl font-bold mb-2 text-center">
        <Link
          to="/about"
          className="text-blue-400 hover:text-blue-300 transition"
        >
          About Me →
        </Link>
      </h2>
    </>
  );
};

export default AboutPreview;

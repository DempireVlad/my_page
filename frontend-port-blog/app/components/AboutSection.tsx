const AboutSection = () => {
    return (
        <>
        <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">About me</h2>

        <p className="text-gray-600 leading-relaxed">
          I'm a beginner Frontend Developer currently learning modern web
          development. I enjoy building clean and responsive websites and
          improving my programming skills every day.
        </p>

        <p className="text-gray-600 mt-3">
          I started learning programming from scratch and now I'm focused on
          becoming a professional frontend developer.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">My journey</h2>

        <p className="text-gray-600 leading-relaxed">
          I’m transitioning into IT with a passion for creating clean,
          responsive web applications. I began learning HTML, CSS, and
          JavaScript, and have since advanced to working with React. I love
          solving problems, building layouts, and turning designs into real,
          functional websites.
        </p>

        <p className="text-gray-600 mt-3">
          I enjoy solving problems, building layouts and turning designs into
          real websites.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>

        <ul className="flex flex-wrap pb-4  gap-2 ">
          {["HTML", "CSS", "JavaScript", "React", "TypeScript", "Node.js"].map(
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
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Goals</h2>

        <p className="text-gray-600">
          My goal is to get my first job as a Frontend Developer and continue
          growing as a software engineer. I'm currently improving my JavaScript
          and React skills and building portfolio projects.
        </p>
      </section>
        </>
    )
}

export default AboutSection;
import AboutSection from "~/components/AboutSection";

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <img
        src="/images/myphoto.jpg"
        alt="Profile"
        className="w-40 h-40 object-cover rounded-full mx-auto mb-6"
      />

      <h1 className="text-4xl font-bold text-center mb-8">Hi, I'm Vlad</h1>

        <AboutSection />
      
    </div>
  );
};

export default AboutPage;

import heroImage from '../assets/home/Hero.jpg';

const Hero = () => {
  return (
    <section className="bg-white py-5">
      {/* Padding wrapper to match Navbar */}
      <div className="flex flex-col md:flex-row items-center justify-between px-2 sm:px-8 lg:px-20 max-w-screen-xl mx-auto">
        
        {/* Left Side: Heading and Search */}
        <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Be a Hero, Complete Missions, Earn Rewards
          </h1>

          <div className="relative w-full max-w-xl mx-auto md:mx-0">
            <input
              type="text"
              placeholder="Search Mission"
              className="w-full h-16 px-4 pr-12 border border-gray-300 rounded-[15px] text-base outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
            />
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg">
              🔍
            </span>
          </div>
        </div>

        {/* Right Side: Hero Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={heroImage}
            alt="Hero"
            className="max-h-[250px] w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

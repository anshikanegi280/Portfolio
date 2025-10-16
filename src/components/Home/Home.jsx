import React from "react";
import profileImage from "../../assets/profile.png";

const Home = () => {
  return (
    <section
      id="home"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">

        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Anshika Negi
          </h2>
          <h3 className="text-xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
            <span className="text-white">I am a MERN Stack Developer</span>
          </h3>
          <p className="text-base sm:text-lg md:text-lg text-[var(--text-muted)] mb-10 mt-8 leading-relaxed">
            Passionate about crafting dynamic and responsive web applications using the MERN stack. I love turning ideas into reality through code and creating seamless user experiences. 
          </p>

          {/* RESUME BUTTON */}
          <a
            href="https\Users\Anshika Negi\OneDrive\Desktop\myportfolio\portfolio\src\components\Home"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105 btn-accent"
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side */}

        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative flex items-center justify-center">

            {/* Multiple animated rings */}

            <div
              className="absolute rounded-full border-2 border-[rgba(var(--accent-2),0.35)] opacity-30"
              style={{
                width: "100%",
                height: "100%",
                animation: "spin 20s linear infinite",
                transform: "scale(1.15)",
              }}
            ></div>
            <div
              className="absolute rounded-full border border-[rgba(var(--accent),0.28)] opacity-20"
              style={{
                width: "100%",
                height: "100%",
                animation: "spin 15s linear infinite reverse",
                transform: "scale(1.25)",
              }}
            ></div>
            <div
              className="absolute rounded-full border border-[rgba(var(--accent),0.22)] opacity-15"
              style={{
                width: "100%",
                height: "100%",
                animation: "spin 25s linear infinite",
                transform: "scale(1.35)",
              }}
            ></div>

            {/* Glow effect */}

            <div
              className="absolute rounded-full opacity-20"
              style={{
                width: "100%",
                height: "100%",
                background: `radial-gradient(circle, rgba(${getComputedStyle ? '130,69,236' : '130,69,236'}, 0.28) 0%, transparent 70%)`,
                animation: "pulse 4s ease-in-out infinite",
                transform: "scale(1.1)",
              }}
            ></div>

            {/* Profile Image */}

            <img
              src={profileImage}
              alt="Anshika Negi"
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-[20rem] md:h-[20rem] lg:w-[24rem] lg:h-[24rem] border-4 border-[rgba(var(--accent-2),0.6)] rounded-full object-cover relative z-10 transition-transform duration-300 hover:scale-105"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                animation: "gentleFloat 6s ease-in-out infinite, glowPulse 4s ease-in-out infinite",
              }}
            />
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg) scale(var(--scale, 1)); }
          to { transform: rotate(360deg) scale(var(--scale, 1)); }
        }
        @keyframes gentleFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.2; transform: scale(1.1); }
          50% { opacity: 0.4; transform: scale(1.2); }
        }
        @keyframes glowPulse {
          0%, 100% {
            box-shadow: 0 0 40px rgba(130, 69, 236, 0.6), 0 0 80px rgba(50, 150, 255, 0.4);
          }
          50% {
            box-shadow: 0 0 60px rgba(130, 69, 236, 0.8), 0 0 120px rgba(50, 150, 255, 0.6);
          }
        }
      `}</style>
    </section>
  );
}

export default Home;






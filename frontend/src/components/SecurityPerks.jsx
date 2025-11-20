import React from "react";
import { GrShieldSecurity } from "react-icons/gr";
import { FaLock } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { IoIosPeople } from "react-icons/io";
import { motion } from "framer-motion";

export const SecurityPerks = () => {
  const perks = [
    {
      icon: <GrShieldSecurity size={32} />,
      title: "Security Training",
      desc: "Comprehensive cybersecurity training with certification support and hands-on security tools.",
    },
    {
      icon: <FiSettings size={32} />,
      title: "Cutting-Edge Tools",
      desc: "Access to the latest cybersecurity tools, threat intelligence platforms, and security research resources.",
    },
    {
      icon: <FaLock size={32} />,
      title: "Flexible Security",
      desc: "Remote work options, flexible hours for security operations, and secure work environments with VPN access.",
    },
    {
      icon: <IoIosPeople size={42} />,
      title: "Security Community",
      desc: "Join our security team events, attend cybersecurity conferences, and participate in security research initiatives.",
    },
  ];

  return (
    <div className="mx-auto px-5 md:px-10 xl:px-20 bg-black py-12 md:py-20">
      <h1 className="text-3xl md:text-5xl text-gray-50 text-center mb-12 font-semibold">
        Security Perks & Benefits
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-5 md:py-10 mb-10 md:mb-25">
        {perks.map((perk, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.01, y: -5 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white/10 backdrop-blur-lg border border-white/15 
                       px-6 py-6 rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.08)] 
                       hover:bg-white/15 cursor-pointer"
          >
            <div className="mb-3 text-purple-500">{perk.icon}</div>

            <h2 className="text-xl md:text-2xl text-gray-100 font-semibold mb-2">
              {perk.title}
            </h2>

            <p className="text-base text-slate-400 leading-relaxed">
              {perk.desc}
            </p>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.01 }}
        className="
        relative max-w-3xl lg:max-w-7xl mx-auto text-center px-6 md:px-12 py-10 md:py-16
        bg-white/10 backdrop-blur-3xl
        rounded-2xl border border-white/20
        shadow-[0_0_45px_rgba(255,255,255,0.12)]
        transition-all duration-700
        group
      "
      >
        {/* Neon Border Aura */}
        <div
          className="
        absolute inset-0 rounded-2xl
        bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
        opacity-0 group-hover:opacity-40
        blur-2xl transition-all duration-700
        -z-10
      "
        />

        {/* Neon Edge Line */}
        <div
          className="
        absolute inset-0 rounded-2xl
        bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
        opacity-0 group-hover:opacity-100
        transition-all duration-700
        p-[1px]
        -z-10
      "
        >
          <div className="w-full h-full bg-black rounded-2xl backdrop-blur-3xl"></div>
        </div>

        <h1 className="text-blue-300 text-2xl md:text-4xl mb-5 md:mb-10 font-semibold">
          Student? Start Your Cybersecurity Journey Here!
        </h1>

        <p className="text-slate-300 text-lg md:text-xl mb-8 md:mb-14 leading-relaxed">
          Are you a student looking to break into cybersecurity? Our internship
          program offers hands-on training, real-world projects, and industry
          certification. Perfect for B.Tech, BCA, MCA students in Tamil Nadu.
        </p>

        <h2 className="text-xl md:text-2xl text-purple-400 font-medium">
          6 Programs
        </h2>
        <p className="text-slate-400 text-lg md:text-xl mb-8 md:mb-12">
          Ethical Hacking, Digital Forensics, Web Pentesting & more
        </p>

        <h2 className="text-xl md:text-2xl text-purple-400 font-medium">
          Real Projects
        </h2>
        <p className="text-slate-400 text-lg md:text-xl mb-8 md:mb-12">
          Work on actual client security assessments
        </p>

        <h2 className="text-xl md:text-2xl text-purple-400 font-medium">
          Certificate
        </h2>
        <p className="text-slate-400 text-lg md:text-xl mb-8 md:mb-12">
          Industry-recognized certification upon completion
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 max-w-[300px] md:max-w-2xl mx-auto">
          <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 cursor-pointer">
            Explore Cybersecurity Intership
          </button>
          <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 cursor-pointer">
            Explore Web Developmet Intership
          </button>
        </div>
      </motion.div>
      <div className="max-w-3xl md:max-w-7xl text-center rounded-xl md:rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mt-20 mx-auto px-10 md:px-20 py-5 md:py-15 space-y-8">
        <h1 className="text-2xl md:text-5xl text-gray-50">
          Ready to Defend the Digital Frontier?
        </h1>
        <p className="text-lg md:text-xl text-slate-300">
          Don't see a security position that matches your expertise? We're
          always looking for talented cybersecurity professionals to join our
          team. Send us your resume and we'll keep you in mind for future
          opportunities.
        </p>
        <button className="px-7 py-3 cursor-pointer text-xl bg-black text-gray-200 rounded-xl border border-white/80">
          Send Your Resume
        </button>
      </div>
    </div>
  );
};

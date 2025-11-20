import React, { Fragment, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SecurityPosition } from "../components/SecurityPosition";

// COUNT UP COMPONENT (no framer-motion)
const CountUp = ({ end, duration = 2000, isDecimal = false }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 26); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setValue(end);
      } else {
        setValue(isDecimal ? Number(start.toFixed(1)) : Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{value}</span>;
};

const Career = () => {
  return (
    <Fragment>
      <div className="mx-auto px-10 py-30 bg-gradient-to-br from-[#EF4444] via-[#581C87] to-[#000000]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              delay: 0.1,
              ease: "easeOut",
            },
          }}
          exit={{ opacity: 0, y: 50 }}
          className="max-w-xl md:max-w-7xl pt-20 mx-auto px-5 mt-20 flex flex-col justify-center items-center mb-20"
        >
          <h1 className="text-center text-slate-100 font-semibold text-2xl md:text-5xl xl:text-7xl mb-5">
            Join Our Security Team
          </h1>

          <div className="py-2 max-w-2xl">
            <p className="text-xl text-center text-slate-300">
              Defend the digital frontier with us. We're looking for
              cybersecurity professionals who are passionate about protecting
              organizations from evolving threats.
            </p>
          </div>
        </motion.div>

        <div className="flex items-center justify-center space-x-7 text-gray-300 mx-auto mb-20">
          <button className="px-5 py-4 rounded-xl cursor-pointer hover:shadow-2xl bg-black/70 hover:bg-black/90 text-white border border-white/20">
            View Security Positions
          </button>
          <button className="px-5 py-4 rounded-xl cursor-pointer bg-white/10 hover:bg-white/20 text-white border border-white/30">
            Learn More About
          </button>
        </div>
      </div>

      {/* Count-up Stats Section */}
      <div className="bg-[#000000] px-10 py-20 grid grid-cols-2 md:grid-cols-4 gap-5">
        <div className="text-center">
          <p className="text-blue-300 text-3xl mb-2">
            <CountUp end={50} />+
          </p>
          <p className="text-gray-200 text-xl">Security Experts</p>
        </div>

        <div className="text-center">
          <p className="text-blue-300 text-3xl mb-2">
            <CountUp end={100} />+
          </p>
          <p className="text-gray-200 text-xl">Security Assessments</p>
        </div>

        <div className="text-center">
          <p className="text-blue-300 text-3xl mb-2">
            <CountUp end={15} />+
          </p>
          <p className="text-gray-200 text-xl">Industries Protected</p>
        </div>

        <div className="text-center">
          <p className="text-blue-300 text-3xl mb-2">
            <CountUp end={99.9} isDecimal={true} />%
          </p>
          <p className="text-gray-200 text-xl">Threat Detection Rate</p>
        </div>
      </div>
      <SecurityPosition />
    </Fragment>
  );
};

export default Career;

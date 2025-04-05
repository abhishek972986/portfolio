import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import html from "../assets/javascript-abstract-concept-illustration_335657-3702.jpg";

const Animating = () => {
  const { scrollY } = useScroll();
  const height = useTransform(scrollY, [0, 3300], ["0%", "100%"]);

  return (
    <div className="relative min-h-[100vh] z-10 overflow-x-hidden">
      <motion.div
        className="w-[24px] bg-purple absolute left-[50%] z-20"
        style={{ height }}
      />
      {/* Animated Section */}
      <motion.div className="w-full rounded-2xl bg-[#f3f3f5] border lg:min-h-[123vh] md:min-h-[150vh] page2">
        <motion.div
          className="headbold text-center text-8xl font-bold w-full my-10 bottombar"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            duration: 1,
            ease: "easeOut",
          }}
          viewport={{ once: true, amount: 0.2 }}
        >
          Journey
        </motion.div>

        <div className="relative w-full min-h-screen h-[110vh] py-10">
          {/* HTML Card */}
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              duration: 1.5,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.01, rotate: 10 }}
            className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white border absolute lg:right-[25%] lg:top-[50px] md:top-[30px] md:right-[10%]"
          >
            <div className="flex justify-center md:max-h-[150px] lg:max-h-full">
              <img
                className="h-1/2 w-1/2 object-cover"
                src={html}
                alt="HTML Illustration"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 headwork">HTML</h2>
              <p className="text-gray-600 mt-2">
                The backbone of the web — structure your content with clean, semantic HTML.
              </p>
            </div>
          </motion.div>

          {/* CSS Card */}
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
          
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              duration: 1.5,
              ease: "easeOut",
              delay: 0.3,
            }}
            viewport={{ once: true, amount: 1 }}
            whileHover={{ scale: 1.01, rotate: -10 }}
            className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white border absolute lg:left-[30%] lg:top-[230px] md:top-[230px]  z-10"
          >
            <div className="flex justify-center md:max-h-[150px] lg:max-h-full">
              <img
                className="h-1/2 w-1/2 object-cover"
                src={html}
                alt="CSS Illustration"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 headwork">CSS</h2>
              <p className="text-gray-600 mt-2">
                Design with precision — CSS lets you craft stunning layouts, animations, and responsive experiences with ease.
              </p>
            </div>
          </motion.div>

          {/* JavaScript Card */}
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              duration: 1.5,
              ease: "easeOut",
              delay: 0.6,
            }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.01, rotate: 10 }}
            className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white border absolute lg:right-[25%] lg:top-[400px] md:top-[350px] md:right-[10%]"
          >
            <div className="flex justify-center md:max-h-[150px] lg:max-h-full">
              <img
                className="h-1/2 w-1/2 object-cover"
                src={html}
                alt="JavaScript Illustration"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 headwork">JavaScript</h2>
              <p className="text-gray-600 mt-2">
                Add life to your websites — create dynamic, interactive experiences using JavaScript.
              </p>
            </div>
          </motion.div>

          {/* React Card */}
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              duration: 1.5,
              ease: "easeOut",
              delay: 0.9,
            }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.01, rotate: -10 }}
            className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white border absolute lg:left-[30%] lg:top-[630px] md:top-[630px] md:left-[10%]"
          >
            <div className="flex justify-center md:max-h-[150px] lg:max-h-full">
              <img
                className="h-1/2 w-1/2 object-cover"
                src={html}
                alt="React Illustration"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 headwork">React</h2>
              <p className="text-gray-600 mt-2">
                Build powerful user interfaces — React makes frontend development fast and efficient.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Animating;
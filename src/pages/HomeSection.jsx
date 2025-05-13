import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

function HomeSection() {
  const ref = useRef();
  const isInView = useInView(ref, { once: false, amount: 0.4 });
  return (
    <section
      id="home"
      className="min-h-screen px-6 py-8 md:py-16 flex items-center"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-y-10 md:gap-x-20 mx-auto w-full">
        {/* Text Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6 }}
          className="md:w-2/5 text-center md:bg-white md:text-left md:p-6 md:rounded-md md:shadow-md md:shadow-darkYellow"
        >
          <h1 className="text-4xl md:text-5xl text-blue font-bold mb-2 tracking-wide">
            Hanief Dafi Satria
          </h1>

          <h1 className="text-2xl md:text-3xl text-darkBlue font-semibold leading-tight">
            Hi! I'm <br />
            <span className="text-darkBlue">
              <Typewriter
                words={[
                  "Mobile Developer",
                  "Fullstack Developer",
                  "Data Analyst",
                ]}
                cursor
                loop={0}
                typeSpeed={75}
                deleteSpeed={60}
                delaySpeed={1500}
              />
            </span>
          </h1>

          <p className="text-lg text-black mt-4 mb-6 leading-relaxed">
            Passionate learner in creating useful applications. Active in
            exploring new tools and frameworks. Believing in learning by doing,
            each project is an opportunity to refine skills and explore new
            ideas.
          </p>

          <div className="flex items-center flex-wrap justify-center md:justify-end gap-4">
            {/* Sosmed Icons */}
            <div className="flex gap-3">
              <a
                href="https://github.com/dafisatria"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/icons/github.svg" className="w-8 h-8 transition" />
              </a>
              <a
                href="https://linkedin.com/in/hanief-dafi-satria/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/icons/linkedin.svg" className="w-8 h-8 transition" />
              </a>
              <a
                href="https://www.instagram.com/dafi.satria/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/icons/instagram.svg"
                  className="w-8 h-8 transition"
                />
              </a>
              <a href="mailto:satria1002@gmail.com">
                <img src="/icons/mail.svg" className="w-8 h-8 transition" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative w-40 h-40 md:w-56 md:h-80 lg:w-64 lg:h-[22rem] md:ml-auto bg-white rounded-full md:rounded-md shadow-md shadow-darkYellow"
        >
          <img
            src="/profile-img.png"
            alt="Hanief Dafi Satria"
            className="w-full h-full object-cover object-top rounded-full md:rounded-md"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default HomeSection;

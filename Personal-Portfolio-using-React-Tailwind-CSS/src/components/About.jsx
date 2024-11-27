import aboutImg from "../assets/images/Festo.jpg";
import aboutImg1 from "../assets/images/John.jpg";
import aboutImg2 from "../assets/images/Filoteus.jpg";
import { ABOUT_TEXT, ABOUT_ME, Mtaalam } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-12">
      {/* Section Title */}
      <h2 className="my-12 text-center text-4xl font-bold">
        About<span className="text-neutral-500"> Us</span>
      </h2>

      {/* Third Row: Text and Image (Now First Row) */}
      <div className="flex flex-wrap justify-center mt-12">
        {/* Text */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 p-4"
        >
          <p className="text-lg leading-relaxed text-center">{Mtaalam}</p>
        </motion.div>

        {/* Image */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 p-4"
        >
          <div className="flex items-center justify-center">
            <img
              className="rounded-2xl shadow-lg"
              src={aboutImg2}
              style={{ aspectRatio: '514 / 540', objectFit: 'cover' }}
              alt="Filoteus"
            />
          </div>
        </motion.div>
      </div>

      {/* First Row: Image and Text (Now Second Row) */}
      <div className="flex flex-wrap lg:items-center">
        {/* Image */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 p-4"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl shadow-lg" src={aboutImg} alt="Festo" />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 p-4"
        >
          <p className="text-lg leading-relaxed text-justify">{ABOUT_TEXT}</p>
        </motion.div>
      </div>

      {/* Second Row: Text and Image (Now Third Row) */}
      <div className="flex flex-wrap lg:items-center mt-12">
        {/* Text */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 p-4"
        >
          <p className="text-lg leading-relaxed text-justify">{ABOUT_ME}</p>
        </motion.div>

        {/* Image */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 p-4"
        >
          <div className="flex items-center justify-center">
            <img
              className="rounded-2xl shadow-lg"
              src={aboutImg1}
              alt="John Makweba"
              style={{ aspectRatio: '514 / 540', objectFit: 'cover' }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

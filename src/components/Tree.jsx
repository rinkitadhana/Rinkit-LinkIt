import Footer from "../parts/Footer";
import Header from "../parts/Header";
import Links from "../parts/Links";
import { motion } from "framer-motion";

const Tree = () => {
  const imgURL = "./userIMG/dp.jpeg"; //ENTER YOUR IMG URL HERE
  const name = "Rinkit Adhana"; //ENTER YOUR FULL NAME HERE
  const bio =
    "Full-Stack Developer and Freelancer, always building and learning.."; //ENTER YOUR BIO HERE

  return (
    <motion.div
      initial={{ opacity: 1, y: -200 }} // Start with 0 opacity and slightly above the final position
      animate={{ opacity: 1, y: 0 }} // Fade in and move down to the original position
      transition={{ duration: 1 }} // Duration of the animation
    >
      <div className="flex justify-center md:flex-row flex-col  ">
        <div className=" md:w-2/5 ">
          <div className="flex flex-row justify-between items-center mt-6 px-2">
            <div className=" font-bold text-green-500 text-3xl  font-bricolage ">
              <span className=" text-gray-600">Link</span>It
            </div>
          </div>

          <Header img={imgURL} name={name} bio={bio} />

          <div>
            <Links name="Portfolio" url="https://therinkit.vercel.app" />
            <Links name="Twitter" url="https://x.com/rnkktt" />
            <Links name="Github" url="https://github.com/rinkitadhana" />
            <Links
              name="Linked In"
              url="https://www.linkedin.com/in/rinkitadhana/"
            />
            <Links name="Leetcode" url="https://leetcode.com/u/therinkit/" />
            <Links name="Instagram" url="https://www.instagram.com/rnkktt/" />
          </div>
          <Footer />
        </div>
      </div>
    </motion.div>
  );
};

export default Tree;

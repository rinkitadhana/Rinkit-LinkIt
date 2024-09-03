import { motion } from "framer-motion";

const Links = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }} // Start with 0 opacity and slightly above the final position
      animate={{ opacity: 1, y: 0 }} // Fade in and move down to the original position
      transition={{ duration: 1 }} // Duration of the animation
    >
      <div className="mt-4 px-4">
        <a href={props.url} target="_blank">
          <div className="bg-[#EBEEF1] rounded-lg flex justify-center py-4 text-[1.07rem] transform transition duration-150 hover:scale-105 ">
            <div className="font-semibold">{props.name}</div>
          </div>
        </a>
      </div>
    </motion.div>
  );
};

export default Links;

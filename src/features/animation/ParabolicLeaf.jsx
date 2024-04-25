import { motion } from "framer-motion";
import { IoIosLeaf } from "react-icons/io";

function ParabolicLeaf() {
  const parabolicPath = {
    initial: { x: 0, y: 0, scale: 1, rotate: 0 },
    animate: {
      x: [0, 180, 0], // Horizontal movement
      y: [0, 450, 0], // Vertical movement (parabolic)
      rotate: [0, 360], // Optional: rotate the leaf for a more dynamic effect
      scale: [1, 1.5, 1], // Optional: change scale for more dynamics
      transition: {
        x: {
          duration: 5, // Duration of the entire animation
          repeat: Infinity, // Repeat indefinitely
          repeatType: "loop",
          ease: "easeInOut", // Smooth transition for the movement
        },
        y: {
          duration: 20,
          repeat: Infinity,
          repeatType: "loop",
          ease: [0.42, 0, 0.58, 1], // Custom bezier curve for more natural movement
        },
        rotate: {
          duration: 10,
          repeat: Infinity,
          ease: "linear", // Constant rotation speed
        },
      },
    },
  };

  return (
    <motion.div
      variants={parabolicPath}
      initial="initial"
      animate="animate"
      style={{ display: "inline-block", width: "50px", height: "50px" }}
    >
      {/* Replace this img element with your leaf icon */}
      <IoIosLeaf />
    </motion.div>
  );
}

export default ParabolicLeaf;

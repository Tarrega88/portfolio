import { motion } from "framer-motion";

function FallingLeaf() {
  const variants = {
    fall: {
      x: [0, 100, 200, 300, 400], // Horizontal displacement
      y: [0, 150, 50, 250, 0], // Vertical displacement
      rotate: [0, 10, -10, 10, 0], // Rotates the leaf
      transition: {
        x: { type: "spring", stiffness: 100, duration: 4 },
        y: { type: "spring", stiffness: 100, duration: 4 },
        rotate: { duration: 4 },
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="fall"
      animate="fall"
      style={{
        width: 50,
        height: 50,
        backgroundColor: "orange", // Replace this with an image of a leaf if available
        borderRadius: "50%",
        position: "absolute",
        top: "20%",
        left: "40%",
      }}
    />
  );
}

export default FallingLeaf;

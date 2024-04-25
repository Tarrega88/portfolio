import { motion } from "framer-motion";
import { IoIosLeaf } from "react-icons/io";

function FallingLeafPath() {
  return (
    <motion.div
      initial={{ pathLength: 0, rotate: 0 }}
      animate={{ pathLength: 1, rotate: 360 }}
      transition={{
        pathLength: { duration: 2, ease: "easeInOut" },
        rotate: { duration: 2, loop: Infinity, ease: "easeInOut" },
      }}
      style={{
        width: 50,
        height: 50,
        backgroundSize: "cover",
        position: "absolute",
        top: "20%",
        left: "40%",
      }}
    >
      <IoIosLeaf />
    </motion.div>
  );
}

export default FallingLeafPath;

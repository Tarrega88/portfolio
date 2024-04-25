import { IoIosLeaf } from "react-icons/io";
import {
  useVelocity,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect } from "react";

function FallingLeaves() {
  return (
    <motion.div
      animate={{
        x: 10,
        y: 40,
        boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
        position: "fixed",
      }}
      transition={{ duration: 2 }}
    >
      <div className="size-16 bg-zinc-100"></div>
    </motion.div>
  );
}

export default FallingLeaves;

import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}) => {
  const variants = {
    initial: { backgroundPosition: "0 50%" },
    animate: {
      backgroundPosition: ["0 50%", "100% 50%", "0 50%"],
    },
  };

  return (
    <div className={cn("relative p-[2px] group rounded-2xl", containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? { duration: 5, repeat: Infinity, repeatType: "reverse" }
            : undefined
        }
        style={{ backgroundSize: "400% 400%" }}
        className={cn(
          "absolute inset-0 rounded-2xl z-[1] opacity-40 group-hover:opacity-70 blur-sm transition duration-500",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#c8956c,transparent),radial-gradient(circle_farthest-side_at_100%_0,#f5c9a0,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#a87550,transparent),radial-gradient(circle_farthest-side_at_0_0,#e8a87c,#f5ede4)]"
        )}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? { duration: 5, repeat: Infinity, repeatType: "reverse" }
            : undefined
        }
        style={{ backgroundSize: "400% 400%" }}
        className={cn(
          "absolute inset-0 rounded-2xl z-[1]",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#c8956c,transparent),radial-gradient(circle_farthest-side_at_100%_0,#f5c9a0,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#a87550,transparent),radial-gradient(circle_farthest-side_at_0_0,#e8a87c,#f5ede4)]"
        )}
      />
      <div className={cn("relative z-10 rounded-[14px]", className)}>
        {children}
      </div>
    </div>
  );
};

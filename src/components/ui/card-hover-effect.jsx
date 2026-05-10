import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { cn } from "../../lib/utils";

export const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2", className)}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full cursor-pointer"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={item.onClick}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-accent/10 block rounded-2xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
              />
            )}
          </AnimatePresence>
          <HoverCard>
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-52 object-cover rounded-xl mb-4"
              />
            )}
            <HoverCardCategory>{item.category}</HoverCardCategory>
            <HoverCardTitle>{item.title}</HoverCardTitle>
            <HoverCardDescription>{item.description}</HoverCardDescription>
            {item.link && (
              <span className="mt-4 text-accent text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                View Details →
              </span>
            )}
          </HoverCard>
        </div>
      ))}
    </div>
  );
};

export const HoverCard = ({ className, children }) => (
  <div
    className={cn(
      "rounded-2xl h-full w-full p-5 overflow-hidden bg-white border border-brand-border group-hover:border-accent/40 relative z-20 transition-all duration-300 shadow-sm group-hover:shadow-lg",
      className
    )}
  >
    <div className="relative z-50">{children}</div>
  </div>
);

export const HoverCardCategory = ({ className, children }) => (
  <p className={cn("text-xs font-semibold tracking-widest uppercase text-accent mb-1", className)}>
    {children}
  </p>
);

export const HoverCardTitle = ({ className, children }) => (
  <h3
    className={cn("font-heading font-bold text-brand-text text-lg leading-tight mb-2", className)}
    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
  >
    {children}
  </h3>
);

export const HoverCardDescription = ({ className, children }) => (
  <p className={cn("text-brand-muted text-sm leading-relaxed", className)}>{children}</p>
);

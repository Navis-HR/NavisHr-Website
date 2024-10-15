import { Variants } from "framer-motion";

export const slideContentVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const subtitleVariants: Variants = {
  initial: { y: -50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

export const headingVariants: Variants = {
  initial: { scale: 0.5, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
};

export const paragraphVariants: Variants = {
  initial: { x: -50, opacity: 0 },
  animate: { x: 0, opacity: 1 },
};

export const buttonVariants: Variants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

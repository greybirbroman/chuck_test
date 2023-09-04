export const cardVariants = {
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 1,
        type: "spring",
      },
    }),
    hidden: {
      opacity: 0,
      x: -100,
    },
  };
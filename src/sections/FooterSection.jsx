import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

function FooterSection() {
  const footerData = [
    ["FAQ", "Investor Relations", "Privacy", "Speed Test"],
    ["Help Center", "Jobs", "Cookie Preferences", "Legal Notices"],
    ["Account", "Ways to Watch", "Corporate Information", "Only on Netflix"],
    ["Media Centre", "Terms of Use", "Contact Us"],
  ];

  return (
    <motion.footer
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-black text-gray-400 py-10 px-4 md:px-16 text-sm"
    >
      <motion.div
        variants={containerVariants}
        className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-gray-700 pt-8"
      >
        {footerData.map((column, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="space-y-3"
          >
            {column.map((link, i) => (
              <motion.button
                key={i}
                variants={itemVariants}
                className="hover:underline block text-left"
              >
                {link}
              </motion.button>
            ))}
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="max-w-6xl mx-auto mt-8 text-gray-500 text-xs"
      >
        <p>Netflix India</p>
      </motion.div>
    </motion.footer>
  );
}

export default FooterSection;

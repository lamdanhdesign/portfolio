import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IconArrow from "../assets/images/icon-header/double_arrow_Rounded.svg";
import Rocket1 from "../assets/images/icon-header/1.png";
import Rocket2 from "../assets/images/icon-header/2.png";
import Rocket3 from "../assets/images/icon-header/3.png";
import Rocket4 from "../assets/images/icon-header/4.png";
import "../styles/icon-header.scss";
import { createPortal } from "react-dom";

const HeaderSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const items = [
    { icon: Rocket1, title: "About me" },
    { icon: Rocket2, title: "Skill" },
    { icon: Rocket3, title: "Project" },
    { icon: Rocket4, title: "Contact" },
  ];

  console.log("hoveredIndex", hoveredIndex);
  return (
    <motion.div
      className="sidebar-header-icon"
      initial={{ x: 80, opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
        width: isOpen ? 58 : 58,
        paddingLeft: isOpen ? 0 : 0,
      }}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
      }}
    >
      {/* Toggle button */}
      {!isOpen && (
        <motion.div
          className="sidebar-toggle"
          onClick={() => setIsOpen(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <img src={IconArrow} alt="toggle" />
        </motion.div>
      )}

      {/* Sidebar content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="sidebar-items"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close button */}
            <div className="sidebar-close" onClick={() => setIsOpen(false)}>
              <img src={IconArrow} alt="close" className="rotated" />
            </div>

            {/* Sidebar items */}
            {items.map((item, index) => (
              <React.Fragment key={index}>
                <motion.div
                  className="sidebar-item"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <img src={item.icon} alt={item.title} className="icon" />

                  {/* Tooltip */}
                  {hoveredIndex === index && (
                    <AnimatePresence>
                      <motion.div
                        className="tooltip"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.title}
                      </motion.div>
                    </AnimatePresence>
                  )}
                </motion.div>

                {/* Separator - chỉ hiển thị giữa các item, không có sau item cuối */}
                {index < items.length - 0 && <div className="separator" />}
              </React.Fragment>
            ))}

            <div className="sidebar-lang">VN</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default HeaderSidebar;

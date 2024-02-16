import React from 'react';
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const BackToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className="back-to-top"
      onClick={scrollToTop}
    >
      <MdOutlineKeyboardArrowUp />
    </button>
  );
};

export default BackToTopButton;

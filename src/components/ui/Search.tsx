"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import search from "../../../public/Images/search.svg";
import { X } from "lucide-react";

const Search = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  // ESC tugmasi bosilganda Search yopilishi uchun event qo‘shamiz
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay - fon qorayishi */}
          <motion.div
            className="fixed inset-0 bg-[#0000004d] z-[99998]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose} // Overlay bosilganda yopiladi
          />

          <div className="fixed top-4 left-0 right-0 z-[99999]">
            <div className="container relative">
              <motion.div
                className="flex items-center bg-[#F37325] py-[14px] rounded-xl relative"
                initial={{ width: "50px" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <motion.div
                  className="flex items-center w-full mx-auto max-w-[1001px] pl-[15px] pr-[50px] md:pr-[80px] xl:pr-[15px]"
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-between relative w-full ">
                    <input
                      type="text"
                      className="w-full h-full py-2.5 bg-transparent border-b border-[#fff] text-white placeholder:text-white text-lg outline-none"
                      placeholder="Izlash"
                    />
                    <button className="flex items-center justify-center absolute right-0">
                      <Image
                        src={search}
                        alt="search"   
                        width={24}
                        height={24}
                        className="w-6 h-6 cursor-pointer"
                      />
                    </button>
                  </div>
                </motion.div>

                {/* Yopish tugmasi */}
                <motion.button
                  className="flex items-center justify-center absolute right-4 xl:right-8"
                  onClick={onClose}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 90 }}
                    transition={{ duration: 0.3 }}
                  >
                    <X className="w-6 h-6 text-white" />
                  </motion.div>
                </motion.button>
                <motion.div
                  className="absolute bg-[#FFFFFF] w-full py-[23px] rounded-xl top-[calc(100%+8px)] shadow-md"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <ul className="mx-auto w-full max-w-[1001px] px-[15px]">
                    <li>Natijalar...</li>
                  </ul>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Search;

"use client";
import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ModalProps {
  image: string;
  isOpen: boolean;
  onClose: () => void;
  position: { x: number; y: number; width: number; height: number };
}

const CompanyImageModal: React.FC<ModalProps> = ({
  image,
  isOpen,
  onClose,
  position,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button
            onClick={onClose}
            className="absolute top-[-80px] right-2 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80 "
          >
            <X size={24} />
          </button>
          <motion.div
            className="absolute overflow-hidden"
            initial={{
              width: position.width,
              height: position.height,
              top: position.y,
              left: position.x,
            }}
            animate={{
              top: "50%",
              left: "50%",
              x: "-50%",
              y: "-50%",
            }}
            exit={{
              width: position.width,
              height: position.height,
              top: position.y,
              left: position.x,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={image}
              alt="certificate"
              quality={100}
              fill
              className="w-full h-full"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CompanyImageModal;

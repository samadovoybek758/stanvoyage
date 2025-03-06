"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, X } from "lucide-react";
import Image from "next/image";
import sher from "../../../public/Images/sher.svg";

export default function ShareButton({ productId }: { productId: string }) {
  const [shareUrl, setShareUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSharing, setIsSharing] = useState(false);
  const [canShare, setCanShare] = useState(false);

  useEffect(() => {
    setShareUrl(`${window.location.origin}/products/${productId}`);
    setCanShare(!!navigator.share); 
  }, [productId]);

  const handleShare = async () => {
    if (isSharing) return;

    if (canShare) {
      setIsSharing(true);
      try {
        await navigator.share({
          title: "Mahsulotni ko‘ring!",
          text: "Sizga ushbu mahsulot yoqishi mumkin!",
          url: shareUrl,
        });
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
          console.warn("Foydalanuvchi ulashishni bekor qildi.");
        } else {
          console.error("Ulashishda xatolik:", error);
        }
      } finally {
        setTimeout(() => setIsSharing(false), 1000);
      }
    } else {
      setIsOpen(true);
    }
  };

  const socialLinks = {
    telegram: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      shareUrl
    )}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(
      shareUrl
    )}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      shareUrl
    )}`,
  };

  return (
    <>
      {/* Share Button */}
      <button onClick={handleShare} className="flex gap-[7px] items-center">
        <Image width={18} height={18} alt="send" src={sher} />
        <span>Ulashish</span>
      </button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg w-80 relative"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 text-gray-500"
              >
                <X size={24} />
              </button>

              <h2 className="text-lg font-semibold mb-4">
                Mahsulotni ulashish
              </h2>

              {/* Social Buttons */}
              <div className="flex flex-col gap-3">
                <a
                  href={socialLinks.telegram}
                  target="_blank"
                  className="bg-blue-500 text-white px-4 py-2 rounded text-center"
                >
                  Telegram
                </a>
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  className="bg-blue-700 text-white px-4 py-2 rounded text-center"
                >
                  Facebook
                </a>
                <a
                  href={socialLinks.whatsapp}
                  target="_blank"
                  className="bg-green-500 text-white px-4 py-2 rounded text-center"
                >
                  WhatsApp
                </a>
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  className="bg-blue-400 text-white px-4 py-2 rounded text-center"
                >
                  Twitter
                </a>
              </div>

              {/* Copy Button */}
              <button
                onClick={() => {
                  navigator.clipboard.writeText(shareUrl);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className="flex items-center justify-center w-full mt-4 text-gray-700 bg-gray-200 px-4 py-2 rounded"
              >
                {copied ? (
                  "✅ Nusxalandi"
                ) : (
                  <>
                    <Copy size={16} className="mr-2" /> Nusxalash
                  </>
                )}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

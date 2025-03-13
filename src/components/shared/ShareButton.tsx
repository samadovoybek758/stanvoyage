// "use client";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Copy, X } from "lucide-react";
// import Image from "next/image";
// import sher from "../../../public/Images/sher.svg";

// export default function ShareButton({ productId }: { productId: string }) {
//   const [shareUrl, setShareUrl] = useState("");
//   const [copied, setCopied] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const [isSharing, setIsSharing] = useState(false);
//   const [canShare, setCanShare] = useState(false);

//   useEffect(() => {
//     setShareUrl(`${window.location.origin}/products/${productId}`);
//     setCanShare(!!navigator.share);
//   }, [productId]);

//   const handleShare = async () => {
//     if (isSharing) return;

//     if (canShare) {
//       setIsSharing(true);
//       try {
//         await navigator.share({
//           title: "Mahsulotni ko‘ring!",
//           text: "Sizga ushbu mahsulot yoqishi mumkin!",
//           url: shareUrl,
//         });
//       } catch (error) {
//         if (error instanceof Error && error.name === "AbortError") {
//           console.warn("Foydalanuvchi ulashishni bekor qildi.");
//         } else {
//           console.error("Ulashishda xatolik:", error);
//         }
//       } finally {
//         setTimeout(() => setIsSharing(false), 1000);
//       }
//     } else {
//       setIsOpen(true);
//     }
//   };

//   const socialLinks = {
//     telegram: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}`,
//     facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
//       shareUrl
//     )}`,
//     whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(
//       shareUrl
//     )}`,
//     twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
//       shareUrl
//     )}`,
//   };

//   return (
//     <>
//       {/* Share Button */}
//       <button onClick={handleShare} className="flex gap-[7px] items-center">
//         <Image width={18} height={18} alt="send" src={sher} />
//         <span>Ulashish</span>
//       </button>

//       {/* Modal */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="bg-white p-6 rounded-lg shadow-lg w-80 relative"
//               initial={{ y: 50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: 50, opacity: 0 }}
//             >
//               {/* Close Button */}
//               <button
//                 onClick={() => setIsOpen(false)}
//                 className="absolute top-2 right-2 text-gray-500"
//               >
//                 <X size={24} />
//               </button>

//               <h2 className="text-lg font-semibold mb-4">
//                 Mahsulotni ulashish
//               </h2>

//               {/* Social Buttons */}
//               <div className="flex flex-col gap-3">
//                 <a
//                   href={socialLinks.telegram}
//                   target="_blank"
//                   className="bg-blue-500 text-white px-4 py-2 rounded text-center"
//                 >
//                   Telegram
//                 </a>
//                 <a
//                   href={socialLinks.facebook}
//                   target="_blank"
//                   className="bg-blue-700 text-white px-4 py-2 rounded text-center"
//                 >
//                   Facebook
//                 </a>
//                 <a
//                   href={socialLinks.whatsapp}
//                   target="_blank"
//                   className="bg-green-500 text-white px-4 py-2 rounded text-center"
//                 >
//                   WhatsApp
//                 </a>
//                 <a
//                   href={socialLinks.twitter}
//                   target="_blank"
//                   className="bg-blue-400 text-white px-4 py-2 rounded text-center"
//                 >
//                   Twitter
//                 </a>
//               </div>

//               {/* Copy Button */}
//               <button
//                 onClick={() => {
//                   navigator.clipboard.writeText(shareUrl);
//                   setCopied(true);
//                   setTimeout(() => setCopied(false), 2000);
//                 }}
//                 className="flex items-center justify-center w-full mt-4 text-gray-700 bg-gray-200 px-4 py-2 rounded"
//               >
//                 {copied ? (
//                   "✅ Nusxalandi"
//                 ) : (
//                   <>
//                     <Copy size={16} className="mr-2" /> Nusxalash
//                   </>
//                 )}
//               </button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, X } from "lucide-react";
import Image from "next/image";
import sher from "../../../public/Images/sher.svg";
import { useLocale, useTranslations } from "next-intl";

export default function ShareButton({ productId }: { productId: string }) {
  const [shareUrl, setShareUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSharing, setIsSharing] = useState(false);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const [canUseNativeShare, setCanUseNativeShare] = useState(false);
  const [clipboardError, setClipboardError] = useState(false);
  const local = useLocale();
  const t = useTranslations("news");
  useEffect(() => {
    // Set the share URL
    setShareUrl(`${window.location.origin}/${local}/news/${productId}`);

    // Check if we're on mobile/tablet
    const checkDeviceType = () => {
      const mobileTabletRegex =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Tablet|Mobile/i;
      setIsMobileOrTablet(mobileTabletRegex.test(navigator.userAgent));

      // Check if native sharing is available (Web Share API)
      setCanUseNativeShare(
        typeof navigator !== "undefined" && !!navigator.share
      );
    };

    checkDeviceType();
  }, [productId, local]);

  const handleShare = async () => {
    if (isSharing) return;

    // Decision logic:
    // 1. If mobile/tablet AND native share is available, use native
    // 2. Otherwise (desktop or no native share), show modal
    if (isMobileOrTablet && canUseNativeShare) {
      setIsSharing(true);
      try {
        await navigator.share({
          title: "Mahsulotni ko'ring!",
          text: "Sizga ushbu mahsulot yoqishi mumkin!",
          url: shareUrl,
        });
      } catch (error) {
        // If native sharing fails or is canceled, show the modal as fallback
        if (error instanceof Error && error.name !== "AbortError") {
          console.error("Native sharing failed:", error);
          setIsOpen(true);
        }
      } finally {
        setTimeout(() => setIsSharing(false), 1000);
      }
    } else {
      // For desktop computers, always show the modal
      setIsOpen(true);
    }
  };

  const handleCopyToClipboard = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(shareUrl);
      } else {
        // Fallback: Hidden textarea orqali nusxalash
        const textArea = document.createElement("textarea");
        textArea.value = shareUrl;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        setClipboardError(false);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Clipboard error:", error);
    }
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      closeModal();
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
      <button
        onClick={handleShare}
        className="flex gap-[7px] items-center"
        aria-label="Ulashish"
        disabled={isSharing}
      >
        <Image width={18} height={18} alt="share icon" src={sher} />
        <span>{isSharing ? t("loading") : t("share")}</span>
      </button>

      {/* Modal - Only shown on desktop or as fallback */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="share-modal-title"
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg w-80 relative"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              onKeyDown={handleKeyDown}
              tabIndex={-1}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                aria-label={t("close")}
              >
                <X size={24} />
              </button>

              <h2 id="share-modal-title" className="text-lg font-semibold mb-4">
                Mahsulotni ulashish
              </h2>

              {/* Social Buttons */}
              <div className="flex flex-col gap-3">
                <a
                  href={socialLinks.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-4 py-2 rounded text-center hover:bg-blue-600 transition-colors"
                  aria-label={t("telegram")}
                >
                  Telegram
                </a>
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-700 text-white px-4 py-2 rounded text-center hover:bg-blue-800 transition-colors"
                  aria-label={t("facebook")}
                >
                  {t("facebook")}
                </a>
                <a
                  href={socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-4 py-2 rounded text-center hover:bg-green-600 transition-colors"
                  aria-label={t("whatsapp")}
                >
                  {t("whatsapp")}
                </a>
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-400 text-white px-4 py-2 rounded text-center hover:bg-blue-500 transition-colors"
                  aria-label={t("twitter")}
                >
                  {t("twitter")}
                </a>
              </div>

              {/* Copy Button */}
              <button
                onClick={handleCopyToClipboard}
                className={`flex items-center justify-center w-full mt-4 px-4 py-2 rounded transition-colors ${
                  clipboardError
                    ? "bg-red-200 text-red-700"
                    : copied
                    ? "bg-green-200 text-green-700"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                aria-live="polite"
              >
                {clipboardError ? (
                  t("error")
                ) : copied ? (
                  t("success")
                ) : (
                  <>
                    <Copy size={16} className="mr-2" /> {t("copy")}
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

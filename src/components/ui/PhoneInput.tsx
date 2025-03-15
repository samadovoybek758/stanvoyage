// "use client";
// import React, { useState } from "react";

// interface PhoneInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
//   label?: string;
//   error?: string;
//   className?: string;
// }

// const PhoneInput: React.FC<PhoneInputProps> = ({
//   label,
//   error,
//   className,
//   onChange,
//   ...props
// }) => {
//   const [phone, setPhone] = useState("+");

//   // ✅ Raqam formatlash funksiyasi
//   const formatPhoneNumber = (inputValue: string) => {
//     let cleanedValue = inputValue.replace(/[^\d+]/g, ""); // Faqat + va raqam qabul qilinadi
//     if (!cleanedValue.startsWith("+")) {
//       cleanedValue = "+" + cleanedValue; // Majburiy + belgisi
//     }

//     // Raqamlarni xalqaro formatga yaqin shaklda joylashtirish
//     let formattedNumber = cleanedValue.replace(
//       /(\+\d{1,3})(\d{3})(\d{3})(\d{4})/,
//       "$1 $2 $3 $4"
//     );
//     return formattedNumber.trim();
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const formattedNumber = formatPhoneNumber(e.target.value);
//     setPhone(formattedNumber);
//     onChange &&
//       onChange({ target: { name: props.name, value: formattedNumber } });
//   };

//   return (
//     <div className={`flex flex-col gap-1 w-full ${className}`}>
//       {label && <label className="text-gray-700 font-medium">{label}</label>}
//       <input
//         type="tel"
//         value={phone}
//         onChange={handleChange}
//         className={`w-full bg-[#F7F7F7] font-normal text-base placeholder:text-[#9F9F9F] rounded-lg outline-none py-[14.5px] sm:py-[18px] px-[20px] text-[#080808] border ${
//           error ? "border-[#F37325]" : "border-transparent"
//         }`}
//         {...props}
//       />
//       {error && <span className="text-[#F37325] text-sm">{error}</span>}
//     </div>
//   );
// };

// export default PhoneInput;

import Image from "next/image";
import ogImage from "../../../public/Images/og-image.jpg";

export default function OGImage() {
  return (
    <Image
      src={ogImage}
      width={1200}
      height={630}
      alt="Samo Textile"
      priority
    />
  );
}

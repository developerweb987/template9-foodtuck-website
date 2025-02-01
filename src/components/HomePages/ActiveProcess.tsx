import React from "react";
import Image from "next/image";

const ActiveProcess: React.FC = () => {
  return (
    <div className="relative w-full">
      <Image
        src="/restu-pic.png"  // Your image source
        alt="Active Process"   // Alt text for the image
        width={1200}            // Width for the image (make sure it's high resolution)
        height={800}           // Height for the image (keep aspect ratio)
        layout="responsive"     // Ensures the image scales with container
        className="object-cover w-full h-auto rounded-lg"
      />
    </div>
  );
};

export default ActiveProcess;

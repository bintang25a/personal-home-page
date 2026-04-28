import React from "react";

const BrightGradientBackground = () => {
   const containerStyle = {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      zIndex: -1,
      overflow: "hidden",
      // Kombinasi warna cerah: Biru Muda, Ungu Soft, dan Kuning Lemon
      backgroundColor: "#74EBD5", // Fallback color
      backgroundImage: `
      radial-gradient(at 0% 0%, hsla(197, 92%, 82%, 1) 0px, transparent 50%),
      radial-gradient(at 50% 0%, hsla(285, 93%, 84%, 1) 0px, transparent 50%),
      radial-gradient(at 100% 0%, hsla(43, 100%, 86%, 1) 0px, transparent 50%),
      radial-gradient(at 50% 100%, hsla(180, 100%, 78%, 1) 0px, transparent 50%),
      radial-gradient(at 0% 100%, hsla(338, 100%, 88%, 1) 0px, transparent 50%),
      radial-gradient(at 100% 100%, hsla(220, 100%, 80%, 1) 0px, transparent 50%)
    `,
   };

   return <div style={containerStyle} />;
};

export default BrightGradientBackground;

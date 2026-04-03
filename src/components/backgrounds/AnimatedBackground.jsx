import { useRef, useEffect } from "react";

const AnimatedBackground = () => {
   const canvasRef = useRef(null);

   useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      let animationFrameId;

      const handleResize = () => {
         canvas.width = window.innerWidth;
         canvas.height = window.innerHeight;
      };

      window.addEventListener("resize", handleResize);
      handleResize();

      class Particle {
         constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = Math.random() * 1 - 0.5;
            this.speedY = Math.random() * 1 - 0.5;
            this.opacity = Math.random() * 0.5 + 0.2;
         }

         update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x > canvas.width) this.x = 0;
            else if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            else if (this.y < 0) this.y = canvas.height;
         }

         draw() {
            ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
         }
      }

      const particles = Array.from({ length: 200 }, () => new Particle());

      const animate = () => {
         ctx.clearRect(0, 0, canvas.width, canvas.height);

         particles.forEach((p) => {
            p.update();
            p.draw();
         });

         animationFrameId = requestAnimationFrame(animate);
      };

      animate();

      return () => {
         window.removeEventListener("resize", handleResize);
         cancelAnimationFrame(animationFrameId);
      };
   }, []);

   return (
      <canvas
         ref={canvasRef}
         style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100%",
            zIndex: -1,
            background:
               "radial-gradient(circle, var(--gray-700), var(--gray-900), var(--primary))",
         }}
      />
   );
};

export default AnimatedBackground;

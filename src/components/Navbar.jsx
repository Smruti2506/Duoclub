// import { useEffect, useState } from 'react';
// import logo from '../assets/Logo.png';

// function Navbar() {
//   const [animate, setAnimate] = useState(false);

//   useEffect(() => {
//     setTimeout(() => {
//       setAnimate(true);
//     }, 300);
//   }, []);

//   return (
//     <nav className="flex flex-col items-center justify-center p-6 relative">
//       <div
//         className={`relative rounded-full border transition-all duration-1000 ease-in-out ${
//           animate ? 'border-black' : 'border-transparent'
//         } p-1`}
//       >
//         <img
//           src={logo}
//           alt="The Duo Club Logo"
//           className={`w-32 h-32 rounded-full transition-all duration-1000 ease-in-out shadow-md ${
//             animate ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 rotate-12'
//           }`}
//         />
//         <div
//           className={`absolute inset-0 rounded-full border transition-all duration-1000 ease-in-out ${
//             animate ? 'border-black' : 'border-transparent'
//           }`}
//         ></div>
//       </div>

//       <h1
//         className={`text-3xl font-bold mt-4 text-[#222222] transition-all duration-1000 ease-in-out ${
//           animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
//         }`}
//       >
//         THE DUO CLUB
//       </h1>
//     </nav>
//   );
// }

// export default Navbar;
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Logo.png";

function Navbar() {
  const [stage, setStage] = useState("center");
  const [showHeader, setShowHeader] = useState(false);
  const [hideText, setHideText] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      setStage("moving");
    }, 1200);

    setTimeout(() => {
      setStage("left");
    }, 2200);

    setTimeout(() => {
      setHideText(true);
      setShowHeader(true);
    }, 2800);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full h-24 z-50">
      {/* Header Bar */}
      <div
        className={`fixed top-0 left-0 w-full h-20 bg-black bg-opacity-50 backdrop-blur-sm transition-all duration-700 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        } flex items-center justify-end pr-10`}
      >
        <div className="flex gap-10 font-semibold text-white text-lg">
          <Link
            to="/"
            className={`hover:underline ${
              location.pathname === "/" ? "underline" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`hover:underline ${
              location.pathname === "/about" ? "underline" : ""
            }`}
          >
            About Us
          </Link>
          <Link
            to="/gallery"
            className={`hover:underline ${
              location.pathname === "/gallery" ? "underline" : ""
            }`}
          >
            Gallery
          </Link>
          <Link
            to="/join"
            className={`hover:underline ${
              location.pathname === "/join" ? "underline" : ""
            }`}
          >
            Join Us
          </Link>
          <Link
            to="/contact"
            className={`hover:underline ${
              location.pathname === "/contact" ? "underline" : ""
            }`}
          >
            Contact Us
          </Link>
          <Link
            to="/events"
            className={`hover:underline ${
              location.pathname === "/events" ? "underline" : ""
            }`}
          >
            Events
          </Link>
        </div>
      </div>

      {/* Logo Animation */}
      <div
        className={`absolute top-6 z-0 transition-all duration-1000 ${
          stage === "center"
            ? "left-1/2 transform -translate-x-1/2"
            : "left-8 transform-none"
        } flex flex-col items-center gap-1`}
      >
        <img
          src={logo}
          alt="The Duo Club Logo"
          className={`transition-all duration-1000 rounded-full border border-black shadow-md ${
            stage === "left" ? "w-14 h-14" : "w-32 h-32"
          }`}
        />
        {!hideText && (
          <h1
            className={`transition-all duration-1000 font-bold text-black ${
              stage === "left" ? "text-sm opacity-0" : "text-xl opacity-100"
            }`}
          >
            THE DUO CLUB
          </h1>
        )}
      </div>
    </nav>
  );
}

export default Navbar;


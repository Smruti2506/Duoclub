// import { useState } from "react";
// import { FaWhatsapp } from "react-icons/fa";
// import tejasImg from "./assets/Tejas.jpg";
// import vasuImg from "./assets/Vasu.jpg";
// import Navbar from "./components/Navbar";

// export default function App() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className="bg-white min-h-screen text-[#222222]">
//       {/* Navbar */}
//       <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

//       {/* Hero Section */}
//       <section className="flex flex-col items-center justify-center text-center py-24 px-4">
//         <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
//           The DUO CLUB
//         </h1>
//         <p className="max-w-xl text-[#222222]">
//           Unleashing creativity through performance. Discovering talent through open mics. Experiencing art through shows. Driving city progress through the work.
//         </p>
//         <a
//           href="https://wa.me/919156537565"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="mt-8 inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-2 rounded-2xl transition transform hover:scale-105"
//         >
//           <FaWhatsapp /> WhatsApp Us
//         </a>
//       </section>

//       {/* About Section */}
//       <section id="about" className="px-8 py-16 max-w-4xl mx-auto">
//         <h2 className="text-3xl font-bold text-black mb-6">About The Club</h2>
//         <p className="text-lg leading-relaxed">
//           The DUO CLUB was founded in Feb 2024 and hosted its first event on 24th Feb, "Abhi Munde Live," which was an absolute success. The club was founded by two friends who traveled to different cities for open mics and stand-up events. Their idea was to create a platform in their own city to avoid the need for travel while pursuing their passion, making this the first of its kind in the city.
//         </p>
//       </section>

//       {/* Services Section */}
//       <section className="px-8 py-16 max-w-4xl mx-auto">
//         <h2 className="text-3xl font-bold text-black mb-6">What We Do</h2>
//         <p className="text-lg leading-relaxed">
//           Duo Club believes in giving artists a genuine platform where passion meets opportunity. We cultivate talent through a strong artist community, building confidence that lasts a lifetime. Our events include stand-up comedy shows, comedy line-ups, poetry and open mics, music shows, theme-based shows, and more. We also manage media for multiple events across the country, constantly exploring new genres of performing arts and bringing them to the stage.
//         </p>
//       </section>

//       {/* Team Section */}
//       <section className="px-8 py-16 max-w-4xl mx-auto">
//         <h2 className="text-3xl font-bold text-black mb-6">Team Co-Founders</h2>
//         <div className="space-y-12">
//           <div className="flex items-center gap-6">
//             <img
//               src={tejasImg}
//               alt="Tejas"
//               className="w-28 h-28 rounded-full object-cover shadow-md"
//             />
//             <div>
//               <h3 className="text-xl font-semibold">Tejas</h3>
//               <p className="text-lg leading-relaxed">
//                 Tejas is the co-founder of The DUO CLUB. Behind the scenes, Tejas drives the club’s visual identity with his expertise in shooting and video editing. From slick promos to viral reels, his creativity defines our digital presence. Beyond content creation, Tejas handles strategic operations, partnerships, and management—ensuring professionalism on every front. His work amplifies the club’s reach, blending creativity with sharp execution.
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center gap-6">
//             <img
//               src={vasuImg}
//               alt="Vasudev"
//               className="w-28 h-28 rounded-full object-cover shadow-md"
//             />
//             <div>
//               <h3 className="text-xl font-semibold">Vasudev</h3>
//               <p className="text-lg leading-relaxed">
//                 Vasudev is the co-founder and the creative heart behind The DUO CLUB’s live experiences. From curating shows and selecting talents to designing fresh formats, he ensures every event leaves an impact. As the host of major events, his wit, energy, and stage presence shape the audience’s experience. Vasudev bridges creativity and engagement, making each show unforgettable.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="px-8 py-16 max-w-4xl mx-auto text-center">
//         <h2 className="text-3xl font-bold text-black mb-6">Contact Us</h2>
//         <p>Email: theduoclub0520@gmail.com</p>
//         <p>Instagram: <a href="https://www.instagram.com/the_duoclub?igsh=MThkcnpjdjJxbDljdg==" target="_blank" rel="noopener noreferrer">@the_duoclub</a></p>
//         <p>WhatsApp: 9156537565 / 8308499301</p>
//       </section>

//       {/* Join Us Form */}
//       <section id="join" className="px-8 py-16 max-w-4xl mx-auto">
//         <h2 className="text-3xl font-bold text-black mb-6">Join Us</h2>
//         <form className="space-y-4">
//           <input type="text" placeholder="Your Name" className="w-full border p-2 rounded" required />
//           <input type="email" placeholder="Your Email" className="w-full border p-2 rounded" required />
//           <textarea placeholder="Tell us about yourself" className="w-full border p-2 rounded h-32" required></textarea>
//           <button type="submit" className="bg-black hover:bg-[#333333] text-white px-6 py-2 rounded-2xl transition">
//             Submit
//           </button>
//         </form>
//       </section>

//       {/* Footer */}
//       <footer className="bg-[#f7f7f7] text-[#666666] text-center py-6">
//         © 2025 The DUO CLUB. All Rights Reserved.
//       </footer>
//     </div>
//   );
// }
import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Join from "./pages/Join";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import UpcomingEvents from "./pages/UpcomingEvents"; // ✅ NEW IMPORT
import Footer from "./components/Footer";

export default function App() {
  const [stage, setStage] = useState("center");

  useEffect(() => {
    setTimeout(() => {
      setStage("left");
    }, 2200);
  }, []);

  return (
    <Router>
      <div className="bg-white min-h-screen text-[#222222]">
        <Navbar stage={stage} />

        <Routes>
          <Route
            path="/"
            element={
              <section
                className={`flex flex-col items-center justify-center text-center transition-all duration-1000 min-h-[80vh] ${
                  stage === "center" ? "pt-40" : "pt-32"
                }`}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
                  The DUO CLUB
                </h1>
                <p className="max-w-xl text-[#222222] text-lg">
                  Unleashing creativity through performance. Discovering talent through open mics.
                  Experiencing art through shows. Driving city progress through the work.
                </p>

                <a
                  href="https://wa.me/919156537565"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-2 rounded-2xl transition transform hover:scale-105"
                >
                  <FaWhatsapp /> WhatsApp Us
                </a>
              </section>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/join" element={<Join />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<UpcomingEvents />} /> {/* ✅ NEW ROUTE */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

import Tejas from "../assets/Tejas.jpg";
import Vasu from "../assets/Vasu.jpg";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-32 pb-20 text-[#222222] min-h-[80vh]">
      <h1 className="text-4xl font-bold mb-8 hover:scale-105 transition">About The Club</h1>
      <p className="text-lg leading-relaxed mb-8 text-justify">
        The DUO CLUB was founded in February 2024 and hosted its first event on 24th February, "Abhi Munde Live," which was a remarkable success. The club was started by two friends who traveled to different cities for open mics and stand-up shows. Their vision was to create a platform in their own city to eliminate the need for travel while pursuing their passion. This made The DUO CLUB the first of its kind in the city.
      </p>

      <h2 className="text-3xl font-bold mb-4 hover:scale-105 transition">What We Do</h2>
      <p className="text-lg leading-relaxed mb-8 text-justify">
        DUO CLUB believes in giving artists a true and real platform where their passion meets opportunity and helps them excel high in the sky with a proper community of artists. This community not only helps them learn and cultivate their talent but also builds confidence that supports them throughout their life.
        The club hosts events like stand-up comedy shows, comedy line-ups, poetry and open mics for emerging artists, music-based shows, theme-based shows, and explores new genres of performing arts, bringing them together on stage.
        DUO CLUB also handles event media management for multiple shows across the country, ensuring every event leaves a lasting impact.
      </p>

      <blockquote className="italic text-center my-8 bg-[#FDE68A] rounded-xl p-4 shadow-sm">
        "Art has no borders. Talent deserves a platform. That's what we believe."
      </blockquote>

      <h2 className="text-3xl font-bold mb-8 hover:scale-105 transition">Team Co-Founders</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Tejas */}
        <div className="flex flex-col items-center text-center hover:scale-105 transition">
          <img
            src={Tejas}
            alt="Tejas"
            className="w-40 h-40 rounded-full object-cover border border-black border-[1px] shadow-lg transition hover:scale-105"
          />
          <h3 className="font-bold text-xl mt-4 mb-2">Tejas</h3>
          <p className="text-gray-600 leading-relaxed text-justify">
            Tejas is the co-founder of The Duo Club. While the stage is filled with laughter, much of the magic happens behind the scenes—thanks to Tejas.
            A master of shooting and video editing, Tejas brings an exceptional level of precision and flair to every frame. His deep passion for visual storytelling is evident in the club’s vibrant digital presence, from slick promos to hilarious skits and punchy reels that regularly go viral. With a sharp creative eye, technical expertise, and an instinct for what clicks with audiences, Tejas has become the engine driving The Duo Club’s unique visual identity.
            But Tejas doesn’t just stop at the creative. He’s also the strategic brain handling calls, closing deals, and managing operations—ensuring everything runs smoothly and professionally. Whether it’s locking in partnerships or producing viral content, Tejas is the multitasking powerhouse who helps keep The Duo Club thriving both on and off the stage.
            Whether it’s capturing the perfect moment or weaving a story through edits, Tejas doesn’t just document comedy—he amplifies it.
          </p>
        </div>

        {/* Vasudev */}
        <div className="flex flex-col items-center text-center hover:scale-105 transition">
          <img
            src={Vasu}
            alt="Vasudev"
            className="w-40 h-40 rounded-full object-cover border border-black border-[1px] shadow-lg transition hover:scale-105"
          />
          <h3 className="font-bold text-xl mt-4 mb-2">Vasudev</h3>
          <p className="text-gray-600 leading-relaxed text-justify">
            Vasudev is the co-founder of The Duo Club, the buzzing comedy and performance space known for its sharp humor, creative energy, and sold-out shows. While laughter fills the room, Vasudev is the one who carefully crafts the experience from start to finish.
            As the creative mind behind the concepts and lineups, Vasudev curates every comedy and poetry show with precision and flair. From spotting emerging talent to designing unique show formats, he ensures that every event feels fresh, thoughtful, and engaging. His deep understanding of audience taste and performer dynamics is what gives The Duo Club its signature edge.
            Vasudev is also the face and voice of The Duo Club, serving as the host at all major events. With his sharp wit, infectious energy, and natural stage presence, he sets the tone for the night and keeps the audience connected throughout. Whether he’s building the perfect lineup or holding the mic on show night, Vasudev is the heart of The Duo Club’s live experience.
          </p>
        </div>
      </div>
    </div>
  );
}

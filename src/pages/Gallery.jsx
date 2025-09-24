import Masonry from "react-masonry-css";
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";
import photo4 from "../assets/photo4.jpg";
import photo5 from "../assets/photo5.jpg";
import photo6 from "../assets/photo6.jpg";
import photo7 from "../assets/photo7.jpg";
import photo8 from "../assets/photo8.jpg";
import photo9 from "../assets/photo9.jpg";
import photo10 from "../assets/photo10.jpg";
import photo11 from "../assets/photo11.jpg";
import photo12 from "../assets/photo12.jpg";
import photo13 from "../assets/photo13.jpg";
import photo14 from "../assets/photo14.jpg";
import photo15 from "../assets/photo15.jpg";
import photo16 from "../assets/photo16.jpg";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

const images = [
  { img: photo1, caption: "Open Mic Night" },
  { img: photo2, caption: "Crowd Moments" },
  { img: photo3, caption: "Madhyantar show" },
  { img: photo4, caption: "Poetry Evening" },
  { img: photo5, caption: "Pranit More Show" },
  { img: photo6, caption: "Performance Moment" },
  { img: photo7, caption: "Co-Founders" },
  { img: photo8, caption: "Mandar Bhide's Show" },
  { img: photo9, caption: "Zakhir Khan Glimpses" },
  { img: photo10, caption: "Zakhir Khan Glimpses"},
  { img: photo11, caption: "Crowd Moments" },
  { img: photo12, caption: "Hosting Moments" },
  { img: photo13, caption: "Venue Highlights" },
  { img: photo14, caption: "Team Moments" },
  { img: photo15, caption: "Closing Cheers" },
  { img: photo16, caption: "Themed Events" },
];

export default function Gallery() {
  return (
    <section className="py-20 bg-white min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-12 text-[#222222]">Gallery Highlights</h2>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((item, index) => (
          <div
            key={index}
            className="mb-6 group transition transform hover:-translate-y-1 duration-300"
          >
            <img
              src={item.img}
              alt={item.caption}
              className="rounded-lg w-full object-cover hover:shadow-lg"
            />
            <p className="mt-2 text-center text-gray-700 text-sm">{item.caption}</p>
          </div>
        ))}
      </Masonry>
    </section>
  );
}

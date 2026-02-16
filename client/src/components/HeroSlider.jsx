import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    title: "Free soul in a cage",
    subtitle: "Read Here To Know Why",
    image:
      "https://rekhta.pc.cdn.bitgravity.com/Images/Cms/Carousels/3c2a0acd-d91d-4dc9-a98e-ffea08eb9dcf/f296c8b3-7bfb-4010-be27-109927845272.jpg",
  },
  {
    id: 2,
    image:
      "https://rekhta.pc.cdn.bitgravity.com/Images/Cms/Carousels/c114cdcd-40af-44d1-98a8-3df5675e4b93/37d457d3-0677-475e-b58a-5c8890e73495.jpg",
  },
  {
    id: 3,
    image:
      "https://rekhta.pc.cdn.bitgravity.com/Images/Cms/Carousels/30aff6c9-07b5-4a5e-9819-d90637afdfee/7c7895ed-be0a-453b-a90c-c4b7907ae0de.jpg",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-8 w-full flex justify-center space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? "bg-white scale-125" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

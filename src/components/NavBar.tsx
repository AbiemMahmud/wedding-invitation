import { File, GiftIcon, Heart, Images, MessageCircleMore } from "lucide-react";
import { FC, useEffect, useState } from "react";

const NavBar: FC = () => {
  const sectionIds = ["cover", "detail", "gallery", "gift", "comment"];
  const [activeLink, setActiveLink] = useState("cover");

  const determineActiveLink = () => {
    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const element = document.getElementById(sectionIds[i]);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveLink(sectionIds[i]);
          break;
        }
      }
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const scrollToY =
        element.getBoundingClientRect().top + window.scrollY - 15;
      window.scrollTo({
        top: scrollToY,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      determineActiveLink();
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="bottom-0 z-40 fixed w-full">
      <nav className="flex justify-center gap-2 bg-white shadow-lg mx-auto px-4 py-2 rounded-t-lg max-w-72">
        <div
          className={`inline-block p-2 rounded-lg transition-colors duration-200 ${
            activeLink === "cover" && "bg-green-300"
          }`}
          onClick={() => scrollToSection("cover")}
        >
          <File size={16} />
        </div>
        <div
          className={`inline-block p-2 rounded-lg transition-colors duration-200 ${
            activeLink === "detail" && "bg-green-300"
          }`}
          onClick={() => scrollToSection("detail")}
        >
          <Heart size={16} />
        </div>
        <div
          className={`inline-block p-2 rounded-lg transition-colors duration-200 ${
            activeLink === "gallery" && "bg-green-300"
          }`}
          onClick={() => scrollToSection("gallery")}
        >
          <Images size={16} />
        </div>
        <div
          className={`inline-block p-2 rounded-lg transition-colors duration-200 ${
            activeLink === "gift" && "bg-green-300"
          }`}
          onClick={() => scrollToSection("gift")}
        >
          <GiftIcon size={16} />
        </div>
        <div
          className={`inline-block p-2 rounded-lg transition-colors duration-200 ${
            activeLink === "comment" && "bg-green-300"
          }`}
          onClick={() => scrollToSection("comment")}
        >
          <MessageCircleMore size={16} />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

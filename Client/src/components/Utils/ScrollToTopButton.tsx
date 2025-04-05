import { useEffect, useState } from "react";
import scrollIcon from "@/assets/up-arrow-icon.svg"

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    setIsVisible(window.scrollY > 100);
  }

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  }

  return isVisible && (
    <button onClick={scrollToTop} className="">
      <img src={scrollIcon} className="w-12 h-12 fixed pl-3 pb-1 bottom-12 right-12 cursor-pointer bg-white rounded-full" />
    </button>
  )
}

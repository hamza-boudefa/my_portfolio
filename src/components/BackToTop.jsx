import { useEffect, useState } from "react";
import back from '../assets/toTop.png'
import { CircleChevronUp, SquareChevronUp } from "lucide-react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    // <img
    //   className={`fixed bottom-4 right-4 z-50 p-3 w-20 cursor-pointer transition-opacity duration-500 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    //   style={{ filter: 'invert()' }}
    //   onClick={scrollToTop}
    //   src={back}
    //   alt="Back to top"
    // />
    <SquareChevronUp
    size={65}
     className={`fixed bottom-4 right-4 z-50 p-3 w-20 cursor-pointer transition-opacity duration-500 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ filter: 'invert()' }}
      onClick={scrollToTop}
      src={back}
      alt="Back to top"
     />
  );
};

export default BackToTop;

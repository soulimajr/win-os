"use client";

import { useEffect, useState } from "react";
import Button from "./Button";

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past the first 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border/60 bg-background/80 p-4 backdrop-blur-lg md:hidden">
      <Button 
        href="https://www.asaas.com/c/r9h97zyqehrnk5s0" 
        target="_blank"
        rel="noopener noreferrer"
        className="w-full"
      >
        Acessar o Win OS por R$ 47
      </Button>
    </div>
  );
}

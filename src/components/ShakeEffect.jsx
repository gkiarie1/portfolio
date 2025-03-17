import { useEffect } from "react";

const ShakeEffect = () => {
  useEffect(() => {
    let timeout;
    const projectCards = document.querySelectorAll(".project-card");

    const triggerShake = () => {
      projectCards.forEach((card) => {
        card.classList.add("shake");
        setTimeout(() => card.classList.remove("shake"), 500);
      });
    };

    triggerShake();

    const resetTimer = () => {
      clearTimeout(timeout);
      timeout = setTimeout(triggerShake, 10000);
    };

    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("scroll", resetTimer);

    resetTimer();

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("scroll", resetTimer);
    };
  }, []);
};

export default ShakeEffect;

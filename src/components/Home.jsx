import React, { useState, useEffect } from "react";

const roles = [
  { text: "Software Developer", color: "#617C58" },
  { text: "Fullstack Developer", color: "#33ff57" },
  { text: "Frontend Developer", color: "#3357ff" },
];

const Home = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 150;
  const deleteSpeed = 100;
  const pauseTime = 2000; 

  useEffect(() => {
    const currentRole = roles[currentRoleIndex].text;
    let timeout;

    if (!isDeleting && displayedText.length < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => currentRole.substring(0, prev.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayedText.length === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => currentRole.substring(0, prev.length - 1));
      }, deleteSpeed);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex]);

  return (
    <div className="home">
      <p className="home-content">
        Hello there,<br />
        I am <span className="name">George Kiarie</span>
        <br />
        <span
          className="role"
          style={{ color: roles[currentRoleIndex].color }}
        >
          {displayedText}
        </span>
        <span className="cursor">|</span>
      </p>
      <div
        className="background-image"
        style={{ backgroundImage: "url('/home.png')" }}
      ></div>
    </div>
  );
};

export default Home;

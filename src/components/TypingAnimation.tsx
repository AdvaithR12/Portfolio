import { useState, useEffect } from "react";

const words = ['Engineer', 'Developer'];

const TypingAnimation = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (!isDeleting && subIndex === words[index].length + 1) {
      setTimeout(() => setIsDeleting(true), 1000);
      return;
    }

    if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? 100 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, index]);

  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((prev) => !prev), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <span
      className="text-green-500 inline-block"
      style={{ width: '9ch', whiteSpace: 'nowrap' }}
    >
      Software {words[index].substring(0, subIndex)}
      <span className="inline-block ml-1" style={{ visibility: blink ? 'visible' : 'hidden' }}>
        |
      </span>.
    </span>
  );
};

export default TypingAnimation;

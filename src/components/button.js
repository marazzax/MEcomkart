import { useState } from "react";

function MyButton() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <button
      style={{ backgroundColor: isClicked ? "green" : initialColor }}
      onClick={handleClick}
    >
    </button>
  );
}

export default MyButton;
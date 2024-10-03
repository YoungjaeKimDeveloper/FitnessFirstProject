import React, { useEffect, useState } from "react";

const Uni = () => {
  const [isUni, setIsUni] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (isUni == true) {
      setMessage("Jeki is studying COMP");
    } else if (isUni == false) {
      setMessage("Jeki is Studying React");
    }
  }, [isUni]);
  return (
    <div>
      <h1>Here is The uni</h1>

      <button>Study Assembly</button>
      <button disabled={true}>Study React</button>
    </div>
  );
};

export default Uni;

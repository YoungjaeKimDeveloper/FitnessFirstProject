import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import "./Spiner.css";
const Spinner = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  return (
    <div className="sweet-loading">
      <ClipLoader
        color={color}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
        className="spiner"
      />
    </div>
  );
};

export default Spinner;

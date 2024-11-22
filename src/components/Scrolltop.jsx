import "./Scrolltop.css";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";


function Scrolltop() {
  const [isvisible, setIsvisible] = useState(false);

  const top = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listentoscroll = () => {
    let heighttohidden = 300;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heighttohidden) {
      setIsvisible(true);
    } else {
      setIsvisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listentoscroll);
  }, []);

  return (
    <>
      <div className="container-fluid">
        {isvisible && (
          <button onClick={top} class="scrolltop ">
            {/* <FontAwesomeIcon style={{ color: "white" }} icon={faArrowUp} /> */}
         <FaArrowUp className="text-slate-100"/>
          </button>
        )}
      </div>
    </>
  );
}

export default Scrolltop;
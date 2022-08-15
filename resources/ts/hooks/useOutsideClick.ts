import { useEffect, useState } from "react";

export function useOutsideClick(ref) {

  const [isClicked, setIsClicked] = useState(false);

  //console.log("outside Ref", isClicked)
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsClicked(true);
      } else {
        setIsClicked(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
  
  return isClicked;
}

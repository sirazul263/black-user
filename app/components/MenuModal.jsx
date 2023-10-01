import React, { useEffect, useRef } from "react";

const MenuModal = ({ children, isOpen, setIsOpen }) => {
  const wrapperRef = useRef(null);
  // useOutsideAlerter(wrapperRef, setIsOpen);

  if (!isOpen) {
    return null;
  }
  return (
    <div className="overlay-styles">
      <div className="text-danger custom-modal" ref={wrapperRef}>
        {children}
      </div>
    </div>
  );
};

function useOutsideAlerter(ref, setIsOpen) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

export default MenuModal;

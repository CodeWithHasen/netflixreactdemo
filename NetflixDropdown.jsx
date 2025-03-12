import { useState, useRef, useEffect } from "react";

export default function NetflixDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      
      <button 
        className="btn btn-dark dropdown-toggle" 
        onClick={toggleDropdown}
      >
        <span className="bi bi-globe"></span> English
      </button>

      {isOpen && (
        <div className="dropdown-menu show">
          <div className="dropdown-item">
            <a href="https://www.netflix.com/in/"><span>English</span></a>
          </div>
          <div className="dropdown-item">
            <a href="https://www.netflix.com/in-hi/"><span>हिन्दी</span></a>
          </div>
        </div>
      )}
    </div>
  );
}
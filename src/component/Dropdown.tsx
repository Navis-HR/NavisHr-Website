import React, { useState } from "react";

interface DropdownProps {
  options: string[];
  defaultOption?: string;
  onChange?: (selectedOption: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  defaultOption,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    defaultOption || options[0]
  );

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onChange) {
      onChange(option);
    }
  };

  return (
    <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
      <button
        className="w-full px-3 sm:px-4 py-3 text-center bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ff0008] text-sm sm:text-base font-medium"
        onClick={handleToggle}
      >
        <span className="block truncate">{selectedOption}</span>
        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg
            className="w-6 h-6 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>
      {isOpen && (
        <ul className="absolute z-10 w-full py-1 mt-1 overflow-auto text-sm sm:text-base bg-white rounded-md shadow-lg max-h-48 sm:max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none">
          {options.map((option) => (
            <li
              key={option}
              className="text-gray-900 cursor-default select-none relative py-1 sm:py-2 pl-2 sm:pl-3 pr-9 hover:bg-blue-100 font-medium"
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;

import React from "react";
import WhiteLogo from "../assets/logo/White-logo.png";

interface TopBarProps {
  currentLanguage: "ENGLISH" | "JAPAN";
  onLanguageChange: (language: "ENGLISH" | "JAPAN") => void;
}

const TopBar: React.FC<TopBarProps> = ({
  currentLanguage,
  onLanguageChange,
}) => {
  return (
    <div className="hidden lg:flex flex-row justify-between items-center px-10 py-4 text-white">
      <div className="flex items-center">
        <img src={WhiteLogo} alt="NAVIS HR" className="h-8 mr-2" />
      </div>
      <div className="flex items-center space-x-1 bg-white rounded-xl p-1">
        <button
          onClick={() => onLanguageChange("ENGLISH")}
          className={`px-5 py-1 text-base font-semibold leading-[24px] rounded-xl transition-colors ${
            currentLanguage === "ENGLISH"
              ? "bg-[#ff0008] text-white"
              : "text-black hover:text-[#ff0008]"
          }`}
        >
          ENGLISH
        </button>
        <button
          onClick={() => onLanguageChange("JAPAN")}
          className={`px-5 py-1 text-base rounded-xl font-semibold leading-[24px] transition-colors ${
            currentLanguage === "JAPAN"
              ? "bg-[#ff0008] text-white"
              : "text-black hover:text-[#ff0008]"
          }`}
        >
          JAPAN
        </button>
      </div>
    </div>
  );
};

export default TopBar;

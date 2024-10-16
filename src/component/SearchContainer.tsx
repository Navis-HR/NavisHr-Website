import React from "react";
import Dropdown from "./Dropdown";
import { ReactComponent as OdishaSvg } from "../assets/OdishaSvg.svg";
import { ReactComponent as MeghalayaSvg } from "../assets/MeghalayaSvg.svg";
import { ReactComponent as MitsuiSvg } from "../assets/MitsuiSvg.svg";
import { ReactComponent as AndhraPradeshSvg } from "../assets/AndhraPradeshSvg.svg";

const SearchContainer: React.FC = () => {
  const Options1 = ["Student", "Fresher", "Working", "Corporate"];
  const Options2 = ["Japan", "Germany", "India"];
  const specialOffers = ["ODISHA", "MEGHALAYA", "MITSUI", "ANDHRA PRADESH"];

  const [selectedOffers, setSelectedOffers] = React.useState<string[]>([]);

  const toggleOffer = (location: string) => {
    setSelectedOffers([location]);
  };

  const locationIcons: {
    [key: string]: React.FC<React.SVGProps<SVGSVGElement>>;
  } = {
    ODISHA: OdishaSvg,
    MEGHALAYA: MeghalayaSvg,
    MITSUI: MitsuiSvg,
    "ANDHRA PRADESH": AndhraPradeshSvg,
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="pb-14 rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.1)] relative">
        <div className="flex flex-col sm:flex-row justify-around pb-6">
          <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
            <h2 className="text-lg sm:text-xl md:text-3xl font-bold mb-4 bg-[#f5f9fd] py-3 sm:py-4 text-center">
              Who You Are
            </h2>
            <div className="py-4 sm:py-10 px-4 sm:px-8 md:px-12 lg:px-32 flex justify-center">
              <Dropdown
                options={Options1}
                defaultOption="Departure"
                onChange={(option) => console.log(`Selected: ${option}`)}
              />
            </div>
          </div>
          <div className="hidden sm:block w-[1.5px]">
            <div className="h-[32%] bg-[#f5f9fd]"></div>
            <div className="h-[80%] bg-gray-300"></div>
          </div>
          <div className="w-full sm:w-1/2">
            <h2 className="text-lg sm:text-xl md:text-3xl font-bold mb-4 bg-[#f5f9fd] py-3 sm:py-4 text-center">
              Your Voyagers
            </h2>
            <div className="py-4 sm:py-10 px-4 sm:px-8 md:px-12 lg:px-32 flex justify-center">
              <Dropdown
                options={Options2}
                defaultOption="Destination"
                onChange={(option) => console.log(`Selected: ${option}`)}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center px-4 sm:px-9 mb-4">
          <div className="w-full bg-[#f5f9fd] border-[#bcc1ca] border-[1.5px] rounded-md py-2">
            <div className="flex flex-col items-center md:flex-row md:flex-wrap sm:justify-between px-3 sm:px-4 md:px-4">
              <h2 className="text-base sm:text-sm md:text-sm lg:text-lg font-bold text-center my-3 md:w-20 select-none">
                Special offer
              </h2>
              {specialOffers.map((location) => {
                const IconComponent = locationIcons[location];
                return (
                  <div
                    key={location}
                    className={`flex items-center bg-white p-2 rounded-md shadow-md w-full sm:w-[48%] md:w-[21.5%] lg:w-[22%] h-16 mb-3 sm:mb-4 mt-2 cursor-pointer select-none transition-colors duration-200 ${
                      selectedOffers.includes(location)
                        ? "bg-red-50"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => toggleOffer(location)}
                  >
                    <div
                      className="flex items-center cursor-pointer"
                      onClick={() => toggleOffer(location)}
                    >
                      <input
                        type="checkbox"
                        id={location}
                        className="mr-2 w-4 h-4 cursor-pointer"
                        checked={selectedOffers.includes(location)}
                        onChange={() => {}}
                      />
                    </div>
                    <label
                      htmlFor={location}
                      className="flex items-center text-xs sm:text-sm md:text-sm lg:text-[17px] font-semibold cursor-pointer flex-grow select-none"
                    >
                      {IconComponent && (
                        <IconComponent className="w-9 h-9 mr-" />
                      )}
                      <span className="text-black text-sm md:mr-2 cursor-pointer"></span>
                      {location}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full absolute md:top-[95%] left-0 right-0 mb-6">
          <button className="bg-[#ff0008] text-white px-4 py-3 rounded-full w-[300px] uppercase font-medium hover:bg-[#d60007] transition-colors duration-300 select-none">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchContainer;

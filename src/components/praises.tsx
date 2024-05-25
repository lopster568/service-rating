"use client";

import { useContext, useEffect, useState } from "react";
import { FormDataContext } from "@/contexts/formdata-context";
const Praises = () => {
  const [selectedFeeds, setSelectedFeeds] = useState<string[]>([]);

  const formContext = useContext(FormDataContext);
  if (!formContext) {
    throw new Error("FormDataContext must be used within a FormDataProvider");
  }
  const { formData, setFormData } = formContext;

  const PraisesOptions = [
    "Advertisements",
    "User Experience",
    "Performance",
    "Design",
  ];

  useEffect(() => {
    setFormData({ ...formData, praises: selectedFeeds });
  }, [selectedFeeds]);

  const handleSelect = (feed: string) => {
    setSelectedFeeds((prevSelectedFeeds) =>
      prevSelectedFeeds.includes(feed)
        ? prevSelectedFeeds.filter((f) => f !== feed)
        : [...prevSelectedFeeds, feed]
    );
  };

  const isSelected = (feed: string) => selectedFeeds.includes(feed);

  return (
    <div className="flex my-4 gap-2 flex-wrap">
      {PraisesOptions.map((option, index) => (
        <button
          key={index}
          onClick={() => handleSelect(option)}
          className={`${
            !isSelected(option)
              ? "border-gray-300 bg-gray-300/30 border"
              : "border-green-500 bg-green-300/80 border-2"
          } rounded-full text-sm cursor-pointer px-2 py-1 transition-all ease-in`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Praises;

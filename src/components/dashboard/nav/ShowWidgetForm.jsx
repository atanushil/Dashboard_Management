import React, { useState } from "react";
import { category } from "../../../constants";

const ShowWidgetForm = ({ setOpen, handleConfirm }) => {
  const [selectedCategory, setSelectedCategory] = useState(
    category[0]?.name || ""
  );
  const [selectedWidgets, setSelectedWidgets] = useState([]);


  const selectedCategoryObj = category.find(
    (item) => item.name === selectedCategory
  );

  // Toggle the selected widget
  const handleWidgetClick = (widget) => {
    setSelectedWidgets((prev) =>
      prev.includes(widget)
        ? prev.filter((item) => item !== widget)
        : [...prev, widget]
    );
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleConfirmClick = () => {
    handleConfirm(selectedWidgets);
    setOpen(false);
  };

  return (
    <div className="flex flex-col z-40">
      <div className="py-1">
        <p>Personalize your dashboard by adding the following widget.</p>
      </div>

      <div>
        <div className="category-select">
          <ul className="flex gap border-grey w-fit pl-1 pr-8 object-contain">
            {category.map((item, key) => (
              <li
                key={key}
                onClick={() => setSelectedCategory(item.name)}
                className={`px-4 border-b-2 pt-1 pb-1 cursor-pointer ${
                  selectedCategory === item.name
                    ? "border-blue-700 text-blue-700 font-bold"
                    : "border-grey"
                }`}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="widget-choose mt-2 pl-4 flex flex-col w-full gap-2 overflow-y-auto h-[80vh]">
          {selectedCategoryObj?.content.map((widget, index) => (
            <div
              key={index}
              className={`py-1 border items-center flex gap-2 px-2 rounded-md cursor-pointer ${
                selectedWidgets.includes(widget)
                  ? "border-blue-700 text-blue-700"
                  : "border-grey"
              }`}
              onClick={() => handleWidgetClick(widget)}
            >
              <input
                type="checkbox"
                checked={selectedWidgets.includes(widget)}
                readOnly
                className="form-checkbox"
              />
              <p>{widget}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="cancel-confirm flex gap-4 mt-2 justify-end w-full pr-4">
        <button
          className="border px-2 py-1 rounded-md text-blue-700 hover:bg-red-600 hover:text-white"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          className="border px-2 py-1 rounded-md bg-blue-600 text-grey hover:text-white hover:bg-blue-800"
          onClick={handleConfirmClick}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ShowWidgetForm;

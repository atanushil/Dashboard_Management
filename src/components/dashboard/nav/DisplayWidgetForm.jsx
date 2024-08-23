import { useState } from "react";
import { categoryList } from "../../../constants";

const DisplayWidgetForm = ({ setOpen, handleConfirm }) => {
  const [selectedCategory, setSelectedCategory] = useState(
    categoryList[0]?.categoryName || ""
  );
  const [categoryWidgetMap, setCategoryWidgetMap] = useState({});

  const selectedCategoryObj = categoryList.find(
    (item) => item.categoryName === selectedCategory
  );

  // Toggle the selected widget heading for the current category
  const handleWidgetClick = (widget) => {
    const widgetHeading = widget.heading;

    setCategoryWidgetMap((prev) => {
      const headings = prev[selectedCategory] || [];
      const updatedHeadings = headings.includes(widgetHeading)
        ? headings.filter((item) => item !== widgetHeading)
        : [...headings, widgetHeading];

      return {
        ...prev,
        [selectedCategory]: updatedHeadings,
      };
    });
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleConfirmClick = () => {
    console.log(categoryWidgetMap);
    handleConfirm(categoryWidgetMap);
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
            {categoryList.map((item, key) => (
              <li
                key={key}
                onClick={() => setSelectedCategory(item.categoryName)}
                className={`sm:px-4 px-2 border-b-2 pt-1 pb-1 cursor-pointer md:text-md text-sm whitespace-nowrap ${
                  selectedCategory === item.categoryName
                    ? "border-blue-700 text-blue-700 font-bold"
                    : "border-grey"
                }`}
              >
                {item.categoryName}
              </li>
            ))}
          </ul>
        </div>
        <div className="widget-choose mt-2 pl-4 flex flex-col w-full gap-2 overflow-y-auto h-full justify-evenly">
          {selectedCategoryObj?.widget.map((widget, index) => (
            <div
              key={index}
              className={`py-1 border items-center flex gap-2 px-2 rounded-md cursor-pointer ${
                (categoryWidgetMap[selectedCategory] || []).includes(widget.heading)
                  ? "border-blue-700 text-blue-700"
                  : "border-grey"
              }`}
              onClick={() => handleWidgetClick(widget)}
            >
              <input
                type="checkbox"
                checked={(categoryWidgetMap[selectedCategory] || []).includes(widget.heading)}
                readOnly
                className="form-checkbox"
              />
              <p>{widget.heading}</p>
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

export default DisplayWidgetForm;

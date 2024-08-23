"use client";

import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { colorArray } from "../../../constants";

const WidgetForm = ({ category, open, setOpen ,isRightSlider,setIsRightSlider}) => {
  const [widgetName, setWidgetName] = useState(""); // State for widget name
  const [chartType, setChartType] = useState("default"); // State for chart type
  const [textInputs, setTextInputs] = useState(
    colorArray.map((color, index) => ({
      id: index,
      color,
      text: "",
      value: "",
      visible: index === 0, 
    }))
  );
  const [visibleCount, setVisibleCount] = useState(1);
  const [submittedData, setSubmittedData] = useState(null); 
  const handleAddText = () => {
    if (visibleCount < colorArray.length) {
      const newInputs = [...textInputs];
      newInputs[visibleCount].visible = true;
      setTextInputs(newInputs);
      setVisibleCount(visibleCount + 1);
    }
  };

  const handleInputChange = (id, field, value) => {
    const newInputs = textInputs.map((input) =>
      input.id === id ? { ...input, [field]: value } : input
    );
    setTextInputs(newInputs);
  };

  const handleDeleteText = (id) => {
    const newInputs = textInputs.map((input) =>
      input.id === id ? { ...input, visible: false } : input
    );
    setTextInputs(newInputs);
    setVisibleCount(visibleCount - 1);
  };
  const handelCancel=()=>{
    setOpen(false);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      widgetName,
      chartType,
      data: textInputs.filter((input) => input.visible),
    };
    console.log(formData);
    setSubmittedData(formData);
    setOpen(false);
    if(!isRightSlider){
      setIsRightSlider(true);
    }
  };

  return (
    <div>
      <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10">
        <DialogBackdrop className="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center w-full justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start justify-center items-center w-full">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                    <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900 caret-transparent py-2">
                      <p>
                        Make a Widget in{" "}
                        <span className="text-grey hover:text-black">{category}</span>{" "}
                        Category
                      </p>
                    </DialogTitle>
                    <form onSubmit={handleSubmit} className="gap-2 flex flex-col">
                      <div className="widget-name flex flex-col">
                        <label htmlFor="widgetName" className="self-start caret-transparent p-2">
                          Enter the Widget name
                        </label>
                        <input
                          type="text"
                          name="widgetName"
                          id="widgetName"
                          className="bg-inherit border-grey bg-slate-100 px-2 border rounded-lg"
                          value={widgetName}
                          onChange={(e) => setWidgetName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="chart-name flex gap-2 w-full">
                        <p>Chart Name:</p>
                        <select
                          required
                          name="chartType"
                          id="chartType"
                          className="w-fit border border-slate-400 bg-slate-200 rounded-md px-2"
                          value={chartType}
                          onChange={(e) => setChartType(e.target.value)}
                        >
                          <option value="">Chart Name</option>
                          <option value="PieChart">Pie Chart</option>
                          <option value="SplineChart">Spline Chart</option>
                          <option value="StackBarChart">StackBar Chart</option>
                        </select>
                      </div>
                      <div className="widget-data">
                        <div className="data-label">
                          <p className="flex w-full gap-2">
                            <span className="gradient-multi-color text-black opacity-50 rounded-full flex-center w-24">Color</span>
                            <span className="w-2/3 bg-green-200 hover:bg-green-400 flex-center rounded-sm">Text</span>
                            <span className="w-1/3 bg-green-200 hover:bg-green-400 flex-center rounded-sm">Value</span>
                          </p>
                        </div>
                        {textInputs.map(
                          (input, index) =>
                            input.visible && (
                              <div className="text-input flex w-full gap-2 my-1 items-center" key={index}>
                                <span className="w-24 h-6 rounded-full caret-transparent" style={{ backgroundColor: input.color }} />
                                <input
                                  type="text"
                                  value={input.text}
                                  required
                                  className="w-2/3 bg-slate-200 rounded-sm flex-center px-2"
                                  onChange={(e) => handleInputChange(input.id, "text", e.target.value)}
                                />
                                <div className="w-1/3 flex-center">
                                  <input
                                    type="number"
                                    value={input.value}
                                    required
                                    className="w-2/3 bg-slate-200 rounded-sm pl-3 relative"
                                    onChange={(e) => handleInputChange(input.id, "value", e.target.value)}
                                  />
                                  {index >= 0 && (
                                    <button
                                      type="button"
                                      className="text-black hover:text-red-500 font-bold flex-center w-1/3"
                                      onClick={() => handleDeleteText(input.id)}
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="size-6"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                        />
                                      </svg>
                                    </button>
                                  )}
                                </div>
                              </div>
                            )
                        )}
                        {visibleCount < colorArray.length && (
                          <div
                            className="w-full bg-slate-500 opacity-50 hover:opacity-100 mt-2 flex-center rounded-lg text-white cursor-pointer caret-transparent"
                            onClick={handleAddText}
                          >
                            Add Text
                          </div>
                        )}
                      </div>
                      <div className="bg-gray-50  py-4 sm:flex sm:flex-row-reverse ">
                        <button
                          type="submit"
                          className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                        >
                          Confirm
                        </button>
                        <button
                          type="button"
                          onClick={handelCancel}
                          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default WidgetForm;

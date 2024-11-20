import React, { useState } from "react";

function JobCard() {
  const [saved, setSaved] = useState(false);

  const toogleSave = () => {
    setSaved(!saved);
  };


  return (
    <div className="m-8 flex items-center justify-center">
      <div className="p-4 border border-gray-300 rounded-lg shadow-md bg-white flex items-center justify-between max-w-xl w-full">
        {/* Left Section */}
        <div>
          <h2 className="text-lg font-bold pb-2 text-gray-800">
            Associate Manager
          </h2>
          <p className="text-sm text-gray-500 mb-2">
            <span className="bg-green-100 text-green-700 px-2 py-1 rounded-md text-xs font-medium mr-2">
              PART-TIME
            </span>
            Salary: ₹ 5 - 7 LPA
          </p>
          <div className="flex justify-evenly mt-4">
            <img
              src="https://cdn-icons-png.flaticon.com/128/9985/9985721.png"
              alt="Sankhyana Img"
              className="h-10 mr-3 "
            />
            <div>
              <p className="text-sm text-gray-600 font-medium">
                Sankhyana Consultancy Services Pvt. Ltd
              </p>

              <p className="text-sm text-gray-500 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 text-gray-500 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2.25c4.97 0 9 3.87 9 8.625 0 7.22-7.257 11.835-8.236 12.375a.75.75 0 01-.528 0C10.257 22.71 3 18.095 3 10.875 3 6.12 7.03 2.25 12 2.25z"
                  />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 9.75h1.5m-.75-.75v2.25"
                  />
                </svg>
                Bengaluru, Karnataka, India
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <div className="flex justify-evenly mb-4">
            <p className="text-sm text-black pr-4">10/11/2024</p>
            <button onClick={toogleSave}>
              <img
                src={
                  saved
                    ? 
                    "https://cdn-icons-png.flaticon.com/128/102/102279.png"
                    :
                     "https://cdn-icons-png.flaticon.com/128/5662/5662990.png"
                }
                alt="save job"
                className="h-5"
              />
            </button>
          </div>
          <button className="mt-5 px-4 py-2 font-bold bg-blue-700 text-white text-sm rounded-2xl hover:bg-blue-700">
            Get Resume Analysis
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobCard;


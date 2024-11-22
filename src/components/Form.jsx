import React, { useState } from "react";

function JobApplicationForm() {
  const [formData, setFormData] = useState({
    resume: null,
    designation: "",
    currentCTC: "",
    expectedCTC: "",
    noticePeriod: "",
    country: "",
    currentLocation: "",
    preferredLocation: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form Submitted");
    setFormData({
      resume: null,
      designation: "",
      currentCTC: "",
      expectedCTC: "",
      noticePeriod: "",
      country: "",
      currentLocation: "",
      preferredLocation: "",
    })
  };

  return (
    <div className="flex items-center justify-center flex-grow p-4 overflow-auto mt-5">
      <form
        onSubmit={handleSubmit}
        className="p-8 border border-gray-300 rounded-lg bg-white shadow-lg max-w-6xl w-full"
      >
        {/* Resume Input */}
        <div className="mb-6">
          <label className="block text-md font-medium text-indigo-900 mb-2">
            Resume
          </label>
          <input
            type="file"
            name="resume"
            className="w-full sm:w-full md:w-1/2 lg:w-1/2 block text-md text-gray-700 border border-black rounded-md file:mr-4 file:py-2 file:px-4 file:rounded-md file:border file:border-black file:bg-gray-100 file:text-gray-600"
            onChange={handleChange}
          />
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* Designation */}
          <div>
            <label className="block text-md font-medium text-indigo-900 mb-2">
              Designation
            </label>
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              placeholder="Ex: Product Manager"
              className="w-full border border-black rounded-md text-md p-2"
            />
          </div>

          {/* Current CTC */}
          <div>
            <label className="block text-md font-medium text-indigo-900 mb-2">
              Current CTC
            </label>
            <input
              type="text"
              name="currentCTC"
              value={formData.currentCTC}
              onChange={handleChange}
              placeholder="Ex: 5 LPA"
              className="w-full border border-black rounded-md text-md p-2"
            />
          </div>

          {/* Expected CTC */}
          <div>
            <label className="block text-md font-medium text-indigo-900 mb-2">
              Expected CTC
            </label>
            <input
              type="text"
              name="expectedCTC"
              value={formData.expectedCTC}
              onChange={handleChange}
              placeholder="Ex: 10 LPA"
              className="w-full border border-black rounded-md text-md p-2"
            />
          </div>

          {/* Notice Period */}
          <div>
            <label className="block text-md font-medium text-indigo-900 mb-2">
              Notice Period
            </label>
            <select
              name="noticePeriod"
              value={formData.noticePeriod}
              onChange={handleChange}
              className="w-full border border-black rounded-md text-md p-2"
            >
              <option value="">Select</option>
              <option value="Immediate">Immediate</option>
              <option value="15 days">15 days</option>
              <option value="30 days">30 days</option>
            </select>
          </div>

          {/* Country */}
          <div>
            <label className="block text-md font-medium text-indigo-900 mb-2">
              Country
            </label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full border border-black rounded-md text-md p-2"
            >
              <option value="">Select Country</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
            </select>
          </div>

          {/* Current Location (Dropdown) */}
          <div>
            <label className="block text-md font-medium text-indigo-900 mb-2">
              Current Location
            </label>
            <select
              name="currentLocation"
              value={formData.currentLocation}
              onChange={handleChange}
              className="w-full border border-black rounded-md text-md p-2"
            >
              <option value="">Select Current Location</option>
              <option value="Bengaluru">Bengaluru</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Chennai">Chennai</option>
            </select>
          </div>

          {/* Preferred Location (Dropdown) */}
          <div>
            <label className="block text-md font-medium text-indigo-900 mb-2">
              Preferred Location
            </label>
            <select
              name="preferredLocation"
              value={formData.preferredLocation}
              onChange={handleChange}
              className="w-full border border-black rounded-md text-md p-2"
            >
              <option value="">Select Preferred Location</option>
              <option value="Bengaluru">Bengaluru</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Chennai">Chennai</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-10 py-2 bg-blue-700 text-white font-medium rounded-3xl hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default JobApplicationForm;

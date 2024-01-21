import React from "react";

const Bookings = () => {
  return (
    <section>
      <div className="w-full bg-[#495E57] h-28 text-4xl text-white flex items-center justify-center">
        Table reservation
      </div>

      <form className="max-w-sm mx-auto text-[#495E57] bg-[#495E57]/10 my-10 p-10 rounded-md shadow-lg shadow-gray-500">
        <div className="mb-5">
          <label
            htmlFor="Date"
            className="block mb-2 text-base font-bold   dark:text-white"
          >
            Date
          </label>
          <input
            type="date"
            id="Date"
            className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="Time"
            className="block mb-2 text-base font-bold   dark:text-white"
          >
            Time
          </label>
          <input
            type="time"
            id="Time"
            className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="number-of-guests"
            className="block mb-2 text-base font-bold   dark:text-white"
          >
            Number of guests
          </label>
          <input
            type="number"
            id="number-of-guests"
            className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            defaultValue={1}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="Occasion"
            className="block mb-2 text-base font-bold   dark:text-white"
          >
            Occasion
          </label>

          <select
            id="Occasion"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Birthday Celebration</option>
            <option value="AD">Anniversary Dinner</option>
            <option value="BM">Business Meeting</option>
            <option value="FD">Romantic Date</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-[#af3e11] hover:bg-[#495E57] text-white py-3 rounded-md font-bold"
        >
          Make your reservation
        </button>
      </form>
    </section>
  );
};

export default Bookings;

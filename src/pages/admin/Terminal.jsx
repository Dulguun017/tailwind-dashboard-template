import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import TerminalService from "../../services/terminal.service";
import MerchantModal from "./components/MerchantModal";
import TerminalModal from "./components/TerminalModal";

// components

function MerchantTable() {
  const [terminals, setTerminals] = useState([]);
  const [searchPattern, setSearchPattern] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  const getTerminals = async () => {
    try {
      const data = await TerminalService.getTerminals({
        page: 0,
        size: 20,
        searchPattern,
      });
      console.log(data);
      setTerminals(data.content);
    } catch (e) {
      console.log(e);
    }
  };

  const updateModal = () => {
    setIsUpdate(true)
    setShowModal(true)
  }

  const addModal = () => {
    setIsUpdate(false)
    setShowModal(true)
  }

  useEffect(() => {
    getTerminals();
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto mg">
            UserTable
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-6">
              <div className="p-4">
                <label for="table-search" class="sr-only">
                  Search
                </label>
                <div className="relative mt-1">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex 	justify-between">
                    <input
                      type="text"
                      id="table-search"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 flex-initial w-64"
                      placeholder="Search for items"
                      onChange={(e) => setSearchPattern(e.target.value)}
                    />
                    <button
                      className="bg-blue-200  border-0 active:bg-blue-500  font-medium text-blue-600 dark:text-blue-500 hover:underline flex-initial w-64"
                      type="button"
                      onClick={() => addModal()}
                    >
                      Add New Terminal
                    </button>
                  </div>
                </div>
              </div>
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-all-search"
                          type="checkbox"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label for="checkbox-all-search" class="sr-only">
                          checkbox
                        </label>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Id
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Device Id
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Device Model
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Device Serial
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Type
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Payment Limit
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Day Limit
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Active
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {terminals &&
                    terminals.map((terminal) => (
                      <>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <td className="w-4 p-4">
                            <div className="flex items-center">
                              <input
                                id="checkbox-table-search-1"
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                for="checkbox-table-search-1"
                                className="sr-only"
                              >
                                checkbox
                              </label>
                            </div>
                          </td>
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                          >
                            {terminal.id}
                          </th>
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                          >
                            {terminal.deviceId}
                          </th>
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                          >
                            {terminal.deviceModel}
                          </th>
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                          >
                            {terminal.deviceSerial}
                          </th>
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                          >
                            {terminal.type}
                          </th>
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                          >
                            {terminal.paymentLimit}
                          </th>
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                          >
                            {terminal.dayLimit}
                          </th>
                          <td class="px-6 py-4">
                            {terminal.active ? "ACTIVE" : "INACTIVE"}
                          </td>
                          <td class="px-6 py-4">
                            <button
                              className="bg-blue-200  border-0 active:bg-blue-500  font-medium text-blue-600 dark:text-blue-500 hover:underline"
                              type="button"
                              onClick={() => updateModal()}
                            >
                              Edit
                            </button>
                            {showModal ? (
                              <TerminalModal
                                setShowModal={setShowModal}
                                merchant={isUpdate ? terminal : null}
                                isUpdate={isUpdate}
                                getTerminals={getTerminals}
                              />
                            ) : null}
                          </td>
                        </tr>
                      </>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
export default MerchantTable;

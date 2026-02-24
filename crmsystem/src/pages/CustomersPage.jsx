import React, { useState, useEffect } from "react";
import AddCustomerModal from "../components/AddCustomerModal";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function CustomersPage() {
  const [showAddModal, setShowModal] = useState(false);
  const [customers, setCustomers] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState({});

  // Fetch all customers on load
  useEffect(() => {
    const getCustomers = async () => {
      try {
        const token = localStorage.getItem("securedToken");
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/customers`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          setCustomers(response.data.customers);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    getCustomers();
  }, []);

  // Delete customer
  async function deleteCustomer(id) {
    try {
      const token = localStorage.getItem("securedToken");

      const response = await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/customers/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setCustomers((prev) =>
          prev.filter((customer) => customer._id !== id)
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  // Edit customer
  async function editCustomer(id) {
    try {
      const token = localStorage.getItem("securedToken");

      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/customers/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setSelectedCustomer(response.data.customer);
        setIsUpdating(true);
        setShowModal(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#0b1120] to-[#111827] flex flex-col">

      {/* Header */}
      <div className="mb-10 p-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-bold text-white tracking-wide">
              Customer Directory
            </h1>
            <p className="text-slate-400 mt-3 text-sm md:text-base">
              Efficiently manage and track your client accounts and interactions.
            </p>
          </div>

          <button
            type="button"
            className="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white py-3 px-6 rounded-xl font-semibold shadow-lg shadow-blue-900/40 transition-all duration-200"
            onClick={() => {
              setIsUpdating(false);
              setSelectedCustomer({});
              setShowModal(true);
            }}
          >
            + Add New Customer
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-2xl shadow-2xl w-[92%] border border-slate-800 bg-[#0f172a]/60 backdrop-blur-lg overflow-x-auto mx-auto">

        <table className="w-full">
          <thead className="text-slate-400 border-b border-slate-800">
            <tr className="text-base md:text-lg">
              <th className="px-6 py-4 text-left">Name</th>
              <th className="px-6 py-4 text-left">Email</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-left">Mobile</th>
              <th className="px-6 py-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-800">
            {customers.map((customer) => {

              const statusColor =
                customer?.status === "Active"
                  ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                  : customer?.status === "Inactive"
                  ? "bg-red-500/10 text-red-400 border border-red-500/30"
                  : "bg-yellow-500/10 text-yellow-400 border border-yellow-500/30";

              return (
                <tr
                  key={customer?._id}
                  className="hover:bg-slate-800/40 transition duration-200"
                >
                  <td className="text-white px-6 py-4 font-medium">
                    {customer?.name}
                  </td>

                  <td className="text-blue-400 px-6 py-4">
                    {customer?.contact_info.email}
                  </td>

                  <td className="px-6 py-4 text-sm font-medium">
                    <div
                      className={`px-3 py-1 rounded-full text-center w-fit ${statusColor}`}
                    >
                      {customer?.status}
                    </div>
                  </td>

                  <td className="text-slate-400 px-6 py-4">
                    {customer?.contact_info.mobile}
                  </td>

                  <td className="px-6 py-4 flex gap-6 text-lg">
                    <FaEdit
                      className="text-slate-400 hover:text-blue-400 cursor-pointer transition"
                      onClick={() => editCustomer(customer._id)}
                    />

                    <MdDelete
                      className="text-slate-500 hover:text-red-500 cursor-pointer transition"
                      onClick={() => deleteCustomer(customer._id)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {showAddModal && (
        <AddCustomerModal
          onClose={() => setShowModal(false)}
          isUpdating={isUpdating}
          selectedCustomer={selectedCustomer}
          setCustomers={setCustomers}
        />
      )}
    </div>
  );
}

export default CustomersPage;
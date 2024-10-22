import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";

const Search = () => {
  const [singleCoursePurchaseData, setSingleCoursePurchaseData] = useState({});
  const { mutateAsync } = useMutation({
    mutationFn: async (searchTerm) => {
      try {
        const { data } = await axios.post(
          "https://itder.com/api/search-purchase-data",
          searchTerm
        );
        console.log(data.singleCoursePurchaseData
        )
        return data;
      } catch (error) {
        if (error.response) {
          console.log(error.response.data, "Server Response");
          console.log(error.response.status, "Status Code");
          console.log(error.response.headers, "Headers");
        } else if (error.request) {
          console.log(error.request, "Request Made, No Response");
        } else {
          console.log("Error", error.message);
        }
        throw error;
      }
    },
  });
  
  const handleSearch = async (e) => {
    e.preventDefault();
    const searchTerm = {
      phone_no: e.target.phone_no.value,
      form_no: e.target.form_no.value,
    };
    const res = await mutateAsync(searchTerm);
    setSingleCoursePurchaseData(res.singleCoursePurchaseData);
  };
  console.log(singleCoursePurchaseData, "singleCoursePurchaseData")
  return (
    <div className="min-h-screen flex flex-col text-text_40px font-bold items-center justify-center">
      <h1 className="w-[600px] mx-auto">Search here</h1>
      <div className="font-[sans-serif] bg-gray-50">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center lg:gap-10 gap-4">
          <div className="max-md:order-1 h-screen min-h-full">
            <img
              src="https://readymadeui.com/image-3.webp"
              className="w-full h-full object-cover"
              alt="login-image"
            />
          </div>

          <form
            className="lg:col-span-2 max-w-lg w-full p-6 mx-auto"
            onSubmit={handleSearch}
          >
            <div className="mb-12">
              <h3 className="text-gray-800 text-4xl font-extrabold">Search</h3>
            </div>

            <div>
              <label className="text-gray-800 text-sm block mb-2">
                Phone No
              </label>
              <div className="relative flex items-center">
                <input
                  name="phone_no"
                  type="text"
                  required
                  className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                  placeholder="Enter phone_no"
                />
              </div>
            </div>

            <div className="mt-8">
              <label className="text-gray-800 text-sm block mb-2">
                Form No
              </label>
              <div className="relative flex items-center">
                <input
                  name="form_no"
                  type="number"
                  required
                  className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                  placeholder="Enter form_no"
                />
              </div>
            </div>

            <div className="mt-8">
              <input
                type="submit"
                value={"Search"}
                className="font-medium text-black mb-2 border-2 hover:bg-[#D2C5A2] duration-300 py-2 px-4  block text-center mx-auto w-full"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              
              <th>Serial</th>
              <th>Trainee</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Photo</th>
            </tr>
          </thead>
          <hr />
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>
                <div>
                  <p>Student: {singleCoursePurchaseData?.name}</p>
                  <p>Student: {singleCoursePurchaseData?.phone_no}</p>
                  <p>Father: {singleCoursePurchaseData?.father_name}</p>
                  <p>
                    Father-Phone: {singleCoursePurchaseData?.father_phone_no}
                  </p>
                </div>
              </td>
              <td>
                <div>
                  <p>Course Fee: {singleCoursePurchaseData?.course_fee}</p>
                  <p>Course Qty: {singleCoursePurchaseData?.course_qty}</p>
                  <p>Total Fee: {singleCoursePurchaseData?.total_course_fee}</p>
                  <p>
                    Discount Fee: {singleCoursePurchaseData?.discount_course_fee}
                  </p>
                  <p>
                    Sub Total Fee:{" "}
                    {singleCoursePurchaseData?.sub_total_course_fee}
                  </p>
                </div>
              </td>
              <td><button className="text-white p-1 font-semibold bg-[#DC3545] rounded-md">Inactive</button></td>
              <td><img src={singleCoursePurchaseData?.photo} className="h-24" alt="" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Search;

import React, { useContext, useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Table from "../../Table/Table";
import { OrderContext } from "../../ContextAPIs/OrderProvider";
import { useMutation } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import axios from "axios";

const Checkout = () => {
  const [gender, setGender] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const { setCheckoutData, TotalCoursePrice, quantity, addcourses } = useContext(OrderContext);
  const [imagePreview, setImagePreview] = useState();
  const [imageText, setImageText] = useState("Upload Image");
  const [imgPng, setImgPng] = useState('')
  const axiosPublic = useAxiosPublic();


  const { mutateAsync } = useMutation({
    mutationFn: async formData => {
      try {
        const { data } = await axios.post("https://itder.com/api/course-purchase", formData)
        console.log(data, "inside the mutate async")
        return data
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
    onSuccess: () => {
      console.log('Data Saved Successfully')
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Course Purchase Successgully",
        showConfirmButton: false,
        timer: 1500
      });
    },
  })

  const handleBloodGroupChange = (e) => {
    setBloodGroup(e.target.value);
  };
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

   const imageUpload = async image => {
    const formData = new FormData()
    formData.append('image', image)
    const { data } = await axios.post(
      `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
      formData
    )
    return data.data.display_url
  }


  const handleSubmit = async (e) => {
   
    e.preventDefault();
    const formData = {
      course_id: addcourses[0].id,
      admission_date: e.target.date.value,
      name: e.target.fullName.value,


      photo:e.target.image.files[0],


      father_name: e.target.parentName.value,
      father_phone_no: e.target.parentNumber.value,
      school_collage_name: e.target.school.value,
      job_title: e.target.jobInfo.value,
      email: e.target.email.value,
      gender: gender,
      present_address: e.target.presentAddress.value,
      permanent_address: e.target.permanentAddress.value,
      nid_no: e.target.nid.value,
      phone_no: e.target.parentNumber.value,
      local_guardian_name: e.target.guardianName.value,
      date_of_birth: e.target.date.value,
      blood_group: bloodGroup,
      total_course_fee:TotalCoursePrice,
      course_fee:addcourses[0].regular_price,
      sub_total_course_fee:TotalCoursePrice,
      course_qty:quantity,
      local_guardian_phone_no: e.target.mobile.value,
      discount_course_fee:addcourses[0].discount_price,
      
    };
    setCheckoutData({ ...formData, courseName:addcourses[0].course_name, photo:imagePreview });
   const res = await mutateAsync(formData)
   console.log(res, "handleSubmit function ")
    

    console.log("Selected Gender:", formData);
  };
  const handleImage = (image) => {
    setImagePreview(URL.createObjectURL(image));
    setImageText(image.name);
  };

  return (
    <div className="  mt-5 border mx-2">
      <div className="bg-[#6f42c1] text-white p-6 text-center mb-5">
        <h2 className="text-5xl font-bold">Trainee Admission Form</h2>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6"
      >
        {/* Trainee Information Section */}
        <div className="form-section">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="fullName"
                className="block font-semibold text-base mb-2"
              >
                Full Name:
              </label>
              <input
                name="fullName"
                type="text"
                id="fullName"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label
                htmlFor="formNo"
                className="block font-semibold text-base mb-2"
              >
                Form no:
              </label>
              <input
                name="formNo"
                type="text"
                id="formNo"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="parentName"
                className="block font-semibold text-base mb-2"
              >
                Father/Mother Name:
              </label>
              <input
                type="text"
                name="parentName"
                id="parentName"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label
                htmlFor="parentNumber"
                className="block font-semibold text-base mb-2"
              >
                Number:
              </label>
              <input
                type="text"
                id="parentNumber"
                name="parentNumber"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="school"
                className="block font-semibold text-base mb-2"
              >
                School/College:
              </label>
              <input
                type="text"
                id="school"
                name="school"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label
                htmlFor="jobInfo"
                className="block font-semibold text-base mb-2"
              >
                Job Information:
              </label>
              <input
                name="jobInfo"
                type="text"
                id="jobInfo"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="email"
                className="block font-semibold text-base mb-2"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label
                htmlFor="gender"
                className="block font-semibold text-base mb-2"
              >
                Gender:
              </label>
              <select
                id="gender"
                name="gender"
                className="w-full border border-gray-300 rounded-md p-2"
                required
                onChange={handleGenderChange}
                value={gender}
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Others">Other</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="presentAddress"
                className="block font-semibold text-base mb-2"
              >
                Present Address:
              </label>
              <textarea
                name="presentAddress"
                id="presentAddress"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label
                htmlFor="permanentAddress"
                className="block font-semibold text-base mb-2"
              >
                Permanent Address:
              </label>
              <textarea
                name="permanentAddress"
                id="permanentAddress"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* <div>
              <label
                htmlFor="nid"
                className="block font-semibold text-base mb-2"
              >
                NID Number:
              </label>
              <input
                type="text"
                id="nid"
                name="nid"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div> */}
             <div>
              <label
                htmlFor="guardianName"
                className="block font-semibold text-base mb-2"
              >
                Local Guardian’s Name:
              </label>
              <input
                type="text"
                name="guardianName"
                id="guardianName"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label
                htmlFor="mobile"
                className="block font-semibold text-base mb-2"
              >
                Mobile No:
              </label>
              <input
                name="mobile"
                type="text"
                id="mobile"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="nid"
                className="block font-semibold text-base mb-2"
              >
                NID Number:
              </label>
              <input
                type="text"
                id="nid"
                name="nid"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div> 
            <div>
              <label
                htmlFor="date"
                className="block font-semibold text-base mb-2"
              >
                Date of Birth:
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="bloodGroup"
                className="block font-semibold text-base mb-2"
              >
                Blood Group:
              </label>
              <select
                id="bloodGroup"
                className="w-full border border-gray-300 rounded-md p-2"
                value={bloodGroup}
                onChange={handleBloodGroupChange}
                required
              >
                <option value="" disabled>
                  Select Blood Group
                </option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
             {/* img */}
          <div className=" p-4  w-full  m-auto rounded-lg flex justify-between items-center bg-slate-200">
            <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
              <div className="flex flex-col w-max mx-auto text-center">
                <label>
                  <input
                    className="text-sm cursor-pointer w-36 hidden bg-slate-200"
                    type="file"
                    onChange={(e) => handleImage(e.target.files[0])}
                    name="image"
                    id="image"
                    accept="image/*"
                    hidden
                  />
                  <div className="font-medium text-black mb-2 border-2 hover:bg-[#D2C5A2] duration-300 py-2 px-4  block text-center mx-auto w-full">
                    {/* {imageText} */}
                    {imageText.length > 20
                      ? imageText.split(".")[0].slice(0, 15) +
                        "...." +
                        imageText.split(".")[1]
                      : imageText}
                  </div>
                </label>
              </div>
            </div>
            <div className="h-16 w-16 object-cover overflow-hidden flex items-center">
              {imagePreview && <img src={imagePreview} />}
            </div>
          </div>
          </div>
         
        </div>
        <div className="lg:flex xl:flex md:flex justify-center gap-5">
          <Table></Table>
          <div className="lg:w-[41%] bg-white border-2 ">
            <div className="px-[30px]">
              <h2 className="font-bold text-start text-text_medium pt-2 pb-1 border-b-2 border-black">
                Cart Summary
              </h2>
              <div className="py-3 flex justify-between border-b border-gray-300">
                <p className="text-black font-bold">
                  Total Price: {TotalCoursePrice}
                </p>
                <p className="text-black font-bold"></p>
              </div>

              <input
                className="font-medium text-black mb-2 border-2 hover:bg-[#D2C5A2] duration-300 py-2 px-4  block text-center mx-auto w-full"
                type="submit"
                value={"Submit"}
                name=""
                id=""
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;

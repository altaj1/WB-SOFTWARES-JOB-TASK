import { useContext, useEffect, useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import OrderProvider from "../ContextAPIs/OrderProvider";


const TableRow = ({ course, setTotalCoursePrice,setAddcourses, addcourses  }) => {
  const [quantity, setQuantity] = useState(1);
  const handleQuantityIng = (courseId) => {
    const updatedCourses = addcourses.map((course) => {
        if (course.id === courseId) {
          const newQuantity = course.quantity ? course.quantity + 1 : 1;
          return {
            ...course,
            quantity: newQuantity,
          };
        }
        return course;
      });
      setAddcourses(updatedCourses);
      setQuantity(quantity - 1 )
  };
  const handleQuantityDec = (courseId) => {
    const updatedCourses = addcourses.map((course) => {
        if (course.id === courseId) {
          const newQuantity = course.quantity ? course.quantity - 1 : 1;
          return {
            ...course,
            quantity: newQuantity,
          };
        }
        return course;
      });
      setAddcourses(updatedCourses);
      setQuantity(quantity - 1 )
  };

  useEffect(() => {
    const subTotal = document.getElementsByClassName("subTotal");
    const totalPrice = Array.from(subTotal).reduce((total, element) => {
      return total + parseFloat(element.innerText);
    }, 0);
    console.log(totalPrice, "total price")
    setTotalCoursePrice(totalPrice);
  }, [quantity]);

  return (
    <tr className="border-b border-gray-300 overflow-x-auto">
      <td>
        <div className="flex items-center justify-center ">
          <div className="w-[20%] text-center flex items-center justify-center ">
            <RiDeleteBin5Line className="text-xl hover:text-footer_color cursor-pointer" />
          </div>
          <div className="flex flex-col text-center justify-center items-center py-2  w-[80%]">
            <div className="mask">
              <img
                className="h-[40px] w-[70px]"
                src={course.photo}
                alt="Course"
              />
            </div>
            <p className="text-[14.4px] px-[7px] text-center flex ">
              {course.course_name}
              <span className="hidden lg:flex ">- unit name</span>
            </p>
          </div>
        </div>
      </td>
      <td>
        <p className="text-[14.4px] font-bold p-[7px] text-black text-center">
          {course.discount_price}, BDT
        </p>
      </td>
      <td>
        <div className="flex justify-center items-center gap-2">
          <div className="border">
            <button
              disabled={course.quantity == 1}
              onClick={()=>handleQuantityDec(course.id)}
              className="px-4 w-[30px] font-bold font_standard my-1.5"
            >
              -
            </button>
          </div>
          <div className="border-y p-1">
            <p>{course.quantity|| 1}</p>
            {/* <input
              type="number"
              defaultValue={quantity}
              className="font-bold w-[30px] text-black lg:w-[60px] font_standard px-2 text-center mx-auto h-full"
            /> */}
          </div>
          <div className="border">
            <button
              onClick={()=>handleQuantityIng(course.id)}
              className="px-4 w-[30px] font-bold font_standard my-1.5"
            >
              +
            </button>
          </div>
        </div>
      </td>
      <td>
        <p className="text-[14.4px] font-bold p-[7px] text-black text-center subTotal">
          {course.discount_price * course.quantity}, BDT
        </p>
      </td>
    </tr>
  );
};

export default TableRow;

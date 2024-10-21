import { useEffect, useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

const TableRow = ({ course, setTotalCoursePrice }) => {
  console.log(course);
  const [quantity, setQuantity] = useState(1);
  const handleQuantityIng = () =>{
    setQuantity(quantity +1)
  }
  const handleQuantityDec = () =>{
    setQuantity(quantity - 1)
  }
  useEffect(() => {
    const subTotal = document.getElementsByClassName("subTotal");
    const totalPrice = Array.from(subTotal).reduce((total, element) => { // Convert innerText to number and add it to the total
      return total + parseFloat(element.innerText);
    }, 0);
    setTotalCoursePrice(totalPrice)
  }, [quantity]);
  console.log(quantity)

  return (
    <tr className="border-b border-gray-300 overflow-x-auto">
      <td>
        <div className="flex items-center justify-center ">
          <div className="w-[20%] text-center flex items-center justify-center ">
            <RiDeleteBin5Line className="text-xl hover:text-footer_color cursor-pointer" />
          </div>
          <div className="flex flex-col text-center justify-center items-center py-2  w-[80%]">
            <div className="mask">
              <img className="h-[40px] w-[70px]" src={course.photo} alt="Course" />
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
            <button disabled={quantity == 1} onClick={handleQuantityDec} className="px-4 w-[30px] font-bold font_standard my-1.5">
              -
            </button>
          </div>
          <div className="border-y p-1">
            <p>{quantity}</p>
            {/* <input
              type="number"
              defaultValue={quantity}
              className="font-bold w-[30px] text-black lg:w-[60px] font_standard px-2 text-center mx-auto h-full"
            /> */}
          </div>
          <div className="border">
            <button onClick={handleQuantityIng} className="px-4 w-[30px] font-bold font_standard my-1.5">
              +
            </button>
          </div>
        </div>
      </td>
      <td>
        <p className="text-[14.4px] font-bold p-[7px] text-black text-center subTotal">
        {course.discount_price * quantity}, BDT
        </p>
      </td>
    </tr>
  );
};

export default TableRow;

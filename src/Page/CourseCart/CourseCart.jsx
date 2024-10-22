import { useContext } from "react";
import { OrderContext } from "../../ContextAPIs/OrderProvider";
import Swal from "sweetalert2";

const CourseCart = ({ course }) => {
  const { addcourses, setAddcourses } = useContext(OrderContext);
  const regularPrice = parseInt(course.regular_price);
  const discountPrice = parseInt(course.discount_price);
  const priceDifference = regularPrice - discountPrice;
  const discountPercentage = (priceDifference / regularPrice) * 100;
  const handleAddTocart = (product) => {
    if (addcourses.length > 0) {
      return Swal.fire({
        title: "Do you want to the cart",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`
      }).then((result) => {
        if (result.isConfirmed) {
          setAddcourses([product]);s
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
      
    }
    setAddcourses([product]);
  };
  return (
    <div className=" bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
        <img src={course.photo}
        className="bg-cover h-96 w-full"
        alt="" />
        <div className="absolute top-0 left-0 p-2">
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-gray-800 text-lg font-semibold mb-2">
          {course.course_name}
        </h2>
        <div className="flex items-center justify-between mb-4">
          <span className="flex text-blue-500 text-md">★★★★★</span>
          <span className="ml-2 text-gray-600 text-md font-bold">
            {course.trainer_data.name}
          </span>
        </div>
        <p className="text-gray-600 text-md mb-4">
          Course Details <span className="text-blue-500">Show Details</span>
        </p>
        <hr />
        <div className="mt-4 flex justify-between items-center">
          <div>
            <span className="line-through text-gray-400 text-sm">
              {course.regular_price}, BDT
            </span>
            <span className="text-green-600 text-md font-bold ml-2">
              {discountPercentage.toFixed(2)}%
            </span>
            <span className="text-black text-lg font-bold ml-2">
              {course.discount_price}, BDT
            </span>
          </div>
          {/* <span className="text-green-600 text-sm">Earn Tk 48</span> */}
        </div>
        <div className="mt-4 flex gap-2">
          {/* <button disabled={addcourses[0]?.id == course.id}  onClick={()=>handleAddTocart(course)} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-500 w-full font-bold text-md">
            Add To Cart
          </button> */}
          <button
            disabled={course?.id == addcourses[0]?.id}
            onClick={() => handleAddTocart(course)}
            className={`bg-blue-500 text-white py-2 px-4 rounded w-full font-bold text-md 
    ${
      course?.id == addcourses[0]?.id
        ? "bg-gray-400 cursor-not-allowed"
        : "hover:bg-blue-600"
    }`}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCart;

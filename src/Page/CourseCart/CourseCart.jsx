import { useContext } from "react";
import { OrderContext } from "../../ContextAPIs/OrderProvider";

const CourseCart = ({ course }) => {
  const { addcourses, setAddcourses } = useContext(OrderContext);
  // const [day, month, year, time] = course.created_at.split(/[-\s:]/);
  // const formattedDate = `${year}-${month}-${day}T${time}:00Z`;
  const regularPrice = parseInt(course.regular_price);
  const discountPrice = parseInt(course.discount_price);
  const priceDifference = regularPrice - discountPrice;
  const discountPercentage = (priceDifference / regularPrice) * 100;
  const handleAddTocart = (product) => {
    setAddcourses([product]);
  };
  return (
    <div className=" bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
        <img src={course.photo} alt="" />
        <div className="absolute top-0 left-0 p-2">
          {/* <h3 className="text-white text-xl font-bold">
            {new Date(formattedDate).toLocaleString()}
          </h3> */}
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
        {/* <div className="flex gap-2 mb-4 flex-wrap">
                          {['Photography', 'Light set up', 'Camera angle', 'Self Development'].map((tag) => (
                              <span key={tag} className="bg-yellow-100 text-gray-700 text-xs font-semibold px-2 py-1 rounded">
                                  {tag}
                              </span>
                          ))}
                      </div> */}
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

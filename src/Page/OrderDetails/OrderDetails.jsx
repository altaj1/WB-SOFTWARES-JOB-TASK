import { useContext } from "react";
import TrackOrder from "./TrackOrder";
import { OrderContext } from "../../ContextAPIs/OrderProvider";

const OrderDetails = () => {
  const { checkoutData, setCheckoutData, TotalCoursePrice } =
    useContext(OrderContext);
  console.log(checkoutData);
  console.log(TotalCoursePrice);
  return (
    <div className=" m-mt_16px">
      <div className="w-full flex flex-col lg:flex-row items-start justify-center h-full gap-2 ">
        <div className="bg-white lg:p-p_30px w-full  ">
          <div className="text-center  flex flex-col justify-center items-center ">
            <p className="text-xl font-bold">Order Information</p>
            <p className="p-3 rounded-md lg:my-2 my-1 w-fit border bg-[#D2C5A2] font-bold text-lg">
              Order Id :
              <span className="font-semibold">{checkoutData.orderId}</span>
            </p>
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
                  <p>Student: {checkoutData?.name}</p>
                  <p>Student: {checkoutData?.phone_no}</p>
                  <p>Father: {checkoutData?.father_name}</p>
                  <p>
                    Father-Phone: {checkoutData?.father_phone_no}
                  </p>
                </div>
              </td>
              <td>
                <div>
                  <p>Course Fee: {checkoutData?.course_fee}</p>
                  <p>Course Qty: {checkoutData?.course_qty}</p>
                  <p>Total Fee: {checkoutData?.total_course_fee}</p>
                  <p>
                    Discount Fee: {checkoutData?.discount_course_fee}
                  </p>
                  <p>
                    Sub Total Fee:{" "}
                    {checkoutData?.sub_total_course_fee}
                  </p>
                </div>
              </td>
              <td><button className="text-white p-1 font-semibold bg-[#DC3545] rounded-md">Inactive</button></td>
              <td><img src={checkoutData?.photo} className="h-24" alt="" /></td>
            </tr>
          </tbody>
        </table>
      </div>

          <div className="lg:my-8 md:my-6 my-8 px-p_4px">
            <p className=" md:my-2 font-semibold">Courses:</p>
            <table className="overflow-x-auto border w-full">
              <thead className="b w-full">
                <tr className="text-sm ">
                  <th className="lg:w-20 md:w-16 w-8 py-2 md:py-4 lg:py-6 border ">
                    Image
                  </th>
                  <th className="lg:w-72 md:w-64 w-40 py-2 md:py-4 lg:py-6 border">
                    Course Name
                  </th>
                  <th className="lg:w-72 md:w-64 w-40 py-2 md:py-4 lg:py-6 border">
                    Student Name
                  </th>
                  <th className="lg:w-20 md:w-20 w-16 py-2 md:py-4 lg:py-6 border">
                    Quantity
                  </th>
                  <th className="lg:w-20 md:w-20 w-16  py-2 md:py-4 lg:py-6 border text-center">
                    Price
                  </th>
                  <th className="lg:w-20 md:w-20 w-16  py-2 md:py-4 lg:py-6 border text-center">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody className="md:text-base text-sm font-semibold">
                <tr>
                  <td className="border text-center w-10 h-12 px-2">
                    <img
                      className=" w-full h-full object-cover mx-auto"
                      src={checkoutData.photo}
                      alt=""
                    />
                  </td>
                  <td className="lg:py-6 md:py-4 py-2 text-center border">
                    {checkoutData?.courseName}
                  </td>
                  <td className="lg:py-6 md:py-4 py-2 text-center border">
                  {checkoutData?.name}
                  </td>
                  <td className="lg:py-6 md:py-4 py-2 text-center border">
                  {checkoutData.course_qty}
                  </td>
                  <td className="lg:py-6 md:py-4 py-2 text-center border">
                    1567, BDT
                  </td>
                  <td className="lg:py-6 md:py-4 py-2 text-center border">
                  {checkoutData.sub_total_course_fee}, BDT
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;

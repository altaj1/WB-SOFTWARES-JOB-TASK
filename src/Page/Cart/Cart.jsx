/* eslint-disable react/react-in-jsx-scope */
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { OrderContext } from "../../ContextAPIs/OrderProvider";
import TableRow from "../../TableRow/TableRow";
import Table from "../../Table/Table";

const Cart = () => {
    const {TotalCoursePrice,} = useContext(OrderContext);
    // useEffect(()=>{

    // },[TotalCoursePrice])
  return (
    <div className="m-mt_16px">
      <h1 className="text-sm text-start md:text-text_xl lg:py-0 font-bold">
        Cart
      </h1>
      <div className="pt-p_16px">
        <div className="lg:flex items-start gap-3">
          <div className="w-full lg:w-[58%] bg-white border-2">
            <Table></Table>
          </div>
          <div className="lg:w-[41%] bg-white border-2 ">
            <div className="px-[30px]">
              <h2 className="font-bold text-start text-text_medium pt-2 pb-1 border-b-2 border-black">
                Cart Summary
              </h2>
              <div className="py-3 flex justify-between border-b border-gray-300">
                <p className="text-black font-bold">Total Price: {TotalCoursePrice}</p>
                <p className="text-black font-bold"></p>
              </div>

              <Link
                to={`/checkout`}
                state={"bdt"}
                className="font-medium text-black mb-2 border-2 hover:bg-[#D2C5A2] duration-300 py-2 px-4  block text-center mx-auto w-full"
              >
                PROCEED TO CHECKOUT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

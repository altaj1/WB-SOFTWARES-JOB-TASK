import { useContext } from 'react';
import { OrderContext } from '../ContextAPIs/OrderProvider';
import TableRow from '../TableRow/TableRow';

const Table = () => {
    const { addcourses,TotalCoursePrice, setTotalCoursePrice, setAddcourses} = useContext(OrderContext);
    return (
        <table className=" overflow-x-auto  w-full">
        <thead>
          <tr className="border-b-4 border-gray-300">
            <th className="text-[14.4px] w-6/12 font-bold p-[7px] text-black">
              Course
            </th>
            <th className="text-[14.4px] font-bold p-[7px] text-black">
              Price
            </th>
            <th className="text-[14.4px] font-bold p-[7px] text-black">
              Quantity
            </th>
            <th className="text-[14.4px] font-bold p-[7px] text-black">
              Sub Total
            </th>
          </tr>
        </thead>

        <tbody className="overflow-x-auto ">

          {addcourses.map(course=><TableRow key={course.id} setAddcourses={setAddcourses} course={course} addcourses={addcourses}  setTotalCoursePrice={setTotalCoursePrice}></TableRow>)}

          
        </tbody>
      </table>
    );
};

export default Table;
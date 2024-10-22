import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loader from "../../Utils/Loader/Loader";
import CourseCart from "../CourseCart/CourseCart";
import { GrLinkNext } from "react-icons/gr";
import { useState } from "react";
import { GrLinkPrevious } from "react-icons/gr";

// start date & time
//10/21/24, 11:45pm

const Courses = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLast = currentPage * 3;
  const indexOfFirst = indexOfLast - 3;

  const axiosPublic = useAxiosPublic();
  const { data: courses = [], isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/api/get-course-list`);
      return data;
    },
  });

  if (isLoading) {
    return <Loader></Loader>;
  }
  const currentCourses =
    courses?.courseData?.slice(indexOfFirst, indexOfLast) || [];
  const totalPages = Math.ceil(courses?.courseData?.length / 3);

  return (
    <div className="m-mt_16px">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {currentCourses?.map((course) => (
          <CourseCart key={course.id} course={course} />
        ))}
      </div>
      <div className="flex items-center justify-center mt-8">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 text-white disabled:opacity-50"
        >
         <GrLinkPrevious />
        </button>
        <span className="mx-4 text-gray-600">
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
        >
          <GrLinkNext />
        </button>
      </div>
    </div>
  );
};

export default Courses;

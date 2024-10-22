import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loader from "../../Utils/Loader/Loader";
import CourseCart from "../CourseCart/CourseCart";
// start date & time
//10/21/24, 11:45pm

const Courses = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: courses = [],
    isLoading,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/api/get-course-list`);
      return data;
    },
  });
  if (isLoading) {
    return <Loader></Loader>;
  }
  
  return (
    <div className="m-mt_16px">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {courses?.courseData.map((course) => (
          <CourseCart key={course.id} course={course}/>
        ))}
      </div>
    </div>
  );
};

export default Courses;

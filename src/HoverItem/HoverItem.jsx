const HoverItem = ({ course }) => {
  return (
    <div className="m-3 flex gap-5 justify-between">
      <p>{course.course_name}</p>
      <p>{course.discount_price}, BDT</p>
    </div>
  );
};

export default HoverItem;

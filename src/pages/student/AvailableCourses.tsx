import { useGetMyOfferedCoursesQuery } from "../../redux/features/student/studentApi";
import { TOfferedCourse } from "../../types";

type TAcc = {
  [index: string]: any;
};

const AvailableCourses = () => {
  const { data: availableCoursesData } = useGetMyOfferedCoursesQuery(undefined);
  console.log(availableCoursesData);
  const formatedAvailableCourses: TOfferedCourse[] =
    availableCoursesData?.data?.reduce((acc: TAcc, item: TOfferedCourse) => {
      const key = item.course.title;

      acc[key] = acc[key] || { courseTitle: key, sections: [] };
      acc[key].sections.push({
        section: item.section,
        _id: item._id,
        days: item.days,
      });

      return acc;
    }, {});
  console.log(
    formatedAvailableCourses ? Object.values(formatedAvailableCourses) : []
  );
  return <div></div>;
};

export default AvailableCourses;

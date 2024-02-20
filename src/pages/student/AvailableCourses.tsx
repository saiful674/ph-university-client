import { Button, Col, Row, Tag } from "antd";
import { toast } from "sonner";
import {
  useEnrollCourseMutation,
  useGetMyOfferedCoursesQuery,
} from "../../redux/features/student/studentApi";
import { TOfferedCourse, TResponse } from "../../types";
import Loading from "../Loading";

type TAcc = {
  [index: string]: any;
};

const AvailableCourses = () => {
  const { data, isLoading } = useGetMyOfferedCoursesQuery(undefined);
  const [enrollCourse] = useEnrollCourseMutation();
  if (isLoading) {
    return <Loading />;
  }
  const availableCourses = data?.data?.reduce(
    (acc: TAcc, item: TOfferedCourse) => {
      const key = item.course.title;

      acc[key] = acc[key] || { courseTitle: key, sections: [] };
      acc[key].sections.push({
        section: item.section,
        _id: item._id,
        days: item.days,
        faculty: item.faculty,
        startTime: item.startTime,
        endTime: item.endTime,
      });

      return acc;
    },
    {}
  );
  const formatedAvailableCourses = availableCourses
    ? Object.values(availableCourses)
    : [];

  const handleEnrollCourse = async (id: string) => {
    const toastId = toast.loading("Please wait...");
    try {
      const enrollCourseData = { offeredCourse: id };

      const res = (await enrollCourse(enrollCourseData)) as TResponse<any>;
      console.log(res);
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("You enrolled this course successfully", { id: toastId });
      }
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }
  };

  return (
    <div>
      {formatedAvailableCourses.length > 0 ? (
        formatedAvailableCourses.map((item: any, index: number) => (
          <div key={index} style={{ fontSize: " 20px" }}>
            <h2 style={{ display: "inline-block" }}>{item.courseTitle}</h2>
            <div>
              {item.sections.map((item: any, index: number) => (
                <Row
                  key={index}
                  align="middle"
                  style={{
                    margin: "10px 0",
                    border: "1px solid black",
                    padding: "5px ",
                  }}
                >
                  <Col span={4}>
                    Mentor :
                    {`${item.faculty.name.firstName} ${item.faculty.name.middleName}`}
                  </Col>
                  <Col span={4}>Sections : {item.section}</Col>
                  <Col span={4}>Start Time : {item.startTime}</Col>
                  <Col span={4}>End Time : {item.endTime}</Col>
                  <Col span={5}>
                    Days :
                    {item.days.map((item: string, index: number) => (
                      <Tag color="blue" key={index}>
                        {item}
                      </Tag>
                    ))}
                  </Col>
                  <Col
                    span={3}
                    style={{ display: "flex", justifyContent: "end" }}
                  >
                    <Button
                      type="primary"
                      onClick={() => handleEnrollCourse(item._id)}
                    >
                      Enroll
                    </Button>
                  </Col>
                </Row>
              ))}
            </div>
          </div>
        ))
      ) : (
        <div>
          <p style={{ color: "red" }}>
            Currently You haven't any availavle course. To enroll new courses
            please complete enrolled course
          </p>
        </div>
      )}
    </div>
  );
};

export default AvailableCourses;

import { useGetAllAcademicSemesterQuery } from "../../../redux/features/admin/academicManagement";

const AcademicSemester = () => {
  const { data } = useGetAllAcademicSemesterQuery(undefined);
  console.log(data);

  return <div>Academic Semester</div>;
};

export default AcademicSemester;

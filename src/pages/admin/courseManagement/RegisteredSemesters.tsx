import { Button, Table, TableColumnsType, Tag } from "antd";
import { useState } from "react";
import { useGetAllRegisteredSemesterQuery } from "../../../redux/features/admin/courseManagement";
import { TQueryParam, TRegisteredSemester } from "../../../types";

const columns: TableColumnsType<
  Pick<
    TRegisteredSemester,
    "academicSemester" | "status" | "endDate" | "startDate"
  >
> = [
  {
    title: "Academic Semester",
    dataIndex: "academicSemester",
  },
  {
    title: "Status",
    dataIndex: "status",
    render: (status) => {
      let color;
      if (status === "UPCOMING") {
        color = "blue";
      }
      if (status === "ONGOING") {
        color = "green";
      }
      if (status === "END") {
        color = "red";
      }
      return <Tag color={color}>{status}</Tag>;
    },
  },
  {
    title: "Start Date",
    dataIndex: "startDate",
  },
  {
    title: "End Date",
    dataIndex: "endDate",
  },
  {
    title: "Action",
    dataIndex: "",
    render: (item) => (
      <Button onClick={() => console.log(item.key)}>Update</Button>
    ),
  },
];

const RegisteredSemesters = () => {
  const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);

  const {
    data: registeredSemesterData,

    isFetching,
  } = useGetAllRegisteredSemesterQuery(params);

  //   const onChange: TableProps<DataType>["onChange"] = (
  //     _pagination,
  //     filters,
  //     _sorter,
  //     extra
  //   ) => {
  //     if (extra.action === "filter") {
  //       const queryParams: TQueryParam[] = [];

  //       filters.name?.forEach((item) =>
  //         queryParams.push({ name: "name", value: item })
  //       );

  //       filters.year?.forEach((item) =>
  //         queryParams.push({ name: "year", value: item })
  //       );

  //       setParams(queryParams);
  //     }
  //   };
  console.log(registeredSemesterData);

  const semesterTableData = registeredSemesterData?.data?.map(
    ({
      _id,
      academicSemester,
      endDate,
      startDate,
      status,
    }: TRegisteredSemester) => {
      return {
        key: _id,
        academicSemester: `${academicSemester?.name} ${academicSemester?.year}`,
        startDate,
        endDate,
        status,
      };
    }
  );

  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={semesterTableData}
      //   onChange={onChange}
    />
  );
};

export default RegisteredSemesters;

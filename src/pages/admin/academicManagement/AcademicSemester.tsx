import { Table, TableColumnsType, TableProps } from "antd";
import { useState } from "react";
import { useGetAllAcademicSemesterQuery } from "../../../redux/features/admin/academicManagement";
import { TAcademicSemester, TQueryParam } from "../../../types";

interface DataType {
  key: React.Key;
  name: string;
  year: string;
  startMonth: string;
  endMonth: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    filters: [
      {
        text: "Autumn",
        value: "Autumn",
      },
      {
        text: "Fall",
        value: "Fall",
      },
      {
        text: "Summer",
        value: "Summer",
      },
    ],
  },
  {
    title: "Year",
    dataIndex: "year",
    filters: [
      {
        text: "2024",
        value: "2024",
      },
      {
        text: "2025",
        value: "2025",
      },
      {
        text: "2026",
        value: "2026",
      },
    ],
  },
  {
    title: "Start Month",
    dataIndex: "startMonth",
  },
  {
    title: "End Month",
    dataIndex: "endMonth",
  },
];

const AcademicSemester = () => {
  const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);

  const {
    data: semesterData,
    isLoading,
    isFetching,
  } = useGetAllAcademicSemesterQuery(params);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  const onChange: TableProps<DataType>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    if (extra.action === "filter") {
      const queryParams: TQueryParam[] = [];

      filters.name?.forEach((item) =>
        queryParams.push({ name: "name", value: item })
      );

      filters.year?.forEach((item) =>
        queryParams.push({ name: "year", value: item })
      );

      setParams(queryParams);
    }
  };
  console.log(semesterData);

  const semesterTableData = semesterData?.data.map(
    ({ _id, name, year, startMonth, endMonth }: TAcademicSemester) => {
      return { key: _id, name, year, startMonth, endMonth };
    }
  );

  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={semesterTableData}
      onChange={onChange}
    />
  );
};

export default AcademicSemester;

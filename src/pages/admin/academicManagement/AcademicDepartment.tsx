import { Table, TableColumnsType, TableProps } from "antd";
import { useState } from "react";
import { useGetAllAcademicDepartmentQuery } from "../../../redux/features/admin/academicManagement";
import { TAcademicDepartment, TQueryParam } from "../../../types";
import Loading from "../../Loading";

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
    title: "Academic Faculty",
    dataIndex: "academicFaculty",
  },
];

const AcademicDepartment = () => {
  const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);

  const {
    data: department,
    isLoading,
    isFetching,
  } = useGetAllAcademicDepartmentQuery(params);

  if (isLoading) {
    return <Loading />;
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

  const departmentTableData = department?.data.map(
    ({ _id, name, academicFaculty }: TAcademicDepartment) => {
      return {
        key: _id,
        name,
        academicFaculty: academicFaculty?.name,
      };
    }
  );

  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={departmentTableData}
      onChange={onChange}
    />
  );
};

export default AcademicDepartment;

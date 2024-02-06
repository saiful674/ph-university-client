import { Button, Space, Table, TableColumnsType, TableProps } from "antd";
import { useState } from "react";
import { useGetAllStudentsQuery } from "../../../redux/features/admin/userManagement";
import { TQueryParam } from "../../../types";
import { TStudent } from "../../../types/userManagement.types";

type DataType = Pick<TStudent, "_id" | "fullName" | "id">;

const columns: TableColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "fullName",
  },
  {
    title: "Roll No.",
    dataIndex: "id",
  },
  {
    title: "Actions",
    dataIndex: "x",
    render: () => (
      <Space>
        <Button>Update</Button>
        <Button>Details</Button>
        <Button>Block</Button>
      </Space>
    ),
    width: "1%",
  },
];

const StudentData = () => {
  const [params, setParams] = useState<TQueryParam[]>([]);

  const {
    data: studentData,
    isLoading,
    isFetching,
  } = useGetAllStudentsQuery(params);
  console.log(studentData);
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

      setParams(queryParams);
    }
  };

  const studentTableData = studentData?.data?.map(
    ({ _id, name, id }: TStudent) => {
      return {
        key: _id,
        fullName: `${name?.firstName} ${name?.middleName} ${name?.lastName}`,
        id,
      };
    }
  );

  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={studentTableData}
      onChange={onChange}
    />
  );
};

export default StudentData;

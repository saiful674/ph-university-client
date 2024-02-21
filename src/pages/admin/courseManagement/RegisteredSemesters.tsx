import {
  Button,
  Dropdown,
  MenuProps,
  Space,
  Table,
  TableColumnsType,
  Tag,
} from "antd";
import { useState } from "react";
import { toast } from "sonner";
import {
  useGetAllRegisteredSemesterQuery,
  useUpdateSemesterRegistrationStatusMutation,
} from "../../../redux/features/admin/courseManagement";
import { TRegisteredSemester, TResponse } from "../../../types";

// eslint-disable-next-line react-refresh/only-export-components
export const items: MenuProps["items"] = [
  {
    label: "Upcoming",
    key: "UPCOMING",
  },
  {
    label: "Ongoing",
    key: "ONGOING",
  },
  {
    label: "Ended",
    key: "ENDED",
  },
];
const RegisteredSemesters = () => {
  const [semesterId, setSemesterId] = useState("");
  const [updateSemesterRegistrationStatus] =
    useUpdateSemesterRegistrationStatusMutation();
  const {
    data: registeredSemesterData,

    isFetching,
  } = useGetAllRegisteredSemesterQuery(undefined);

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

  //   update semester status function
  const handleUpdateStatus: MenuProps["onClick"] = async (data) => {
    const toastId = toast.loading("Please wait...");
    const updateData = {
      id: semesterId,
      data: { status: data.key },
    };

    try {
      const res = (await updateSemesterRegistrationStatus(
        updateData
      )) as TResponse<any>;
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("Semester status update", { id: toastId });
      }
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }
  };

  const menuProps = {
    items,
    onClick: handleUpdateStatus,
  };

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
        if (status === "ENDED") {
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
        <Space>
          <Dropdown menu={menuProps} trigger={["click"]}>
            <Button onClick={() => setSemesterId(item.key)}>Update</Button>
          </Dropdown>
        </Space>
      ),
    },
  ];

  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={semesterTableData}
    />
  );
};

export default RegisteredSemesters;

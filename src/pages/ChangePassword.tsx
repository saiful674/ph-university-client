import { Button, Col, Flex } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PhForm from "../components/forms/PhForm";
import PhInput from "../components/forms/PhInput";
import { useChangePasswordMutation } from "../redux/features/auth/authApi";
import { logout } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hooks";
import { TResponse } from "../types";

const ChangePassword = () => {
  const [changePassword] = useChangePasswordMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Please wait...");
    const res = (await changePassword(data)) as TResponse<any>;

    if (res?.data?.success) {
      dispatch(logout());
      navigate("/login");
      toast.success("Your Password change successfully.", { id: toastId });
    } else {
      toast.success("Something went wrong!", { id: toastId });
    }
  };
  return (
    <Flex justify="center">
      <Col span={6}>
        <PhForm onSubmit={onSubmit}>
          <PhInput name={"oldPassword"} type={"text"} label={"Old Password"} />
          <PhInput name={"newPassword"} type={"text"} label={"New Password"} />
          <Button
            htmlType="submit"
            style={{ marginTop: "10px", fontWeight: "500" }}
          >
            Submit
          </Button>
        </PhForm>
      </Col>
    </Flex>
  );
};

export default ChangePassword;

import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TPhInputProps = {
  type: string;
  name: string;
  label: string;
};
const PhInput = ({ type, name, label }: TPhInputProps) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState }) => (
        <Form.Item label={label}>
          <Input {...field} type={type} />
          <span style={{ color: "red" }}>{fieldState?.error?.message}</span>
        </Form.Item>
      )}
    ></Controller>
  );
};

export default PhInput;

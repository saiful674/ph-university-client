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
      render={({ field }) => (
        <Form.Item label={label}>
          <Input {...field} type={type} />
        </Form.Item>
      )}
    ></Controller>
  );
};

export default PhInput;

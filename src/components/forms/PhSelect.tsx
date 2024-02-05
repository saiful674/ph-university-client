import { Form, Select } from "antd";
import { Controller } from "react-hook-form";
type TPhSlectProps = {
  name: string;
  label: string;
  options: { value: string; label: string; disabled?: boolean }[];
};

const PhSelect = ({ options, name, label }: TPhSlectProps) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState }) => (
        <Form.Item label={label}>
          <Select {...field} options={options}></Select>
          <span style={{ color: "red" }}>{fieldState?.error?.message}</span>
        </Form.Item>
      )}
    ></Controller>
  );
};

export default PhSelect;

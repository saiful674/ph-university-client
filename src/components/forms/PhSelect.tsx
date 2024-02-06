import { Form, Select } from "antd";
import { Controller } from "react-hook-form";
type TPhSlectProps = {
  name: string;
  label: string;
  options: { value: string; label: string; disabled?: boolean }[];
  disabled?: boolean;
};

const PhSelect = ({ options, name, label, disabled }: TPhSlectProps) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState }) => (
        <Form.Item label={label}>
          <Select {...field} options={options} disabled={disabled}></Select>
          <span style={{ color: "red" }}>{fieldState?.error?.message}</span>
        </Form.Item>
      )}
    ></Controller>
  );
};

export default PhSelect;

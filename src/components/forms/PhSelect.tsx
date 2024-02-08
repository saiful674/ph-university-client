import { Form, Select } from "antd";
import { Controller } from "react-hook-form";
type TPhSlectProps = {
  name: string;
  label: string;
  options: { value: string; label: string; disabled?: boolean }[];
  disabled?: boolean;
  mode?: "multiple" | undefined;
};

const PhSelect = ({ options, name, label, disabled, mode }: TPhSlectProps) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState }) => (
        <Form.Item label={label}>
          <Select
            {...field}
            mode={mode}
            options={options}
            disabled={disabled}
          ></Select>
          <span style={{ color: "red" }}>{fieldState?.error?.message}</span>
        </Form.Item>
      )}
    ></Controller>
  );
};

export default PhSelect;

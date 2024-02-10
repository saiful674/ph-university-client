import { Form, Select } from "antd";
import { useEffect } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";
type TPhSlectProps = {
  name: string;
  label: string;
  options: { value: string; label: string; disabled?: boolean }[];
  disabled?: boolean;
  mode?: "multiple" | undefined;
  onValueChange: React.Dispatch<React.SetStateAction<string>>;
};

const PhSelectWithWatch = ({
  options,
  name,
  label,
  disabled,
  mode,
  onValueChange,
}: TPhSlectProps) => {
  const method = useFormContext();
  const inputValue = useWatch({
    control: method.control,
    name,
  });

  useEffect(() => {
    onValueChange(inputValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

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

export default PhSelectWithWatch;

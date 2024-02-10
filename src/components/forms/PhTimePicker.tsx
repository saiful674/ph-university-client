import { DatePicker, Form } from "antd";
import { Controller } from "react-hook-form";

type TPhTimePickerProps = {
  name: string;
  label: string;
};
const PhTimePicker = ({ name, label }: TPhTimePickerProps) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <DatePicker
              {...field}
              size="large"
              picker="time"
              style={{ width: "100%" }}
              format={"HH:mm"}
            />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PhTimePicker;

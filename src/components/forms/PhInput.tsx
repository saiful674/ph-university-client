import { Input } from "antd";
import { Controller } from "react-hook-form";

type TPhInputProps = {
  type: string;
  name: string;
  label: string;
};
const PhInput = ({ type, name, label }: TPhInputProps) => {
  return (
    <>
      {label ? (
        <label
          style={{ padding: "10px 0 0", display: "block", fontWeight: "500" }}
        >
          {label}
        </label>
      ) : null}
      <Controller
        name={name}
        render={({ field }) => <Input {...field} type={type} />}
      ></Controller>
    </>
  );
};

export default PhInput;

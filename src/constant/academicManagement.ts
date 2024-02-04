import { months } from "./global";

export const semesterNameOptions = [
  { value: "01", label: "Autumn" },
  { value: "02", label: "Summer" },
  { value: "03", label: "Fall" },
];

export const semesterMonthsOption = months.map((month) => ({
  value: month,
  label: month,
}));

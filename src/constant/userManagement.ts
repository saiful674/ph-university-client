import { bloodGroup, gender } from "./global";

export const genderOptons = gender.map((item) => ({
  value: item,
  label: item,
}));
export const bloodGroupOptons = bloodGroup.map((item) => ({
  value: item,
  label: item,
}));

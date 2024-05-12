export const colors = {
  primary: "bg-[#65D1D4]",
  info: "bg-[#66C4DE]",
  success: "bg-[#7ED6A5]",
  warning: "bg-[#FCCF71]",
  danger: "bg-[#F1926E]",
};

export function isKeyOf<T extends object>(
  obj: T,
  key: keyof any //eslint-disable-line
): key is keyof T {
  return key in obj;
}

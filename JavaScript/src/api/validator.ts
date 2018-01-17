export function stringNullOrEmpty(str: string) {
  return (!str || /^\s*$/.test(str));
}

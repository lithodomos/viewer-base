export function unbox<T>(val: T | T[]): T {
  return Array.isArray(val) ? val[0] : val;
}

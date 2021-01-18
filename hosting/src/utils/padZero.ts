export function padZero(str: string, len: number = 2) {
  const maxLength = Math.max(str.length, len);

  const zeros = new Array(maxLength).fill(0).join('');

  return (zeros + str).slice(-maxLength);
}

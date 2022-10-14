export function randomColor() {
  let random256 = () => parseInt(Math.random() * 256);
  return `rgb(${random256()},${random256()},${random256()})`;
}

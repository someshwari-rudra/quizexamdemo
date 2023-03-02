export function getRandomColor() {
const colors = [
  "#87CEFA",
  "#ADD8E6",
  "#FFB6C1",
  "#E0FFFF",
  "#B0C4DE",
  "#DDA0DD",
  "#FFB6C1",
];

  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

function randomGenerator() {
  let colorPatterns = "1234567890ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += colorPatterns[Math.floor(Math.random() * 16)];
  }
  return color;
}

const scale = 8.7; // 0->1 = 10px

const canvas = document.querySelector("#canvas");
const rangeInput = document.querySelector("#rangeInput");
const rangeValueDiv = document.querySelector("#rangeValue");

const CANVAS_DIMENSIONS = { height: canvas.height, width: canvas.width };

const ctx = canvas.getContext("2d");

const sequence = [
  0, 1, 3, 6, 2, 7, 13, 20, 12, 21, 11, 22, 10, 23, 9, 24, 8, 25, 43, 62, 42,
  63, 41, 18, 42, 17, 43, 16, 44, 15, 45, 14, 46, 79, 113, 78, 114, 77, 39, 78,
  38, 79, 37, 80, 36, 81, 35, 82, 34, 83, 33, 84, 32, 85, 31, 86, 30, 87, 29,
  88, 28, 89, 27, 90, 26, 91,
].map((item) => item * scale);

const drawRecaman = (uptoIndex) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
// Draw the Line
  ctx.beginPath();
  ctx.moveTo(0, canvas.height / 2);
  ctx.lineTo(canvas.width, canvas.height / 2);
  ctx.stroke();
// Draw the Recaman Sequence
  for (let i = 0, pos, radius, spin = true; i < uptoIndex - 1; i++) {
    pos = (sequence[i] + sequence[i + 1]) / 2;
    radius = Math.abs(sequence[i + 1] - sequence[i]) / 2;
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.arc(pos, canvas.height / 2, radius, 0, Math.PI, spin);
    ctx.stroke();
    spin = !spin;
  }
};

const onInputChangeHandler = (value) => {
  rangeValueDiv.innerText = value;
  console.log(value);
  drawRecaman(value);
};

rangeInput.addEventListener("input", (e) =>
  onInputChangeHandler(e.target.value)
);
drawRecaman(66);

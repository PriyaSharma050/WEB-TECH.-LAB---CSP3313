let display = document.getElementById("display");
let memory = 0;
let lastAnswer = 0;
let isDegree = true;
let currentMode = null;

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function toggleRadio(radio) {
  const display = document.getElementById("display");
  let val = parseFloat(display.value);
  if (isNaN(val)) val = 0;
  if (currentMode === radio.value) {
    radio.checked = false;
    currentMode = null;
    alert("Mode cleared");
    return;
  }
  if (currentMode === "Degrees" && radio.value === "Radians") {
    val = val * (Math.PI / 180);
  } else if (currentMode === "Radians" && radio.value === "Degrees") {
    val = val * (180 / Math.PI);
  }

  currentMode = radio.value;
  display.value = val;
  alert("Mode: " + currentMode);
}

function calculate() {
  try {
    let expr = display.value
      .replace(/π/g, "Math.PI")
      .replace(/e/g, "Math.E")
      .replace(/\^/g, "**");

    let result = eval(expr);

    if (!isFinite(result)) throw Error();
    lastAnswer = result;
    display.value = +result.toFixed(10);
  } catch {
    display.value = "Error";
  }
}

function ans() {
  if (lastAnswer !== null) {
    display.value += lastAnswer;
  }
}

function factorial() {
  try {
    let n = parseFloat(display.value);
    if (n < 0 || isNaN(n)) {
      display.value = "Error";
      return;
    }
    let f = 1;
    for (let i = 1; i <= n; i++) f *= i;
    display.value = f;
  } catch {
    display.value = "Error";
  }
}

function inverse() {
  let val = parseFloat(display.value);
  display.value = val !== 0 ? 1 / val : "Error";
}

function square() {
  let val = parseFloat(display.value);
  display.value = Math.pow(val, 2);
}

function cube() {
  let val = parseFloat(display.value);
  display.value = Math.pow(val, 3);
}

function powerY() {
  display.value += "**";
}

function sqrt() {
  display.value = Math.sqrt(parseFloat(display.value));
}

function cubeRoot() {
  display.value = Math.cbrt(parseFloat(display.value));
}

function yRoot() {
  display.value += "**(1/";
}

function sin() {
  let val = parseFloat(display.value);
  if (isDegree) val = val * Math.PI / 180;
  display.value = Math.sin(val);
}

function cos() {
  let val = parseFloat(display.value);
  if (isDegree) val = val * Math.PI / 180;
  display.value = Math.cos(val);
}

function tan() {
  let val = parseFloat(display.value);
  if (isDegree) val = val * Math.PI / 180;
  display.value = Math.tan(val);
}

function sinInverse() {
  let val = parseFloat(display.value);
  let res = Math.asin(val);
  display.value = isDegree ? res * 180 / Math.PI : res;
}

function cosInverse() {
  let val = parseFloat(display.value);
  let res = Math.acos(val);
  display.value = isDegree ? res * 180 / Math.PI : res;
}

function tanInverse() {
  let val = parseFloat(display.value);
  let res = Math.atan(val);
  display.value = isDegree ? res * 180 / Math.PI : res;
}

function log10() {
  display.value = Math.log10(parseFloat(display.value));
}

function ln() {
  display.value = Math.log(parseFloat(display.value));
}

function exp() {
  display.value = Math.exp(parseFloat(display.value));
}

function tenPowerX() {
  display.value = Math.pow(10, parseFloat(display.value));
}

function expInput() {
  const val = display.value;
  if (!val) return; 
  const last = val.slice(-1);
  if (/[0-9\)\u03C0\.]$/.test(last) && /[Ee]$/.test(last) === false) {
    display.value += 'E';
  }
}

function percent() {
  display.value = parseFloat(display.value) / 100;
}

function plusMinus() {
  display.value = parseFloat(display.value) * -1;
}

function randomNum() {
  display.value = Math.random();
}

function memoryAdd() {
  memory += parseFloat(display.value) || 0;
}

function memorySubtract() {
  memory -= parseFloat(display.value) || 0;
}

function memoryRecall() {
  display.value += memory;
}

function allClear() {
  display.value = "";
  memory = 0;
  lastAnswer = 0;
}

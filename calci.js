function java(value) {
  document.getElementById('result').value += value;
}

function clearDisplay() {
  document.getElementById('result').value = '';
}

function backspace() {
  var displayValue = document.getElementById('result').value;
  document.getElementById('result').value = displayValue.substring(0, displayValue.length - 1);
}

function calculate() {
  var displayValue = document.getElementById('result').value;
  var result = eval(displayValue.replace(/\s/g, ''));
  document.getElementById('result').value = result;
}

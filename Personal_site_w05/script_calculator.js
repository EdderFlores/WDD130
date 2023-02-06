const output = document.querySelector('.output');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    let value = this.innerText;
    let currentOutput = output.innerText;
    if (value === 'C') {
      output.innerText = '0';
    } else if (value === '=') {
      output.innerText = eval(currentOutput);
    } else {
      if (currentOutput === '0') {
        output.innerText = value;
      } else {
        output.innerText += value;
      }
    }
  });
});
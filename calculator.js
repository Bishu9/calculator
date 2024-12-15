export default {
  async fetch(request) {
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Stylish Scientific Calculator</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: #fff;
            text-align: center;
            padding: 20px;
          }
          .calculator {
            margin: 20px auto;
            padding: 20px;
            background: rgba(0, 0, 0, 0.5);
            border-radius: 10px;
            width: 300px;
          }
          .calculator input[type="text"] {
            width: 100%;
            height: 50px;
            font-size: 1.2em;
            margin-bottom: 10px;
            text-align: right;
            border: none;
            border-radius: 5px;
            padding: 5px;
          }
          .calculator button {
            width: 22%;
            height: 50px;
            margin: 1%;
            font-size: 1.1em;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            background: #444;
            color: #fff;
          }
          .calculator button:hover {
            background: #555;
          }
          .note {
            margin-top: 20px;
            font-size: 1.2em;
            font-style: italic;
          }
        </style>
      </head>
      <body>
        <h1>Stylish Scientific Calculator</h1>
        <div class="calculator">
          <input type="text" id="result" disabled>
          <br>
          <button onclick="clearResult()">C</button>
          <button onclick="appendValue('(')">(</button>
          <button onclick="appendValue(')')">)</button>
          <button onclick="appendValue('/')">/</button>
          <button onclick="appendValue('7')">7</button>
          <button onclick="appendValue('8')">8</button>
          <button onclick="appendValue('9')">9</button>
          <button onclick="appendValue('*')">*</button>
          <button onclick="appendValue('4')">4</button>
          <button onclick="appendValue('5')">5</button>
          <button onclick="appendValue('6')">6</button>
          <button onclick="appendValue('-')">-</button>
          <button onclick="appendValue('1')">1</button>
          <button onclick="appendValue('2')">2</button>
          <button onclick="appendValue('3')">3</button>
          <button onclick="appendValue('+')">+</button>
          <button onclick="appendValue('0')">0</button>
          <button onclick="appendValue('.')">.</button>
          <button onclick="calculateResult()">=</button>
          <button onclick="appendValue('Math.sqrt(')">√</button>
          <button onclick="appendValue('Math.sin(')">sin</button>
          <button onclick="appendValue('Math.cos(')">cos</button>
          <button onclick="appendValue('Math.tan(')">tan</button>
          <button onclick="appendValue('Math.log10(')">log10</button>
          <button onclick="appendValue('Math.log(')">ln</button>
          <button onclick="appendValue('Math.exp(')">exp</button>
          <button onclick="appendValue('Math.pow(')">x^y</button>
          <button onclick="appendValue('Math.abs(')">|x|</button>
          <button onclick="appendValue('Math.PI')">π</button>
          <button onclick="appendValue('Math.E')">e</button>
          <button onclick="appendValue('Math.floor(')">floor</button>
          <button onclick="appendValue('Math.ceil(')">ceil</button>
          <button onclick="appendValue('Math.round(')">round</button>
        </div>
        <div class="note">Made by Universe (Bishu)</div>
        <script>
          function appendValue(value) {
            document.getElementById('result').value += value;
          }
          function clearResult() {
            document.getElementById('result').value = '';
          }
          function calculateResult() {
            try {
              const result = eval(document.getElementById('result').value);
              document.getElementById('result').value = result;
            } catch (error) {
              document.getElementById('result').value = 'Error';
            }
          }
        </script>
      </body>
      </html>
    `;

    return new Response(html, {
      headers: {
        'content-type': 'text/html;charset=UTF-8',
      },
    });
  },
};

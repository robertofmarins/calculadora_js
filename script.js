  // Atualizar a tela com os botões pressionados
  function press(value) {
    const display = document.getElementById('display');
    display.value += value;
}

// Limpar o conteúdo da tela
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Calcular o resultado da expressão
function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Erro';
    }}
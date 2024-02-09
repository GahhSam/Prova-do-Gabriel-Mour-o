// Função para Valor do Carro dois números
function valorCarro(valorC, FormaP) {
    return valorC + FormaP;
  }
  
  // Função para Forma de Pagamento dois números
  function formaPagamento(a, b) {
    return a - b;
  }
  
  // Função para Total a Pagar dois números
  function totalPagar(a, b) {
    return a * b;
  }
  
  
  // Função principal para realizar os cálculos e exibir os resultados na página
  function calcular() {
    // Obter os valores dos campos de entrada
    const valorC = parseFloat(document.getElementById("valorC").value);
    const FormaP = parseFloat(document.getElementById("FormaP").value);
  
    // Exibir os resultados na página HTML
    document.getElementById("Valor do Carro").innerHTML = "Valor do Carro: " + valorCarro(valorC, FormaP);
    document.getElementById("Forma de Pagamento").innerHTML = "Forma de Pagamento: " + formaPagamento(valorC, FormaP);
    document.getElementById("Total a Pagar").innerHTML = "Total a Pagar: " + totalPagar(valorC, FormaP);
  }

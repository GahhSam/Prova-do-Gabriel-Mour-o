function calcularImp(){
    if (calcularTotal => 3000 ) {
        console.log("Desconto de 10%");
    } else if (calcularTotal => 2501 < 2999) {
        console.log("Desconto de 5%");
    } else {
        console.log("Não a desconto");
    }
}

//tabela de preços
const precoSmartphone = 1200;
const precoTablet = 1250;
const precoFoneDeOuvido = 50;
const precoLaptop = 3500;
const precoImpressora = 1750;
const preCadeiraGamer = 650;

//compras de Lucas
const smartphoneLucas = 1;
const tabletLucas = 1;
const foneDeOuvidoLucas = 1;

const totalLucas = (precoSmartphone * smartphoneLucas) + (precoTablet * tabletLucas) + (precoFoneDeOuvido * foneDeOuvidoLucas);

const totalLucasComDesconto = aplicarDesconto(totalLucas);

console.log("Total das compras de Lucas", totalLucasComDesconto.toFixed(2));

//compras de Leila
const laptopLeila = 1;
const impressoraLeila = 1;


const totalleila = (precoLaptop * laptopLeila) + (precoImpressora * impressoraLeila);

const totalLeilaComDesconto = aplicarDesconto(totalleila);

console.log("Total das compras de Leila", totalLeilaComDesconto.toFixed(2));

//compras de Daniel
const laptopDaniel = 1;
const cadeiraGamerDaniel = 1;


const totalDaniel = (precoLaptop * laptopDaniel) + (preCadeiraGamer * cadeiraGamerDaniel);

const totalDanielComDesconto = aplicarDesconto(totalDaniel);

console.log("Total das compras de Daniel", totalDanielComDesconto.toFixed(2));

function calcular() {
    const nome = parseFloat(document.getElementById("nome").value);
    const valor = parseFloat(document.getElementById("valor").value);

    document.getElementById("total").innerHTML = "total: " + calcularImp(a, b, c, d, e, f);
    document.getElementById("desconto").innerHTML = "desconto: " + calcularDesconto(calcularTotal(a, b, c, d, e, f));
}
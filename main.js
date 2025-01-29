// Primeiro declarar os elemtnos HTML com os seus ID's e armazenar em constantes


const dias = document.querySelector('#dias');
const horas = document.querySelector('#horas');
const minutos = document.querySelector('#minutos');
const segundos = document.querySelector('#segundos');

// a função pega a data atual
const anoAtual = new Date().getFullYear();

// Definir a data da graduação, onde pegamos a data de graduação
const graduacaoGrupo = new Date(`August 20, 2025 00:00:00`);

// Função que atualizará o cronometro. Pega as duas constantes acima e subtrai
function atualizarCronometro() {
    const dataAtual = new Date();
    const diferenca = graduacaoGrupo - dataAtual;

    // Aqui se a diferença chegar a 0, ele zera o relógio
    if (diferenca <= 0) {
        dias.innerHTML = '00';
        horas.innerHTML = '00';
        minutos.innerHTML = '00';
        segundos.innerHTML = '00';
        return;
    }

    // Aqui fica um pouco chato, a diferença acima, transformamos os milissegundos para dias, horas, minutos e segundos. OBS : 1000ms = 1 segundo
    // o Math floor irá arrendondar o número
    const d = Math.floor(diferenca / 1000 / 60 / 60 / 24);
    const h = Math.floor(diferenca / 1000 / 60 / 60) % 24;
    const m = Math.floor(diferenca / 1000 / 60) % 60;
    const s = Math.floor(diferenca / 1000) % 60;

    //console.log(h);

    // Aqui é lindo demais, em horas, pensamos da seguinte forma: se h é menor do que 10, colocar o 0 + o valor de h (por exmemplo: 09 horas), se não, mantemos o h normalmente (por exemplo: 15h)
    dias.innerHTML = d;
    horas.innerHTML = h < 10 ? '0' + h : h;
    minutos.innerHTML = m < 10 ? '0' + m : m;
    segundos.innerHTML = s < 10 ? '0' + s : s;

}
// Aqui, a cada 1segundo, atualizar os números do cronometro
setInterval(atualizarCronometro, 1000);

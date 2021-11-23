const calcular = document.getElementById('calcular');


function vfp() {
    const nome = document.getElementById('nome').value;
    const valor = document.getElementById('valor').value;
    const juros = document.getElementById('juros').value;
    const parcelas = document.getElementById('parcelas').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && valor !== '' && juros !== '' && parcelas !== '') {


        const i = juros/100;
        const valorfuturo = ((((1 + i)**parcelas-1)*valor)/i).toFixed(2);



        resultado.textContent = `Olá, ${nome}, se você aplicar R$ ${valor}, à taxa de juros de ${juros}% ao mês, durante ${parcelas} meses, acumulará uma poupança de R$ ${valorfuturo}`;

    } else {
        resultado.textContent = 'Para calcular o seu VFP , preencha todos os campos.';
    }

}
calcular.addEventListener('click', vfp);
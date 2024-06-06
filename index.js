alert(`1. DOM significa Modelo de Documento por Objetos e é utilizado pelos navegadores para representar páginas na
Web. Todas as afirmativas a seguir sobre os principais métodos desse modelo estão corretas, EXCETO:\n\n

c) getElementsByTagName(): retorna uma lista de nós estática (não ativa ) que representa uma lista dos elementos
do documento que correspondem ao grupo especificado de seletores CSS passado como parâmetro.
`);

function exercicio02(pesoKg, alturaCm) {
    alturaCm = parseFloat(alturaCm / 100);
    pesoKg = parseFloat(pesoKg);
    let imc = pesoKg / (alturaCm * alturaCm);

    console.log(imc);

    let situacao;

    switch (imc) {
        case imc < 18.5:
            situacao = 'Magreza';
            break;

        case imc >= 18.5 && imc < 25:
            situacao = 'Normal';
            break;

        case imc >= 25 && imc < 30:
            situacao = 'Acima do peso';
            break;

        case imc >= 30 && imc < 35:
            situacao = 'Peso mórbido';
            break;
    }

    alert(`Seu IMC é ${imc}. Situação: ${situacao}`);
}

function exercicio03(a, b, c) {

    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);

    if (a > 0 && b > 0 && c > 0) {
        let isTriangulo = (a <= (b + c)) || (b <= (c + a)) || (c <= (a + b));

        let isEquilatero = isTriangulo && (a == b && b == c); //Três medidas iguais
        let isIsosceles = isTriangulo && (a == b || b == c) && (a != b || a != c); //Uma das medidas é diferente
        let isEscaleno = isTriangulo && (a != b && b != c); //As três medidas são diferentes

        let trianguloDesenho = '';
        if (isEquilatero) {
            trianguloDesenho = `<div id="trianguloDesenho" style="width: 0; height: 0; border-left: ${a}px solid transparent; border-right: ${b}px solid transparent;	border-bottom: ${c}px solid #555;"></div> <b id="descricaoTriangulo">Equilátero</b>`;
        } else if (isIsosceles) {
            trianguloDesenho = `<div id="trianguloDesenho" style="width: 0; height: 0; border-left: ${a}px solid transparent; border-right: ${b}px solid transparent;	border-bottom: ${c}px solid #555;"></div> <b id="descricaoTriangulo">Isósceles</b>`;
        } else if (isEscaleno) {
            trianguloDesenho = `<div id="trianguloDesenho" style="width: 0; height: 0; border-left: ${a}px solid transparent; border-right: ${b}px solid transparent;	border-bottom: ${c}px solid #555;"></div> <b id="descricaoTriangulo">Escaleno</b>`;
        }
        if (document.querySelector('#trianguloDesenho')) {
            document.querySelector('#trianguloDesenho').remove();
            document.querySelector('#descricaoTriangulo').remove();
        }
        document.querySelector('body > div:nth-child(2) > div').insertAdjacentHTML('afterend', trianguloDesenho);

    } else {
        alert('Medidas não formam um triângulo');
    }

}

function exercicio04(valorCarro, parcelas) {
    valorCarro = parseFloat(valorCarro); //Receber como numero real
    parcelas = parseInt(parcelas);
    let montante = 0;

    let precoAVista = valorCarro - (valorCarro * 20 / 100); //Desconto de 20%

    switch (parcelas) {
        case 6:
            montante = valorCarro * (1+3/100*parcelas);
            break;
        case 12:
            montante = valorCarro * (1+6/100*parcelas);
            break;

        case 18:
            montante = valorCarro * (1+9/100*parcelas);
            break;

        case 24:
            montante = valorCarro * (1+12/100*parcelas);
            break;
        case 30:
            montante = valorCarro * (1+15/100*parcelas);
            break;
        case 36:
            montante = valorCarro * (1+18/100*parcelas);
            break;

        case 42:
            montante = valorCarro * (1+21/100*parcelas);
            break;
        case 48:
            montante = valorCarro * (1+24/100*parcelas);
            break;
        case 54:
            montante = valorCarro * (1+27/100*parcelas);
            break;
        case 60:
            montante = valorCarro * (1+30/100*parcelas);
            break;
    }



    function generateTable(parcelas) {

        //Atualizar tabela ao invés de criar mais uma
        if (document.querySelector('#parcelas')) {
            document.querySelector('#parcelas').remove();
        }

        let campoExercicio = document.querySelector('body > div:nth-child(3) > div');


        //fonte: Mozilla
        // creates a <table> element and a <tbody> element
        const tbl = campoExercicio.createElement("table");
        tbl.setAttribute("id", "parcelas");
        const tblHead = campoExercicio.createElement("thead");

        const tblBody = campoExercicio.createElement("tbody");

        // creating all cells
        for (let i = 1; i <= parcelas; i++) {
            // creates a table row
            const row = campoExercicio.createElement("tr");


            const cell = campoExercicio.createElement("td");
            const cellText = campoExercicio.createTextNode(`Parcela: ${i}`);
            cell.appendChild(cellText);
            row.appendChild(cell);

            // add the row to the end of the table body
            tblBody.appendChild(row);
        }

        // put the <tbody> in the <table>
        tbl.appendChild(tblBody);
        // appends <table> into <body>
        document.body.appendChild(tbl);
        // sets the border attribute of tbl to '2'
        tbl.setAttribute("border", "1");
    }

    generateTable(parcelas);
}

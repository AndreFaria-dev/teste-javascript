function exercicio02(pesoKg, alturaCm) {
    alturaCm = parseFloat(alturaCm/100);
    pesoKg = parseFloat(pesoKg);
    let imc = pesoKg / (alturaCm * alturaCm);

    console.log(imc);
}

function exercicio03(a, b, c) {

    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);

    if (a > 0 && b > 0 && c > 0) {
        let isTriangulo = (a <= (b+c)) || (b <= (c+a)) || (c <= (a+b));

        let isEquilatero = isTriangulo && (a == b && b == c); //Três medidas iguais
        let isIsosceles = isTriangulo && (a == b || b == c) && (a != b || a != c ); //Uma das medidas é diferente
        let isEscaleno = isTriangulo && (a != b && b != c); //As três medidas são diferentes

        let trianguloDesenho = '';
        if (isEquilatero) {
            trianguloDesenho = `<div id="trianguloDesenho" style="width: 0; height: 0; border-left: ${a}px solid transparent; border-right: ${b}px solid transparent;	border-bottom: ${c}px solid #555;"></div> <b id="descricaoTriangulo">Equilátero</b>`;
        } else if (isIsosceles) {
            trianguloDesenho = `<div id="trianguloDesenho" style="width: 0; height: 0; border-left: ${a}px solid transparent; border-right: ${b}px solid transparent;	border-bottom: ${c}px solid #555;"></div> <b id="descricaoTriangulo">Isósceles</b>`;
        } else if (isEscaleno){
            trianguloDesenho = `<div id="trianguloDesenho" style="width: 0; height: 0; border-left: ${a}px solid transparent; border-right: ${b}px solid transparent;	border-bottom: ${c}px solid #555;"></div> <b id="descricaoTriangulo">Escaleno</b>`;
        }
        if (document.querySelector('#trianguloDesenho')) {
            document.querySelector('#trianguloDesenho').remove();
            document.querySelector('#descricaoTriangulo').remove();
        }
        document.querySelector('body > div:nth-child(2) > div').insertAdjacentHTML('afterend',trianguloDesenho);

    } else {
        alert('Medidas não formam um triângulo');
    }

}

function exercicio04(precoCarro) {
    precoCarro = parseFloat(precoCarro);
}

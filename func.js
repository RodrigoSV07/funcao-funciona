function Principal() {
    escolha = parseInt(prompt("Escolha uma Opção: \n 1- Idade Pet \n 2- Calcular Fome \n 3- Calculo Geometrico \n 4- Calcula Temperatura \n 5- Sair"));

    while (escolha != 5) {
        switch (escolha) {
            case 1:
                PetIdade();
                break;
            case 2:
                CalcFome();
                break;
            case 3:
                CalcGeo();
                break;
            case 4:
                CalcTemp();
                break;
            default:
                alert("Escolha uma opção valida!!");

        }
    }
}

function PetIdade() {
    opcao = parseInt(prompt("Escolha a espécie: \n 1- Cachorro \n 2- Gato \n 3- Sair"));

    switch (opcao) {
        case 1:
            cachorroIdade();
            break;
        case 2:
            gatoIdade();
            break;
        case 3:
            Principal();
            break;
        default:
            alert("Escolha uma opção válida!!!");
    }

    function cachorroIdade() {
        nomeCachorro = prompt("Digite o nome do seu cachorro: ");
        idadeCachorro = parseInt(prompt("Digite a idade do seu cachorro: "));
        calcIdade = idadeCachorro * 7;
        alert(`A idade do seu cachorro ${nomeCachorro} é de ${calcIdade} anos humanos!!`);

    }

    function gatoIdade() {
        nomeGato = prompt("Digite o nome do seu gato: ");
        idadeGato = parseInt(prompt("Digite a idade do gato: "));
        calcIdade = idadeGato * 10;
        alert(`A idade do seu gato ${nomeGato} é de ${calcIdade} anos humanos!!`);
    }

}

function CalcFome() {
    idadeFinal = 90;
    idade = parseInt(prompt("Digite a sua idade: "));
    qtdLanches = parseInt(prompt("Digite a quantidade de lanches que você come por dia: "));

    calcIdade = idadeFinal - idade;
    lacheAno = qtdLanches * 365;
    total = lacheAno * calcIdade;
    alert(`Você precisa de ${total} lanches  para viver até os ${idadeFinal} anos!`);
    Principal();
}

function CalcGeo() {
    raio = parseFloat(prompt("Digite o valor do raio do círculo: "));

    opcao = parseInt(prompt("Digite a opção que deseja: \n 1- Calcular Circunferência \n 2- Calcular Area \n 3- Sair"));

    switch (opcao) {
        case 1:
            calcCircu();
            break;
        case 2:
            calcArea();
            break;
        case 3:
            Principal();
            break;
        default:
            alert("Escolha uma opção válida!!");
    }

    function calcCircu() {
        circu = (2 * Math.PI * raio).toFixed(2);
        alert(`A circunferencia do circulo é igual a ${circu}`);
    }

    function calcArea() {
        area = (Math.PI * Math.pow(raio, 2)).toFixed(2);
        alert(`A area do circulo é igual a ${area}`);
    }

    Principal();
}

function CalcTemp() {
    opcao = parseInt(prompt("Digite a opção desejada: \n 1- Conversor Celsius - Fahrenheint \n 2- Conversor Fahrenheint - Celsius \n 3- Sair"));

    switch(opcao){
        case 1:
            CelsFah();
            break;
        case 2:
            FahCels();
            break;
        case 3:
            Principal();
            break;
        default:
            alert("Digite uma opção válida!!!");
            break;
    }

    function CelsFah(){
        temperatura = parseFloat(prompt("Digite a temperatura em celsius! "));
        converteFah = ((temperatura * 9/5) + 32).toFixed(2);
        alert(`A temperatura convertida em Graus Fahrenhein é ${converteFah}`);
    }

    function FahCels(){
        temperatura = parseFloat(prompt("Digite a temperatura em Fahreinheint! "));
        converteCels = ((temperatura - 32) *  5/9).toFixed(2);
        alert(`A temperatura converitda em Graus Celsius é ${converteCels}`);
    }
}


Principal();
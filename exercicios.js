function exercicio1(){
    var v1=5
    var v2=3
    var v3=10
    var v4="20"

    var res = parseInt (v4) + v1 + v2 + v3;
    document.write("<h1>Exercicio 1</h1>")
    document.write("Resultado= " + res + " ");
}

function exercicio2(){
    document.write("<h1>Exercicio 2</h1>")

    nome = prompt ("Entre com seu nome: ",
                    "Digite-o aqui...");
    sobrenome = prompt ("Entre com seu sobrenome: ",
                        "Digite-o aqui...");
    document.write (" Oi, " + nome + " " + sobrenome + "!");
}

function exercicio3(){
    document.write("<h1>Exercicio 3</h1>")

    n1 = prompt ("Entre com um numero inteiro: ",
                "Digite-o aqui...");

    var ParImpar = n1%2;
    if(ParImpar == 0)
    document.write (" O numero inteiro " + n1 + " é par!");
    else
    document.write (" O numero inteiro " + n1 + " é ímpar!");
}

function exercicio4(){
    document.write("<h1>Exercicio 4</h1>")

    operador = prompt ("Digite o operador da sua conta (+ - * /): ",
                        "Digite-o aqui...");
    valor1 = prompt ("Digite o primeiro número: ",
                    "Digite-o aqui...");
    valor2 = prompt ("Digite o segundo número: ",
                    "Digite-o aqui...");

    var resultado;

    if(operador == '+'){
        var resultado = parseFloat(valor1) + parseFloat(valor2);
        document.write (" O resultado é: " + resultado + ".");
    }

    if(operador == '-'){
        var resultado = parseFloat(valor1) - parseFloat(valor2);
        document.write (" O resultado é: " + resultado + ".");
    }
    
    if(operador == '*'){
        var resultado = parseFloat(valor1) * parseFloat(valor2);
        document.write (" O resultado é: " + resultado + ".");
    }

    if(operador == '/'){
        var resultado = parseFloat(valor1) / parseFloat(valor2);
        document.write (" O resultado é: " + resultado + ".");
    }
}

function exercicio5(){
    document.write("<h1>Exercicio 5</h1>")

    nome = prompt ("Entre com seu nome: ",
                    "Digite-o aqui...");
    document.write (" Oi, " + nome + "!");

    var aleatorio = Math.floor(Math.random() * 20) + 1;

    var i = 0;
    
     while(i<6){
        chute = prompt ("Tente adivinhar o numero entre 1 e 20: ");

        if(chute == aleatorio)
            i = 8;
        else
            i++;

        if( i == 10){
            document.write("Parabéns! Você acertou o numero!");
        }
        else if (i == 6){
            document.write(" Você não acertou o numero " + aleatorio)
        }
     }
}


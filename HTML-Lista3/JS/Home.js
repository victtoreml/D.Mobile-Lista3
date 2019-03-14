/*Questão 3*/

/*Verifica qual elemento possui o valor selecionado na Drop e aplica a co definida*/
function MudarCorBody(elemento) {
    if (elemento.value == "amarelo") {
        document.getElementById("Q3").style.backgroundColor = "yellow";
    } else if (elemento.value == "verde") {
        document.getElementById("Q3").style.backgroundColor = "green";
    } else if (elemento.value == "vermelho") {
        document.getElementById("Q3").style.backgroundColor = "red";
    } else if (elemento.value == "azul") {
        document.getElementById("Q3").style.backgroundColor = "blue";
    }
}

/*Questão 4*/

/*Apresenta e Remove o display ao clicar o botão com a função setada*/
function Estado(elemento) {
    var mudar = document.getElementById(elemento).style.display;
    if (mudar == "none") {
        document.getElementById(elemento).style.display = "block";
    }
    else {
        document.getElementById(elemento).style.display = "none";
    }
}

/*Questão 5*/

/*Validação do Formulário*/
function ValidarFormulario() {
    /*Criação de Variáveis para manipulação*/
    var Email = F2.Email.value;
    var Senha = F2.Senha.value;
    var ConfirmarS = F2.ConfirmarS.value;

    /*validação de email vazio*/
    if (Email == "") {
        alert('Insira um email');
        F2.Email.focus(); return false;
    }
    /*Validação do tamanho da senha*/
    if (F2.Senha.value.length < 6 || F2.Senha.value.length > 10) {
        alert("Senhas desem possuir entre 6 a 10 caracteres");
        F2.Senha.focus(); return false;
    }
    /*Validação de igualdade das senhas*/
    if (Senha != ConfirmarS) {
        alert("Senhas não correspondem")
        F2.Senha.focus();
        return false;
    }
}

/*Questão 6*/

function Check() {
    /*Palavra inserida pelo usuário*/
    var palavra = prompt("Informe a palavra para verificação");

    /*Deixa todas as palavras como minusculas e remove caracteres e espaço*/
    palavra = palavra.toLowerCase().replace(/\s/g, "");

    /*Cria uma matriz de substrings divididas por "," e inverte a ordem*/
    palavraI = palavra.split("").reverse().toString();

    /*realiza a contagem de caracteres da palavra invertida e remove espaços e caracteres*/
    for (var i = 0; i < ((palavraI.length) - 1); i++) {
        palavraI = palavraI.replace(",", "");
    };
    if (palavra == palavraI) {
        alert("É um Palíndromo")
    } else {
        alert("Não é um Palíndromo")
    }
}

/*Questão 7*/


function Nomes() {

    /*Criação de variáveis para recebimeto dos valores*/
    var c1 = document.getElementById('c1').value;
    var c2 = document.getElementById('c2').value;
    var c3 = document.getElementById('c3').value;
    var c4 = document.getElementById('c4').value;
    var c5 = document.getElementById('c5').value;

    /*Criação de array para recebiemento de dos valores*/
    var Dados = [];
    Dados.push(c1, c2, c3, c4, c5); /*Inserção de dados no array*/
    Dados.reverse(); /*Inversão dos valores*/

    /*Inclusão dos valores recebimento novamente aos inputs*/
    document.getElementById('c1').value = Dados[0];
    document.getElementById('c2').value = Dados[1];
    document.getElementById('c3').value = Dados[2];
    document.getElementById('c4').value = Dados[3];
    document.getElementById('c5').value = Dados[4];

}

/*Questão 8*/

/*Validação para exibir e ocultar os campos cpf, cnpj e data*/
function valor(qual) {
    if (qual == "cpf") {
        document.form.cpf.style.display = "block";
        document.form.cnpj.style.display = "none";
        document.form.date.style.display = "block";
    }
    if (qual == "cnpj") {
        document.form.cpf.style.display = "none";
        document.form.cnpj.style.display = "block";
        document.form.date.style.display = "none";
    }
}

/*Validação para que o campo CEP receba apenas núemros */
function CheckNumber(value) {
    if (value.trim() !== "") {
        var regra = /^[0-9]+$/;
        if (value.match(regra)) {
            return;
        }
        else { /*Apresenta uma informação na tela e realiza a limpeza do campo  */
            document.getElementById('Ce').value = "";
            alert("Permitido somente números");
        }
    }
}

/*Questão 9*/

function Intercalar() {
    /*Limpar o valor do campo resultado ao fazer uma nova inserção*/
    document.getElementById('i3').value = "";

    /*Pegando os valores dos campos inseridos*/
    var c1 = document.getElementById('i1').value;
    var c2 = document.getElementById('i2').value;

    /*Verificando qual nome tem mais caracteres*/
    if (c1.length < c2.length) {
        var result = c2.length;
    } else {
        var result = c1.length;
    }

    /*Intercalando os nomes com os metodos substring*/
    for (i = 0; i < result; i++) {
        document.getElementById('i3').value += c1.substring(i, i + 1) + c2.substring(i, i + 1);
    }
}

/*Questão 10*/



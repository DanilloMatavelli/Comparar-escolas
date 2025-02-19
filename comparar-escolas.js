class Senai {
    codigo;
    cidade;
    ano_de_construcao;
    quantidade_de_cursos;
    //Dentro de uma classe não precisa da palavra

    constructor(codigo, cidade, ano_de_construcao, quantidade_de_cursos) {
        this.codigo = codigo;
        this.cidade = cidade;
        this.ano_de_construcao = ano_de_construcao;
        this.quantidade_de_cursos = quantidade_de_cursos;
    }

    dadosEscola() {
        const idadeEscola = this.calcularIdadeEscola();
        return `O código ${this.codigo} pertence à Escola SENAI de ${this.cidade}.<br>
                A escola SENAI de ${this.cidade} foi construída em ${this.ano_de_construcao} e tem ${idadeEscola} anos.<br>`;
    }

    calcularIdadeEscola() {
        const anoAtual = new Date().getFullYear();
        return anoAtual - this.ano_de_construcao;
    }
}

function compararEscolas(escolaA, escolaB) {

    if (escolaA.quantidade_de_cursos > escolaB.quantidade_de_cursos) {
        relatorio.textContent = `O SENAI de ${escolaA.cidade} tem mais cursos que o SENAI de ${escolaB.cidade}.`;
        relatorio.textContent = `${escolaA.cidade}: ${escolaA.quantidade_de_cursos} vs ${escolaB.cidade}: ${escolaB.quantidade_de_cursos}`;
    } else if (escolaB.quantidade_de_cursos > escolaA.quantidade_de_cursos) {
        relatorio.textContent = `O SENAI de ${escolaB.cidade} tem mais cursos que o SENAI de ${escolaA.cidade}.`;
        relatorio.textContent = `${escolaB.cidade}: ${escolaB.quantidade_de_cursos} vs ${escolaA.cidade}: ${escolaA.quantidade_de_cursos}`;
    } else {
        relatorio.textContent = `As duas escolas têm a mesma quantidade de cursos: ${escolaA.quantidade_de_cursos}.`;
    }

}

function gerarRelatorio() {
    const codigoA = document.getElementById('codigo1').value;
    const cidadeA = document.getElementById('cidade1').value;
    const anoA = parseInt(document.getElementById('ano1').value);
    const cursosA = parseInt(document.getElementById('qtdCursos1').value);

    const codigoB = document.getElementById('codigo2').value;
    const cidadeB = document.getElementById('cidade2').value;
    const anoB = parseInt(document.getElementById('ano2').value);
    const cursosB = parseInt(document.getElementById('qtdCursos2').value);


    const escolaA = new Senai(codigoA, cidadeA, anoA, cursosA);
    const escolaB = new Senai(codigoB, cidadeB, anoB, cursosB);

    const relatorioDiv = document.getElementById("relatorio");
    relatorioDiv.style.display = "block";
    relatorioDiv.innerHTML = `
        <h2>Relatório Cadastro</h2>
        ${escolaA.dadosEscola()}
        ${escolaB.dadosEscola()}
        <h3>#Fim Relatório Cadastro</h3>
        <h3>#Relatório de Cursos</h3>
        ${compararEscolas(escolaA, escolaB)}
    `;
}

function limparRelatorio() {
    const relatorioDiv = document.getElementById("relatorio");
    relatorioDiv.style.display = "none"; // Esconde o relatório
    relatorioDiv.innerHTML = ""; // Limpa o conteúdo

    document.getElementById("codigo1").value = "";
    document.getElementById("cidade1").value = "";
    document.getElementById("ano1").value = "";
    document.getElementById("qtdCursos1").value = "";

    document.getElementById("codigo2").value = "";
    document.getElementById("cidade2").value = "";
    document.getElementById("ano2").value = "";
    document.getElementById("qtdCursos2").value = "";
}

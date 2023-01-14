function mascaraCPF(input) {
    let campo = input;

    if (campo.value.length === 3 || campo.value.length === 7) {
        campo.value += ".";
    } else if (campo.value.length == 11) {
        campo.value += "-";
    }
}

function mascaraCEP(input) {
    let campo = input;

    if (campo.value.length === 5) {
        campo.value += "-";
    }
}

function mascaraTelefone(input) {

    v = input.value;

    v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
    v = v.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v = v.replace(/(\d)(\d{4})$/, "$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos

    input.value = v;
}

function mascaraDATA(input) {
    let campo = input;

    if (campo.value.length === 2 || campo.value.length === 5) {
        campo.value += "/";
    }
}

function maiusculo(input) {
    let campo = input;

    campo.value = campo.value.toUpperCase();
}

let obras = [];
let nomeobras= [];
function adiciona(id, nomeObra) {
    let a = document.querySelector(`#a${id}`);
    if (a.textContent == "Adicionar") {
        for (let i = 0; i < obras.length; i++) {
            if (obras[i] === id) return;
        }
        obras.push(id);
        nomeobras.push(nomeObra);
        let inputo = document.querySelector('#valores');
        inputo.value = obras;
        let selecionadas = document.querySelector('#selecionadas');
        selecionadas.innerText = selecionadas.textContent.replaceAll(',',' ')
        selecionadas.innerText = nomeobras;
        selecionadas.innerText = selecionadas.textContent.replaceAll(',',' ')
        a.innerText = "Remover";
        a.className = "vermelho";

    } else if (a.textContent == "Remover") {
        let index = obras.indexOf(id);
        let indexnome = nomeobras.indexOf(nomeObra);
        console.log(indexnome);
        if (index < 0) return;
        obras.splice(index, 1);
        nomeobras[indexnome] = '';
        let inputo = document.querySelector('#valores');
        inputo.value = obras;
        let selecionadas = document.querySelector('#selecionadas');
        selecionadas.innerText = selecionadas.textContent.replaceAll(',',' ')
        selecionadas.innerText = nomeobras;
        selecionadas.innerText = selecionadas.textContent.replaceAll(',',' ');
        a.innerText = "Adicionar";
        a.className = "azul";
    }
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");
sidebarBtn.onclick = function () {
    sidebar.classList.toggle("active");
    if (sidebar.classList.contains("active")) {
        sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else
        sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
}

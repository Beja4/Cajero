

const registredUserds = [ //son objetos del array!
    { username: "Hugo", password: "123", saldo: 500 }, // 0
    { username: "Paco", password: "456", saldo: 300},  // 1
    { username: "Luis", password: "789", saldo: 700 }, // 2 - (index = posicion dentro del arreglo)
    { username: "Pedro", password: "abc", saldo: 990 },//3
]




const loginBtn = document.querySelector("#login-btn");
loginBtn.addEventListener("click", () =>handleLogin());



let passwordInput = document.querySelector("#password").value;

var logUser = {};
const verifyLogin = () => {
let userIndex = document.querySelector("#users").value;
let selectedUser = registredUserds[userIndex];
if (selectedUser.username === document.querySelector("#users option:checked").textContent && 
    selectedUser.password === document.querySelector("#password").value) {
    logUser = selectedUser; 
    console.log("Login exitoso", logUser);
    showOptions(); 
} else {
    alert("Contraseña incorrecta. Inténtalo de nuevo."); 
}
}


const showOptions = () => {
    console.log("Aqui se muestran las opciones.")
    const operaciones = document.querySelector("#operaciones");
    operaciones. style.display ="flex";
    operaciones.style.flexDirection ="column";
    operaciones.style.justifyContent = "Center";
    operaciones.style.alignItems = "Center";
}



const handleLogin = () => {
    logUser = registredUserds[0]
    verifyLogin();
    console.log(logUser);
    console.log("EL usuario quiere iniciar sesion");
}

const saldoElement = document.querySelector(".saldo");

function saldoUser() {
    if (logUser && logUser.saldo !== undefined) {
        
        saldoElement.innerHTML = `tu saldo es: $${logUser.saldo}`;
    } else {
        saldoElement.innerHTML = "No se ha iniciado sesión.";
    }
}


saldoElement.addEventListener("click", saldoUser)


const ingresarMontoBtn = document.querySelector("#ingresar-monto-btn");
const montoInput = document.querySelector("#monto-input");

const ingresarMonto = () => {
    const monto = parseInt(montoInput.value);
    
    if (logUser && !isNaN(monto) && monto > 0) {
        logUser.saldo += monto; 
        saldoUser(); 
        alert(`Se han ingresado $${monto} a tu cuenta. Nuevo saldo: $${logUser.saldo}`);
    } else {
        alert("Por favor, ingresa un monto válido.");
    }
};

ingresarMontoBtn.addEventListener("click", ingresarMonto);



const retirarMontobtn =document.querySelector("#retirar-monto-btn");
const montomenosInput = document.querySelector("#montomenos-input");


const restarMonto =() => {
const monto =parseInt (montomenosInput.value);

if (logUser.saldo >= monto) {
    logUser.saldo -= monto;
    saldoUser();
    alert(`Se han restado $${monto} de tu cuenta. Nuevo saldo: $${logUser.saldo}`);
} else {
    alert("Por favor, ingresa un monto válido.");
}
};

retirarMontobtn.addEventListener("click", restarMonto);
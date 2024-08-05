//selecciona los botones por su ID
const button1 = document.getElementById(`Button1`);
const button2= document.getElementById(`Button2`);
const button3 = document.getElementById(`Button3`);

//agregar un evento de clic a cada boton
button1.addEventListener(`Click`, () => {
    console.log(`Boton 1 presionado`);
});
button2.addEventListener(`Click`, () => {
    console.log(`Boton 2 presionado`);
});
button3.addEventListener(`Click`, () => {
    console.log(`Boton 3 presionado`);
});
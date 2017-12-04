var contexto;
window.onload = function () {
    contexto = CargarContextCanvas('logo');
    if (contexto) {
        radGrad = contexto.createRadialGradient(30, 30, 120, 50, 100, 30);
        radGrad.addColorStop(0, 'white');
        radGrad.addColorStop(1, 'rgba(15, 78, 165, 0.96)');

        contexto.beginPath();
        contexto.fillStyle = radGrad; 
        contexto.arc(50,40,30,Math.PI,Math.PI * 0.5, false);
        contexto.fillStyle = radGrad;
        contexto.arc(50,40,10,Math.PI * 0.5, Math.PI, true);
        contexto.fill();
        contexto.stroke();

        contexto.beginPath();
        contexto.fillStyle="black";
        contexto.arc(45,45,10,Math.PI * 2, false);
        contexto.fill();
        contexto.stroke();
        contexto.closePath();

    }
}
function CargarContextCanvas(idCanvas) {
    let elemento = document.getElementById(idCanvas);
    if (elemento && elemento.getContext) {
        let contexto = elemento.getContext('2d');
        if (contexto) {
            return contexto;
        }
    }
    return false;
}

function aleatorio(inferior, superior) {
    var numPosibilidades = superior - inferior;
    var aleat = Math.round(Math.random() * numPosibilidades);
    return parseInt(inferior) + aleat;
}

function color_aleatorio() {
    return "rgb(" + aleatorio(0, 255) + "," + aleatorio(0, 255) + "," + aleatorio(0, 255) + ")";
}

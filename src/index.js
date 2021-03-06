import {transpile} from "./transpile";

window.onload = () => {
    const UI = {
        beforeTextarea: document.getElementById('before'),
        afterTextarea: document.getElementById('after')
    }

    UI.beforeTextarea.addEventListener('input', function (e) {
        console.log(UI);
        UI.afterTextarea.value = transpile(UI.beforeTextarea.value, true)
    });
}

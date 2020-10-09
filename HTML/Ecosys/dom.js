
let sliders = [];
let outputs = [];
let values = [];
let color = [255,0,0];

for (let i = 0; i < 6; i++){
    values[i] = 1;
    sliders[i] = document.querySelector("#static" + (i + 1));
    outputs[i] = document.querySelector("#SliderStatic" + (i + 1));
    if (i == 5){
        
    sliders[i].oninput = function() {
        outputs[i].innerHTML = (parseInt(sliders[i].value) * 0.01).toFixed(2);
        values[i] = parseInt(sliders[i].value) * 0.01;
      }


    }
    else{
        sliders[i].oninput = function() {
            outputs[i].innerHTML = sliders[i].value;
            values[i] = parseInt(sliders[i].value) * parseInt(sliders[i].value);
        }
    }
}
for (let i = 0; i < 3; i++){
    let slider = document.querySelector("#static7_" + (i + 1));
    let output = document.querySelector("#SliderStatic7_" + (i + 1));
    slider.oninput = function() {
        output.innerHTML = slider.value;
        color[i] = parseInt(slider.value);
        document.querySelector("#SpecieColor").style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
      }
}

function Text(Data){
    let calidad = 0;
    for (let i = 1; i < 5; i++){
        console.log("hey")
    }
}




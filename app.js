// https://www.omnicalculator.com/health/pediatric-transfusion

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const transfusionbloodvolumeRadio = document.getElementById('transfusionbloodvolumeRadio');
const weightRadio = document.getElementById('weightRadio');
const desiredhemoglobinincrementRadio = document.getElementById('desiredhemoglobinincrementRadio');
const hematocritRadio = document.getElementById('hematocritRadio');

let transfusionbloodvolume;
let weight = v1;
let desiredhemoglobinincrement = v2;
let hematocrit = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

transfusionbloodvolumeRadio.addEventListener('click', function() {
  variable1.textContent = 'Weight';
  variable2.textContent = 'Desired hemoglobin increment';
  variable3.textContent = 'Hematocrit';
  weight = v1;
  desiredhemoglobinincrement = v2;
  hematocrit = v3;
  result.textContent = '';
});

weightRadio.addEventListener('click', function() {
  variable1.textContent = 'Transfusion blood volume';
  variable2.textContent = 'Desired hemoglobin increment';
  variable3.textContent = 'Hematocrit';
  transfusionbloodvolume = v1;
  desiredhemoglobinincrement = v2;
  hematocrit = v3;
  result.textContent = '';
});

desiredhemoglobinincrementRadio.addEventListener('click', function() {
  variable1.textContent = 'Transfusion blood volume';
  variable2.textContent = 'Weight';
  variable3.textContent = 'Hematocrit';
  transfusionbloodvolume = v1;
  weight = v2;
  hematocrit = v3;
  result.textContent = '';
});

hematocritRadio.addEventListener('click', function() {
  variable1.textContent = 'Transfusion blood volume';
  variable2.textContent = 'Weight';
  variable3.textContent = 'Desired hemoglobin increment';
  transfusionbloodvolume = v1;
  weight = v2;
  desiredhemoglobinincrement = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(transfusionbloodvolumeRadio.checked)
    result.textContent = `Transfusion blood volume = ${computetransfusionbloodvolume().toFixed(2)}`;

  else if(weightRadio.checked)
    result.textContent = `Weight = ${computeweight().toFixed(2)}`;

  else if(desiredhemoglobinincrementRadio.checked)
    result.textContent = `Desired hemoglobin increment = ${computedesiredhemoglobinincrement().toFixed(2)}`;

  else if(hematocritRadio.checked)
    result.textContent = `Hematocrit = ${computehematocrit().toFixed(2)}`;
})

// calculation

// transfusionbloodvolume = weight * desiredhemoglobinincrement * 3 / hematocrit

function computetransfusionbloodvolume() {
  return (Number(weight.value) * Number(desiredhemoglobinincrement.value) * 3 / Number(hematocrit.value)) * 100;
}

function computeweight() {
  return ((Number(transfusionbloodvolume.value) / 100) * Number(hematocrit.value)) / (Number(desiredhemoglobinincrement.value) * 3);
}

function computedesiredhemoglobinincrement() {
  return ((Number(transfusionbloodvolume.value) / 100) * Number(hematocrit.value)) / (Number(weight.value) * 3);
}

function computehematocrit() {
  return Number(weight.value) * Number(desiredhemoglobinincrement.value) * 3 / (Number(transfusionbloodvolume.value) / 100);
}
/* Старые размеры шин - выбранные значения и input-ы */

// SELECT Старая ширина (p)
var selectOldWidth = document.getElementsByName('old-width')[0];
var selectOldWidthValue = selectOldWidth.options[selectOldWidth.selectedIndex].value;
var oldW = selectOldWidthValue;

// SELECT Старая высота (h)
var selectOldHeight = document.getElementsByName('old-height')[0];
var selectOldHeightValue = selectOldHeight.options[selectOldHeight.selectedIndex].value;
var oldH = ((selectOldHeightValue / 100) * oldW);

// SELECT Старый радиус (R)
var selectOldRadius = document.getElementsByName('old-radius')[0];
var selectOldRadiusValue = selectOldRadius.options[selectOldRadius.selectedIndex].value;
var oldR = Math.round((selectOldRadiusValue * 254) / 10);

// Input старая ширина в мм (p)
var inputOldP = document.getElementById('oldP');
inputOldP.value = oldW;
var oldP = inputOldP.value;

// Input старый радиус в мм (c)
var inputOldC = document.getElementById('oldC');
inputOldC.value = oldR;
var oldC = inputOldC.value;

// Input старый диаметр в мм (d)
var inputOldD = document.getElementById('oldD');
inputOldD.value = Math.round(oldR + (oldH * 2));
var oldD = inputOldD.value;

// Input старая высота протектора в мм (h)
var inputOldH = document.getElementById('oldH');
inputOldH.value = oldH.toFixed(1);


/* Новые размеры шин - выбранные значения и input-ы */

// SELECT Новая ширина (p)
var selectNewWidth = document.getElementsByName('new-width')[0];
var selectNewWidthValue = selectNewWidth.options[selectNewWidth.selectedIndex].value;
var newW = selectNewWidthValue;

// SELECT Новая высота (h)
var selectNewHeight = document.getElementsByName('new-height')[0];
var selectNewHeightValue = selectNewHeight.options[selectNewHeight.selectedIndex].value;
var newH = ((selectNewHeightValue / 100) * newW);

// SELECT Новый радиус (R)
var selectNewRadius = document.getElementsByName('new-radius')[0];
var selectNewRadiusValue = selectNewRadius.options[selectNewRadius.selectedIndex].value;
var newR = Math.round((selectNewRadiusValue * 254) / 10);

// Input новая ширина в мм (p)
var inputNewP = document.getElementById('newP');
inputNewP.value = newW;
var newP = inputNewP.value;

// Input новый радиус в мм (c)
var inputNewC = document.getElementById('newC');
inputNewC.value = newR;
var newC = inputOldC.value;

// Input новый диаметр в мм (d)
var inputNewD = document.getElementById('newD');
inputNewD.value = Math.round(newR + (newH * 2));
var newD = inputOldD.value;

// Input новая высота протектора в мм (h)
var inputNewH = document.getElementById('newH');
inputNewH.value = newH.toFixed(1);


/* Разница в размерах шин */

// Разница в ширине в мм (p)
var inputDifferenceP = document.getElementById('differenceP');
inputDifferenceP.value = oldP - newP;
var differenceP = inputDifferenceP.value;

// Разница в радиусе в мм (c)
var inputDifferenceC = document.getElementById('differenceC');
inputDifferenceC.value = oldC - newC;
var differenceC = inputDifferenceC.value;

// Разница в диаметре в мм (d)
var inputDifferenceD = document.getElementById('differenceD');
inputDifferenceD.value = oldD - newD;
var differenceD = inputDifferenceD.value;

// Разница в высоте протектора в мм (h)
var inputDifferenceH = document.getElementById('differenceH');
inputDifferenceH.value = oldH - newH;
var differenceH = inputDifferenceH.value;


/* Рассчет изменения клиренса */

var clearance = document.getElementById('clearance');
var clearanceChange = clearance.value;
if (clearance.value < 0) {
  clearance.value = ((newD - oldD) / 2) * (-1);
} else {
  clearance.value = (newD - oldD) / 2;
}


/* Кнопка рассчитать */

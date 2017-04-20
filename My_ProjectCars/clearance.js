function changeInputValue(id) {
  document.getElementById(id).value = '';
}

function getInputValue(id) {
  var a = parseInt(document.getElementById(id).value);
  return a;
}

function getData(id) {
  var selectedOption = document.getElementById(id).options.selectedIndex;
  var selectedOptionValue = document.getElementById(id)[selectedOption].value;
  return selectedOptionValue;
}

function getP(id_1, id_2) {
  var selectedProtectorsWidth = getData(id_1);
  document.getElementById(id_2).value = selectedProtectorsWidth;
  return selectedProtectorsWidth;
}

function getC(id_1, id_2) {
  var selectedInnerDiameterInch = getData(id_1);
  var selectedInnerDiameterMil = Math.round((selectedInnerDiameterInch * 254) / 10);
  document.getElementById(id_2).value = selectedInnerDiameterMil;
  return selectedInnerDiameterMil;
}

function getH(id_1, id_2) {
  var selectedHeightPer = getData(id_1);
      if (id_2 == 'oldH') {
        var selectedProtectorsWidth = parseInt(document.getElementById('oldP').value);
      } else if (id_2 == 'newH') {
        var selectedProtectorsWidth = parseInt(document.getElementById('newP').value);
      } else {
        var selectedProtectorsWidth = 0;
      }
  var selectedHeightMil = Math.round((selectedHeightPer / 100) * selectedProtectorsWidth);
  document.getElementById(id_2).value = selectedHeightMil;
  return selectedHeightMil;
}

function getD(id_C, id_H, id_D) {
  var c = parseInt(document.getElementById(id_C).value);
  var h = parseInt(document.getElementById(id_H).value);
  var d = c + (2 * h);
  document.getElementById(id_D).value = d;
}

function getDifference(id_old, id_new, id_change) {
  var change;
  var namOld = parseInt(document.getElementById(id_old).value);
  var namNew = parseInt(document.getElementById(id_new).value);
  if (namOld > namNew) {
    change = namOld - namNew;
  } else {
    change = namNew - namOld;
  }
  document.getElementById(id_change).value = change;
}

function getClearance() {
  var clearance;
  var oldDiameter = parseInt(document.getElementById('oldD').value);
  var newDiameter = parseInt(document.getElementById('newD').value);
  if (oldDiameter > newDiameter) {
    clearance = Math.round((oldDiameter - newDiameter) / 2);
  } else {
    clearance = Math.round((newDiameter - oldDiameter) / 2);
  }
  document.getElementById('clearance').value = clearance;
  return clearance;
}

function getRealSpeed() {
  var speed = getData('speed');

  var oldW = getInputValue('oldP');
  var oldH = getInputValue('oldH');
  var oldC = getInputValue('oldC');

  var newW = getInputValue('newP');
  var newH = getInputValue('newH');
  var newC = getInputValue('newC');

  var rs = Math.round(speed / ((oldW * (oldH / 100) + oldC) / (newW * (newH / 100) + newC)));
  document.getElementById('realSpeed').value = rs;
  return rs;
}

function getSpeedDifference() {
  var fakeSpeed = getData('speed');
  var trueSpeed = getInputValue('realSpeed');
  var speedDiff;
      if (fakeSpeed > trueSpeed) {
        speedDiff = fakeSpeed - trueSpeed;
      } else {
        speedDiff = trueSpeed - fakeSpeed;
      }
  document.getElementById('differenceSpeed').value = speedDiff;
  return speedDiff;
}

function calculate() {
  getP('oldWidth', 'oldP');
  getP('newWidth', 'newP');

  getC('oldDiameter', 'oldC');
  getC('newDiameter', 'newC');

  getH('oldHeight', 'oldH');
  getH('newHeight', 'newH');

  getD('oldC', 'oldH', 'oldD');
  getD('newC', 'newH', 'newD');

  getDifference('oldP', 'newP', 'differenceP');
  getDifference('oldC', 'newC', 'differenceC');
  getDifference('oldD', 'newD', 'differenceD');
  getDifference('oldH', 'newH', 'differenceH');

  getClearance();
  getRealSpeed();
  getSpeedDifference();
}


function clearInput() {
  changeInputValue('oldP');
  changeInputValue('oldC');
  changeInputValue('oldD');
  changeInputValue('oldH');
  changeInputValue('newP');
  changeInputValue('newC');
  changeInputValue('newH');
  changeInputValue('newD');
  changeInputValue('differenceP');
  changeInputValue('differenceC');
  changeInputValue('differenceD');
  changeInputValue('differenceH');
  changeInputValue('clearance');
  changeInputValue('differenceSpeed');
  changeInputValue('realSpeed');
}

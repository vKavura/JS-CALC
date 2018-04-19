"use strict"

window.onload = function() {

  let panel = document.querySelector('#panel');
  let scr = document.querySelector('#scrin');
  let hist = document.querySelector('#hist');
  let b = 0;
  let action = 0;
  let a = 0;
  let f;

  panel.addEventListener('click', function(event) {

    if (event.target.className == 'bttns') {
      switch(event.target.innerText) {
        case '+':
          oper(function(ar1,ar2) {
            return (+ar1) + (+ar2); 
          })
        break;
        case '-':
          oper(function(ar1,ar2) {
            return (+ar1) - (+ar2); 
          })
        break;
        case '*':
          oper(function(ar1,ar2) {
            return (+ar1) * (+ar2); 
          })
        break;
        case '/':
          oper(function(ar1,ar2) {
            if (ar2 == '0') {
              return 'ERROR';
            } 
            return (+ar1) / (+ar2); 
          })    
        break;
        case ',':
          if (b ==1) {
            scr.innerText = 0;
            b = 0;
          }
          if (scr.innerText.length < 10) {
              if (scr.innerText.indexOf(".") == -1) {
                scr.innerText += '.';
              }
            }
        break;
        case '<-':
          if (scr.innerText.length > 1) {
            scr.innerText = scr.innerText.substring(0, scr.innerText.length - 1); 
          } else {
            scr.innerText = 0;
          }
        break;
        case 'C':
          scr.innerText = 0;
          action = 0;
          b = 0;
          a = 0;
        break;
        case '=':
          if (action != 0) {
            var result = f(a, scr.innerText);
            scr.innerText = (result != 'ERROR') ? +result.toFixed(6) : result;
            action = 0;
          }
        break;
      }
    } 

    if (event.target.className == 'digit') {
      if (b == 1) {
          scr.innerText = 0;
          b = 0;
        }
        if (scr.innerText.length < 10) {
          if (scr.innerText != '0') {
            scr.innerText += event.target.innerText;
          } else {
            scr.innerText = event.target.innerText;
          }
        } 
    } 

    function oper(func) {
      f = func;
      if (action == 0) {
        a = scr.innerText;
        scr.innerText = 0;
        action = 1;
      } else {
        var result = f(a, scr.innerText);
        scr.innerText = (result != 'ERROR') ? +result.toFixed(6) : result;
        a = scr.innerText;
        b = 1;
      }
    }
  }, true);
}
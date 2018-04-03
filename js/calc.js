window.onload = function () {
  
  var action = 0;
  var a = 0;
  var b = 0;
  var f;
  var btn = document.querySelectorAll('.digit');
  var scr=document.querySelector('#scrin');
  var coma=document.querySelector('#dec');
  var addi=document.querySelector('#plus');
  var substr=document.querySelector('#minus');
  var divis=document.querySelector('#dele');
  var mult=document.querySelector('#umno');
  var erase=document.querySelector('#eras');
  var core=document.querySelector('#correct');
  var eqv=document.querySelector('#eqv');

  scr.innerText=0;
 
      for (var i=0; i<btn.length; i++){
        btn[i].addEventListener('click',function(){
            if (b==1){
            	scr.innerText=0;
            	b=0;
            	}
            if (scr.innerText.length <10){
                if (scr.innerText!='0'){
                scr.innerText+=this.innerText;
                } else {
                    scr.innerText=this.innerText;
                }
            } 
        });       
    }   

        core.onclick=function(){
        	if (scr.innerText.length>1) {
        		scr.innerText=scr.innerText.substring(0, scr.innerText.length - 1); 
        	}
        	else {
        		scr.innerText=0;
        	}
        }  

       erase.onclick=function(){
       		scr.innerText=0;
       		action=0;
       		b=0;
       		a=0;
        } 

        coma.onclick=function(){
        	if (b==1){
            	scr.innerText=0;
            	b=0;
            	}
        	if (scr.innerText.length <10){
                if (scr.innerText.indexOf(".")==-1){
                scr.innerText+='.';
                }
            }
        } 

       function oper(func){
        if (action==0) {
        		a=scr.innerText;
        		scr.innerText=0;
        		action=1;
        		f=func;
        	}
        else {
            	scr.innerText=f(a,scr.innerText);
            	f=func;
            	a=scr.innerText;
            	b=1;;
            }
        }

        mult.onclick=function(){
        	oper(function(ar1,ar2){
        		var result=(+ar1)*(+ar2); 
        		return +result.toFixed(10);
        	})
        }

        addi.onclick=function(){
        	oper(function(ar1,ar2){
        			var result=(+ar1)+(+ar2); 
        			return +result.toFixed(10);
        		})
        }

        substr.onclick=function(){
        	oper(function(ar1,ar2){
        			var result=(+ar1)-(+ar2); 
        			return +result.toFixed(10);
        		})
       }

        divis.onclick=function(){
        	oper(function(ar1,ar2){
        			if (ar2=='0') {
        				return 'ERROR';
        			} 
        			else {
        				var result=(+ar1)/(+ar2); 
        				return +result.toFixed(10);
        			}
        	})		
        } 

        eqv.onclick=function(){
        	if (action!=0) {
        		scr.innerText=f(a,scr.innerText);
            	action=0;
        	}
        }
}
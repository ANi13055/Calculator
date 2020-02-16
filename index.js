var bleep = new Audio();
bleep.src = "clr_btn.mp3"

var beep = new Audio();
beep.src = "btn.mp3"

function insert(num){
  document.form.textbox.value = document.form.textbox.value+num;
    		}
    		
function equal(){
  var exp = document.form.textbox.value;
  if(exp){
  	  document.form.textbox.value = eval(exp)
    		   }
    	  	}
    		
function clean(){ 
  document.form.textbox.value = "";
    		 }
    		 
function back(){
  var exp = document.form.textbox.value;
  document.form.textbox.value = exp.substring(0, exp.length-1)
    			}

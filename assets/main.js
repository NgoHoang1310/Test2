var getInput = document.querySelector('.caculator-input');
var getNumber = document.querySelectorAll('.caculator-number-value');
var getResult = document.querySelector('.btn-result');
var getButton = document.querySelectorAll('.btn');
var getClear = document.querySelector('.caculator-number-clear');
var getValue=[];
var getExp;
function geta() {
    for(var i=0;i<getNumber.length;i++) {
            getNumber[i].onclick = function(e) {
                if(e.target.innerText=='C') {
                    getInput.innerText ='';
                    getValue=[];
                }else{
                    getValue.push(e.target.innerText)
                    for(var j=0;j<getButton.length;j++) {
                        getButton[j].onclick = function(e) {
                            if(e.target.innerText) {
                                getValue.push(e.target.innerText)
                                getInput.innerText = getValue.join('') ;
                            }
                        }
                    }
                    getInput.innerText = getValue.join(''); 
                }
            
        }
    }
}
geta();
var myString;
getResult.onclick = function(e) {
    myString = getInput.innerText;
if(myString.includes('+')) {
    myString=myString.split('+');
    getInput.innerText = parseInt(myString[0])+parseInt(myString[1])
}else if(myString.includes('-')) {
    myString=myString.split('-');
    getInput.innerText = parseInt(myString[0])-parseInt(myString[1])
}else if(myString.includes('x')) {
    myString=myString.split('x');
    getInput.innerText = parseInt(myString[0])*parseInt(myString[1])
}else{
    myString=myString.split('/');
    getInput.innerText = parseInt(myString[0])/parseInt(myString[1])
}
}

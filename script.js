window.onload = function() {

    var btn = document.querySelectorAll('input[type=button]');
    var num1 = document.querySelector('input[name=num1]');
    var num2 = document.querySelector('input[name=num2]');
    var span = document.querySelector('.res');

    for (let i = 0; i < btn.length; i++) {
        btn[i].onclick = function(){
            if(btn[i].getAttribute('name') == 'plus') {
                var res = parseInt(num1.value) + parseInt(num2.value);
                span.innerHTML = res;

                $Enabled(btn[i]);
            }
            else if (btn[i].getAttribute('name') == 'minus'){
                var res = parseInt(num1.value) - parseInt(num2.value);
                span.innerHTML = res; 

                $Enabled(btn[i]);
            } 
            else if (btn[i].getAttribute('name') == 'multy'){
                var res = parseInt(num1.value) * parseInt(num2.value);
                span.innerHTML = res; 

                $Enabled(btn[i]);
            } 
            else if (btn[i].getAttribute('name') == 'del'){
                var res = parseInt(num1.value) / parseInt(num2.value);
                span.innerHTML = res;
                
                $Enabled(btn[i]);
            } 
        }
    }
    
    function $Enabled(a) {
        a.setAttribute('disabled', 'disabled');
        num1.oninput = function(){
            a.removeAttribute('disabled');
        }
        num2.oninput = function(){
            a.removeAttribute('disabled');
        }
    }
}
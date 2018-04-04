window.onload = function() {

    var btn = document.querySelector('input[name=plus]');
    var num1 = document.querySelector('input[name=num1]');
    var num2 = document.querySelector('input[name=num2]');
    var span = document.querySelector('.res');

    btn.onclick = function(){

        var res = parseInt(num1.value) + parseInt(num2.value);
        if(res == NaN) {
            span.innerHTML = 'Введите числа!';
        }
        else {
            span.innerHTML = res;        
        }
  
    }
}
window.onload = function() {

    let num1 = (document.querySelector('input[name=num1]'));
    let btn = document.querySelector('input[name=plus]');
    let span = document.querySelector('.res');

    btn.onclick = function() {
        let inp = num1.value;
        span.innerHTML = reverseStr(inp);
    }

    function reverseStr(str) {
        let newStr = '';

        if(str == '') {
            return 'Введите слово!';
        }

        else {
            let lowerStr = str.toLowerCase();
            for(var i = lowerStr.length-1; i >= 0; i-- ) {
                newStr += lowerStr[i];
            }
            return newStr.charAt(0).toUpperCase() + newStr.substr(1);
        }
    }
}
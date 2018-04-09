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
            return 'Введите фразу или слово!';
        }

        else {
            let lowerStr = str.toLowerCase();
            lowerStr.split('').reverse().join();
            return lowerStr.charAt(0).toUpperCase() + lowerStr.substr(1);
        }
    }
}
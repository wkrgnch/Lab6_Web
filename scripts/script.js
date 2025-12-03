function pow(x, n) {
    let result = 1;

    if(n <= 0 || !Number.isInteger(n)) {
        throw new Error("Число n должно быть натуральным");
    }

    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

function gcd(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("Аргументы должны быть целыми числами");
    }
    if (a < 0 || b < 0) {
        throw new Error("Числа должны быть неотрицательными");
    }

    if (b === 0) {
        return a;
    }   
    return gcd(b, a % b);
}

function minDigit(x) {
    if (!Number.isInteger(x) || x < 0) {
        throw new Error("Число должно быть неотрицательным и целым");
    }
    if (x === 0) {
        return 0;
    }
    let digits = x.toString().split('').map(Number);
    return Math.min(...digits);
}

function pluralizeRecords(n) {
    if (n < 0 || !Number.isInteger(n)) {
        throw new Error("Число должно быть неотрицательным и целым");
    }

    function getForm(n, forms) {
        let lastDigit = n % 10;

        if (lastDigit === 1) {
            return forms[0]; 
        }

        if (lastDigit >= 2 && lastDigit <= 4) {
            return forms[1];
        }

        return forms[2];
    }

    let formExecute = getForm(n, [" выполнения", " выполнения", " выполнений"]);
    let formQuery = getForm(n, [" запроса", " запроса", " запросов"]);
    let formFound = getForm(n, [" была найдена ", " были найдены ", " было найдено "]);
    let formRecords = getForm(n, [" запись", " записи", " записей"]);

    return "В результате " + formExecute + formQuery + formFound + n + formRecords;
}

function fibonachi(n){
    if (n < 0 || !Number.isInteger(n)) {
        throw new Error("Число должно быть неотрицательным и целым");
    }

    if (n > 1000){
        throw new Error("Число должно быть меньше или равно 1000");
    }

    if (n === 0)
        return 0;

    if (n === 1)
        return 1;

    let previous = 0;
    let current = 1;
    for (let i = 2; i <= n; i++) {
        let next = previous + current;
        previous = current;
        current = next;    
    }
    return current;
}

function testPow() {
            let x = parseFloat(document.getElementById('pow-x').value);
            let n = parseFloat(document.getElementById('pow-n').value);
            try {
                let result = pow(x, n);
                document.getElementById('pow-result').innerHTML = "Результат: pow(" + x + ", " + n + ") = " + result;
            } 
            catch (e) {
                document.getElementById('pow-result').innerHTML = "Ошибка: " + e.message;
            }
        }

        function testgcd() {
            let a = parseFloat(document.getElementById('gcd-a').value);
            let b = parseFloat(document.getElementById('gcd-b').value);
            try {
                let result = gcd(a, b);
                document.getElementById('gcd-result').innerHTML = "Результат: gcd(" + a + ", " + b + ") = " + result;
            } 
            catch (e) {
                document.getElementById('gcd-result').innerHTML = "Ошибка: " + e.message;
            }
        }

        function testMin() {
            let x = parseFloat(document.getElementById('minDigit-x').value);
            try {
                let result = minDigit(x);
                document.getElementById('minDigit-result').innerHTML = "Результат: minDigit(" + x + ") = " + result;
            } 
            catch (e) {
                document.getElementById('minDigit-result').innerHTML = "Ошибка: " + e.message;
            }
        }

        function testPluralizeRecords() {
            let n = parseFloat(document.getElementById('pluralize-n').value);
            try {
                let result = pluralizeRecords(n);
                document.getElementById('pluralize-result').innerHTML = "Результат: " + result;
            } 
            catch (e) {
                document.getElementById('pluralize-result').innerHTML = "Ошибка: " + e.message;
            }
        }

        function testFibonachi() {
            let n = parseFloat(document.getElementById('fibonachi-n').value);
            try {
                let result = fibonachi(n);
                document.getElementById('fibonachi-result').innerHTML = "Результат: fibonachi(" + n + ") = " + result;
            } 
            catch (e) {
                document.getElementById('fibonachi-result').innerHTML = "Ошибка: " + e.message;
            }
        }
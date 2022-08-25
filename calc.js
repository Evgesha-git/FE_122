let Calc = function () {

    this.init = function () {
        this.switch = confirm('Вы хотите включить калькулятор?');

        if (this.switch) {
            this.setData()
        }
    }

    this.setData = function () {
        this.a = +prompt('Введите число a');
        this.b = +prompt('Введите число b');
        this.operation();
    };
    this.operation = function () {
        this.sign = prompt('Введите знак: +, -, *, /');
        switch (this.sign) {
            case '+':
                this.result = this.a + this.b;
                break;
            case '-':
                this.result = this.a - this.b;
                break;
            case '*':
                this.result = this.a * this.b;
                break;
            case '/':
                this.result = this.a / this.b;
                break;
            default: this.result = 0;
        }
        this.show();
    };
    this.show = function () {
        alert(this.a + ' ' + this.sign + ' ' + this.b + ' = ' + this.result);
        let next = confirm('Хотите продолжить?')
        if (next) {
            this.setData();
        }
    };
};

let calc = new Calc();
calc.init();
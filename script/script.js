const calc = (selector) => {
    const container = document.querySelector(selector);
    const buttons = container.querySelector('.buttons');
    const text = container.querySelector('#calc');

    const calculator = {
        inputValue: '0',
        waitOperation: false,
        operation: null,
        operand: null,
        inOperation: true,
    };

    const calculation = {
        '+': (fOperand, sOperand) => fOperand + sOperand,
        '-': (fOperand, sOperand) => fOperand - sOperand,
        '*': (fOperand, sOperand) => fOperand * sOperand,
        '/': (fOperand, sOperand) => fOperand / sOperand,
        '%': (fOperand, sOperand) => fOperand * (sOperand / 100),
        '=': (fOperand, sOperand) => sOperand,
        '+/-': (fOperand, sOperand) => sOperand >= 0 ? -sOperand : +sOperand,
    };

    const handleOperation = (nextOperation) => {
        const inputValue = parseFloat(calculator.inputValue);

        if (calculator.operation && 
            calculator.waitOperation && 
            calculator.operation !== '=') {
            calculator.operation = nextOperation;
        }

        if (calculator.operand === null) {
            calculator.operand = inputValue;
            calculator.inOperation = false;
        } else if (calculator.operation && calculator.inOperation) {
            let rez = 0;
            const currentValue = calculator.operand || 0;

            rez = calculation[calculator.operation](currentValue, inputValue);

            calculator.inputValue = rez;
            calculator.operand = rez;
        }

        if(nextOperation === '+/-'){
            let rez = 0;
            rez = calculation[nextOperation](0, inputValue);
            calculator.inputValue = rez;
            calculator.operand = rez;
            render();
        }else{
            calculator.waitOperation = true;
            calculator.operation = nextOperation;
        }
    }

    const inputOperand = (operand) => {
        if (calculator.waitOperation) {
            calculator.inputValue = operand;
            calculator.waitOperation = false;
            calculator.inOperation = true;
        } else {
            calculator.inputValue = calculator.inputValue === '0' ? operand : calculator.inputValue + operand
        }
    }

    const render = () => {
        text.value = calculator.inputValue;
    }

    const clear = () => {
        calculator.inputValue = '0';
        calculator.waitOperation = false;
        calculator.operation = null;
        calculator.operand = null;
    }

    const addDot = value => {
        let index = calculator.inputValue.indexOf(value);

        if (index === -1) inputOperand(value);
    }

    buttons.addEventListener('click', event => {
        const target = event.target;

        if (!target.matches('.button')) return;

        if (target.dataset.math === 'op') {
            if (target.innerText !== 'C') {
                handleOperation(target.dataset.operation);
                render();
                return;
            }else{
                clear();
                render();
                return;
            }
        }

        if (target.dataset.math === 'dot'){
            addDot(target.innerText);
            render();
            return;
        }

        inputOperand(target.innerText);
        render();
    });
}

calc('.calculator')
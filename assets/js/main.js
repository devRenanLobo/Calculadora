function Calculator() {
    this.display = document.querySelector('.display');

    this.start = () => {
        this.clickCapture();
        this.captureEnter();
    };

    this.captureEnter = () => {
        document.addEventListener('keyup', event => {
            if(event.code === 'Enter') {
                this.doCount();
            }
        });
    };

    this.clickCapture = () => {
        document.addEventListener('click', event => {
            const element = event.target;
            if (element.classList.contains('button-num')) this.addDisplayNumber(element);
            if (element.classList.contains('button-clear')) this.clearDisplay();
            if (element.classList.contains('button-delete')) this.deleteNumber();
            if (element.classList.contains('button-equal')) this.doCount();
        });
    };

    this.doCount = () => {
        try {
            const count = eval(this.display.value);
            
            if(!count) {
                alert('Conta inválida');
                return;
            }

            this.display.value = count;

        } catch(e) {
            alert('Conta inválida');
            return;
        }
    };

    this.addDisplayNumber = element => {
        this.display.value += element.innerText;
        this.display.focus();
    }

    this.clearDisplay = () => {
        this.display.value = '';
    }

    this.deleteNumber = () => {
        this.display.value = this.display.value.slice(0, -1);
    }

}

const calculator = new Calculator();
calculator.start();
function Calculator() {
    this.display = document.querySelector('.display');

    this.clickCapture = () => {
        document.addEventListener('click', event => {
            const element = event.target;
            if (element.classList.contains('button-num')) this.addDisplayNumber(element);
        });
    };

    this.addDisplayNumber = element => this.display.value += element.innerText;

    this.start = () => {
        this.clickCapture();
    };
}

const calculator = new Calculator();
calculator.start();
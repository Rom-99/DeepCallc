class Person {
    constructor(name, surname, morningRate, morningRatedaysInput, shiftType1, nightRate, nightRatedaysInput, shiftType2, check30) {
        this.name = name;
        this.surname = surname;
        this.morningRate = morningRate;
        this.morningRatedaysInput = morningRatedaysInput;
        this.shiftType1 = shiftType1;
        this.nightRate = nightRate;
        this.nightRatedaysInput = nightRatedaysInput;
        this.shiftType2 = shiftType2;
        this.check30 = check30;
    }

    calcSalaryMorning() {
        return this.morningRate * this.morningRatedaysInput * this.shiftType1;
    }

    calcSalaryMorning30() {
        return this.morningRate * this.morningRatedaysInput * this.shiftType1 * (this.check30 ? 1.3 : 1);
    }

    calcSalaryNight() {
        return this.nightRate * this.nightRatedaysInput * this.shiftType2;
    }
    calcSalaryNight30() {
        return this.nightRate * this.nightRatedaysInput * this.shiftType2 * (this.check30 ? 1.3 : 1);
    }

    calcSalaryGeneral() {
        return this.calcSalaryMorning() + this.calcSalaryNight() * (this.check30 ? 1.3 : 1);
    }

    print() {
        return `1-ին Հերթ՝ ${this.calcSalaryMorning()}  ( +30%՝  ${this.calcSalaryMorning30()}  ) : 2-րդ Հերթ՝ ${this.calcSalaryNight()} ( +30%՝ ${this.calcSalaryNight30()}) :Ընդհանուր՝ ${this.calcSalaryGeneral()}`;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    let nameInput = document.getElementById('nameInput');
    let surnameInput = document.getElementById('surnameInput');
    let morningRateInput = document.getElementById('morningRate');
    let morningRatedaysInput = document.getElementById('morningRatedaysInput');
    let shiftType1Select = document.getElementById('shiftType1');
    let nightRateInput = document.getElementById('nightRate');
    let nightRatedaysInput = document.getElementById('nightRatedaysInput');
    let shiftType2Select = document.getElementById('shiftType2');
    let check30 = document.getElementById('check30');

    let calcButton = document.getElementById('calcButton');
    let resetButton = document.getElementById('resetButton');

    let outputName = document.getElementById('outputName');
    let outputSalary = document.getElementById('outputSalary');

    calcButton.addEventListener('click', function () {
        let name = nameInput.value;
        let surname = surnameInput.value;
        let morningRate = parseFloat(morningRateInput.value);
        let morningRatedaysInputValue = parseFloat(morningRatedaysInput.value);
        let shiftType1 = parseFloat(shiftType1Select.value);
        let nightRate = parseFloat(nightRateInput.value);
        let nightRatedaysInputValue = parseFloat(nightRatedaysInput.value);
        let shiftType2 = parseFloat(shiftType2Select.value);

        let person = new Person(name, surname, morningRate, morningRatedaysInputValue, shiftType1, nightRate, nightRatedaysInputValue, shiftType2, check30.checked);

        outputName.textContent = `${person.name} ${person.surname}`;
        outputSalary.textContent = person.print();
    });

    resetButton.addEventListener('click', function () {
        nameInput.value = '';
        surnameInput.value = '';
        morningRateInput.value = '';
        morningRatedaysInput.value = '';
        shiftType1Select.value = '';
        nightRateInput.value = '';
        nightRatedaysInput.value = '';
        shiftType2Select.value = '';
        check30.checked = false;

        outputName.textContent = '';
        outputSalary.textContent = '';
    });
});

import ValidateCPF from './ValidateCPF'

export default class GenerateCPF {
  rand(min = 100000000, max = 999999999) { //random 9 digits(string)
    return String(Math.floor(Math.random() * (max - min) + min));
  }

  formatted(cpf) {
    return (
      cpf.slice(0, 3) + '.' +
      cpf.slice(3, 6) + '.' +
      cpf.slice(6, 9) + '-' +
      cpf.slice(9, 11)
    )
  }

  generateNewCpf() { //this method will generate the two other digits then, format the string
    const cpfWithNoDigits = this.rand();
    const digitOne = ValidateCPF.newDigit(cpfWithNoDigits);
    const digitTwo = ValidateCPF.newDigit(cpfWithNoDigits + digitOne);
    const newCpf = cpfWithNoDigits + digitOne + digitTwo;
    return this.formatted(newCpf);
  }
}
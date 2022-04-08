//this class basically add one number in the cpf string

/* 
example:
  x   x  x  x  x  x  x  x  x 
 x10 x9 x8 x7 x6 x5 x4 x3 x2

 total receives the sum of this loop, then the last digit receive (11 - remainder)
 if the digit is greater than 10, the it becomes 0
 */
export default class ValidateCPF { //exporting this class as default
  static newDigit(cpfWithNoDigits) { //static method
    let total = 0;
    let reverse = cpfWithNoDigits.length + 1;

    for(let numericString of cpfWithNoDigits) {
      total += reverse * Number(numericString);
      reverse--;
    }

    const digit = 11 - (total % 11);
    return digit <= 9 ? String(digit) : '0'; //ternary operation
  }
}
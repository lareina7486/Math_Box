//덧셈입니다.
const add = (a, b) => a + b;

//뺄셈입니다.
const substract = (a, b) => a - b;

//곱셈입니다.
const multiply = (a, b) => a * b;

//나눗셈입니다.
const divide = (a, b) => {
  if (b === 0) return;
  return a / b;
};

// 유료 버전 나눗셈
const divide_for_premium = (a, b) => a / b;
//무료 버전 나눗셈
const divide_for_free = (a,b) => a / b;

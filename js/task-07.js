// Напишіть функцію savePassword(password), яка приймає пароль та повертає внутрішню функцію,
//     яка приймає рядок та повертає true, якщо рядок співпадає зі збереженим паролем,
//     та false - якщо не співпадає

function savePassword(password) {
  return (userPassword) => password === userPassword;
    
}
const checkPassword = savePassword(1234);
console.log(checkPassword(4567));
console.log(checkPassword(1234));
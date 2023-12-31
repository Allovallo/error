// try {
//     console.log('Початок блоку try');
//     lalala;
//     console.log('Кінець блоку try - ніколи не виконається');
// } catch(err) {
//     console.log('Виникла помилка!');
// }

// try {
//     setTimeout(function () {
//         noSuchVar
//     }, 1000);
// } catch (e) {
//     console.log("Не спрацює!!!");
// }

// setTimeout(() => {
//     try {
//         noSuchVar;
//     } catch (error) {
//         console.log('Помилка перехоплена!!!');
//     }
// }, 1000);

// try {
//     lalala;
// } catch (err) {
//     console.log(err.name);
//     console.log(err.message);
//     console.log(err.stack);
//     console.log(err);
// }

// let json = "{Некоректний JSON}";

// try {
//     let user = JSON.parse(json);
//     console.log(user.name);
// } catch (err) {
//     console.log('Вибачте, в даних помилка, спробуємо отримати ще раз');
//     console.log(err.name);
//     console.log(err.message);
// }


// let json = '{ "age:" 30 }';

// try {
//     const user = JSON.parse(json);

//     if (!user.name) {
//         throw new SyntaxError("Помилка - відсутнє ім'я!!!");
//     }

//     console.log(user.name);

// } catch(e) {
//     console.log("JSON Error: " + e.message);
// }


// let json = '{"age": 30}';

// console.log(json);

// try {
//     user = JSON.parse(user);
// } catch (error) {
//     console.log(error.name);
// }

// let json = '{"age": 30}';

// try {
//     let user = JSON.parse(json);

//     if (!user.name) {
//         throw new SyntaxError("Дані не повні - відсутнє ім'я!!!")
//     }

//     blabla();

//     console.log(user.name);
// } catch (error) {
//     if (error.name == "SyntaxError") {
//         console.log("JSON Error: " + error.message);
//     } else {
//         throw error;
//     }
// }


// function readData() {
//     let json = '{"age": 30}';

//     try {
//         blabla();
//     } catch (error) {
//         if (error.name != "SyntaxError") {
//             throw error;
//         }
//     }
// }

// try {
//     readData();
// } catch (error) {
//     console.log("Зовнішній catch спіймав " + error);
// }

// try {
//     alert('try');
//     if (confirm('Згенерувати помилку?')) BAD_CODE();
// } catch (error) {
//     alert('catch');
// } finally {
//     alert('finally');
// }

// let num = +prompt("Введить позитивне ціле число", 35);

// let ditt, result;

// function fib (n) {
//     if (n < 0 || Math.trunc(n) != 0) {
//         throw new Error("Має бути ціле позитивне число!");
//     }
//     return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }

// let start = Date.now();

// try {
//     result = fib(num);
// } catch (e) {
//     result = 0;
// } finally {
//     diff = Date.now() - start;
// }

// console.log(result || "Виникла помилка!");

// console.log(`Виконання зайняло ${diff} мс`);

// class Error {
//     constructor(message) {
//         this.message = message;
//         this.name = 'Error';
//         // this.stack = <стек визовов>;
//     }
// }

// class MyError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = this.constructor.name;
//     }
// }

// class ReadError extends Error {
//     constructor(message, cause) {
//         super(message);
//         this.cause = cause;
//         this.name = 'ReadError';
//     }
// }

// class ValidationError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "ValidationError";
//     }
// }

// class PropertyRequiredError extends ValidationError {
//     constructor(property) {
//         super("Нема властивості " + property);
//         this.name = "PropertyRequiredError";
//         this.property = property;
//     }
// }

// function validateUser(user) {
//     if (!user.age) {
//         throw new PropertyRequiredError("age");
//     }
//     if (!user.name) {
//         throw new PropertyRequiredError("name");
//     }
// }

// function readUser(json) {
//     let user;

//     try {
//         user = JSON.parse(json);
//     } catch (error) {
//         if (error instanceof SyntaxError) {
//             throw new ReadError("Синтаксична помилка", error);
//         } else {
//             throw error;
//         }
//     }

//     try {
//         validateUser(user);
//     } catch (error) {
//         if (error instanceof ValidationError) {
//             throw new ReadError("Помилка валідації", error);
//         } else {
//             throw error;
//         }
//     }
// }

// try {
//     readUser('{"age": 25, "name": "John"}');
//      readUser('{bad json}');
// } catch (e) {
//     if (e instanceof ReadError) {
//         console.log(e);
//         console.log("Вихідна помилка: " + e.cause);
//     } else {
//         throw e;
//     }
// }

class Error {
    constructor(message) {
        this.message = message;
        this.name = 'Error';
        // this.stack = <стек визовов>;
    }
}

class FormatError extends SyntaxError {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

let error = new FormatError("Помилка программування");

console.log(error.message);
console.log(error.name);

console.log(error instanceof FormatError);
console.log(error instanceof SyntaxError);
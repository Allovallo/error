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


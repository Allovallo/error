// function loadScript(src, callback) {
//     const script = document.createElement('script');
//     script.src = src;
//     script.onload = () => callback(script);
//     script.onerror = () => callback(new Error(`Не вдалося завантажити скріпт ${src}`));
//     document.head.append(script);
// }

// loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
//   console.log(`Відмінно, скріпт ${script.src} завантажився`);
//   console.log( _ ); // функция, объявленная в загруженном скрипте
// });

// loadScript('/my-script-1.js', function (error, script) {
//   if (error) {
//     handleError(error); // для помилки
//   } else {
//     loadScript('/my-script-2.js', function (error, script) {
//       if (error) {
//         handleError(error);
//       } else {
//         loadScript('/my-script-2.js', function (error, script) {
//           if (error) {
//             handleError(error);
//           } else {
//             // ...продовжується після завантаження всіх скриптів (*)
//           }
//         });

//       }
//     });

//   }
// });

// loadScript('1.js', step1);

// function step1(error, script) {
//   if (error) {
//     handleError(error);
//   }
//   else {
//     loadScript('2.js', step2);
//   }
// }

// function step2(error, script) {
//   if (error) {
//     handleError(error);
//   } else {
//     loadScript('3.js', step3);
//   }
// }

// function step3(error, script) {
//   if (error) {
//     handleError(error);
//   } else {
//     // ...
//   }
// }

// let promise = new Promise(function (resolve, reject) {

//   setTimeout(() => {
//     resolve("Завершено");
//   }, 1000);

//   setTimeout(() => {
//     reject(new Error("Відмовлено"));
//   }, 1000);

// });

// promise.then(
//   function(result) {},
//   function(error) {}
// )

// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve("ВСЕ Завершено!"), 1000);
// });

// promise.then(
//   result => console.log(result),
//   error => console.log(error)
// );

// promise.then(alert);

// let promise = new Promise(
//   (resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error("OOOPS!"))
//     }, 1000);
//   }
// );

// promise.catch(alert);

// new Promise(
//   (resolve, reject) => {
//     throw new Error("Very BIG Error!")
//   }
// ).finally(() => console.log("Promise is completed")
// ).catch(err => console.log(err));

// new Promise(resolve => resolve("FINAL!")).then(alert);

// function loadScript(src, callback) {
//   let script = document.createElement('script');
//   script.src = src;

//   script.onload = () => callback(null, script);
//   script.onerror = () => callback(new Error(`Помилкка в завантаженні скрипта ${src}`));

//   document.head.append(script);
// }

// function loadScript(src) {
//   return new Promise(
//     function (resolve, reject) {
//       let script = document.createElement('script');
//       script.src = src;

//       script.onload = () => resolve(script);
//       script.onerror = () => reject(new Error(`Помилка завантаження скрипта ${src}`));

//       document.head.append(script);
//     }
//   );
// };

// let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");
// promise.then(
//   script => alert(`${script.src} downloaded`),
//   error => alert(`Error: ${error.message}`)
// );
// promise.then(script => alert('one more processor'));

// function delay(ms) {
//   let promise = new Promise(
//     (resolve, reject) => {
//       setTimeout(() => {
//         resolve()
//       }, ms);
//     });
//   return promise;
// }

// function delay(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// delay(3000).then(() => alert("Executed in 3 sec"));

// new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(1), 1000);
// })
//   .then(function (result) {
//     alert(result);
//     return result * 2;
//   })
//   .then(function (result) {
//     alert(result);
//     return result * 2;
//   })
//   .then(function (result) {
//     alert(result);
//     return result * 2;
//   });

// new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(1), 1000);
// })
//   .then(function (result) {
//     alert(result); // 1
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(result * 2), 1000);
//     });
//   })
//   .then(function (result) {
//     alert(result); // 2
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(result * 2), 1000);
//     });
//   })
//   .then(function (result) {
//     alert(result); // 4
//   });

// new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve(1);
//   }, 1000);
// })
//   .then(function (result) {
//     console.log(result);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(result * 2);
//       }, 1000);
//     });
//   })
//   .then(function (result) {
//     console.log(result);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(result * 2);
//       }, 1000);
//     });
//   })
//   .then(function (result) {
//     console.log(result);
//   });

// loadScript('/article/promise-chaining/one.js')
//   .then(function (script) {
//     return loadScript('/article/promise-chaining/two.js');
//   })
//   .then(function (script) {
//     return loadScript('/article/promise-chaining/three.js');
//   })
//   .then(function (script) {
//     // викличемо функції, оголошені в скриптах
//     // щоб показати, що вони дійсно завантажені
//     one();
//     two();
//     three();
//   });

// loadScript('/article/promise-chaining/one.js')
//   .then(script => loadScript('/article/promise-chaining/two.js'))
//   .then(script => loadScript('/article/promise-chaining/three.js'))
//   .then(script => {
//     // скрипти завантажені, ми можемо використовувати оголошені там функції
//     one();
//     two();
//     three();
//   });

// loadScript('/article/promise-chaining/one.js').then(script1 => {
//   loadScript('/article/promise-chaining/two.js').then(script2 => {
//     loadScript('/article/promise-chaining/three.js').then(script3 => {
//       // ця функція має доступ до змінних script1, script2 і script3
//       one();
//       two();
//       three();
//     });
//   });
// });

// class Thenable {
//   constructor(num) {
//     this.num = num;
//   }
//   then(resolve, reject) {
//     alert(resolve); // function() { native code }
//     // буде успішно виконано з аргументом this.num*2 через 1 секунду
//     setTimeout(() => resolve(this.num * 2), 1000); // (**)
//   }
// }

// new Promise(resolve => resolve(1))
//   .then(result => {
//     return new Thenable(result); // (*)
//   })
//   .then(alert); // показує 2 через 1000 мс

// fetch('/article/promise-chaining/user.json')
//   // .then в коде ниже выполняется, когда удалённый сервер отвечает
//   .then(function (response) {
//     // response.text() возвращает новый промис,
//     // который выполняется и возвращает полный ответ сервера,
//     // когда он загрузится
//     return response.text();
//   })
//   .then(function (text) {
//     // ...и здесь содержимое полученного файла
//     alert(text); // {"name": "iliakan", isAdmin: true}
//   });

// fetch('../user.json')
//   .then(response => response.json())
//   .then(user => alert(user.name));

// // Запитуємо user.json
// fetch('/article/promise-chaining/user.json')
//   // Завантажуємо дані у форматі json
//   .then(response => response.json())
//   // Робимо запит до GitHub
//   .then(user => fetch(`https://api.github.com/users/${user.name}`))
//   // Завантажуємо відповідь у форматі json
//   .then(response => response.json())
//   // Показуємо аватар (githubUser.avatar_url) протягом 3 секунд (можливо, з анімацією)
//   .then(githubUser => {
//     let img = document.createElement('img');
//     img.src = githubUser.avatar_url;
//     img.className = 'promise-avatar-example';
//     document.body.append(img);

//     setTimeout(() => img.remove(), 3000); // (*)
//   });

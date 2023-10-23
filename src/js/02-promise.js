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

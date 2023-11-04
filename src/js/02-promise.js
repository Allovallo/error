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

// fetch('https://uk.javascript.info/promise-chaining')
//   .then(response => response.json)
//   .catch(err => alert(err));

// fetch('/article/promise-chaining/user.json')
//   .then(response => response.json())
//   .then(user => fetch(`https://api.github.com/users/${user.name}`))
//   .then(response => response.json())
//   .then(
//     githubUser =>
//       new Promise((resolve, reject) => {
//         let img = document.createElement('img');
//         img.src = githubUser.avatar_url;
//         img.className = 'promise-avatar-example';
//         document.body.append(img);

//         setTimeout(() => {
//           img.remove();
//           resolve(githubUser);
//         }, 3000);
//       }),
//   )
//   .catch(error => alert(error.message));

// fetch('/article/user.json')
//   .then(response => response.text())
//   .then(text => alert(text));

// fetch('/article/user.json')
//   .then(response => response.json())
//   .then(user => alert(user.name));

// fetch('/article/promise-chaining/user.json') // Запитуємо user.json
//   .then(response => response.json()) // Завантажуємо дані у форматі json
//   .then(user => fetch(`https://api.github.com/users/${user.name}`)) // Робимо запит до GitHub
//   .then(response => response.json()) // Завантажуємо відповідь у форматі json
//   // Показуємо аватар (githubUser.avatar_url) протягом 3 секунд (можливо, з анімацією)
//   .then(
//     githubUser =>
//       new Promise(function (resolve, reject) {
//         let img = document.createElement('img');
//         img.src = githubUser.avatar_url;
//         img.className = 'promise-avatar-example';
//         document.body.append(img);

//         setTimeout(() => {
//           img.remove();
//           resolve(githubUser);
//         }, 3000);
//       }),
//   )
//   .then(githubUser => alert(`Закончили показ ${githubUser.name}`));

// function loadJson(url) {
//   return fetch(url).then(response => response.json());
// }

// function loadGithubUser(name) {
//   return fetch(`https://api.github.com/users/${name}`).then(response =>
//     response.json(),
//   );
// }

// function showAvatar(githubUser) {
//   return new Promise(function (resolve, reject) {
//     let img = document.createElement('img');
//     img.src = githubUser.avatar_url;
//     img.className = 'promise-avatar-example';
//     document.body.append(img);

//     setTimeout(() => {
//       img.remove();
//       resolve(githubUser);
//     }, 3000);
//   });
// }

// loadJson('/article/user.json')
//   .then(user => loadGithubUser(user.name))
//   .then(showAvatar)
//   .then(githubUser => alert(`Показ аватара ${githubUser.name} завершено`));

// fetch('https://no-such-server.blabla')
//   .then(response => response.json())
//   .catch(err => alert(err));

// fetch('https://api.github.com/users')
//   .then(response => response.json())
//   .then(user => fetch(`https://api.github.com/users/${user.login}`))
//   .then(response => response.json())
//   .then(
//     githubUser =>
//       new Promise((resolve, reject) => {
//         let img = document.createElement('img');
//         img.src = githubUser.avtar_url;
//         img.className = 'promise-avatar-example';
//         document.body.append(img);

//         setTimeout(() => {
//           img.remove();
//           resolve(githubUser);
//         }, 3000);
//       }),
//   )
//   .catch(alert);

// new Promise((resolve, reject) => {
//   resolve('OK!');
// })
//   .then(result => {
//     throw new Error('ERROR!!!');
//   })
//   .catch(alert);

// new Promise((resolve, reject) => {
//   resolve('OK!');
// })
//   .then(result => {
//     blabla();
//   })
//   .catch(alert);

// // the execution: catch -> catch
// new Promise((resolve, reject) => {
//   throw new Error('Помилка!');
// })
//   .catch(function (error) {
//     // (*)
//     if (error instanceof URIError) {
//       // обробляємо помилку
//     } else {
//       alert('Не можу обробити цю помилку');
//       throw error; // прокидуємо цю або іншу помилку в наступний catch
//     }
//   })
//   .then(function () {
//     /* не виконається */
//   })
//   .catch(error => {
//     // (**)
//     alert(`Невідома помилка: ${error}`);
//     // нічого не повертаємо => виконання продовжується в нормальному режимі
//   });

// window.addEventListener('unhandledrejection', function (event) {
//   // об’єкт події має дві спеціальні властивості:
//   alert(event.promise); // [object Promise] - проміс, який згенерував помилку
//   alert(event.reason); // Error: Whoops! - об’єкт помилки, яка не була оброблена
// });

// new Promise(function () {
//   throw new Error('Помилка!');
// }); // немає обробника помилок

// Promise.all([
//   new Promise(resolve => setTimeout(() => resolve(1), 2000)),
//   new Promise(resolve => setTimeout(() => resolve(2), 2000)),
//   new Promise(resolve => setTimeout(() => resolve(3), 2000)),
// ]).then(alert);

// let urls = [
//   'https://api.github.com/users/iliakan',
//   'https://api.github.com/users/remy',
//   'https://api.github.com/users/jeresig',
// ];

// let requests = urls.map(url => fetch(url));

// Promise.all(requests).then(responses =>
//   responses.forEach(response => alert(`${response.url}: ${response.status}`)),
// );

// let names = ['iliakan', 'remy', 'jeresig'];
// let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

// Promise.all(requests)
//   .then(responses => {
//     for (let response of responses) {
//       alert(`${response.url}: ${response.status}`);
//     }
//     return responses;
//   })
//   .then(responses => Promise.all(responses.map(r => r.json())))
//   .then(users => users.forEach(user => alert(user.name)));

// Promise.all(
//   ['iliakan', 'remy', 'jeresig'].map(name =>
//     fetch(`https://api.github.com/users/${name}`),
//   ),
// )
//   .then(responses => {
//     for (let response of responses) {
//       alert(`${response.url}: ${response.status}`);
//     }
//     return responses;
//   })
//   .then(responses => Promise.all(responses.map(r => r.json())))
//   .then(users => users.forEach(user => alert(user.name)));

// Promise.all([
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//   new Promise((resolve, reject) => setTimeout(() => reject(new Error('Very BIG ERROR!')), 2000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
// ]).catch(alert);

// Promise.all([
//   new Promise((resolve, reject) => {
//     setTimeout(() => resolve(1), 3000);
//   }),
//   'true',
//   3,
// ]).then(alert);

// let urls = [
//   'https://api.github.com/users/iliakan',
//   'https://api.github.com/users/remy',
//   'https://no-such-url',
// ];

// Promise.allSettled(urls.map(url => fetch(url))).then(results => {
//   results.forEach((result, num) => {
//     if (result.status == 'fulfilled') {
//       alert(`${urls[num]}: ${result.value.status}`);
//     }
//     if (result.status == 'rejected') {
//       alert(`${urls[num]}: ${result.reason}`);
//     }
//   });
// });

// Promise.race([
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error('OOOPS!')), 5000),
//   ),
//   new Promise((resolve, reject) => setTimeout(() => resolve(2), 4000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
// ]).then(alert);

// function loadScript(src, callback) {
//   let script = document.createElement('script');
//   script.src = src;

//   script.onload = () => callback(null, script);
//   script.onerror = () =>
//     callback(new Error(`Помилка в завантаженні скрипту ${src}`));

//   document.head.append(script);
// }

// let loadScriptPromise = function (src) {
//   return new Promise((resolve, reject) => {
//     loadScript(src, (err, script) => {
//       if (err) reject(err);
//       else resolve(script);
//     });
//   });
// };

// function promisify(f, manyArgs = false) {
//   return function (...args) {
//     return new Promise((resolve, reject) => {
//       function callback(err, ...results) {
//         if (err) {
//           return reject(err);
//         } else {
//           resolve(manyArgs ? results : results[0]);
//         }
//       }
//       args.push(callback);

//       f.call(this, ...args);
//     });
//   };
// }

// let loadScriptPromise = promisify(loadScript);

// let promise = Promise.resolve();
// promise.then(() => alert('Проміс виконано'));
// alert('Код виконано');

// Promise.resolve()
//   .then(() => alert('1'))
//   .then(() => alert('2'));

// let promise = Promise.reject(new Error('ERRORR in the PROMISE'));
// // promise.catch(err => alert('COUGHT!'));
// setTimeout(() => {
//   promise.catch(err => alert('COUGHT!'));
// }, 2000);
// window.addEventListener('unhandledrejection', event => {
//   alert(event.reason);
// });

// async function f() {
//   return 1;
// }
// f().then(alert);

// let value = await promise;

// async function f() {
//   let promise = new Promise(
//     (resolve, reject) => setTimeout(() => resolve('Ready!')),
//     1000,
//   );
//   let result = await promise;
//   alert(result);
// }

// f();

// async function showAvatar() {
//   // зчитуємо наш JSON
//   let response = await fetch('/article/promise-chaining/user.json');
//   let user = await response.json();
//   // зчитуємо користувача github
//   let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
//   let githubUser = await githubResponse.json();
//   // показуємо аватар
//   let img = document.createElement('img');
//   img.src = githubUser.avatar_url;
//   img.className = 'promise-avatar-example';
//   document.body.append(img);

//   await new Promise((resolve, reject) => setTimeout(resolve, 3000));

//   img.remove();

//   return githubUser;
// }

// showAvatar();

// async function showAvatar() {
//   let response = await fetch('/article/promise-chaining/user.json');
//   let user = await response.json();

//   let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
//   let githubUser = await githubResponse.json();

//   let img = document.createElement('img');
//   img.src = githubUser.avatar_url;
//   img.className = 'promise-avatar-example';
//   document.body.append(img);

//   await new Promise((resolve, reject) => setTimeout(resolve, 2000));

//   img.remove();

//   return githubUser;
// }

// showAvatar();

// class Thenable {
//   constructor(num) {
//     this.num = num;
//   }
//   then(resolve, reject) {
//     alert(resolve);
//     setTimeout(() => resolve(this.num * 2), 1000);
//   }
// }

// async function f() {
//   let result = await new Thenable(1);
//   alert(result);
// }

// f();

// async function f() {
//   return 1;
// }

// f().then(alert);

// async function f() {
//   let promise = new Promise((resolve, reject) =>
//     setTimeout(() => {
//       resolve('READY!');
//     }, 1000),
//   );

//   let result = await promise;
//   alert(result);
// }

// f();

// function loadScript(src) {
//   let script = document.createElement('script');
//   script.src = src;
//   document.gead.append(script);
// }

// loadScript('/my/script.js');
// // код, написанный после вызова функции loadScript, не будет дожидаться полной загрузки скрипта ...

// function loadScript(src, callback) {
//   let script = document.createElement('script');
//   script.src = src;
//   script.onload = () => callback(script);
//   document.head.append(script);
// }

// loadScript(
//   'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js',
//   script => {
//     alert(`Здорово, скрипт ${script.src} загрузился`);
//     alert(_); // функция, объявленная в загруженном скрипте
//   },
// );

// loadScript('/my/script.js', function (script) {
//   alert(`Відмінно, наш скріпт ${script.src} завантажився!`);

//   loadScript('/my/script2.js', function (script) {
//     alert(`Відмінно, другий скріпт завантажився!`);
//   });
// });

// function loadScript(script) {
//   let script = document.createElement('script');
//   script.src = src;

//   script.onload = () => callback(null, script);
//   script.onerror = () =>
//     callback(new Error(`Не вдалося завантажити скріпт ${src}`));

//   document.head.append(script);
// }

// loadScript('/my/script.js', function (error, script) {
//   if (error) {
//     //...
//   } else {
//     //...
//   }
// });

// loadScript('1.js', step1);

// function step1(error, script) {
//   if (error) {
//     handleError(error);
//   } else {
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
//     //...
//   }
// }

// let promise = new Promise(function (resolve, reject) {
//   resolve(alert('DONE!!!'));
//   setTimeout(() => reject(new Error('WHOOOPS!!!')), 2000);
// });

// promise.then(
//   result => alert(result),
//   error => alert(error),
// );

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(new Error('@ERROR@'));
//   }, 1000);
// });

// promise.catch(alert);

// new Promise((resolve, reject) => {
//   // setTimeout(() => resolve(5), 2000);
//   throw new Error('MegaError');
// })
//   .finally(() => alert('Promise is finished'))
//   // .then(result => alert(result));
//   .catch(error => alert(error));

// function loadScript(src) {
//   return new Promise(function (resolve, reject) {
//     let script = document.createElement('script');
//     script.src = src;

//     script.onload = () => resolve(script);
//     script.onerror = () =>
//       reject(new Error(`Помилка завантаження скріпта ${src}`));

//     document.head.append(script);
//   });
// }

// let promise = loadScript(
//   'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js',
// );

// promise.then(
//   script => alert(`${script.src} завантажено!`),
//   error => alert(`Помилка ${error.message}`),
// );

// promise.then(script => alert(`Ще один обробник...`));

// function loadJson(url) {
//   return fetch(url).then(response => {
//     if (response.status == 200) {
//       return response.json();
//     } else {
//       throw new Error(response.status);
//     }
//   });
// }

// loadJson('https://javascript.info/no-such-user.json').catch(alert); // Error: 404

// async function f() {
//   let promise = new Promise((resolve, reject) =>
//     setTimeout(() => {
//       resolve('READY!!!');
//     }, 2500),
//   );

//   let result = await promise;
//   console.log(result);
// }
// f();

class Thenable {
  constructor(num) {
    this.num = num;
  }
  then(resolve, reject) {
    alert(resolve);
    setTimeout(() => resolve(this.num * 2), 2000);
  }
}
async function f() {
  let result = await new Thenable(1);
  alert(result);
}
f();

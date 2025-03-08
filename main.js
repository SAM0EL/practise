// // to load the Js after the html loaded
// // (من خلال هذا الوسم استطيع ان اضع رابط ال جافاسكريبت فى الهيد)
// /* onload = function () {
//     document.querySelector('h1').style.color = "red"
// }*/

// document.write("Hello world");
// console.log("hello world");

// //يوجد 3 متغيرات فى اللغه كونست هو المتغير ال مش بيقبل اى تغير او تعديل عليه
// //ليت و فار بيفبلو التعديل عليهم لكن ليت لا تقبل ان يتم كتابتها مره اخرى مع نفس التعريف

// var n = " samoel ";
// let y = 20;
// const x = " mina ";

// document.write(n);
// document.write(y);
// document.write(x);

// // توجد طريقتين للدمج طريقه قديمه تعتمد على (+) للدمج بين المتغيرات

// let name = "samoel ";
// let age = 31;
// let space = " ";

// console.log(name + space + age);

// // الطريقه الجديده (` `) و المتغير يتم وضعها فى ${} لدمج المتغيرات

// console.log(`this is my name ${name} and this is my age ${age}`);

// // العمليات الحسابيه

// let num1 = 5;
// let num2 = 4;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2);

// // اذا جائت قيمه فى علامات التنصيص سيتعامل معاها على انها نص ويدمجهم كنص ليس عمليه حسابيه و هذا يحدث مع علامه الجمع فقط
// console.log("num1 " + num2);

// // اذا جائت قيمه فى علامات التنصيص سيتعامل معاها على انهاعمليه حسابيه عاديه لكن سيعطى نتيجه (Nan) يمعنه انه لا يوجد رقم
// console.log("num1" - num2);

// // هذه طرق العمليات الحسابيه مع المتغيرات باختصار الكود

// let num3 = 10;
// num3 += 1;

// let num4 = 80;
// num4++;

// let num5 = 50;
// num5 -= 70;

// let num6 = 50;
// num6--;

// console.log(num3);
// console.log(num4);
// console.log(num5);
// console.log(num6);

// // و يمكن اختصار جميع ما سبق كالاتى

// console.log(num3++);

// console.log(num3);

// //لتحويل النص الى رقم بضع (+) قبل الرقم

// console.log(typeof +"5");

// // (Nun) و من خلال هذه العلامه استطيع ان احول اى شئ الى رقم حتى لو نصوص لكن ستكون النتيجه رقم غير مفهوم

// console.log(+"samoel");

// //  فا هو بيفهمها على انها حاجه مش موجوده فاذا حولتها لرقم ستعطى (undefined)  اما فى
// console.log(+undefined);

// //  فا هو بيفهمها على انها قيمه فارغه فاذا حولتها لرقم ستعطى 0  (null)  اما فى

// console.log(+null);

// //   لانهم فى لفه معناهم 0 1 (true) (false) نفس الحال مع قيمه

// console.log(+true);
// console.log(+false);

// //  Number من خلال هذه الطريقة يمكنك ارجاع قيمة رقمية من اي نوع بيانات لكن اذا كانت الجملة نصية يرجع لك Nan

// console.log(Number("10"));

// // parseInt من خلال هذه الطريقة يمكنك ارجاع رقم صحيح مع تجاهل النصوص اذا كان الرقم في البداية

// console.log(parseInt("10 samoel"));

// // parseFloat من خلال هذه الطريقة يمكنك ارجاع رقم عشري مع تجاهل النصوص اذا كان الرقم في البداية

// console.log(parseFloat("samoel 10"));

// // الكائن Number يتيح لك العديد من الخصائص المميزة مثل:

// // MAX_VALUE :    JavaScript تُرجع أكبر رقم ممكن في

// console.log(Number.MAX_VALUE);

// // MIN_VALUE :    JavaScript تُرجع أفل رقم ممكن في

// console.log(Number.MIN_VALUE);

// // MAX_SAFE_INTEGER : JavaScript تُرجع أكبر رقم أمن في

// console.log(Number.MAX_SAFE_INTEGER);

// // MIN_SAFE_INTEGER : JavaScript تُرجع أقل رقم أمن في

// console.log(Number.MIN_SAFE_INTEGER);

// // isSafeInteger :  method يمكنك من خلال هذا الـ method التحقق من كون الرقم أمن ام لا

// console.log(Number.isSafeInteger(1684654654651));

// // isInteger :  method يمكنك من خلال هذا الـ method التحقق من كون نوع البيانات تلك رقمية ام لا

// console.log(Number.isInteger(21));
// console.log(Number.isInteger("21"));

// // isNan :  method يمكنك من خلال هذا الـ method التحقق من كون نوع البيانات تلك Nan ام لا

// console.log(Number.isNaN(+"21" + +"21"));
// console.log(+"21" + +"21");

// //  الكائن Math يتيح لك العديد من الخصائص الرياضية المميزة مثل: E : تُرجع أكبر الثابت E PI :
// // تُرجع أكبر الثابت ط abs :
// // مكنك من خلال هذا الـ method تحويل اي قيمة رقمية الى قيمة موجبة sqrt :
// // مكنك من خلال هذا الـ method ايجاد الجزر التربيعي pow :
// // مكنك من خلال هذا الـ method ايجاد لأقرب رقم صحيح round :

// console.log(Math.round(1.65));

// // مكنك من خلال هذا الـ method تقريب اللأعداد لأقرب رقم صحيح للأعلى ceil :

// console.log(Math.ceil(10.1));

// //مكنك من خلال هذا الـ method تقريب اللأعداد لأقرب رقم صحيح للاقل floor :

// console.log(Math.floor(1.65));

// // مكنك من خلال هذا الـ method عدة ارقام لاصغر رقم صحيح للأعلى min :

// console.log(Math.min(2, 87, 8, 9999, 7, 6, 4));

// // اذا اعطيت اهذا الـ method عدة أرقام حينها سيرجع لك أكبر رقم max :

// console.log(Math.max(2, 87, 8, 9999, 7, 6, 4));

// // let ashor=window.prompt()

// // console.log(0.10 * ashor + " جنيه")

// //..........................................................................................................................................//

// //اقدر احول اي نوع بيانات في الجافاسكريبت الى سلسلة من النصوص

// let s = 100;
// let t = 200;

// //String Object : الكائن المخصص لنوع البيانات النصية و يمكنه تحويل اي نوع بيانات الى نص
// // اول طريفه
// console.log(typeof String(s));

// //toString : هو method في الجافاسكريبت قادر على تحويل اي نوع بيانات الى نص
// // ثانى طريفه

// console.log(typeof t.toString());

// //ثالث طريفه

// console.log(typeof (600).toString());

// //يمكنك التحكم في النصوص في الجافاسكريبت بالكيفية التي تريدها و يمكنك اجراء الكثير من العمليات المعقدة عليها

// // Repeat : يمكنها تكرار الجملة النصية بالعدد الذي تمرره لها مثال

// console.log(name.repeat(10));

// // length: من خلاله يمكنك معرفة عدد السلسلة النصية و ارجاع عدد الاحرف بها مثال

// console.log(name.length);

// //للوصول الى index معين في اي سلسلة نصية تكتب اسم المتغير ثم رقم الحرف المراد في الاقواس المربعة مثال

// // الطريقه الاولى اذا اعطيت رقم غير متاح فى الاسترينج هتبقى النتيجه undifend
// console.log(name[4]);

// // الطريقه الاولى اذا اعطيت رقم غير متاح فى الاسترينج هتبقى النتيجه فاضيه
// console.log(name.charAt(10));

// //البحث عن الحرف في السلاسل النصية
// //indexOf : من خلال هذا ال method يمكنك البحث عن اي حرف او نص في اي سلسلة نصية من باداية السلسلة النصية
// //و ذلك من خلال تمرير الحرف المراد البحث عنه و من ثم يرجع لك رقم ال index اذا كان موجود مثال:

// let name2 = "samoel morad aryan";

// console.log(name2.indexOf("e"));

// //و يمكنك البحث من المكان المراد في السلسلة النصية و ذلك من خلال تمرير نقطة بداية البحث مثال:
// console.log(name2.indexOf("m", 3));

// //lastIndexOf : ايضاً يمكنك البحث من نهاية السلسلة النصية و ذلك من خلال lastIndexOf مثال:

// console.log(name2.lastIndexOf("d"));

// //و يمكنك البحث من المكان المراد في السلسلة النصية و ذلك من خلال تمرير نقطة بداية البحث مثال:

// console.log(name2.lastIndexOf("d", 4));

// //slice :من خلال هذا ال method يمكنك تقطيع السلسلة النصية و ارجاع ما تريد منها و ذلك من خلال تمرير رقم index
// //بداية التقطيع و رقم index نهاية التقطيع و بذلك يقوم بارجاع الجزء المقطوع من النص و اذا لم تقم بتمرير اي ارقام index سيقوم بارجاع النص كامل مثال:

// console.log(name2.slice(0, 11));

// //splite : ترجع نسخة من الـ String على شكل مصفوفة و اذا تم مرير لها حرف تقوم باقتطاع هذه السلسلة النصية من مكان هذا الحرف في النص مثال:

// console.log(name2.split(" "));

// //لدينا العديد من الطرق لتقطيع النصوص في الجافاسكريبت و سنتحدث اليوم عن 3 طرق و هم

// // slice : يقبل قيمه سالبه و من خلاله اسطيع العد من الاخر للاول
// // subString : لا يقبل قيمه سالبه
// // subStr : ياخذ قيمتين الاول المكان المراد قطعه و الثانى عدد الاحرف المعدوده

// console.log(name2.substr(0, 9));

// //......................................................................................................................................//

// // array : في الجافا سكريبت الغرض منه هو تخزين البيانات، وتحتوي إما على مجموعة من العناصر بنوع بيانات واحد أو أكثر، وقد تكون فارغة
// // نستخدم الفهارس العددية التي تبدأ من القيمة 0 للوصول إلى عناصر المصفوفة

// let family = [
//   "samoel",
//   "morad",
//   "jon",
//   ["mira", "madona", "dmiana", ["nora", "asmaa", "sozan"]],
//   "aryan",
//   "tadrwos",
// ];

// console.log(family.length);
// console.log(family[4]);
// console.log(family[3][0]);
// console.log(family[3][3][0]);

// //push : بتضيف عنصر من الاخر
// //unshift : بتضيف عنصر من الاول

// family.push("mina", "abanob");
// console.log(family);

// family.unshift("botros", "abrahim");
// console.log(family);

// //pop : بتمسح عنصر من الاخر
// //shift : بتمسح عنصر من الاول

// console.log(family.pop());
// console.log(family);

// console.log(family.shift());
// console.log(family);

// // splice : (start, count, add, add ) بتستخدم لمسح محتويات من الوسط او لاضافه شئ
// // ملاحظه هامه : انها تؤثر بشكل مباشر على Array

// let tac = ["aboelnour", "yara", "yasmeen", "abdo"];

// console.log(tac);

// tac.splice(1, 2, "marwan", "mazen", "zoz");

// console.log(tac);

// // splice : (start, count, add, add ) ويمكن ان اضيف بدون مسح فى الوسط او اى مكان حسب الانديكس
// // ملاحظه هامه : انها تؤثر بشكل مباشر على Array

// tac.splice(3, 0, "manal", "rwan", "farida");

// console.log(tac);

// // slice :(start,end) استطيع من خلال هذه الميثود ان اقتطع شئ من Array

// console.log(tac.slice(0, 3));

// // search :(indexof - lastindexof - incloud) => اول اختيار للبحث من البدايه الاختيار الثانى للبحث من الاخر اخر اختيار بيرجع قيمه (يا صح يا خطأ )

// console.log(tac.includes("manal"));

// //.................................................................................................................................//

// // المقارنه فى ال جافاسكريبت بتبقى من خلال == لقيمتين
// // let askemail = prompt("please add your email")
// let email = "sAMOel@gmail.com     ";

// // console.log(askemail == email);

// // اذا اردت تحويل الحروف من حروف كبيره الى صغير بيتم من خلال tolowercase

// console.log(email.toLowerCase());

// // اذا اردت تحويل الحروف من حروف صغيره الى كبيره بيتم من خلال toUpperCase

// console.log(email.toUpperCase());

// // لتجاهل المسافات فى بدايه الكلمه و نهايتها بيتم من خلال trim

// console.log(email.length);
// console.log(email.trim().length);

// // هذه == تقارن بين القيم
// console.log(5 == "5");
// // و هذه العلامه === تقارن بين القيم و نوع البيانات
// console.log(5 === "5");
// // هذه العلامات < > تستخدم فى مقارنه الاكبر و الاصغر
// console.log(5 > 4);
// // هذه العلامه && معناها ( و ) توضع لاكثر من مقارنه بشرط انهم كلهم يتحققو
// console.log(5 === 5 && 6 <= 3);
// // هذه العلامه || معناها ( او ) توضع لاكثر من مقارنه بدون شرط انهم كلهم يتحققو
// console.log(5 >= 5 || 6 <= 3);
// // هذه العلامه =! معناها ( لا تساوى ) تستخدم لمعرفه اذاكانت القيمه لا تساوى القيمه الاخرى
// console.log(5 != 5);

// // الجمله الشرطيه تتكون من شرط اذا تنفذ تجدث نتيجه
// let num7 = 100;
// let num8 = 10;

// if (num7 / num8 == 10) {
//   console.log("hellllllllllllllo");
// }

// // let age1 = prompt("add your age")

// // انت تقدر تحفظ نتيجه الشرط فى متغير كما هو موضح
// // ايضا يمكن كتابه الجمله الشرطيه بهذه الطريقه شرط ثم علامه (؟) ثم النتيجه اذا تحقق و لاضافه شرط جديد يتم وضع علامه (:) و اضافه الشرط الجديد او النتيجه التى تريد ان تظهر اذا لم يتحقق الشرط
// // let resalt = age1>18? 'you are adult' : age1 == 18? 'yau are 18 now' : 'you are yong'

// // console.log(resalt);

// // let roule = prompt('add your roule')

// // if (roule == 'admin') {
// //     document.write(" add ","delete ","create")
// // }
// // else if(roule == 'modreator'){
// //     document.write(" add ","delete")
// // }
// // else{
// //     document.write(" Hello user")
// // }

// //لا يوجد فرق من حيث النتيجه بين ال سويتش و ال أف
// // الفرق هو ان ال سويتش الاداء بتاعها افضل
// // لا يمكن عمل علامات (<>) انما تستخدم فقط فى القيم المساويه لبعضها
// // switch(roule) {
// //     case 'admin'
// //     : console.log(" add ","delete ","create");
// //     break;
// //     case "modreator"
// //     : console.log(" add ","delete ");
// //     break;
// //     default:
// //     console.log(" Hello user");
// // }

// const time = new Date().getHours();

// console.log(time);

// if (time >= 9 && time < 13) {
//   console.log(`Good morning`);
// } else if (time >= 13 && time < 20) {
//   console.log(`Good evening`);
// } else if ((time >= 20 && time <= 23) || (time >= 0 && time < 9)) {
//   console.log(`Good afternoon`);
// } else {
//   console.log("Invalid time entered");
// }

// let weight = 127;
// let height = 1.8;

// let bmi = weight / (height * height);

// console.log(bmi);

// if (bmi <= 18.5) {
//   console.log("نقص الوزن");
// } else if (bmi >= 18.6 && bmi < 24.9) {
//   console.log("وزن طبيعي");
// } else if (bmi >= 25 && bmi < 29.9) {
//   console.log("زيادة الوزن");
// } else {
//   console.log("ربنا معاك");
// }

// let randomNumber = Math.random() * 100;

// randomNumber = Math.ceil(randomNumber);

// console.log(randomNumber);

// // let random = prompt('guess the number')

// // if (randomNumber < random) {
// //     console.log('your guess is higher');
// // }
// // else if (randomNumber > random) {
// //     console.log('your guess is lower');
// // }
// // else if (randomNumber == random) {
// //     console.log('your guess is correct');
// // }

// //..........................................................................................................................................//

// // Start, condition, Steps
// for (
//   let e = 10;
//   e >= 5;
//   e-- // الحاجه المطلوب تنفيذها
// ) {
//   console.log(e);
// }

// for (let e = 0; e <= 5; e++) {
//   console.log(e);
// }

// for (let e = 0; e <= 5; e++) {
//   console.log("samoel " + e);
// }

// let num9 = ["samoel", "mina", "madona", "mira", "abanob"];

// for (let s = 0; s < num9.length; s++) {
//   console.log(num9[s]);
// }

// // لتجنب طباعه undfind فى هذه الحاله اكتب -1 لتحديد من اين يمكن ان يبدا
// for (let s = num9.length - 1; s >= 0; s--) {
//   console.log(num9[s]);
// }

// console.log("ــــــــــــــــــــــــــــــــــــــــــــ");

// let cars = ["Bmw", "Mercedes", "Hyundai"];
// let models = ["2020", "2021", "2022"];
// let colors = ["Black", "White", "Red"];
// for (let i = 0; i < cars.length; i++) {
//   console.log(`Cars: ${cars[i]}`);
//   for (let x = 0; x < models.length; x++) {
//     console.log(`Model: ${models[x]}`);
//   }
//   for (let r = 0; r < colors.length; r++) {
//     console.log(`color: ${colors[r]}`);
//   }
//   console.log("ــــــــــــــــــــــــــــــــــــــــــــ");
// }

// let num10 = [
//   "samoel",
//   "mina",
//   "madona",
//   "mira",
//   "abanob",
//   1,
//   2,
//   3,
//   4,
//   9,
//   10,
//   254,
//   215,
//   "madona",
//   "morad",
// ];

// for (let n = 0; n < num10.length; n++) {
//   console.log(num10[n]);

//   if (num10[n] == "madona") {
//     break;
//   }
// }

// console.log("ــــــــــــــــــــــــــــــــــــــــــــ");

// for (let n = 0; n < num10.length; n++) {
//   if (typeof num10[n] == "number") {
//     continue;
//   }
//   console.log(num10[n]);
// }

// console.log("ــــــــــــــــــــــــــــــــــــــــــــ");

// for (let n = 0; n < num10.length; n++) {
//   if (num10[n] != "mira") {
//     continue;
//   }
//   console.log(num10[n]);
// }
// console.log("ــــــــــــــــــــــــــــــــــــــــــــ");
// //.........................................................................................................................................//
// // function : بيتم كتابتها لعدم تكرار الكود بمعنى (ان اى كود محتاج اكتبه اكتر من مره انا ممكن اكتبه هنا و انادى عليه فى اى مكان)

// function hello() {
//   console.log("Hello Samoel");
// }
// hello();

// // الطريقه السابفه صحيحه لكنها لا تعطى امكانيه تخزبن القيمه الخارجه لاستخدامها فى [function] تانيه
// // return : من خلالها استطيع تخزين القيمه الخارجه فى متغير

// function helloWorld() {
//   let e = "Hello Baby";
//   return e;
// }
// let k = helloWorld();

// console.log(k);

// function days(day) {
//   let x = day * 365;
//   return x;
// }
// let p = days(31);

// function calcAgeByHours(hour) {
//   let x = hour * 24;
//   return x;
// }

// let o = calcAgeByHours(p);

// console.log(o);

// //......Hoisting......//
// //( (Declration) يعنى هو بيرفع المتغير فار و بيرفع الفنكشن من نوع ) هو ببساطه الطريقه الجافاسكريبت بيقراء بيها الكود
// // بيتم رفع المتغير ( var ) فى بدايه الصفحه بدون قيمه

// var q;

// console.log(q);

// q = 10;

// // ( Function  ) و يحدث نفس الامر فى

// console.log(hello2());

// function hello2() {
//   return 12;
// }

// // ( Let ) يتم وضعها فى متغير ( Declration ) لتجنب حدوث

// let hello3 = function () {
//   return 13;
// };

// console.log(hello3());

// //  () يتم وضعها فى متغير ( Expressions ) الى ( Declration ) من ( Function  ) ولتحويل ال

// //  ( Expressions ) و بالاقواس () هيا ( Declration ) بيتبقى ( Function  ) بتببدى بكلمه ( Function  ) اى

// /*----------------------------------------------------------Object-------------------------------------------------------------------*/

// //  object  لان جميع البيانات منفصلة عن بعضها ولا تربطهم اي صلة و لحل هذه المشكلة نستخدم ال  object   هذه الطريقه لا تعتبر

// let title = "BMW";
// let color = ["white", "red", "black"];
// let model = 2020;
// let price = 500000;
// function speed() {
//   return "300 k/h";
// }

// //  object من خلال هذه الطريقه اصبح ما بينهم رابط و نسميه ب

// // object : (method) و (property) يتكون من خصائص

// let car = {
//   title: "BMW",
//   color: ["white", "red", "black"],
//   model: 2020,
//   price: 500000,
//   speed: function () {
//     return "300 k / h";
//   },
// };

// console.log(car.color);

// let user = {
//   // property
//   firstName: "abdelrahman",
//   lastName: "gamal",
//   email: "test@gmail.com",
//   age: 26,
//   skills: ["html", "css", "js", "python", "php"],
//   active: true,
//   phoneNumber: {
//     first: "0106547687",
//     second: "0126574687",
//   },
//   address: {
//     Egypt: "elmohandsen",
//     Uae: "abu dhabi",
//   },
//   // method
//   isActive: function () {
//     if (user.active === true) {
//       return "hello user";
//     } else {
//       return "sorry you are not active";
//     }
//   },
//   getAge: function () {
//     if (user.age >= 18) {
//       return "availalbe";
//     } else {
//       return "unavailable";
//     }
//   },
// };
// console.log(user.isActive());
// console.log(user["getAge"]());

// //    كالاتى (method) و (property) فاضى و تضيف عليه   (object)  تفدر تنشئ

// let use = {};

// use.name = "Samoel";
// use.age = 31;
// use["title"] = "Frontend Developer";
// use["hello"] = function () {
//   return "Hello";
// };

// console.log(use);

// // this :   الذي ينتمي اليه Object في الجافاسكريبت يشير الى ال keyword هى
// //   : قيمتها تكون حسب مكان استخدامه This يجب ان تعلم ان الـ
// // -   owner object تشير هنا الى الـ  This ف ان  method اذا استخدمتها في
// // -   window اذا استخدم وحده يشير هذا إلى الـ
// // -   window إلى الـ This عادية ، يشير function في
// // -   undefined الى This يشير function in strict mode في
// // -   إلى العنصر الذي استقبل الحدث This يشير event في

// // owner object تشير هنا الى الـ  This ف ان  method اذا استخدمتها في

// let user6 =
//   // property
//   {
//     name: "Samoel morad aryan",

//     //method
//     getName: function () {
//       return this.name;
//     },
//   };

// console.log(user6.getName());

// // -   window اذا استخدم وحده يشير هذا إلى الـ

// let user1 = this;

// console.log(user1);

// // -   window إلى الـ This عادية ، يشير function في

// function func() {
//   return this;
// }

// console.log(func());

// // -   undefined الى This يشير function in strict mode في

// ("use strict");
// function func1() {
//   return this;
// }

// console.log(func1());

// // -   إلى العنصر الذي استقبل الحدث This يشير event في
// //    المتسخدم html تشير الى عنصر ال this ف ان html مع حدث معين فى ال this عند استخدام
// // <button onclick=”this.style.color=‘red’“> Submit </button>

// // Object.create :  Object موجود ( من خلال هذه الطريقه يتم اخذ نسخه من ال ) Object جديد من  Object بانشاء

// let user5 = {
//   // property
//   name: "abdelrahman",

//   // method
//   getName: function () {
//     return this.name;
//   },
// };

// let user2 = Object.create(user5);

// user2.name = "samoel";
// user2.age = 31;
// console.log(user2.name);
// console.log(user2.age);

// // بشكل اختيارى مع تغير طريقه الكتابه Parameter يمكن اضافه

// let user3 = {
//   // property
//   name: "abdelrahman",

//   // method
//   getName: function () {
//     return this.name;
//   },
// };

// let user4 = Object.create(user3, { age: { value: 26 } });
// console.log(user4.age);

// // Object.assign : مع تعديل اى بيانات فى السابقه و امكانيه اضافه معلومات جديد Object من خلال هذا يتم دمج اكثر من

// let a1 = {
//   num1: 1,
// };
// let a2 = {
//   num2: 2,
// };
// let a3 = {
//   num3: 3,
// };
// let a4 = Object.assign(a1, a2, a3, {
//   num4: 4,
// });
// console.log(a4);

// /*-------------------------------------------------------Dom-------------------------------------------------------------------*/

// // Dom = Document Object Model (  و يتم هذا من خلال الاتى js من خلال html و هو ببساطه التحكم الكامل فى صفحه ال  )

// // id =>  document.getElementById()
// let test1 = document.getElementById("test1");
// test1.innerHTML = "Hello Js";
// test1.style.color = "green";
// console.log(test1);

// // class name =>  document.getElementsByClassName()
// // بتاع العنصر المطلوب index  عشلان كده بنكتب ال  arry البيرجع هو  class فى حاله ال
// let head = document.getElementsByClassName("test2")[0];
// head.innerHTML = "Hello etElementsByClassName by index";
// head.style.color = "red";
// console.log(head);

// // tag name =>  document.getElementsByTagName()
// let h1 = document.getElementsByTagName("h3")[0];
// // index ملاحظه مهمه : انها تعرض اول عنصر فقط اذا لم يتم وضع لها
// h1.innerHTML = "Hello getElementsByTagName by index";
// h1.style.color = "blue";
// console.log(h1);

// // tag selector =>  document.querySelector()
// //  ملاحظه مهمه : انها تعرض اول عنصر فقط
// //  Css ملاحظه : يتم التعامل معا كما يتم التعامل مع ال
// let test2 = document.querySelector(".test5");
// test2.innerHTML = "Hello querySelector";
// test2.style.color = "blue";
// console.log(test2);

// // tag collection =>  document.querySelectorAll()
// //  Css ملاحظه : يتم التعامل معا كما يتم التعامل مع ال
// // بتاع العنصر المطلوب index  عشلان كده بنكتب ال  arry البيرجع هو
// let test3 = document.querySelectorAll("h5")[0];
// test3.innerHTML = "Hello querySelectorAll by id , class";
// test3.style.color = "green";
// console.log(test3);

// // body =>  document.body
// let body = document.body;
// body.style.background = "#9beafd";

// // title =>  document.title
// let test6 = document.title;
// test6 = "samoel morad";
// console.log(test6);

// // images =>  document.images
// let images = document.images[1];
// // images.src = '../products 2 (1)/products 2/tables/Metal table with wooden top.jpg'
// //console.log(images.src);

// // links =>  document.links
// let links = document.links[1];
// links.href = "https://www.google.com/";
// console.log(links.href);
// // forms =>  document.forms
// let forms = document.forms[0];

// console.log(forms.action);

// //---------------------sibling-parent-------------------------------//
// // nextSibling =>  document.nextElementSibling , documentreviousElementSibling تقدر تجيب العنصر التالى و السابق له من خلال
// let nextSibling = document.getElementById("test4");

// console.log(nextSibling);
// console.log(nextSibling.previousElementSibling);
// console.log(nextSibling.nextElementSibling);
// console.log(nextSibling.previousSibling);
// console.log(nextSibling.nextSibling);

// // و يمكن التعديل عليهم

// nextSibling.nextElementSibling.innerHTML = "Hello nextSibling";
// nextSibling.previousElementSibling.remove();

// //  parent  و يمكن استخدامها فى الحصول على ال
// let parent = nextSibling.parentElement;
// console.log(parent);

// //---------------------css----------------------------//

// let container = document.getElementById("container");

// container.innerHTML = "You can be a developer";

// //element.style.property = value

// container.style.backgroundColor = "#444";
// container.style.margin = "30px";
// container.style.color = " rgb(255, 255, 255)";
// container.style.padding = "15px";
// container.style.borderLeft = "7px solid #fa0";

// //element.style.csstext = value
// //ملحوظه مهمه الطريقه الثانيه تلغى الطريقه الاولى
// container.style.cssText = `
//   background: rgb(68, 68, 68);
//   color: #fff;
//   padding: 15px;
//   margin: 20px;
// `;
// //يمكن اضافه خاصيه بطريقه ثالثه
// container.style.setProperty("font-size", "25px", "important");

// // يمكن مسح خاصيه تم عملها
// container.style.removeProperty("padding");

// //---------------------------------------------------------------------------------------//

// // 1- انشاء العنصر
// //let container = document.createElement("div");
// //let head = document.createElement("h1");
// //let img = document.createElement("img");
// // 2- اضافة المحتوى
// //let content = document.createTextNode("hello world");
// //head.appendChild(content);
// //img.src = "img/1.jpg";
// //img.style.width = "100px";
// // 3- اضافة العنصر في المكان المراد
// //container.appendChild(head);
// //container.appendChild(img);
// //document.body.appendChild(container);
// //console.log(container);
// //container.style.background = "#666";
// //container.style.color = "#fff";
// //container.style.padding = "10px";
// //container.style.textAlign = "center";

// //----------------------------------------------------------------------------------//

// //-----------------------------EVENT------------------------------//

// //   يمكن التفاعل معاها من خلال الجافاسكريبت   html  الحدث هو متغيرات تحدث لعناصر ال

// // 1- انظر سطر 27 Html من خلال ال
// // 2- من خلال الجافاسكريبت بكتابه الحدث مباشرا وهذه الطريقه يمكن من خلالها حدوث اخطاء كثيره

// // let btn = document.getElementById("btn");
// // console.log(btn);

// //btn.onmouseover = function () {
//   //btn.innerHTML = "Hello From Js";
//   //console.log("Hello From Js");
// //};

// //يمكنك ايضاً استخدام طريقة اخرى اكثر ذكاء و اقل من ناحية الاخطاء
// //  addEventListener و هي 
// //من مميزاتها 
// //1- يمكن اضافه اكثر من حدث 
// //2- تنبهك عند كتابه الكود بشكل خطأ 

// // btn.addEventListener('click',function () {
// //   btn.innerHTML= ("Hello From Js")
// //   console.log("Hello From Js");
// // })

// // btn.addEventListener('click',function () {
// //   btn.style.background="red";
// // })

    /*
    الوصف       الأمر المستخدم      الحدث
    click       onclick	             عند النقر على العنصر
    mouseover  	onmouseover	         عندما يأتي مؤشر الماوس فوق العنصر
    mouseout	  onmouseout	     عندما يغادر مؤشر الماوس العنثر
    mousedown	  onmousedown	     عند الضغط على زر الفأرة فوق العنصر
    mouseup	    onmouseup	         عندما يتم تحرير زر الماوس فوق العنصر
    mousemove	  onmousemove	      عندما يتحرك الماوس 
    */

    /*
    الوصف       الأمر المستخدم      الحدث
    Keydown	    onkeydown	       عندما يضغط المستخدم على المفتاح
    Keyup	      onkeyup	       عندما يقوم المستخدم بتحرير المفتاح
    */

    /*
    الوصف       الأمر المستخدم      الحدث
    focus	      onfocus	        عندما يركز المستخدم على عنصر
    submit	    onsubmit	        عندما يرسل المستخدم ال form
    blur	      onblur	        عندما يكون التركيز بعيدًا عن عنصر ال form
    change	    onchange	        عندما يقوم المستخدم بتعديل أو تغيير قيمة عنصر ال form
    */

    /*
    الوصف       الأمر المستخدم      الحدث
    load	      onload	       عندما ينتهي المتصفح من تحميل الصفحة
    unload	    onunload	       عندما يغادر الزائر صفحة الويب الحالية ، يقوم المتصفح بإلغاء تحميلها
    resize	    onresize	       عندما يقوم الزائر بتغيير حجم نافذة المتصفح
    */


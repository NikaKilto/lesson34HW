// 1) Შექმენით ფუნქცია რომელსაც პარამეტრების სახით გადაეცემა 2 მნიშნელობა ,
// მასივი რომელშიც ჩაყრილია რენდომული რიცხვები 0 დან 100 მდე შალედში
// მოთავსებულიდა მეორე მასივი რომელშიც ჩაყრილია შემდეგი რიცხვები [ 2,3,5,11]
// დააბრუნეთ ამ ფუნქციიდან ყველა ის რიცხვი პირველი მასივიდან რომელიც
// იყოფა მეორე მასივის ერთ წევრზე მაინც უნაშთოდ

// function randomNumArray(){
//     let tmpArr = [];
//     while(tmpArr.length<100){
//         let randomNum = Math.round(Math.random()*100);
//         tmpArr.push(randomNum);
//     }
//     return tmpArr;
// }

// let list1 = randomNumArray();
// let list2 = [2,3,5,11];
// let filteredArr = list1.filter(e=>e%list2[0]==0||e%list2[1]==0||e%list2[2]==0||e%list2[3]==0);

// console.log(list1);
// console.log(list2);
// console.log(filteredArr);


// 2) Შექმენით ფუნქცია რომელსაც პარამეტრების სახით გადასცემთ რიცხვების
// რაოდენობას, რენდომული რიცხვების რეინჯს (start,end) და დააბრუნებს ეს
// ფუნქცია მასივს რომელშიც იქნება ჩაყრილი რიცხვები იმ რაოდენობის რამდენიც
// მომხმარებელმა გადმოგვცა და მოთავსებულები იქნებიან აგდაცემულ რეინჯში


// function randomList(num,start,end){
//     let tmpArr = [];
//     for(let i=0; i<num; i++){
//         let randomNum = Math.round(Math.random()*(end-start)+start);
//         tmpArr.push(randomNum);
//     }
//     return tmpArr;
// }

// let list1 = randomList(100,900,999);
// console.log(list1);


// 3) Შექმენით ფუნქცია რომელსაც პარამეტრების სახით გადაეცემა მასივი რომელშიც
// არის ჩაყრილი რენდომული რიცხვებები, თქვენს ამოცანას წარმოადგენს რომ
// დაალაგოთ გადაცემულიმასივი ზრდადობის მიხედვით და დააბრუნოთ
// ფუნქციიდან

// function arrayFiller(n){
//     let tmpArr = [];
//     for(let i =0; i<n; i++){
//         let randomNum = Math.round(Math.random()*100);
//         tmpArr.push(randomNum);
//     }
//     return tmpArr;
// }

// let list1 = arrayFiller(30);
// list1.sort((a,b)=>a-b);
// console.log(list1);

// 4) Შექმენით ფუნქცია რომელსაც პარამეტრის სახით გადაეცემა რენდომული
// ფერების რაოდენობა და ეს ფუნქცია დააბრუნებს რენდომულ ფერებს იმ
// რაოდენობის რამდენსაც მომხმარებელი გადმოსცემს, რენდომული რიცხვები იყოს
// მოცემული RGB ფორმატში

// function randomColors(number){
//     var tmpArr = [];
//     for(let i = 0; i<number; i++){
//         var randColor1 = Math.round(Math.random()*255);
//         var randColor2 = Math.round(Math.random()*255);
//         var randColor3 = Math.round(Math.random()*255);
//         var fullColor = (`rgb(${randColor1},${randColor2},${randColor3})`);
//         tmpArr.push(fullColor);
//     }
//     return tmpArr;
// }

// let list = randomColors(5);
// console.log(list);


// 5) Შექმენით ფუნქცია რომელსაც პარამეტრების სახით გადაეცემა რენდომული
// ფერებისგან შედგენილი მასივი და ეს ფუნქცია დაბეჭდავს კონსოლში თითოეულ
// ფერს და გაუფერადებს დაბეჭდილ ტექს background -ს იმ ფერით რა ფერსაც
// ბეჭდავს

// list.map(b=>console.log(`%cThis text is ${b}`, `background-color: ${b}`));
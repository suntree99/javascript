// *****
console.log("*****");

// *****
var s = "";
for (var i  = 0; i < 5; i++) {
  s += "*";
}
console.log(s);

// *
// *
// *
// *
// *
var s = "";
for (var i  = 0; i < 5; i++) {
  s += "*";
  s += "\n";
}
console.log(s);

// **********
// **********
// **********
// **********
// **********
var s = "";
for (var i  = 0; i < 5; i++) {
  for (var j = 0; j < 10; j++) {
    s += "*";
  }
  s += "\n";
}
console.log(s);

// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********
var s = "";
for (var i  = 0; i < 10; i++) {
  for (var j = 0; j <= i; j++) {
    s += "*";
  }
  s += "\n";
}
console.log(s);

// **********
// *********
// ********
// *******
// ******
// *****
// ****
// ***
// **
// *
var s = "";
for (var i  = 10; i > 0; i--) {
  for (var j = 0; j < i; j++) {
    s += "*";
  }
  s += "\n";
}
console.log(s);

// **********
//  *********
//   * *******
//    *  * *****
//     *   *  * ***
//      *    *   *  * *
//       *     *    *   *
//        *      *     *
//         *       *
//          *
var s = "";
for (var i  = 10; i > 0; i--) {
  for (var j = 0; j < i; j++) {
    for (var k = 10-i; k > j; k--) {
        s += " ";
    }
    // k = 0;
    s += "*";
  }
  s += "\n";
}
console.log(s);

// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********
// *********
// ********
// *******
// ******
// *****
// ****
// ***
// **
// *
var s = "";
for (var i = 1; i < 20; i++) {
  if (i <= 10) {
    for (var j = 1; j <= i ; j++) {
      s += "*";
    }
    s += "\n";
  }
  else {
    for (var j = 19; j >= i; j--) {
      s += "*";
    }
    s += "\n";
  }      
}
console.log(s);

//     *
//    ***
//   *****
//  *******
// *********
// var s = "";
// for (var i  = 0; i < 5; i++) {
//   for (var j = 0; j <= i; j++) {
//     for (var k = 10-i; k > j; k--) {
//         s += " ";
//       }
//     }
//     s += "*";
//   }
//   s += "\n";
// }
// console.log(s);

//          *
//         ***
//        *****
//       *******
//      *********
//     ***********
//    *************
//   ***************
//  *****************
// *******************
//  *****************
//   ***************
//    *************
//     ***********
//      *********
//       *******
//        *****
//         ***
//          *

// # # # # #
//  # # # # #
// # # # # #
//  # # # # #
// # # # # #
//  # # # # #
// # # # # #
//  # # # # #
// # # # # #
//  # # # # #

//     1
//    1 1
//   1 2 1
//  1 3 3 1
// 1 4 6 4 1

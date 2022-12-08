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
var t = 10;
var s = "";
for (var i = 0; i < t; i++) {
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
var t = 10;
var s = "";
for (var i = t; i > 0; i--) {
  for (var j = 0; j < i; j++) {
    s += "*";
  }
  s += "\n";
}
console.log(s);

// **********
//  *********
//   ********
//    *******
//     ******
//      *****
//       ****
//        ***
//         **
//          *
var t = 10;
var s = "";
for (var i = 0; i < t; i++) {
  for (var j = 0; j < t; j++) {
    if (j < i) {
      s += " ";
    } else {
      s += "*";
    }
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
var t = 20;
var s = "";
for (var i = 1; i < t; i++) {
  if (i <= t/2) {
    for (var j = 1; j <= i ; j++) {
      s += "*";
    }
    s += "\n";
  }
  else {
    for (var j = t-1; j >= i; j--) {
      s += "*";
    }
    s += "\n";
  }      
}
console.log(s);

//1     *
//2    ***
//3   *****
//4  *******
//5 *********
var t = 5;
var s = "";
for (var i = 1; i <= t; i++) {
  for (var j = 1; j < 2*t; j++) {
    if (j > (t-i) && j < (t+i) ) {
      s += "*";
    } else {
      s += " ";
    }
  }
  s += "\n";
}
console.log(s);

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
var t = 20;
var s = "";
for (var i = 1; i < t; i++) {
  for (var j = 1; j < t; j++) {
    if (i <= t/2) {
      if (j > (t/2-i) && j < (t/2+i) ) {
        s += "*";
      } else {
        s += " ";
      }
    } else {
        if (j > i-t/2 && j < 3*t/2-i) {
          s += "*";
        } else {
          s += " ";
      }
    }
  } 
  s += "\n";
}
console.log(s);

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
var t = 10;
var s = "";
for (var i = 1; i <= t; i++) {
  for (var j = 1; j <= t; j++) {
    if (i % 2 == 1) {
      if (j % 2 == 1) {
        s += "#";
      } else {
        s += " ";
      }
    } else {
      if (j % 2 == 1) {
        s += " ";
      } else {
        s += "#";
      }
    }
  }
  s += "\n";
}
console.log(s);

//     1
//    1 1
//   1 2 1
//  1 3 3 1
// 1 4 6 4 1
var t = 5;
var s = '';

// ? NESTING

function faktorial(n) {
  var a = 1;
  var i = 1;

  while(i <= n) {
    a *= i;
    i++;
  }

  return a;
}

for (var i = 0; i < t; i++) {

  for (var j = t; j >= i; j--) {
    s += ' ';
  }
  
  for (var j = 0; j <= i; j++) {
    s += faktorial(i) / ( faktorial(j) * faktorial(i-j) ) + ' ';
  }

  s += "\n";

}
console.log(s);
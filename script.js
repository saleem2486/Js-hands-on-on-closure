//Q1 = 
function counter(){
  var counter = 0;

  function IncreaseCounter() {
      return counter += 1;
  };

  return IncreaseCounter;
}

var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());

//Q2 =
let count = 0;
      (function () {
        if (count === 0) {
          let count = 1;
          console.log(count); // What is logged?
        }
        console.log(count); // What is logged?
      })();

//Q3 =
for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); // What is logged?
  }, 1000);
}

//Q4 =
function length(L){
  function height(H){
      console.log(L*H);
  }
  height(10);
}
length(10);

//Q5 =
var counter = (function(){
  var i=0;
  return {counter: i +=1};
})();
//Q6 =
   var a = 12;
      (function () {
          alert(a);
      })();

//Q7 =
var a = 10;
          var x = (function () {
            var a = 12;
            return function () {
              alert(a);
            };
          })();
          x();

//Q8 =
var globalVar = "xyz";

              (function outerFunc(outerArg) {
                  var outerVar = 'a';
                  
                  (function innerFunc(innerArg) {
                  var innerVar = 'b';
                  
                  console.log(
                      "outerArg = " + outerArg + "\n" +
                      "innerArg = " + innerArg + "\n" +
                      "outerVar = " + outerVar + "\n" +
                      "innerVar = " + innerVar + "\n" +
                      "globalVar = " + globalVar);
                  
                  })(456);
              })(123);
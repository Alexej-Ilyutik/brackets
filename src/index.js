module.exports = function check(str, bracketsConfig) {
    //     let brackets = bracketsConfig.join('').replace(/,/g, '');
    //     let stack = [];
    // for (let bracket of str) {
    //         let bracketsIndex = brackets.indexOf(bracket)

    //         if (bracketsIndex % 2 === 0) {

    //             if (bracket === brackets[bracketsIndex + 1] && stack[stack.length - 1] === bracketsIndex){
    //                 stack.pop();
    //             } else if (bracket === brackets[bracketsIndex + 1] && stack[stack.length - 1] !== bracketsIndex) {
    //                 stack.push(bracketsIndex)
    //             }
    //             else{
    //                 stack.push(bracketsIndex)
    //             }
    //         }
    //         else {
    //             if (stack.pop() !== bracketsIndex-1){
    //                 return false;
    //             }
    //         }

    //     }
    //     return stack.length === 0
   let stack = [];
   for (let i = 0; i < str.length; i++) {
       for (let j = 0; j < bracketsConfig.length; j++) {
           if (str[i] == bracketsConfig[j][0]) {
               if (
                   stack[stack.length - 1] == bracketsConfig[j][0] &&
                   bracketsConfig[j][0] == bracketsConfig[j][1]
               ) {
                   stack.pop();
               } else {
                   stack.push(str[i]);
               }
           } else if (str[i] == bracketsConfig[j][1]) {
               if (stack.length == 0) {
                   return false;
               }
               if (stack[stack.length - 1] == bracketsConfig[j][0]) {
                   stack.pop();
               }
           }
       }
   }
   return stack.length === 0;
};

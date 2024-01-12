  let cl = console.log;

//js default nature is syncronous and blocking
//js is single thraded 
// 

//  function print10(){
//     cl(10);
    //cl(x);  //o/p=>not defind,..tya mule pudche o/p yt nhi he solve hoi parynt..bco'z its sync..
// }
//   function print20(){
//       cl(20);
//   }
//  function print30(){
//      cl(30);
//  }
   
//  print10();
//  print20();
//  print30();


//async js/non-blocking....
//whenever use brwser api (setTimeout, fetch)
//API XMLHttpRequest.. 
function print10(){
    cl(10);
}
  function print20(){
    setTimeout(() =>{  //async => non-blocking...ya pudche o/p print hoil bco'z async 1sec time lega is print 20 ke liye
      cl(20);
    }, 1000)
  }
 function print30(){
     cl(30);
 }
   
 print10();
 print20();
 print30();
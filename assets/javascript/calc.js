var calcApp=angular.module("calc-app",[]);calcApp.controller("calc-controller",function(e){e.limit=8,e.operand1="0",e.operand2="0",e.postOpInput=!1,e.minus=!1,e.justSolved=!1,e.operator="",e.buttons=[[":)",":D","\xb1","C"],["7","8","9","+"],["4","5","6","-"],["1","2","3","\xf7"],[".","0","=","\xd7"]],e.display=function(){var r;if("NaN"===(r="0"!=e.operand1&&"0"!=e.operand2?e.operand1:"0"!==e.operand1||"0"==e.operand2||e.postOpInput?e.operand1:e.operand2))return r="ERROR";var n=e.limit;if(!r.includes(".")||r.includes("e")||r.includes("-")){if(r.length>n){var a=parseFloat(r);r=(a=a.toExponential(2)).toString()}}else if(n++,r.length>n&&(r=r.slice(0,n)),!0===e.justSolved)for(var o=!1;!o;)"0"===r[r.length-1]||"."===r[r.length-1]?r=r.substring(0,r.length-1):o=!0;return r},e.operation=function(r){""===e.operator&&(e.operand2=e.operand1,e.operand1="0"),e.operator=r,e.minus=!1},e.reset=function(r){r&&(e.operand1="0",e.minus=!1),e.operator="",e.operand2="0",e.decPoint=!1,e.postOpInput=!1},e.negNum=function(){e.minus?("-"===e.operand1[0]&&(e.operand1=e.operand1.substring(1)),e.minus=!1):"0"!==e.operand1&&("-"!==e.operand1[0]&&(e.operand1="-"+e.operand1),e.minus=!0)},e.resolve=function(){var r=parseFloat(e.operand1),n=parseFloat(e.operand2);switch(e.operator){case"":return;case"+":r+=n;break;case"-":r=n-r;break;case"\xd7":r*=n;break;case"\xf7":if(0===r)return e.operand1="Error",void e.reset(!1);r=n/r}e.minus=r<0,e.operand1=r.toString(),e.justSolved=!0,e.reset(!1)},e.push=function(r){var n=e.limit;if(isNaN(parseFloat(r))&&"."!==r)switch("+"!==r&&"-"!==r&&"\xd7"!==r&&"\xf7"!==r||e.operation(r),r){case"=":e.resolve();break;case".":e.decPoint=!0;break;case"C":e.reset(!0);break;case"\xb1":e.negNum();break;case":)":e.operand1="71077345",e.minus=!1;break;case":D":e.operand1="5318008",e.minus=!1}else"0"===e.operand1&&"."!==r||!0===e.justSolved?(e.operand1=r,e.justSolved=!1):(e.operand1.includes(".")&&n++,e.operand1.length!==n&&(e.operand1=e.operand1.concat(r))),""!==e.operator&&(e.postOpInput=!0),"."===e.operand1[0]&&(e.operand1="0"+e.operand1)}});
  let arr = "Ff jjffcf SSss";
  let narr = ['व','व','ा','ा'];
  let nepali = {
    96  : "ञ",
    49  : "ज्ञ",
    50  : "घ",
    51  : "ध",
    52  : "द्ध",
    53  : "छ",
    54  : "ट",
    55  : "ठ",
    56  : "ड",
    57  : "ढ",
    48  : "ण",
    45  : "(",
    61  : ".",
    113 : "ञ",
    119 : "ध",
    101 : "भ",
    114 : "च",
    116 : "त",
    121 : "थ",
    117 : "ग",
    105 : "ष",
    111 : "य",
    112 : "उ",
    91  : "ृ",
    93  : "े",
    // 92  : "\",
    20  : "Caps",
    97  : "ब",
    115 : "क",
    100 : "म",
    102 : "ा",
    // 102 : "।",
    103 : "न",
    104 : "ज",
    106 : "व",
    107 : "प",
    108 : "ि",
    59  : "स",
    91  : "ु",
    13  : "Enter",
    16  : "shift",
    122 : "श",
    120 : "ह",
    99  : "अ",
    118 : "ख",
    98  : "द",
    110 : "ल",
    109 : ">",
    44  : "?",
    46  : "/",
    47  : "र",
    16  : "Shift"
  }
  // alert(nepali[47]);
  let i = 0;
  let keyTyped=[];
  function checkFunction(c){
    // console.log(c);
    // console.log(arr.charAt(i));
    // console.log(arr.charCodeAt(i));
    console.log( c.which || c.keyCode);
    let e=c.which || c.keyCode;
    if(e == arr.charCodeAt(i)){
              keyTyped.push(nepali[e]);
              $("#live").html(keyTyped.join(''));
              console.log(keyTyped.toString());
             }
             else {
              console.log("incorrect");
            }
         i += 1;
  }

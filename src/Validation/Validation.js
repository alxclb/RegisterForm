export function validate(val, type){
 let check = typeof val;
// console.log(check==="string" && val.lenght>3)
 switch(type){
     case 'text': return check==="string" && val.length>3?true:false;
     case 'email': return validateEmail(val);
     default:return
 }
}

function validateEmail(email) {
    var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return expr.test(email);
}
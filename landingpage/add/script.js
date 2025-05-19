function fun(){
    let first=document.getElementById('a').value;
    let sec=document.getElementById('b').value;
    let c=Number(first)+Number(sec);
    document.getElementById('res').innerText=`the res of ${first} + ${sec} is ${c}`;
}
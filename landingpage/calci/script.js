var equation=""
function fun(val){
    if(val=='='){
        evulate();
    }
    else if(val=='X'){
        del();
    }
    else{
    equation+=String(val);
    display(equation);
    }
}
function display(ans){
    equation=ans;
    document.getElementById('val').innerText=`result : ${ans}`;    
}
function evulate(){
    try{
        let eq=eval(equation);
        console.log(eq);
        display(eq);
    }catch(err){
        console.log(err);
    }
     
}
function del(){
    let s=equation;
    let al=s.slice(0,equation.length-1)
    display(al);
}

let min=1;
let sec=1;
let hrs=1;
function time(){
    let second=document.getElementById('ss');
    let minimum=document.getElementById('mm');
    let hr=document.getElementById('hh');
    setInterval(()=>{
        if(min==60){
            if(hr<=9){
                hr.innerText='0'+hr;
            }
            else
            hr.innerText=hr;
            hrs++;
            min=0; 
            sec=0;
        }
        else if(sec==60){
            if(min<=9)
            minimum.innerText='0'+min;
            else
            minimum.innerText=min;
            min++;
            sec=1;
        }
        else{
            if(sec<=9)
            second.innerText='0'+sec;
            else second.innerText=sec;
        sec++;
        }
        
    },1000)
}
let box=document.querySelectorAll("td");
var done=document.getElementById("done");
var end =document.getElementById("end");

var top=0;
var count=0;
var no=[0,1,2];
var cno=[0,3,6];
var diag=[0,2];
var entry=[];
var flag;
var check=0;
var gameover=0;
var diff=0;


function result(){
 for(var i=0;i<3;i++) //row calculation
 {
     if(box[cno[i]].innerHTML==="X"&&box[cno[i]+1].innerHTML==="X"&&box[cno[i]+2].innerHTML==="X")
 {
     gameover=1;
     end.innerHTML=end.innerHTML+"Human";
     return gameover;
 }
    else if(box[cno[i]].innerHTML==="O"&&box[cno[i]+1].innerHTML==="O"&&box[cno[i]+2].innerHTML==="O")
    {
        gameover=1;
        end.innerHTML=end.innerHTML+"Computer";
        return gameover
    }
}

for(var i=0;i<3;i++) //column calculation
{
    if(box[no[i]].innerHTML==="X"&&box[no[i]+3].innerHTML==="X"&&box[no[i]+6].innerHTML==="X")
 {
     gameover=1;
     end.innerHTML=end.innerHTML+"Human";
     return gameover;
 }
    else if(box[no[i]].innerHTML==="O"&&box[no[i]+3].innerHTML==="O"&&box[no[i]+6].innerHTML==="O")
    {
        gameover=1;
        end.innerHTML=end.innerHTML+"Computer";
        return gameover
    }
}

for(var i=0;i<2;i++)  //diagonal calculation
{   if(i===0){
    if(box[diag[i]].innerHTML==="X"&&box[diag[i]+4].innerHTML==="X"&&box[diag[i]+8].innerHTML==="X")
    {
        gameover=1;
        end.innerHTML=end.innerHTML+"Human";
        return gameover;
    }
       else if(box[diag[i]].innerHTML==="O"&&box[diag[i]+4].innerHTML==="O"&&box[diag[i]+8].innerHTML==="O")
       {
           gameover=1;
           end.innerHTML=end.innerHTML+"Computer";
           return gameover
       }
    }

    else{
        if(box[diag[i]].innerHTML==="X"&&box[diag[i]+2].innerHTML==="X"&&box[diag[i]+4].innerHTML==="X")
    {
        gameover=1;
        end.innerHTML=end.innerHTML+"Human";
        return gameover;
    }
       else if(box[diag[i]].innerHTML==="O"&&box[diag[i]+2].innerHTML==="O"&&box[diag[i]+4].innerHTML==="O")
       {
           gameover=1;
           end.innerHTML=end.innerHTML+"Computer";
           return gameover
       }
    }
    
}


 }



function computer (l){
    while(top)
    {   var num=Math.floor(Math.random() * 9);
         if(l[num].innerHTML!=="X" && l[num].innerHTML!=="O" )
         {l[num].innerHTML="O";
         console.log("stopped",num);
         count=count+1;
         console.log("count-",count);
         result();
         top=0;
          break;}
         else
         {console.log("working");}
    }
   



}

for(var j=0;j<9;j++)
{
    box[j].addEventListener("click",function(){
               if(event.target.innerHTML!=="O" && gameover===0)
               event.target.innerHTML="X";
              for(var i=0;i<9;i++)
              {
                  if(!(entry.includes(i)) && box[i].innerHTML==="X" &&diff===0)
                      {entry.push(i);
                        diff=1;}
              }
              for(var i=0;i<9;i++)
              {
                if(!(entry.includes(i)) && box[i].innerHTML==="X" &&diff===1)
                {   box[entry[entry.length-1]].innerHTML="";
                    entry[entry.length-1]=i;
                }
              }
    })
}



done.addEventListener("click",function(){
    top=1;
    check=0;
    count=count+1;
    diff=0;
    if(gameover===0)
    result();
    if(count<9 && gameover===0)
    computer(box);
    else if(count>=9 && gameover===0)
     end.innerHTML="The Game is Draw";
    
});




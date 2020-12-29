function total()
  {
    let total= 0 ;
    let qte=Array.from(document.getElementsByClassName('count'))
    let price=Array.from(document.getElementsByClassName('coll'))
    for(let i=0; i<qte.length;i++){
    
    
      total += parseInt(qte[i].innerText) * parseInt(price[i].innerText)  ;
        
      }
       
      document.getElementById('total').innerHTML = total;
       
  }





let btnsplus=Array.from(document.getElementsByClassName('fa-plus-square'))
  for(let i=0; i<btnsplus.length;i++){
     btnsplus[i].addEventListener('click',function(){
         btnsplus[i].nextElementSibling.innerHTML++;
         total();
     }
     
     ) 
  }
  let btntimes=document.getElementsByClassName('fa-times fa-2x')
    for(let i=0; i<btntimes.length;i++){
        btntimes[i].addEventListener("click",function(){
            btntimes[i].parentElement.parentElement.remove();
          }  
        )
    }


    let btnColor=document.getElementsByClassName('fa-heart fa-2x')
    let color=document.getElementsByClassName('color')
    for(let i=0; i<btnColor.length;i++){
      
      btnColor[i].addEventListener("click",function(){
        var code = parseInt(color[i].innerText);

         
      
             
            
           if  (code == 0) {
                btnColor[i].style.color="red"; 
                color[i].innerText = "1";
              }
              else
       
              {
                btnColor[i].style.color="black"; 
                 color[i].innerText = "0";
              }
             
    }  
        )
    }


  
    
     let btnmoin=Array.from(document.getElementsByClassName('fa-minus-square'))
for(let btnminus of btnmoin){

  btnminus.addEventListener('click',function(){
    if (btnminus.previousElementSibling.innerHTML  > 0) {
      btnminus.previousElementSibling.innerHTML--
   total();
    }

  })}

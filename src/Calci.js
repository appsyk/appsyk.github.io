var buttons = [
    {
        id:1, value:1
    },
    {
        id:2, value:2
    },
    {
        id:3, value:3
    },
    {
        id:'C', value:'c'
    },
    {
        id:4, value:4
    },
    {
        id:5, value:5
    },
    {
        id:6, value:6
    },
    {
        id:'÷', value:'/'
    },
    {
        id:7, value:7
    },
    {
        id:8, value:8
    },
    {
        id:9, value:9
    },
    {
        id:'-', value:'-'
    },
    
    {
        id:'.', value:'.'
    },
    {
        id:0, value:0
    },
    {
        id:'+', value:'+'
    },
    {
        id:'×', value:'*'
    },
    // {
    //     id:'Clear', value:'Clear'
    // },
    {
        id:'History', value:'record'
    },
    {
        id:'=', value:'='
    },
    
    {
        id:'Close', value:'Back'
    },
]



var btnDoc = document.querySelector('#cal-buttons');
var footBtn = document.querySelector('#bac-btn');
var recData = document.querySelector('#rec-data');

var btnList = '', btnListEq = '', btnListRec = '';

for(i = 0; i<buttons.length; i++){
    if(buttons[i].value == '='){
        btnListEq += `<input class="btn-val smt-btn col-12" type="button" value="${buttons[i].id}" onclick="solve()"/>`
    }else if(buttons[i].value == 'c'){
        btnList += `<input class="btn-val cncl-btn col-3" type="button" value="${buttons[i].id}" onclick="clr()"/>`
    }else if(buttons[i].value == 'record'){
        btnListEq += `<input class="btn-val rec-btn col-3" type="button" style="z-index: 100" value="${buttons[i].id}" onclick="rec()"/>`
    } else if(buttons[i].value == '+' || buttons[i].value == '-' || buttons[i].value == '/' || buttons[i].value == '*'|| buttons[i].value == '.' ){
        btnList += `<input class="btn-val col-3" type="button" value="${buttons[i].id}" onclick="dis('${buttons[i].value}')"/>`
    }else if(buttons[i].value == 'Back'){
        btnListEq += `<input class="btn-val back-btn col-12" style="display:none" type="button" value="${buttons[i].id}" onclick="back()"/>`
    }else if(buttons[i].value == 'Clear'){
        btnListEq += `<input class="btn-val clr-btn col-12" style="display:none" type="button" value="${buttons[i].id}" onclick="clearRecord()"/>`
    }else
    {
    btnList += `<input class="btn-val eql-btn col-3" type="button" style="background: #E8E8E8" value="${buttons[i].id}" onclick="dis('${buttons[i].value}')"/>`
    }
}



        function dis(val) 
          { 
              document.getElementById("result").value+=val 

              if((val == '+' || val == '-' || val == '/' || val == '*'|| val == '.' )){
                document.querySelector('.smt-btn').disabled = true;
              }else{
                document.querySelector('.smt-btn').disabled = false;
              }
          } 
          var count = 0;
          var count1 = count;
          function solve() 
          { 
              let x = document.getElementById("result").value 
              let y = eval(x)
              document.getElementById("result").value = y         
                localStorage.setItem(`record${count}`,`${x} = ${y}`)
                count++;

          } 
          console.log(count)

               
          function back(){
            document.querySelector('.rec-data-class').style.display = 'none';
            document.querySelector('.smt-btn').style.display = 'block';
            document.querySelector('.back-btn').style.display = 'none';
            document.querySelector('.rec-btn').disabled = false;
            document.querySelector('.clr-btn').style.display = 'none';
           

            

        }
            
          function rec() 
          {  
              var arr = [];
            for( c = 0; c <= 10; c++){
                arr.push(localStorage.getItem(`record${c}`));
            } 
            c++
            var recList = '';
            for(a = 0; a< arr.length; a++){

                if(arr[a] !== null){
                    recList += `<div class="rec-list">${arr[a]}</div>`
                }

                document.querySelector('.rec-data-class').innerHTML = recList;
                
                setTimeout(function(){
                    document.querySelector('.rec-btn').disabled = true;
                },100)
            
        }                

              
            setTimeout(function(){
                document.querySelector('.rec-data-class').style.display = 'block';
                document.querySelector('.smt-btn').style.display = 'none';
                document.querySelector('.back-btn').style.display = 'block';
                document.querySelector('.clr-btn').style.display = 'block';
            },100)
                  } 
          
           function clr() 
          { 
              document.getElementById("result").value = "" 
          } 
    
footBtn.innerHTML = btnListEq;

btnDoc.innerHTML = btnList;

window.onload=()=>{
    let mysdiv=document.querySelector(".mydiv")
    let style=document.querySelector(".style")
    let container=document.querySelector(".container")
    let string= `/*
大家好,我是小文.接下来给大家画一个太极吧
*第一步：
*先准备好几个div
<div class="taiji">
<div class="taiji1"></div>
<div class="taiji2"></div>
<div class="taiji3"></div>
<div class="taiji4"></div>
<div class="taiji5"></div>
<div class="taiji6"></div>
</div>
/*
*第二步：给它一些css样式
*/
.taiji{
width: 200px;
height: 200px;
position:fixed;
left:100px;
bottom:100px;
display: flex;
}
.taiji1{
width:100px;
height:200px;
border-top-left-radius: 100px;
border-bottom-left-radius: 100px;
background-color:rgba(255,255,255,1);
}
.taiji2{
width:100px;
height:200px;
border-top-right-radius: 100px;
border-bottom-right-radius: 100px;
background-color:rgba(0,0,0,1);
}
.taiji3{
width: 100px;
height:100px;
position: absolute;
background-color: rgba(255,255,255,1);
border-radius: 100%;
left:25%
}
.taiji4{
width: 100px;
height:100px;
position: absolute;
background-color: rgba(0,0,0,1);
border-radius: 100%;
left:25%;
bottom:0%
}
.taiji5{
width: 30px;
height:30px;
position: absolute;
background-color:rgba(0,0,0,1);
border-radius:100%;
left:50%;
top:25%;
transform:translate(-50%,-50%);
}
.taiji6{
width: 30px;
height:30px;
position: absolute;
background-color:rgba(255,255,255,1);
border-radius: 100%;
left:50%;
top:75%;
transform:translate(-50%,-50%);
}
`
    let n=0
    let start=()=>{
            setTimeout(()=>{
                if(n<string.length){                       
                        style.innerHTML=string.substring(0,n)
                        mysdiv.innerText=string.substring(0,n)
                        // container.innerHTML=string.substring(0,n)
                        n++
                        start()
                        window.scrollTo(0, 99999);
                    }
                    
            },0)   
        }
        
    start()
    
}
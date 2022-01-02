// starte list
let icon = document.querySelector(".iconse");
let list = document.querySelector(".list");
let img =document.querySelector(".imge");

let addimg = [
  "img/body7.jpg",
  "img/body6.jpg",
  "img/body.jpg"
];

setInterval(()=>{
  let random = Math.floor(Math.random() * addimg.length);
  img.src = addimg[random];
},2000);

// /body7.jpg
icon.addEventListener("click",function(){
  if(list.style.display == "none"){
    list.style.display = "block";
  }else{
    list.style.display = "none";
  }
});
// end list

// start cuonter
let cont1 = document.querySelectorAll(".cont1 .cont");
let conter = document.querySelector(".conter");
let falsee = false;
window.onscroll = function(){
    if(window.scrollY >= 700){
     if(!falsee){
        cont1.forEach((col)=> stretenow(col));
     }
     falsee = true;
    }
};
function stretenow(el){
    let cont = el.dataset.cont;
    let conte = setInterval(()=>{
       el.textContent++;
       if(el.textContent == cont){
          clearInterval(conte);
       }
    },2000 / cont);
   };
  //  end cuonter
  
  //  start article
   let list2 = document.querySelectorAll(".list2 li");
   let elemnt = document.querySelectorAll(".elemnt > div");
    
 list2.forEach(li =>{
   li.addEventListener("click",function(e) {
        list2.forEach(ele =>{
          ele.classList.remove("activ");
        });
           e.currentTarget.classList.add("activ");
           elemnt.forEach(div =>{
            div.style.display = 'none';
        })
        document.querySelector(e.currentTarget.dataset.cat).style.display = "block";
   });
 });
//  end article

//  start cuoente time
 let data = new Date("january 31 2022 19:23:23").getTime();

  setInterval(()=>{
  let getdada = new Date().getTime();
  let getDada = data - getdada; 
  let days = Math.floor(getDada / (1000 * 60 * 60 * 24));
  let hurs = Math.floor((getDada % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let munets = Math.floor((getDada % (1000 * 60 * 60)) / (1000 * 60));
  let sucend = Math.floor((getDada % (1000 * 60)) / (1000));

  document.querySelector(".cont0").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".cont2").innerHTML = hurs < 10 ? `0${hurs}` : hurs;
  document.querySelector(".cont3").innerHTML = munets < 10 ? `0${munets}` : munets;
  document.querySelector(".cont4").innerHTML = sucend < 10 ? `0${sucend}` : sucend;

},1000);
//  end cuonte time

// starte updowen 
let up = document.querySelector(".btn-btnbro");
up.onclick = function(){
  window.scrollTo({
    top:0,
    behavior: "smooth",
  });
};
// end updowen
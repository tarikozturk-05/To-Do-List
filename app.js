const input = document.querySelector("#input")
const btn = document.querySelector("#btn")
const todo = document.querySelector("#todo")
const remove = `<button>Remove</button>`;
const altdiv = document.getElementById("altdiv");

let day = new Date().getDate();
let month = new Date().getMonth()+1;
let year = new Date().getFullYear();

//? *********onload******


// window.addEventListener("load", () => {
//   //baslangıç
//   const todos = localStorage.getItem("todos");
//   if (!todos) {
//     localStorage.setItem("todos", JSON.stringify([]));
//     console.log(todos);
//   } else {
//     let datalist = JSON.parse(localStorage.getItem("todos")); // dataliste eğer json parse içi doluysa yani true ise aktar ama yoksa [] yi aktar demek || oluyor.

//     datalist.forEach((e) => {
//       //? her bir todo objesini destructor yaptık
//       const { id, text, date } = e;
//       let element = document.createElement("div");
//       element.classList.add("altdiv");
//       element.innerHTML = `<input class="box" type = "checkbox"   />
//     <p>${text}</p><div class="date">${date}<button class = "rmvBtn"> REMOVE</button></div>`;
//       list.appendChild(element);
//     });
//   }
// })


// **********addBtn**********
btn.addEventListener("click",()=>{

if(!input.value){
    alert("birşey gir")
}else{
 todo.innerHTML += `<div class="altdiv" id="altdiv"><input class="box" type="checkbox"><p class="par">${input.value}</p><div class="günler">${day}.${month}.${year}  <button class="remove1">remove</button></div></div>`;

}input.value=""
})

// *********enter*****

input.addEventListener("keydown", (e)=>{
if(e.key === 'Enter'){
    btn.click();}
})

// *************remove*****

todo.addEventListener("click",(e)=>{
if(e.target.classList.contains("remove1")){e.target.parentElement.parentElement.remove();}
})

todo.addEventListener("click", (e) => {
  if (e.target.classList.contains("box")) {
    e.target.nextElementSibling.style.textDecoration= "line-through";
    
  }
});






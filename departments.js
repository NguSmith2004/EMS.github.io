if(localStorage.getItem("ems-session")!=="active") window.location.href="login.html";
document.getElementById("logoutBtn").addEventListener("click",()=>{ localStorage.removeItem("ems-session"); window.location.href="login.html"; });

let departments = JSON.parse(localStorage.getItem("ems-departments"))||[];
const list = document.getElementById("deptList");
const form = document.getElementById("addDeptForm");

function renderList(){
    list.innerHTML="";
    departments.forEach((d,i)=>{
        const li=document.createElement("li");
        li.innerHTML=`${d} <button onclick="deleteDept(${i})">Delete</button>`;
        list.appendChild(li);
    });
}
window.deleteDept=function(i){ departments.splice(i,1); localStorage.setItem("ems-departments",JSON.stringify(departments)); renderList(); }

form.addEventListener("submit",e=>{ e.preventDefault(); departments.push(deptName.value); localStorage.setItem("ems-departments",JSON.stringify(departments)); deptName.value=""; renderList(); });
renderList();

// JS for menu toggle
document.getElementById('menuToggle').addEventListener('click', ()=>{
    document.querySelector('.sidebar').classList.toggle('show');
});

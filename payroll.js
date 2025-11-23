if(localStorage.getItem("ems-session")!=="active") window.location.href="login.html";
document.getElementById("logoutBtn").addEventListener("click",()=>{ localStorage.removeItem("ems-session"); window.location.href="login.html"; });

let employees = JSON.parse(localStorage.getItem("ems-employees"))||[];
const tbody = document.querySelector("#payrollTable tbody");

function renderTable(){
    tbody.innerHTML="";
    employees.forEach(emp=>{
        const month = new Date().toLocaleString('default', { month: 'long' });
        const salary = Math.floor(Math.random()*2000)+2000; // Sample salary
        const row = document.createElement("tr");
        row.innerHTML=`<td>${emp.name}</td><td>${salary}</td><td>${month}</td><td>Paid</td>`;
        tbody.appendChild(row);
    });
}
renderTable();

// JS for menu toggle
document.getElementById('menuToggle').addEventListener('click', ()=>{
    document.querySelector('.sidebar').classList.toggle('show');
});

if(localStorage.getItem("ems-session")!=="active") window.location.href="login.html";
document.getElementById("logoutBtn").addEventListener("click",()=>{ localStorage.removeItem("ems-session"); window.location.href="login.html"; });

let employees = JSON.parse(localStorage.getItem("ems-employees"))||[];
let attendance = JSON.parse(localStorage.getItem("ems-attendance"))||[];
const tbody = document.querySelector("#attendanceTable tbody");

function renderTable(){
    tbody.innerHTML = "";
    employees.forEach(emp=>{
        const today = new Date().toLocaleDateString();
        const record = attendance.find(a=> a.username===emp.username && a.date===today);
        const status = record? record.status:"Absent";
        const row = document.createElement("tr");
        row.innerHTML = `<td>${emp.name}</td><td>${today}</td><td>${status}</td>
        <td>
            <button class="present" onclick="mark('${emp.username}','Present')">Present</button>
            <button class="absent" onclick="mark('${emp.username}','Absent')">Absent</button>
        </td>`;
        tbody.appendChild(row);
    });
}

window.mark = function(username,status){
    const today = new Date().toLocaleDateString();
    const index = attendance.findIndex(a=>a.username===username && a.date===today);
    if(index>=0) attendance[index].status=status;
    else attendance.push({username,date:today,status});
    localStorage.setItem("ems-attendance",JSON.stringify(attendance));
    renderTable();
}

document.getElementById("markAllPresent").addEventListener("click",()=>{
    const today = new Date().toLocaleDateString();
    employees.forEach(emp=>{
        const index = attendance.findIndex(a=>a.username===emp.username && a.date===today);
        if(index>=0) attendance[index].status="Present";
        else attendance.push({username:emp.username,date:today,status:"Present"});
    });
    localStorage.setItem("ems-attendance",JSON.stringify(attendance));
    renderTable();
});

renderTable();


// JS for menu toggle
document.getElementById('menuToggle').addEventListener('click', ()=>{
    document.querySelector('.sidebar').classList.toggle('show');
});

if (localStorage.getItem("ems-session") !== "active") window.location.href = "login.html";
document.getElementById("logoutBtn").addEventListener("click", ()=>{ localStorage.removeItem("ems-session"); window.location.href="login.html"; });

let employees = JSON.parse(localStorage.getItem("ems-employees")) || [];
const tbody = document.querySelector("#employeeTable tbody");

function renderTable(data){
    tbody.innerHTML = "";
    data.forEach((emp, idx)=>{
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${emp.name}</td>
            <td>${emp.username}</td>
            <td>${emp.email}</td>
            <td>${emp.department}</td>
            <td>
                <button class="edit" onclick="editEmployee(${idx})">Edit</button>
                <button class="delete" onclick="deleteEmployee(${idx})">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}
renderTable(employees);

document.getElementById("searchInput").addEventListener("input", function(){
    const val = this.value.toLowerCase();
    const filtered = employees.filter(emp=> emp.name.toLowerCase().includes(val) || emp.username.toLowerCase().includes(val));
    renderTable(filtered);
});

function editEmployee(index){
    const emp = employees[index];
    const newName = prompt("Edit Name", emp.name);
    const newEmail = prompt("Edit Email", emp.email);
    const newDept = prompt("Edit Department", emp.department);
    if(newName && newEmail && newDept){
        employees[index].name = newName;
        employees[index].email = newEmail;
        employees[index].department = newDept;
        localStorage.setItem("ems-employees", JSON.stringify(employees));
        renderTable(employees);
    }
}

function deleteEmployee(index){
    if(confirm("Delete this employee?")){
        employees.splice(index,1);
        localStorage.setItem("ems-employees", JSON.stringify(employees));
        renderTable(employees);
    }
}

// JS for menu toggle
document.getElementById('menuToggle').addEventListener('click', ()=>{
    document.querySelector('.sidebar').classList.toggle('show');
});

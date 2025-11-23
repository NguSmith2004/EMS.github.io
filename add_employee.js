if (localStorage.getItem("ems-session") !== "active") window.location.href="login.html";
document.getElementById("logoutBtn").addEventListener("click", ()=>{ localStorage.removeItem("ems-session"); window.location.href="login.html"; });

const form = document.getElementById("addEmployeeForm");
form.addEventListener("submit", e=>{
    e.preventDefault();
    let employees = JSON.parse(localStorage.getItem("ems-employees")) || [];
    employees.push({
        name: name.value,
        username: username.value,
        email: email.value,
        department: department.value
    });
    localStorage.setItem("ems-employees", JSON.stringify(employees));
    alert("Employee added successfully!");
    form.reset();
});

// JS for menu toggle
document.getElementById('menuToggle').addEventListener('click', ()=>{
    document.querySelector('.sidebar').classList.toggle('show');
});

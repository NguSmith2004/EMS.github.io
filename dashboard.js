if (localStorage.getItem("ems-session") !== "active") {
    window.location.href = "login.html";
}
document.getElementById("logoutBtn").addEventListener("click", ()=>{
    localStorage.removeItem("ems-session");
    window.location.href = "login.html";
});

// Sample Data
document.getElementById("totalEmployees").innerText = 12;
document.getElementById("activeStaff").innerText = 10;

// Chart.js Example
const ctx = document.getElementById("employeeChart");
new Chart(ctx, {
    type:'bar',
    data:{
        labels:["IT","HR","Sales","Finance","Admin"],
        datasets:[{label:"Employees", data:[5,3,4,2,1], backgroundColor:"#1d976c"}]
    }
});

// JS for menu toggle
document.getElementById('menuToggle').addEventListener('click', ()=>{
    document.querySelector('.sidebar').classList.toggle('show');
});


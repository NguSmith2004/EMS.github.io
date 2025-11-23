// Ensure logged in
if(localStorage.getItem("ems-session")!=="active") window.location.href="login.html";

// Logout
document.getElementById("logoutBtn").addEventListener("click",()=>{
    localStorage.removeItem("ems-session");
    window.location.href="login.html";
});

// Tab switching
const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');
tabs.forEach(tab=>{
    tab.addEventListener('click', ()=>{
        tabs.forEach(t=>t.classList.remove('active'));
        tab.classList.add('active');
        contents.forEach(c=>c.style.display='none');
        document.getElementById(tab.dataset.tab).style.display='block';
    });
});

// Load user info
const user = JSON.parse(localStorage.getItem("ems-user"));
document.getElementById("setName").value = user.name || "";
document.getElementById("setEmail").value = user.email || "";

// Save Profile
document.getElementById('saveProfile').addEventListener('click', ()=>{
    user.name = document.getElementById('setName').value;
    user.email = document.getElementById('setEmail').value;
    localStorage.setItem('ems-user', JSON.stringify(user));
    alert('Profile saved!');
});

// Change Password
document.getElementById('savePassword').addEventListener('click', ()=>{
    const current = document.getElementById('currentPwd').value;
    const newPwd = document.getElementById('newPwd').value;
    if(user.password === current){
        user.password = newPwd;
        localStorage.setItem('ems-user', JSON.stringify(user));
        alert('Password changed!');
        document.getElementById('currentPwd').value = '';
        document.getElementById('newPwd').value = '';
    } else alert('Current password incorrect');
});

// Notifications
document.getElementById('saveNotif').addEventListener('click', ()=>{
    alert('Notification settings saved!');
});

// System preferences
document.getElementById('saveSystem').addEventListener('click', ()=>{
    alert('System preferences saved!');
});

// Attendance settings
document.getElementById('saveAttendance').addEventListener('click', ()=>{
    alert('Attendance settings saved!');
});

// JS for menu toggle
document.getElementById('menuToggle').addEventListener('click', ()=>{
    document.querySelector('.sidebar').classList.toggle('show');
});

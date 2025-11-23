// Ensure logged in
if(localStorage.getItem("ems-session")!=="active") window.location.href="login.html";

// Logout
document.getElementById("logoutBtn").addEventListener("click",()=>{
    localStorage.removeItem("ems-session");
    window.location.href="login.html";
});

// Load user data
let user = JSON.parse(localStorage.getItem("ems-user"));

// Populate fields
document.getElementById("profileName").value = user.name || "";
document.getElementById("profileEmail").value = user.email || "";
document.getElementById("profilePhone").value = user.phone || "";
document.getElementById("profileRole").value = user.role || "Employee";
document.getElementById("profileDept").value = user.department || "N/A";
document.getElementById("profileImg").src = user.profilePic || "default-profile.png";

// Quick stats (example, can be replaced with real data)
document.getElementById("statAttendance").textContent = user.attendance || 0;
document.getElementById("statProjects").textContent = user.projectsCompleted || 0;
document.getElementById("statLeave").textContent = user.leaveBalance || 0;

// Change profile picture
document.getElementById("changePicBtn").addEventListener("click", ()=>{
    document.getElementById("imgUpload").click();
});

document.getElementById("imgUpload").addEventListener("change", (e)=>{
    const file = e.target.files[0];
    if(file){
        const reader = new FileReader();
        reader.onload = function(){
            document.getElementById("profileImg").src = reader.result;
            user.profilePic = reader.result;
            localStorage.setItem("ems-user", JSON.stringify(user));
        }
        reader.readAsDataURL(file);
    }
});

// Save profile changes
document.getElementById("saveProfileBtn").addEventListener("click", ()=>{
    user.name = document.getElementById("profileName").value;
    user.email = document.getElementById("profileEmail").value;
    user.phone = document.getElementById("profilePhone").value;
    localStorage.setItem("ems-user", JSON.stringify(user));
    alert("Profile updated successfully!");
});


// JS for menu toggle
document.getElementById('menuToggle').addEventListener('click', ()=>{
    document.querySelector('.sidebar').classList.toggle('show');
});

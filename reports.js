if(localStorage.getItem("ems-session")!=="active") window.location.href="login.html";
document.getElementById("logoutBtn").addEventListener("click",()=>{ localStorage.removeItem("ems-session"); window.location.href="login.html"; });

const ctx = document.getElementById("reportChart");
new Chart(ctx, {
    type:'pie',
    data:{
        labels:["IT","HR","Sales","Finance","Admin"],
        datasets:[{data:[5,3,4,2,1], backgroundColor:["#1d976c","#4fc3f7","#fbc02d","#ff5722","#9c27b0"]}]
    }
});


// JS for menu toggle
document.getElementById('menuToggle').addEventListener('click', ()=>{
    document.querySelector('.sidebar').classList.toggle('show');
});

function goAI() {
    window.location.href = "ai.html";
}

function goScripts() {
    window.location.href = "scripts.html";
}

function comingSoon() {
    alert("This feature is currently being integrated. Stay tuned!");
}

function toggleBooster() {
    const isChecked = document.getElementById("boosterToggle").checked;
    const ramStat = document.getElementById("ramStat");
    const fpsStat = document.getElementById("fpsStat");
    const dashboard = document.querySelector(".dashboard");

    if (isChecked) {
        dashboard.classList.add("optimizing");
        ramStat.innerText = "Cleaning...";
        fpsStat.innerText = "Boosting...";
        
        setTimeout(() => {
            dashboard.classList.remove("optimizing");
            ramStat.innerText = (16.2).toFixed(1) + "GB";
            fpsStat.innerText = "240+";
            ramStat.style.color = "var(--razer-green)";
            fpsStat.style.color = "var(--razer-green)";
        }, 2000);
    } else {
        ramStat.innerText = "16GB";
        fpsStat.innerText = "144";
        ramStat.style.color = "var(--razer-green)";
        fpsStat.style.color = "var(--razer-green)";
    }
}
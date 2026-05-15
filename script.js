// SCREEN NAVIGATION UTILITY
function navigateTo(screenId) {
    // Hide all viewports
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    // Display targeted viewport
    const target = document.getElementById(screenId);
    if (target) {
        target.classList.add('active');
    }
}

// AUTOMATIC SCREEN 1 DELAY LOGIC (SPLASH TIME ACCORDING TO ARCHITECTURE)
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        navigateTo('screen-permissions');
    }, 2500); // 2.5 seconds configuration verification window
});

// SCREEN 2 LOGIC: CHECKBOX VALIDITY MIGRATION
function grantPermissions() {
    const sensorBox = document.getElementById('perm-sensors');
    
    if (!sensorBox.checked) {
        // Enforce interaction verification safely
        sensorBox.classList.add('error-bounce');
        alert("Please explicitly allow Sensor Access to build hardware baseline arrays.");
        return;
    }
    
    // Process safely to UI Dashboard layout
    navigateTo('screen-dashboard');
}

// SCREEN 3 & SCREEN 4 COUPLING: DYNAMIC DATA POPULATION FOR HIGH REUSABILITY
let activeTargetCard = null;

function openDeepDive(componentName, materialIcon, detailsText, isSystemPassing) {
    // Modify deep dive parameters contextually
    document.getElementById('deepdive-title').innerText = componentName.toUpperCase();
    document.getElementById('deepdive-icon').innerText = materialIcon;
    document.getElementById('deepdive-status-text').innerText = isSystemPassing ? "COMPONENT STRUCTURALLY SECURE" : "ACTION REQUIRED FOR DIAGNOSTIC";
    
    const indicator = document.getElementById('pulse-indicator');
    if (isSystemPassing) {
        indicator.style.background = "var(--pass)";
        indicator.style.animation = "none";
        indicator.style.width = "100%";
    } else {
        indicator.style.background = "var(--primary-gradient)";
        indicator.style.animation = "smooth-pulse 1.5s ease-in-out infinite alternate";
    }
    
    // Store execution scope target reference safely
    activeTargetCard = event.currentTarget;
    
    navigateTo('screen-deepdive');
}

function closeDeepDiveAction(userConfirmedSuccess) {
    if (activeTargetCard) {
        const badge = activeTargetCard.querySelector('.badge');
        
        if (userConfirmedSuccess) {
            activeTargetCard.classList.remove('fail', 'warning');
            activeTargetCard.classList.add('pass');
            badge.innerText = "PASS";
            badge.style.background = "var(--pass-bg)";
            badge.style.color = "var(--pass)";
        } else {
            activeTargetCard.classList.remove('pass', 'warning');
            activeTargetCard.classList.add('fail');
            badge.innerText = "FAIL";
            badge.style.background = "var(--primary-gradient)";
            badge.style.color = "white";
        }
    }
    
    recalculateDashboardMetrics();
    navigateTo('screen-dashboard');
}

// RECALCULATE ENTIRE OVERALL PERFORMANCE ARRAYS FOR TRIPLE CONTEXT STABILITY
function recalculateDashboardMetrics() {
    const totalCards = document.querySelectorAll('.diagnostic-card').length;
    const passingCards = document.querySelectorAll('.diagnostic-card.pass').length;
    const metricDisplay = document.getElementById('overall-text');
    
    metricDisplay.innerText = `STATUS: ${passingCards}/${totalCards} COMPONENTS PASSING`;
    
    if (passingCards === totalCards) {
        metricDisplay.className = "status-pass";
        metricDisplay.innerText = "OVERALL STATUS: SECURE (10/10 PASS)";
    } else {
        metricDisplay.className = "status-warn";
    }
}

// RESET MOCK MATRIX RUNNER FOR THE BOTTOM DASHBOARD INTERACTION BUTTON
function triggerFullScanAnimation() {
    const dashboardText = document.getElementById('overall-text');
    dashboardText.innerText = "RUNNING COMPREHENSIVE RE-SCAN...";
    dashboardText.className = "status-warn";
    
    document.querySelectorAll('.diagnostic-card').forEach((card, index) => {
        const badge = card.querySelector('.badge');
        badge.innerText = "SCANNING";
        badge.style.background = "#EAECEE";
        badge.style.color = "var(--text-light)";
        
        setTimeout(() => {
            if (!card.classList.contains('fail') && !card.classList.contains('warning')) {
                badge.innerText = "PASS";
                badge.style.background = "var(--pass-bg)";
                badge.style.color = "var(--pass)";
            } else if (card.classList.contains('warning')) {
                badge.innerText = "WARN 14%";
                badge.style.background = "var(--warning-bg)";
                badge.style.color = "var(--warning)";
            } else {
                badge.innerText = "TEST";
                badge.style.background = "var(--primary-gradient)";
                badge.style.color = "white";
            }
            if(index === document.querySelectorAll('.diagnostic-card').length - 1) {
                recalculateDashboardMetrics();
            }
        }, 300 * (index + 1));
    });
}

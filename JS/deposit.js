document.addEventListener("DOMContentLoaded", function() {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
});


const copyIcon = document.getElementById("copy-icon")
const copyText = document.getElementById("main-address")


copyIcon.addEventListener('click', async function(e) {
    // getAttribute("data-state");
    
    await navigator.clipboard.writeText(copyText.textContent);
    
    // copyIcon.dataset.bsTitle = "Copied"
    let tt = bootstrap.Tooltip.getInstance(this);
    tt.dispose();
    this.setAttribute('title', 'Copied!')
    tt = bootstrap.Tooltip.getOrCreateInstance(this);
    tt.show();
})


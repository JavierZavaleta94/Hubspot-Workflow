document.addEventListener('DOMContentLoaded', function() {

    if (window.iframe) {
        const link = document.getElementById("myLink");
        link.href = "https://javierzavaleta94.github.io/Hubspot-Workflow/?utm_medium=email&utm_campaign=test&utm_source=google&utm_content=Data%20Insight&utm_term=test";
        link.textContent = "Form Link with Parameters"; 
    }
});
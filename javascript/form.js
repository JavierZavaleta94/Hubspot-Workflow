document.addEventListener('DOMContentLoaded', function() {

    const iframe = document.getElementById('hubspot-form-iframe');
    window.iframe = document.getElementById('hubspot-form-iframe');
    
    const parentParams = window.location.search;
    const pageUrl = window.location.pathname;
    const previousUrl = document.referrer;

    if (iframe) {

        let iframeSrc = iframe.getAttribute('src');
        let newIframeSrc;

        if (parentParams) {
        
        const parameterString = window.location.search;
        newIframeSrc = iframeSrc + parameterString + "&website=" + pageUrl + "&previous_website=" + previousUrl; 
        iframe.setAttribute('src', newIframeSrc);


        } else {

            newIframeSrc = iframeSrc + "?website=" + pageUrl + "&previous_website=" + previousUrl; 
            iframe.setAttribute('src', newIframeSrc);

        }
    } 
});


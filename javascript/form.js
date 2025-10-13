document.addEventListener('DOMContentLoaded', function() {
    // Wait until the entire HTML document is fully loaded and parsed before running the script.
    
    // 1. Get a reference to the HubSpot iframe element using its ID.
    const iframe = document.getElementById('hubspot-form-iframe');
    
    // 2. Capture the URL query string from the parent page (e.g., "?utm_source=google&utm_medium=cpc").
    const parantOrigin = window.origin
    const parentParams = window.location.search; 

    // 3. Check if both the iframe element was found AND there are parameters on the parent page.
    if (iframe && parentParams) {
        
        // Get the iframe's current 'src' URL.
        let iframeSrc = iframe.getAttribute('src');
        
        // Set the separator. Since the original HubSpot 'src' already contains '?', we use '&' 
        // to append new parameters correctly. The value '&0-1/' was incorrect for a query string.
        const parameterString = window.location.search;
        //const separator = '&'; 
        
        // 4. Construct the new iframe URL.
        // - Start with the existing 'iframeSrc'.
        // - Append the correct 'separator' ('&').
        // - Append the 'parentParams' string, but use .substring(1) to remove the leading '?' 
        //   (e.g., transforming "?utm_source=x" into "utm_source=x").

        //const modifiedString = parameterString.replace(/[?&]/g, separator);

        let newIframeSrc = iframeSrc + parameterString; 
        
        // 5. Update the iframe's 'src' attribute. This action forces the iframe to reload 
        //    with the new URL, including the URL parameters for pre-population.
        iframe.setAttribute('src', newIframeSrc);

        // Log the final URL to the console for verification and debugging purposes.
        // console.log('Updated iframe src:', newIframeSrc);
    } 
});


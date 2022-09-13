// Add Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-D2HL2ZMZNG');

// Custom GA Events
(function getEmail() {
  try {

    let mailObject = $('.f-user-menu-name-container > span')[1]
    let emailValue = mailObject.innerHTML

    gtag('event', 'screen_view', { 'app_name': 'FWDHRHackathon', 'screen_name': emailValue});
    gtag('event', 'page_view_custom', {'app_name': 'FWDHRHackathon',custom_source_value: emailValue });
    gtag('event', 'page_view_custom', {'app_name': 'FWDHRHackathon',value: emailValue });
  
  } catch (e) {
    setTimeout(getEmail, 1000);
    console.log('custom-ga-event', e);
  }
})();


// Remove Custom Footer
(() => {
  try {
    $('#customFooterContainer').remove(); 
  } catch (e) {
    console.log('custom-footer-removal', e);
  }
})();
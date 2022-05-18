/*!
* Developed by Pablo Gonzalez
* Licensed under MIT (https://github.com/pablogonzalezz/shgadvogados)
*/

// -------------- Google Analytics Scripts --------------
const scriptDiv = document.createElement('script');
scriptDiv.src = "https://www.googletagmanager.com/gtag/js?id=AW-10896769743";
document.head.appendChild(scriptDiv);

window.dataLayer = window.dataLayer || []; 

function gtag() { 
    dataLayer.push(arguments); 
} 

gtag('js', new Date()); 
gtag('config', 'AW-10896769743'); 

function gtag_report_conversion(event, url) { 
    var tag;

    // 	[Botão Whatsapp Flutuante] Tag
    if(event.target.classList.contains('float')) {
        tag = 'AW-10896769743/UdFsCOHDoboDEM-F_sso';
    }

    //  [Botão Whatsapp "Fale Com um Especialista"] Tag
    if(event.target.id == "fale_especialista_btn") {
        tag = 'AW-10896769743/HPIOCIyT1LoDEM-F_sso';
    }

    var callback = () => { 
        if(event.target.parentElement.classList.contains('question-text')) {
            return;
        }

        if(event.target.getAttribute('target') === '_blank') {
            window.open(url, '_blank');
            return;
        }
        if (typeof (url) != 'undefined') { 
            window.location = url; 
            return;
        } 
    }; 

    gtag('event', 'conversion', { 'send_to': tag, 'event_callback': callback }); 
    return false; 
}

// -------------- Page scripts --------------

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

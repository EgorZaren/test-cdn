const appendJqueryScript = () => {
    const jquery = document.createElement('script');
    jquery.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
    jquery.type = 'text/javascript';

    document.getElementsByTagName('head')[0].appendChild(jquery);
};

appendJqueryScript();

window.onload = () => {
    if (window.jQuery && window.jQuery.ui) {
        main();
    } else {
        setTimeout(() => {
           console.log('jQuery loading...');
        }, 50);
    }
};

const main = () => {
    $('#test-api').html(`<div>TEST SUCCESSFUL</div>`);
}
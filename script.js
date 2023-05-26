
function toggle_mode() {
    const html = document.documentElement;
    html.classList.toggle('light');

    const img = document.querySelector('#profile img');
    
    if(html.classList.contains('light')){
        // img.src = './assets/profile_pic-light';
        img.setAttribute('src', './assets/profile_pic-light.svg');
    } else {
        // img.src = './assets/profile_pic-light';
        img.setAttribute('src', './assets/profile_pic-dark.svg');
    }

}
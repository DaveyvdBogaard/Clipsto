console.log('script loaded')

let downarrow = document.getElementById('downarrowscroll')

window.onscroll = () => {
    const nav = document.querySelector('#navbar');
    if(this.scrollY <= 70) nav.className = ''; else nav.className = 'scroll';
};

function headerScrolldown() {
    window.scrollTo("whiteInfoContainer")
}

function scrollTo(hash) {
    location.hash = "#" + hash;
}
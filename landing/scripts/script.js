console.log('script loaded')

let downarrow = document.getElementById('downarrowscroll')

window.onscroll = () => {
    const nav = document.querySelector('#navbar');
    if(this.scrollY <= 50) nav.className = ''; else nav.className = 'scroll';
};

function headerScrolldown() {
    window.scrollTo(0, 100)
}


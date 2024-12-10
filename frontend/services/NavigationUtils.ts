let sidebarOpen = false;

export function Clickbar() {
    const home = document.getElementById('home');
    const navi = document.getElementById('Navi');
    const seabar = document.getElementById('search-bar');
    const scroll_container = document.getElementById('scroll-container');
    const allBlack = document.getElementById('allBlack');

    const toggleElements = () => {
        home?.classList.toggle('hidden');
        navi?.classList.toggle('block');
        seabar?.classList.toggle('hidden');
        if (seabar) {
            seabar.style.marginTop = '10px';
            seabar.style.position = 'absolute';
            seabar.style.left = '50%';
            seabar.style.transform = 'translateX(-50%)';
        }
        scroll_container?.classList.toggle('hidden');
        allBlack?.classList.toggle('hidden'); 
    }    
    sidebarOpen = !sidebarOpen;
    toggleElements();
    Clickbar()
}
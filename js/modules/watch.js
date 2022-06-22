function watch() {
    const timeInterval = setInterval(upDateTime, 1000);

    function upDateTime() {
        const watchOnPage = document.querySelector('.watch');
        let t = new Date();
        let hours, mins, seconds;
        
        hours = Math.floor(t / (1000 * 60 * 60) % 24) + 3;
        mins = Math.floor(t / (1000 * 60) % 60);
        seconds = Math.floor((t / 1000) % 60);
        
        watchOnPage.textContent = `${hours}:${plusZero(mins)}:${plusZero(seconds)}`;
    
        function plusZero(n) {
            if (n < 10) {
                return `0${n}`; 
            } else {
                return n;
            }
        }
    }
}

export default watch;
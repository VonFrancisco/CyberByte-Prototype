let inactivityTime = function () {
    let time;
    
    window.onload = resetTimer;
    window.onmousemove = resetTimer;
    window.onkeypress = resetTimer;
    window.onclick = resetTimer;
    window.onscroll = resetTimer;

    function logout() {
        sessionStorage.removeItem('flashRole');
        sessionStorage.removeItem('flashUser');
        window.location.href = 'login.html?timeout=true';
    }

    function resetTimer() {
        clearTimeout(time);
        time = setTimeout(logout, 60000); 
    }
};

inactivityTime();
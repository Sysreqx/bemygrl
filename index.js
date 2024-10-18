let count=1;
function prank(){
    count++;
    let bt=document.getElementById("no");
    bt.style.left=Math.random() * 80+"%";
    bt.style.top=Math.random() * 80+"%";
    if(count>5){
        document.getElementById("target").innerHTML="You can’t blame gravity for falling in love";
        document.getElementById("target-img").src="https://media.tenor.com/b6RQe67v8s0AAAAi/i-love-you.gif";
        document.getElementsByClassName("btn-cont")[0].innerHTML="<h1>Thank You!</h1>";
    }
}

function ifyes(){
    document.getElementById("target").innerHTML="Meerim ❤️";
    document.getElementById("target-img").src="https://media.tenor.com/b6RQe67v8s0AAAAi/i-love-you.gif";
    document.getElementsByClassName("btn-cont")[0].innerHTML="<h1>I love You</h1>";
}

window.addEventListener('load', function() {
    // document.body.style.cursor = 'pointer'; // Show pointer cursor for interactivity

    setTimeout(function() {
        document.getElementById('fallingHearts').style.display = 'block';

        const heartsContainer = document.getElementById('fallingHearts');
        for (let i = 0; i < 100; i++) {
            const heart = document.createElement('span');
            heart.classList.add('heart');
            heart.textContent = ['❤️', '💜', '💜', '❤️', '❤️'][Math.floor(Math.random() * 5)];
            heart.style.left = `${Math.random() * 100}vw`;
            heart.style.top = `${Math.random() * -100}vh`;
            heart.style.animationDelay = `${Math.random() * 5}s`;
            heartsContainer.appendChild(heart);
        }
    }, 500); // Delay for demo purposes; adjust as needed
});
const btn = document.getElementById("startBtn");
const music = document.getElementById("bgMusic");

// First Page
btn.addEventListener("click", function () {

    music.volume = 0.6;

    music.play().then(() => {
        console.log("Music started");
    }).catch((err) => {
        console.log(err);
    });

    document.querySelector(".container").innerHTML = `
        <h1>❤️ Dear Rishabh ❤️</h1>

        <p>Every moment with you is my favorite memory. 🥹</p>

        <p>You make my world brighter, my smile bigger, and my heart happier. ❤️</p>

        <button id="nextBtn">Next ❤️</button>
    `;

    document.getElementById("nextBtn").addEventListener("click", secondPage);

});

// Second Page
function secondPage() {

    document.querySelector(".container").innerHTML = `
        <h1>💌 A Letter Just For You 💌</h1>

        <p class="letter" id="typing"></p>

        <button id="proposalBtn" style="display:none;">
            Continue ❤️
        </button>
    `;

    const message = `Dear Rishabh ❤️,

From the day you came into my life, every moment has become more beautiful.

Thank you for making me smile, supporting me, and believing in me.

You are my favorite person, my safe place, and my happiest feeling.

And today...
I want to ask you something very special. ❤️`;

    let i = 0;

    function typeWriter() {
        if (i < message.length) {
            const typing = document.getElementById("typing");

            if (message.charAt(i) === "\n") {
                typing.innerHTML += "<br>";
            } else {
                typing.innerHTML += message.charAt(i);
            }

            i++;
            setTimeout(typeWriter, 35);

        } else {
            document.getElementById("proposalBtn").style.display = "inline-block";
        }
    }

    typeWriter();

    document.getElementById("proposalBtn").addEventListener("click", proposal);
}

// Proposal Page
function proposal() {

    document.querySelector(".container").innerHTML = `
        <h1>🥹❤️</h1>

        <h2>Will You Go On A Date With Me?</h2>

        <br>

        <button id="yesBtn">YES ❤️</button>

        <button id="noBtn">NO 🙈</button>
    `;

    const noBtn = document.getElementById("noBtn");

    noBtn.addEventListener("mouseover", function () {
        noBtn.style.position = "absolute";
        noBtn.style.left = Math.random() * 80 + "%";
        noBtn.style.top = Math.random() * 80 + "%";
    });

    document.getElementById("yesBtn").addEventListener("click", function () {

        document.querySelector(".container").innerHTML = `
            <h1>🎉❤️</h1>

            <h2>Yayyyyy!!</h2>

            <p>
                You just made me the happiest girl in the world ❤️
                <br><br>
                I can't wait for our date! 🌹💕
            </p>
        `;

    });

}
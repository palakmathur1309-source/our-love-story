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

        <div class="envelope" id="envelope">

            <div class="envelope-text">

                Open Me ❤️

            </div>

        </div>

    `;

    document.getElementById("envelope").addEventListener("click", openLetter);

}

function openLetter(){

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

    function typeWriter(){

        if(i < message.length){

            document.getElementById("typing").innerHTML += message.charAt(i);

            i++;

            setTimeout(typeWriter,40);

        }else{

            document.getElementById("proposalBtn").style.display="inline-block";

        }

    }

    typeWriter();

    document.getElementById("proposalBtn").addEventListener("click", memories);

}

function memories() {

    document.querySelector(".container").innerHTML = `

        <h1>📸 Our Beautiful Memories ❤️</h1>

        <img id="memoryPhoto" src="images/photo1.jpg" class="memory-photo">

        <p id="caption">
            Every picture tells a story,
            and every story begins with you. ❤️
        </p>

        <button id="nextMemory">Next Memory ❤️</button>

    `;

    const photos = [
        "images/photo1.jpg",
        "images/photo2.jpg",
        "images/photo3.jpg",
        "images/photo4.jpg",
        "images/photo5.jpg",
        "images/photo6.jpg",
        "images/photo7.jpg",
        "images/photo8.jpg",
        "images/photo9.jpg",
        "images/photo10.jpg"
    ];

    const captions = [
        "The day my heart smiled the brightest ❤️",
        "One of my favorite memories together 🥹",
        "Every moment with you feels magical ✨",
        "A memory I'll cherish forever 💕",
        "My happiest place is beside you ❤️",
        "Your smile is my favorite view 😊",
        "Another beautiful chapter of our story 🌸",
        "Thank you for every little moment ❤️",
        "You're my safe place 🫂",
        "Forever my favorite person 💖"
    ];

    let current = 0;

    document.getElementById("nextMemory").addEventListener("click", function(){

        current++;

        if(current < photos.length){

            document.getElementById("memoryPhoto").src = photos[current];
            document.getElementById("caption").innerHTML = captions[current];

        }else{

            proposal();

        }

    });

}

// Proposal Page
function proposal(){

    document.querySelector(".container").innerHTML = `

        <h1>❤️ One Last Question ❤️</h1>

        <p style="font-size:24px;line-height:1.8;">

            Every moment with you has become one of my favourite memories.

            <br><br>

            Will you create another beautiful memory with me?

            <br><br>

            ❤️ Will You Go On A Date With Me? ❤️

        </p>

        <br>

        <button id="yesBtn">YES ❤️</button>

        <button id="noBtn">NO 🙈</button>

    `;

    document.getElementById("yesBtn").onclick = function(){

    createConfetti();

    setTimeout(dateCard,1800);

};

    const noBtn = document.getElementById("noBtn");

    noBtn.onmouseover=function(){

        noBtn.style.position="absolute";

        noBtn.style.left=Math.random()*70+"%";

        noBtn.style.top=Math.random()*70+"%";

    };

}

function dateCard(){

    document.querySelector(".container").innerHTML = `

        <h1>🌹 Our Date ❤️</h1>
        <div id="counter"></div>
        <div class="date-card">

            <h2>📅 Date</h2>

            <p>21 July 2026</p>

            <h2>📍 Place</h2>

            <p>The Magnolia Cafe</p>

            <h2>💌</h2>

            <p>

                I can't wait to see you.

                ❤️

            </p>

        </div>

        <br>

        <button onclick="secretMessage()">

            One More Surprise 🎁

        </button>

    `;
    relationshipCounter();

}

function secretMessage(){

    document.querySelector(".container").innerHTML=`

    <h1>🤫 Secret Message ❤️</h1>

    <p class="letter">

    No matter what happens...

    <br><br>

    I'll always choose you.

    <br><br>

    Thank you for being the most beautiful part of my life.

    ❤️

    </p>

    <button onclick="ending()">

        Final Page ❤️

    </button>

    `;

}

function ending(){

    document.querySelector(".container").innerHTML=`

    <h1>🌸 The End?</h1>

    <h2>No.... ❤️</h2>

    <p class="letter">

    This is just the beginning

    of another beautiful memory.

    <br><br>

    See you soon. ❤️

    </p>

    <h1>🥹💕</h1>

    `;

}

const splash = document.getElementById("loadingScreen");

splash.addEventListener("click",function(){

    splash.style.opacity="0";

    setTimeout(function(){

        splash.style.display="none";

    },1000);

});


const loveNotes = [

    "❤️ I Love You",

    "🥹 Forever",

    "💕 My Favourite Person",

    "🌸 My Safe Place",

    "❤️ My Happiness",

    "🌹 My Everything",

    "🥰 My Home",

    "💖 My Heart"

];

function createLoveNote(){

    const note = document.createElement("div");

    note.className="note";

    note.innerHTML =
        loveNotes[Math.floor(Math.random()*loveNotes.length)];

    note.style.left=Math.random()*90+"vw";

    note.style.fontSize=(18+Math.random()*10)+"px";

    document.body.appendChild(note);

    setTimeout(function(){

        note.remove();

    },7000);

}

setInterval(createLoveNote,2500);


function sparkle(){

    const s=document.createElement("div");

    s.className="sparkle";

    s.style.left=Math.random()*window.innerWidth+"px";

    s.style.top=Math.random()*window.innerHeight+"px";

    document.body.appendChild(s);

    setTimeout(()=>{

        s.remove();

    },2000);

}

setInterval(sparkle,300);

function createConfetti(){

    const colors=[
        "#ff4d94",
        "#ffb6c1",
        "#ffd700",
        "#ffffff",
        "#ff69b4"
    ];

    for(let i=0;i<150;i++){

        const c=document.createElement("div");

        c.className="confetti";

        c.style.left=Math.random()*100+"vw";

        c.style.background=colors[Math.floor(Math.random()*colors.length)];

        c.style.animationDuration=(2+Math.random()*3)+"s";

        c.style.transform="rotate("+Math.random()*360+"deg)";

        document.body.appendChild(c);

        setTimeout(()=>c.remove(),5000);

    }

}

function relationshipCounter(){

    const startDate = new Date("2020-06-14");
    const today = new Date();

    let years = today.getFullYear() - startDate.getFullYear();
    let months = today.getMonth() - startDate.getMonth();
    let days = today.getDate() - startDate.getDate();

    if(days < 0){
        months--;
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
    }

    if(months < 0){
        years--;
        months += 12;
    }

    document.getElementById("counter").innerHTML = `
        ❤️ <b>Together Since</b> ❤️<br><br>

        📅 14 June 2020<br><br>

        💖 ${years} Years
        ${months} Months
        ${days} Days
    `;
}

function createPetal(){

    const petal=document.createElement("div");

    petal.className="petal";

    petal.innerHTML="🌸";

    petal.style.left=Math.random()*100+"vw";

    petal.style.fontSize=(20+Math.random()*15)+"px";

    document.body.appendChild(petal);

    setTimeout(()=>petal.remove(),7000);

}

setInterval(createPetal,800);
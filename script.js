// Scroll-Animationen

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

sections.forEach(section=>{

    section.classList.add("hidden");
    observer.observe(section);

});


// Navigation färbt sich beim Scrollen

window.addEventListener("scroll",()=>{

    const header=document.querySelector("header");

    if(window.scrollY>60){

        header.style.background="rgba(0,0,0,.96)";

    }else{

        header.style.background="rgba(0,0,0,.80)";

    }

});


// Statistik-Zahlen zählen hoch

const stats=document.querySelectorAll(".card h3");

let gestartet=false;

window.addEventListener("scroll",()=>{

    const rekord=document.querySelector("#rekord");

    if(!gestartet && window.scrollY>rekord.offsetTop-400){

        gestartet=true;

        stats.forEach(stat=>{

            const ziel=parseInt(stat.innerText);

            let zahl=0;

            const timer=setInterval(()=>{

                zahl++;

                stat.innerText=zahl;

                if(zahl>=ziel){

                    clearInterval(timer);
                }

            },80);

        });

    }

});

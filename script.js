const typing = document.getElementById("typing");

const jobs = [
    "Web Developer",
    "Bot Developer",
    "JavaScript Learner"
];

let index = 0;

typing.textContent = jobs[index];

setInterval(() => {

    typing.classList.add("fade");

    setTimeout(() => {

        index++;

        if (index >= jobs.length) {
            index = 0;
        }

        typing.textContent = jobs[index];
        typing.classList.remove("fade");

    }, 300);

}, 2000);

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.boxShadow = "0 0 25px #38bdf8";
    });

    card.addEventListener("mouseleave", () => {
        card.style.boxShadow = "none";
    });
});

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

hiddenElements.forEach(element => {
    observer.observe(element);
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 100;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

const fills = document.querySelectorAll(".fill");

const skillObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.width =
                entry.target.dataset.width;

        }

    });

});

fills.forEach(fill => {
    skillObserver.observe(fill);
});

const modal = document.getElementById("projectModal");
const closeBtn = document.querySelector(".close");

const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalImage = document.getElementById("modalImage");

document.querySelectorAll(".project-btn").forEach(btn => {

    btn.addEventListener("click", (e) => {

        e.preventDefault();

        modalTitle.textContent = btn.dataset.title;
modalDesc.textContent = btn.dataset.desc;
modalImage.src = btn.dataset.image;

modal.style.display = "flex";

    });

});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

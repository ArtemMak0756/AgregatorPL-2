const dateEl = document.getElementById("bonus-date");

const now = new Date();
const options = { year: 'numeric', month: 'short', day: '2-digit' };
const formatted = now.toLocaleDateString('en-US', options);

dateEl.textContent = formatted;

// -------------------

document.querySelectorAll(".faq__question").forEach(btn => {
    btn.addEventListener("click", () => {
        const item = btn.closest(".faq__item");

        document.querySelectorAll(".faq__item").forEach(i => {
            if (i !== item) i.classList.remove("is-open");
        });

        item.classList.toggle("is-open");
    });
});

// ------------------
document.querySelectorAll(".casino-stars").forEach(starsBlock => {
    const stars = starsBlock.querySelectorAll(".star");

    function paintStars(value) {
        stars.forEach(star => {
            star.classList.toggle(
                "active",
                parseInt(star.dataset.value) <= value
            );
        });
    }

    paintStars(parseInt(starsBlock.dataset.rating));

    stars.forEach(star => {

        star.addEventListener("mouseenter", () => {
            paintStars(parseInt(star.dataset.value));
        });

        star.addEventListener("mouseleave", () => {
            paintStars(parseInt(starsBlock.dataset.rating));
        });

        star.addEventListener("click", () => {
            const value = parseInt(star.dataset.value);
            starsBlock.dataset.rating = value;
            paintStars(value);
        });

    });
});
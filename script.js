document.addEventListener("DOMContentLoaded", function() {
    const reveals = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
        for (let i = 0; i < reveals.length; i++) {
            let windowHeight = window.innerHeight;
            let elementTop = reveals[i].getBoundingClientRect().top;
            let elementVisible = 100;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active-reveal");
            }
        }
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // لتشغيل الأنيميشن عند تحميل الصفحة لأول مرة
});
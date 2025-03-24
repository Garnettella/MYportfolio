
    function reveal() {
        let elements = document.querySelectorAll(".reveal");
        for (let i = 0; i < elements.length; i++) {
            let windowHeight = window.innerHeight;
            let elementTop = elements[i].getBoundingClientRect().top;
            let revealPoint = 150;

            if (elementTop < windowHeight - revealPoint) {
                elements[i].classList.add("active");
            } else {
                elements[i].classList.remove("active");
            }
        }
    }

    window.addEventListener("scroll", reveal);

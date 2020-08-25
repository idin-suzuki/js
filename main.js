/** Swiper Style */
var swiper1 = new Swiper(".swiper1", {
        spaceBetween: 0,
        resistance: true,
        resistanceRatio: 0,
        pagination: {
            el: ".swiper-pagination1",
            clickable: !0,
        },
        autoplay: {
            delay: 4500,
            disableOnInteraction: !1,
        },
    }),
    swiper2 = new Swiper(".swiper2", {
        spaceBetween: 0,
        effect: "fade",
        resistance: true,
        resistanceRatio: 0,
        pagination: {
            el: ".swiper-pagination2",
            clickable: !0,
        },
        autoplay: {
            delay: 5500,
            disableOnInteraction: !1,
        },
    }),
    swiper3 = new Swiper(".swiper3", {
        spaceBetween: 0,
        effect: "fade",
        resistance: true,
        resistanceRatio: 0,
        pagination: {
            el: ".swiper-pagination3",
            clickable: !0,
        },
        autoplay: {
            delay: 6500,
            disableOnInteraction: !1,
        },
    }),
    swiper4 = new Swiper(".swiper4", {
        spaceBetween: 0,
        effect: "fade",
        resistance: true,
        resistanceRatio: 0,
        pagination: {
            el: ".swiper-pagination4",
            clickable: !0,
        },
        autoplay: {
            delay: 7500,
            disableOnInteraction: !1,
        },
    }),
    swiper = new Swiper(".swiper5", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: false,
        resistance: true,
        resistanceRatio: 0,
        pagination: {
            el: ".swiper-pagination",
            clickable: !0,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            "@0.00": {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            "@0.75": {
                slidesPerView: 2,
                spaceBetween: 0,
            },
        },
    });
(swiper = new Swiper(".swiper6", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: false,
    resistance: true,
    resistanceRatio: 0,
    pagination: {
        el: ".swiper-pagination",
        clickable: !0,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        "@0.00": {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        "@0.75": {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        "@1.00": {
            slidesPerView: 3,
            spaceBetween: 0,
        },
    },
})),
(swiper = new Swiper(".swiper7", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: false,
    resistance: true,
    resistanceRatio: 0,
    pagination: {
        el: ".swiper-pagination",
        clickable: !0,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        "@0.00": {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        "@0.75": {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        "@1.00": {
            slidesPerView: 3,
            spaceBetween: 0,
        },
        "@1.50": {
            slidesPerView: 4,
            spaceBetween: 0,
        },
    },
}));

/** Hamburger Menu */
var forEach = function(t, o, r) {
    if ("[object Object]" === Object.prototype.toString.call(t))
        for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
    else
        for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t);
};

var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
    forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener(
            "click",
            function() {
                this.classList.toggle("is-active");
            },
            false
        );
    });
}

/** Validation Form */
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict'

    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation')

        // Loop over them and prevent submission
        Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false)
        })
    }, false)
}())

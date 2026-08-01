document.addEventListener("DOMContentLoaded", function () {

    // ===========================
    // BOOKING FORM
    // ===========================

    const bookingForm = document.getElementById("booking-form");

    if (bookingForm) {

        bookingForm.addEventListener("submit", function (e) {

            e.preventDefault();

            emailjs.sendForm(
                "service_ikavjuc",
                "template_d6x5fa8",
                this
            )
            .then(function () {

                const modal = document.getElementById("successModal");

                if (modal) {

                    modal.classList.add("show");

                    setTimeout(() => {
                        modal.classList.remove("show");
                    }, 5000);

                }

                bookingForm.reset();

            })
            .catch(function (error) {

                console.error(error);

                alert("Booking could not be sent.");

            });

        });

    }

    // ===========================
    // CONTACT FORM
    // ===========================

    const contactForm = document.getElementById("contact-form");

    if (contactForm) {

        contactForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const button = contactForm.querySelector("button");
            const originalText = button.innerHTML;

            button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            button.disabled = true;

            emailjs.sendForm(
                "service_ikavjuc",
                "template_d6x5fa8",
                this
            )
.then(function () {

    const modal = document.getElementById("successModal");

    if (modal) {

        modal.classList.add("show");

        setTimeout(() => {

            modal.classList.remove("show");

        }, 5000);

    }

    contactForm.reset();

})
            .catch(function (error) {

                console.error(error);

                alert("Your message could not be sent.");

            })
            .finally(function () {

                button.innerHTML = originalText;
                button.disabled = false;

            });

        });

    }

    // ===========================
    // SUCCESS MODAL
    // ===========================

    const closeSuccess = document.getElementById("closeSuccess");

    if (closeSuccess) {

        closeSuccess.addEventListener("click", function () {

            document
                .getElementById("successModal")
                .classList.remove("show");

        });

    }

});
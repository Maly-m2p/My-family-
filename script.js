let currentLanguage = "fr";
/* ===================================================== WEBSITE TRANSLATIONS ===================================================== */ 
const translations = {

    fr: {
        showPhotos: "Voir les photos",
        hidePhotos: "Masquer les photos"
    },

    en: {
        showPhotos: "View photos",
        hidePhotos: "Hide photos"
    },

    sw: {
        showPhotos: "Tazama picha",
        hidePhotos: "Ficha picha"
    },

    ln: {
        showPhotos: "Tala bafɔtɔ",
        hidePhotos: "Bomba bafɔtɔ"
    }

};

    /* =====================================================
       BIRTHDAY POPUP
    ===================================================== */

    const birthdayButtons =
        document.querySelectorAll(".birthday-button");

    const birthdayModal =
        document.getElementById("birthdayModal");

    const birthdayClose =
        document.getElementById("birthdayClose");

    const birthdayPerson =
        document.getElementById("birthdayPerson");

    const birthdayDay =
        document.getElementById("birthdayDay");

    const birthdayMonth =
        document.getElementById("birthdayMonth");


    const months = {

        fr: [
            "JANVIER", "FÉVRIER", "MARS", "AVRIL",
            "MAI", "JUIN", "JUILLET", "AOÛT",
            "SEPTEMBRE", "OCTOBRE", "NOVEMBRE", "DÉCEMBRE"
        ],

        en: [
            "JANUARY", "FEBRUARY", "MARCH", "APRIL",
            "MAY", "JUNE", "JULY", "AUGUST",
            "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
        ],

        sw: [
            "JANUARI", "FEBRUARI", "MACHI", "APRILI",
            "MEI", "JUNI", "JULAI", "AGOSTI",
            "SEPTEMBA", "OKTOBA", "NOVEMBA", "DESEMBA"
        ],

        ln: [
            "YANUARI", "FEBRUARI", "MARS", "APRILI",
            "MAI", "YUNI", "YULI", "AUGUSTI",
            "SEPTEMBA", "OKTOBA", "NOVEMBA", "DESEMBA"
        ]

    };


    birthdayButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const name =
                button.getAttribute("data-name");

            const birthday =
                button.getAttribute("data-birthday");

            if (!birthday) return;

            const parts =
                birthday.split("-");

            const day =
                parts[0];

            const month =
                parseInt(parts[1], 10);


            if (birthdayPerson) {
                birthdayPerson.textContent = name;
            }

            if (birthdayDay) {
                birthdayDay.textContent = day;
            }

            if (birthdayMonth) {

                birthdayMonth.textContent =
                    months[currentLanguage][month - 1];

            }


            if (birthdayModal) {

                birthdayModal.classList.add("active");

            }

        });

    });


    if (birthdayClose && birthdayModal) {

        birthdayClose.addEventListener("click", function () {

            birthdayModal.classList.remove("active");

        });


        birthdayModal.addEventListener("click", function (event) {

            if (event.target === birthdayModal) {

                birthdayModal.classList.remove("active");

            }

        });

    }


    /* =====================================================
       GALLERY
    ===================================================== */

    const showGalleryButton =
        document.getElementById("showGalleryButton");

    const galleryPhotos =
        document.getElementById("galleryPhotos");

if (showGalleryButton && galleryPhotos) {

    showGalleryButton.addEventListener("click", function () {

        if (galleryPhotos.hidden) {

            galleryPhotos.hidden = false;

            showGalleryButton.innerHTML =
                translations[currentLanguage].hidePhotos +
                ' <span>↑</span>';

        } else {

            galleryPhotos.hidden = true;

            showGalleryButton.innerHTML =
                translations[currentLanguage].showPhotos +
                ' <span>→</span>';

        }

    });

}
    

/* =====================================================
   LANGUAGE SELECTOR — GOOGLE TRANSLATE
===================================================== */

const languageButton =
    document.getElementById("languageButton");

const languageMenu =
    document.getElementById("languageMenu");

const languageSelector =
    document.querySelector(".language-selector");


if (languageButton && languageMenu && languageSelector) {

    /* Open / close dropdown */
    languageButton.addEventListener("click", function (event) {

        event.stopPropagation();

        languageSelector.classList.toggle("active");

    });


    /* Language options */
    languageMenu
        .querySelectorAll("[data-language]")
        .forEach(function (button) {

            button.addEventListener("click", function (event) {

                event.stopPropagation();

                const language =
                    this.getAttribute("data-language");
                    currentLanguage = language;

                const googleSelect =
                    document.querySelector(".goog-te-combo");


                /* Tell Google Translate which language to use */
                if (googleSelect) {

                    googleSelect.value = language;

                    googleSelect.dispatchEvent(
                        new Event("change", {
                            bubbles: true
                        })
                    );

                }


                /* Update our custom button */
                const languageNames = {

                    fr: "🇫🇷 Français",

                    en: "🇬🇧 English",

                    sw: "🇰🇪 Kiswahili",

                    ln: "🇨🇩 Lingála"

                };


                if (languageNames[language]) {

                    languageButton.innerHTML =
                        languageNames[language] +
                        ' <span>⌄</span>';

                }


                /* Close dropdown */
                languageSelector.classList.remove("active");

            });

        });


    /* Close dropdown when clicking somewhere else */
    document.addEventListener("click", function (event) {

        if (!languageSelector.contains(event.target)) {

            languageSelector.classList.remove("active");

        }

    });

}

/* =====================================================
   KEEP GOOGLE TRANSLATE UI COMPLETELY HIDDEN
===================================================== */

function hideGoogleTranslateUI() {

    const googleElements = document.querySelectorAll(
        ".goog-te-banner-frame, " +
        ".goog-te-ftab, " +
        ".goog-te-balloon-frame, " +
        ".goog-tooltip, " +
        ".goog-text-highlight, " +
        ".goog-te-menu-frame, " +
        ".goog-te-gadget, " +
        ".goog-te-spinner-pos"
    );

    googleElements.forEach(function (element) {

        element.style.display = "none";
        element.style.visibility = "hidden";
        element.style.opacity = "0";
        element.style.pointerEvents = "none";

    });

    document.body.style.top = "0";
}


/* Hide Google's UI immediately */
hideGoogleTranslateUI();


/* Watch for Google creating its UI again */
const googleTranslateObserver =
    new MutationObserver(function () {

        hideGoogleTranslateUI();

    });


googleTranslateObserver.observe(
    document.body,
    {
        childList: true,
        subtree: true
    }
);
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("mobile-open");
});
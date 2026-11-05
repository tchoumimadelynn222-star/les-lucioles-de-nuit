
// MENU POUR TELEPHONE

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", function () {

    navigation.classList.toggle("active");

    const isOpen = navigation.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";

});

// FERMER LE MENU APRES UN CLIC

const menuLinks = document.querySelectorAll("#navigation a");

menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navigation.classList.remove("active");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");

    });

});

// COPIER LE NUMERO WAVE

const copyButton = document.getElementById("copyButton");
const waveNumber = document.getElementById("waveNumber");
const copyMessage = document.getElementById("copyMessage");

copyButton.addEventListener("click", async function () {

    const number = waveNumber.textContent.trim();

    try {

        await navigator.clipboard.writeText(number);

        copyMessage.textContent = "✓ Numéro copié avec succès !";

    } catch (error) {

        copyMessage.textContent =
            "Copie impossible. Veuillez sélectionner le numéro.";

    }

});

// ANNEE AUTOMATIQUE

document.getElementById("year").textContent =
    new Date().getFullYear();

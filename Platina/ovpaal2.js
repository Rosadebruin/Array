// passagiers data

let passagiers = [
  { id: 163821, naam: "Leo Daams", saldo: 34, woonplaats: "Den Bosch", foto: "https://img.freepik.com/vrije-photo/pretty-glimlachend-vreugdevolle-vrouw-met-blond-haar-terloops-gekleed-op-zoek-naar-tevredenheid_176420-15187.jpg" },
  { id: 145032, naam: "Nicole Hops", saldo: 18, woonplaats: "Maastricht" },
  { id: 139523, naam: "Jacobs Boom", saldo: 53, woonplaats: "Roermond" },
  { id: 120584, naam: "Naomi Groentenboer", saldo: 31, woonplaats: "Herkenbosch" },
  { id: 178294, naam: "Sanne Verbeek", saldo: 42, woonplaats: "Eindhoven" },
  { id: 156783, naam: "Tom Peters", saldo: 27, woonplaats: "Utrecht" },
  { id: 189405, naam: "Lisa van Dijk", saldo: 65, woonplaats: "Amsterdam" },
  { id: 167320, naam: "Kees Brouwer", saldo: 12, woonplaats: "Tilburg" },
  { id: 194876, naam: "Anouk Smit", saldo: 38, woonplaats: "Nijmegen" },

];


// geluidje voor als je incheckt
const checkSound = new Audio('inchecken platina backend.mp3');


// Functies
function toonPassagiers() {
const container = document.getElementById('passagiers-container');
container.innerHTML = '';

 passagiers.forEach(p => {
        const kaart = document.createElement('div');
        kaart.className = 'passagier-kaart';
        kaart.innerHTML = `
            <img src="${p.foto}" alt="${p.naam}">
            <div class="passagier-info">
                <strong>${p.naam}</strong>
                Saldo: €${p.saldo} (${p.woonplaats})
            </div>
            <div class="actions">
                <button onclick="mutatieSaldo(${p.id}, -7)">Check in</button>
                <button onclick="verwijderPassagier(${p.id})" class="btn-delete">X</button>
            </div>
        `;
        container.appendChild(kaart);
    });

}

// Nieuwe passagiers toevoegen aan de lijst
function voegPassagierToe(id, naam, saldo, woonplaats) {
  passagiers.push({ 
    id, 
    naam, 
    saldo, 
    woonplaats 
  });
  toonPassagiers();
}

function mutatieSaldo(id, bedrag) {
    let reiziger = passagiers.find(p => p.id === id);
    if (reiziger) {
        reiziger.saldo += bedrag;
        checkSound.play().catch(() => {
            console.log("Geluid geblokkeerd: klik eerst ergens op de pagina.");
        });
        toonPassagiers();
    }
}

function verwijderPassagier(id) {
    passagiers = passagiers.filter(p => p.id !== id);
    toonPassagiers();
}


    // Kans op nieuwe passagiers die instappen
    if (Math.random() > 0.5) {
        const nieuwId = Math.floor(Math.random() * 999999);
        const namen = ["Timur", "Jarno", "Milan", "Mustafa", "Dillan"];
        const naam = namen[Math.floor(Math.random() * namen.length)];
        voegPassagierToe(nieuwId, naam, 20, "Onbekend");
    }

function updateBusLocatie() {
    // Reset alle haltes visueel
    for (let i = 0; i < totaalHaltes; i++) {
        const halteElement = document.getElementById(`halte-${i}`);
        if (halteElement) {
            halteElement.classList.remove('current');
            halteElement.innerText = halteElement.innerText.replace(' (Huidig)', '');
        }
    }

    // Zet de bus op de nieuwe halte
    const actueleHalte = document.getElementById(`halte-${huidigeHalteIndex}`);
    if (actueleHalte) {
        actueleHalte.classList.add('current');
        actueleHalte.innerText += ' (Huidig)';
    }

    verwerkHalteGebeurtenissen();

    // Verhoog index voor de volgende 20 seconden
    huidigeHalteIndex = (huidigeHalteIndex + 1) % totaalHaltes;
}

// Elke 20 seconden naar de volgende halte
setInterval(updateBusLocatie, 20000);

// start simulatie op laden
window.onload = () => {
    toonPassagiers();
    updateBusLocatie();
};
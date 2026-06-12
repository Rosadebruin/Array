// passagiers data

let passagiers = [
  { id: 163821, naam: "Leo Daams", saldo: 34, woonplaats: "Den Bosch", foto: "https://static.vecteezy.com/system/resources/previews/063/477/498/non_2x/illustration-of-generic-male-avatar-in-gray-tones-for-anonymous-profile-placeholder-with-neutral-expression-designed-for-use-in-online-platforms-and-social-media-vector.jpg" },
  { id: 145032, naam: "Nicole Hops", saldo: 18, woonplaats: "Maastricht", foto: "https://i.pinimg.com/736x/1b/2e/31/1b2e314e767a957a44ed8f992c6d9098.jpg"},
  { id: 139523, naam: "Jacobs Boom", saldo: 53, woonplaats: "Roermond", foto: "https://i.pinimg.com/736x/1b/2e/31/1b2e314e767a957a44ed8f992c6d9098.jpg"}, 
  { id: 120584, naam: "Naomi Groentenboer", saldo: 31, woonplaats: "Herkenbosch", foto: "https://i.pinimg.com/736x/1b/2e/31/1b2e314e767a957a44ed8f992c6d9098.jpg"}, 
  { id: 178294, naam: "Sanne Verbeek", saldo: 42, woonplaats: "Eindhoven", foto: "https://i.pinimg.com/736x/1b/2e/31/1b2e314e767a957a44ed8f992c6d9098.jpg"}, 
  { id: 156783, naam: "Tom Peters", saldo: 27, woonplaats: "Utrecht", foto: "https://static.vecteezy.com/system/resources/previews/063/477/498/non_2x/illustration-of-generic-male-avatar-in-gray-tones-for-anonymous-profile-placeholder-with-neutral-expression-designed-for-use-in-online-platforms-and-social-media-vector.jpg" },
  { id: 189405, naam: "Lisa van Dijk", saldo: 65, woonplaats: "Amsterdam", foto: "https://i.pinimg.com/736x/1b/2e/31/1b2e314e767a957a44ed8f992c6d9098.jpg"},
  { id: 167320, naam: "Kees Brouwer", saldo: 12, woonplaats: "Tilburg", foto: "https://static.vecteezy.com/system/resources/previews/063/477/498/non_2x/illustration-of-generic-male-avatar-in-gray-tones-for-anonymous-profile-placeholder-with-neutral-expression-designed-for-use-in-online-platforms-and-social-media-vector.jpg" },
  { id: 194876, naam: "Anouk Smit", saldo: 38, woonplaats: "Nijmegen", foto: "https://i.pinimg.com/736x/1b/2e/31/1b2e314e767a957a44ed8f992c6d9098.jpg"},

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
        });
        toonPassagiers();
    }
}

function verwijderPassagier(id) {
    passagiers = passagiers.filter(p => p.id !== id);
    toonPassagiers();
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
    
    verwerkHalteGebeurtenissen();

    // Verhoog index voor de volgende 20 seconden
    huidigeHalteIndex = (huidigeHalteIndex + 1) % totaalHaltes;
}


// start simulatie op laden
window.onload = () => {
    toonPassagiers();
    updateBusLocatie();
};
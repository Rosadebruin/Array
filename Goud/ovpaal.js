// Goud Opdracht 1:
let passagiers = [
  { id: 163821, naam: "Leo Daams", saldo: 34, woonplaats: "Den Bosch" },
  { id: 145032, naam: "Nicole Hops", saldo: 18, woonplaats: "Maastricht" },
  { id: 139523, naam: "Jacobs Boom", saldo: 53, woonplaats: "Roermond" },
  { id: 120584, naam: "Naomi Groentenboer", saldo: 31, woonplaats: "Herkenbosch" }
];
// Goud Opdracht 2:

// Passagier
function toonPassagiers() {
  console.log("--<3- Lijst van de passagiers -<3--");
  passagiers.forEach(p => {
    console.log(`ID: ${p.id} | Naam: ${p.naam} | Saldo: €${p.saldo} | Stad: ${p.woonplaats}`);
  });
}


// Nieuwe passagiers toevoegen aan de lijst
function voegPassagierToe(id, naam, saldo, woonplaats) {
  passagiers.push({ id, naam, saldo, woonplaats });
}


// Opladen van de OV-pas
function OpladenOV(id, bedrag) {
  let reiziger = passagiers.find(p => p.id === id);
  if (reiziger) {
    reiziger.saldo += bedrag;
    console.log(`Saldo van ${reiziger.naam} is nu: €${reiziger.saldo}`);
  }
}

// Inchecken/uitchecken van de OV-pas (saldo gaat eraf)
function MinderenOV(id, bedrag) {
  let reiziger = passagiers.find(p => p.id === id);
  if (reiziger) {
    reiziger.saldo -= bedrag;
    console.log(`Saldo van ${reiziger.naam} is nu: €${reiziger.saldo}`);
  }
}



// Verwijderen van een passagier
function VerwijderPassagier(id) {
  passagiers = passagiers.filter(p => p.id !== id);
}


// Testen van de calls 


// call passagier tonen
toonPassagiers()

voegPassagierToe(143678, "Rosa de Bruin", 45, "Boukoul");
toonPassagiers();

// call Opladen OV-pas
OpladenOV(143678, 45)

// call Inchecken/uitchecken OV-pas
MinderenOV(143678, 45)

// call Verwijderen van een passagier
VerwijderPassagier(163821)
//zilver opdracht 1:
const namen = ["Rosa de Bruin", "Naomi Smulders", "Mika Willems", "Nick Willems", "Colin Greenwood", "Max Nikoliszyn", "Sem Vaessen", "Desiree Lonissen", "Wim de Bruin", "Isa de Bruin"];

for (let i = 0; i < namen.length; i++) {
  console.log(namen[i]);
}

//zilver opdracht 2:
namen.push("Makreel jacobs");
for (let i = 0; i < namen.length; i++) {
  console.log(namen[i]);
}

//zilver opdracht 3:
namen.splice(4, 1);

for (let i = 0; i < namen.length; i++) {
  console.log(namen[i]);
}

//zilver opdracht 4:
namen.sort(() => Math.random() - 0.5);

//zilver opdracht 5:
while (namen.length > 0) {
  const passagier = namen.shift();
  console.log(`${passagier} stapt uit.`);
  console.log(`Nog ${namen.length} passagiers over.`);
}

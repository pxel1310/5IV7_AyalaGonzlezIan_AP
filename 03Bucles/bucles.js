const razasDePerros = [
  "Gran Danes",
  "Dogo de Burdeos",
  "Dogo Argentino",
  "San Bernardo",
  "Chuhuahua",
  "Pastor Aleman",
  "Lobero irlandes",
  "Pitbull",
];

for (let i = 0; razasDePerros.length; i++) {
  console.log(razasDePerros[i]);
}

for (const raza of razasDePerros) {
  console.log(raza);
}

for (const i in razasDePerros) {
  console.log(razasDePerros[i]);
}

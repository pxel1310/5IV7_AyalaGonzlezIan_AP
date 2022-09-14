razasDePerros.forEach((raza, i, arregloOriginal) => console.log(raza));

razasDePerros.forEach((raza) => console.log(raza));

const razasDePerrosEnMayusculas = razasDePerros.map(
  (raza, i, arregloOriginal) => raza.toLocaleUpperCase
);

if (
  razasDePerrosEnMayusculas.find(
    (raza, i, arregloOriginal) => raza === "Chihuahua"
  )
) {
  console.log("La raza si se encontro");
} else {
  razasDePerrosEnMayusculas.push("Chihuahua");
  console.log("Se agrego");
}

const indiceChihuahua = razasDePerros.findIndex(
  (raza, i, arregloOriginal) => raza === "Chihuahua"
);

if (indiceChihuahua > -1) {
  console.log(razasDePerros[indiceChihuahua]);
  razasDePerros[indiceChihuahua] += "(Raza de pequeño)";
  console.log(razasDePerros[indiceChihuahua])
} else {
}

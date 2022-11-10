const sharp = require("sharp");

/* sharp("./Imagenes/destiny_900")
    .resize(50)
    .toFile("./Imagenes/Avedsp") */

const images = ["destiny.jpg", "kun.jpg", "messi.jpg", "yuumi.jpg"];
const percentages = [15, 35, 50];

for (let img of images) {
  for(let percentage of percentages){
    resize(`./Imagenes/${img}`, percentage); 
  }
}

function resize(ruta, tamaño) {
  
  const resizes = tamaño / 100;

  let arrRuta = ruta.split("/");
  console.log(arrRuta);
  let file = arrRuta.pop();
  let folder = arrRuta.join("/");
  let arrFile = file.split('.');
  let filename = arrFile[0];
  let extend = arrFile[1];

  sharp(`${ruta}`)
  .metadata()
  .then(({ width }) =>
    sharp(`${ruta}`)
      .resize(Math.round(width * resizes))
      .toFile(`${folder}/${filename}-${tamaño}.${extend}`)
  );

}
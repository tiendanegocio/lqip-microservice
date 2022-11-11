import sharp from "sharp";

/*
const images = ["destiny.jpg", "kun.jpg", "messi.jpg", "yuumi.jpg","a.png"];

for (let img of images) {
  for(let percentage of percentages){
    resize(`./Imagenes/${img}`, percentage); 
  }
}
*/

const percentages = [0.15, 0.35, 0.50, 0.75];

export async function resize(ruta) {
  
  let arrRuta = ruta.split("/");
  let file = arrRuta.pop();
  let folder = "./Imagenes";
  let arrFile = file.split('.');
  let filename = arrFile[0];
  
  await sharp(`${ruta}`)
    .metadata()
    .then(({ format }) =>
      sharp(`${ruta}`)
      .toFile(`${folder}/${filename}.${format}`)
    );

  for(let percentage of percentages){

    const percentagePrefix = percentage * 100;

    await sharp(`${ruta}`)
    .metadata()
    .then(({ width, format }) =>
      sharp(`${ruta}`)
        .resize(Math.round(width * percentage))
        .toFile(`${folder}/${filename}-${percentagePrefix}.${format}`)
    );
    
  }
  

}

import sharp from "sharp";
import fs from "fs/promises";
/*
const images = ["destiny.jpg", "kun.jpg", "messi.jpg", "yuumi.jpg","a.png"];

for (let img of images) {
  for(let percentage of sizes){
    resize(`./Imagenes/${img}`, percentage); 
  }
}
*/

const sizes = [16, 30, 60, 120];

export async function resize(ruta) {
  let arrRuta = ruta.split("/");
  let file = arrRuta.pop();
  let folder = "./Imagenes";
  let arrFile = file.split(".");
  let filename = arrFile[0];

  await sharp(ruta)
    .metadata()
    .then(async ({ format }) => {
      await fs.copyFile(ruta, `${folder}/${filename}.${format}`);
    });

  for (let size of sizes) {
    await sharp(ruta)
      .metadata()
      .then(
        async ({ format }) =>
          await sharp(`${ruta}`)
            .resize(size)
            .toFile(`${folder}/${filename}-${size}.${format}`)
      );
  }
}

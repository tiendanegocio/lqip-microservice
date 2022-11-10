const fs = require('fs/promises');

async function copyFile (filename, newFilename){

    console.log(filename, newFilename);

    const datos = await fs.readFile(filename);

    console.log("Datos:", datos);

    await fs.writeFile(newFilename, datos);

    console.log("Archivo guardado:", newFilename);

}


const arrayFiles = ["destiny.jpg", "kun.jpg", "messi.jpg", "yuumi.jpg"];
const arrayPorcentaje = [15, 50];

for(const file of arrayFiles){

    const fileSplit = file.split('.')
    const filename= fileSplit[0]
    const extension =fileSplit[1]

 
    for (const porcentaje of arrayPorcentaje){
    
        const newFile = `${filename}_${porcentaje}.${extension}`; 
        console.log(newFile);
        copyFile("./Imagenes/"+file, "./Imagenes/"+newFile);
    }
}

/* copyFile("./Imagenes/destiny.jpg", "./Imagenes/destiny_900.jpg");
copyFile("./Imagenes/kun.jpg", "./Imagenes/kun_100.jpg");
copyFile("./Imagenes/messi.jpg", "./Imagenes/messi_15.jpg");
copyFile("./Imagenes/yuumi.jpg", "./Imagenes/yuumi_40.jpg"); */
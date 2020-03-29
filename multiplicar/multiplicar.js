const fs = require('fs');
//const fs = require('express');
//const fs = require('./');


let data = '';


let listarTabla = ((base, limite = 10) => {

    for (let i = 0; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }


})

let crearArchivo = ((base) => {

    return new Promise((resolve, reject) => {


        for (let i = 1; i <= 10; i++) {
            data += `${base} * ${i} =${base*i}\n`;
        }


        fs.writeFile(`tablas/table-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else {
                resolve(`El archivo de la tabla del ${base} ah sido creado`);
            }

        })
    });


});




module.exports = {
    crearArchivo,
    listarTabla
}
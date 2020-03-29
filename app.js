const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },

        limite: {
            default: 10,
            alias: 'l'



        }
    }).help
    .argv

    .argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base).then(archivo => console.log(`Archivo creado ${archivo}`));
        break;
    default:
        break;
}

let argv2 = process.argv;

console.log(argv);

//let parametro = argv[2];
//let base = parametro.split('=')[1];
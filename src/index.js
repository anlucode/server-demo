import '@babel/polyfill';
import app from './server';


// funcion principal del archivo
async function main() {
    await app.listen(app.get('port'));
    console.log('server en puerto', app.get('port'));
}

main();
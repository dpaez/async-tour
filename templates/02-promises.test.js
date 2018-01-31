/** Utility fns **/
function httpRequest(url, options){
    return new Promise((resolve, reject) => {
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
        if (getRandomInt(1,3) === 2){
            setTimeout(reject({status: 500, message: 'SERVER ERROR'}), 1500);
        } else {
            setTimeout(resolve({status: 200, message: 'SUCCESS'}), 1000);
        }
    });
}

/** END utility fns **/

test('operar con promesas: manejar errores', () => {

    // WORKSHOP_START
    // Objetivo: usar la función httpRequest para simular un request a la url: `http://example.com/item1`.
    // httpRequest nos retorna una promesa. Esta funcion puede fallar (log the error).
    // WORKSHOP_END

    // FINAL_START
    httpRequest('http://example.com/item1', {})
        .then(result => {
            expect(result).toBe(null);
        })
        .catch(err => {
            expect(err.status).toBe(500);
            console.log(err.message);
        });
    // FINAL_END

    // WORKSHOP_START
    // httpRequest(...
    // expect(err.status).toBe(500;)
    // WORKSHOP_END
});

test('encadenar promesas', () => {

    // WORKSHOP_START
    // Objetivo: realizar una operación en pasos, usando el resultado de otra promesa.
    // Tenemos 2 funciones:
    //   - pedirHamburguesa: retorna una promesa, que si se cumple nos da una hamburguesa simple.
    //   - aderezo(hamburguesa, {'mostaza'|'ketchup'|'mayonesa'}): retorna la hamburguesa lista para comer.
    // WORKSHOP_END



});

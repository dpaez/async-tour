/** Utility fns **/

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function httpRequest(url, options){
    return new Promise((resolve, reject) => {
        setTimeout(() => { reject(new Error('SERVER ERROR')) }, 1500);
    });
}

const Hamburguesa = {
    pan: '',
    aderezo: ''
};

const McDouglas = {
    pedirHamburguesa: () => {
        return `ticket-${getRandomInt(10000, 20000)}`;
    },
    retirarHamburguesa: (orden) => {
        return Promise.resolve(Object.create(Hamburguesa));
    },
    elegirPan: (burguer, tipoDePan) => {
        if (burguer && typeof tipoDePan === 'string'){
            burguer.pan = tipoDePan;
            return burguer;
        }
        else {
            return new Error('Una Hamburguesa y un tipo de pan son necesarios.');
        }
    },
    agregarAderezo: (burguer, tipoDeAderezo) => {
        if (burguer && typeof tipoDeAderezo === 'string'){
            burguer.aderezo = tipoDeAderezo;
            return burguer;
        }
        else {
            return new Error('Una Hamburguesa y un tipo de aderezo son necesarios.');
        }
    }
};

/** END utility fns **/

test('operar con promesas: manejar errores', () => {

    expect.assertions(2);
    // Objetivo: usar la función httpRequest para simular un request a la url: `http://example.com/item1`.
    // httpRequest nos retorna una promesa. Esta funcion puede fallar (log the error).


    // httpRequest(...
    // expect(err.message).toBe('SERVER ERROR');
});

test('encadenar promesas', () => {
    expect.assertions(3);
    // sync - 1er paso
    const orden = McDouglas.pedirHamburguesa();

    // Objetivo: realizar una operación en pasos, usando en cada paso el resultado de otra promesa.
    // Tenemos el objeto McDouglas con la siguiente API:
    //   - retirarHamburguesa(orden)
    //   - elegirPan(hamburguesa, {'semillas'|'gluten-free'|'standard'})
    //   - agregarAderezo(hamburguesa, {'mostaza'|'ketchup'|'mayonesa'}): retorna otra promesa con la hamburguesa (completa) lista para comer.
    // Tenemos que lograr consumir una hamburguesa con ketchup.

    // async - encadenar promesas
    return McDouglas.
        .then((hamburguesa) => {

        })
        // ...
        .then((miHamburguesa) => {
            expect(miHamburguesa).toBeDefined();
            expect(miHamburguesa.pan).toBe('semillas');
            expect(miHamburguesa.aderezo).toBe('ketchup');
        })
        .catch((err) => {
            console.log(err);
        })


});

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

    return httpRequest('http://example.com/item1', {})
        .then(result => {
            console.log('no result')
        })
        .catch(err => {
            expect(err).toBeDefined();
            expect(err.message).toBe('SERVER ERROR');
            console.log(err.message);
        });

});

test('encadenar promesas', () => {
    expect.assertions(3);
    // sync - 1er paso
    const orden = McDouglas.pedirHamburguesa();


    // async
    return McDouglas.retirarHamburguesa(orden)
        .then((hamburguesa) => {
            return McDouglas.elegirPan(hamburguesa, 'semillas');
        })
        .then((hamburguesaSimple) => {
            return McDouglas.agregarAderezo(hamburguesaSimple, 'ketchup'); // hamburguesa lista!
        })
        .then((miHamburguesa) => {
            expect(miHamburguesa).toBeDefined();
            expect(miHamburguesa.pan).toBe('semillas');
            expect(miHamburguesa.aderezo).toBe('ketchup');
        })
        .catch((err) => {
            console.log(err);
        })

});

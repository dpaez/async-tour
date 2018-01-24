/** utility fns **/
function getFnName(fn) {
    var f = typeof fn == 'function';
    var s = f && ((fn.name && ['', fn.name]) || fn.toString().match(/function ([^\(]+)/));
    return (!f && 'not a function') || (s && s[1] || 'anonymous');
}

function verifyUser(options, cb){
    setTimeout()
}

test('evitar funciones anonimas: dale un nombre', () => {
    // Objetivo: crear una función con nombre 'sumar' que retorne la suma de su entrada (x,y).

    expect(getFnName(/* TU_FUNCION  */)).toBe('sumar');
    expect(/* TU_FUNCION(1,2) */).toBe(3);
})

test('error handling: capturar el error cuando usamos callbacks', () => {
    function failedHttp(url, cb) {
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }

        let error = null;
        let response = { hola: 'mundo' };
        if (getRandomInt(0,2) === 0){
            error = new Error('failedHttp: bad request');
            response = null;
        }
        cb(error, response);
    }

    expect.assertions(1);


    // Objetivo: manejar el error en la funcion de callback
    // failHttp es una función que simula un request GET que va a fallar,
    // retornando un objeto de Error.
    failedHttp({ url:'http://thecatapi.com/?id=6bd' }, function (){
        // expect(err.message).toBe.('failedHttp: bad request');
    });
}

test('refactor: nombrar funciones y evitar callback hell', () => {

    expect.assertions(4);

    const input = {
        user: 'pepe',
        pwd: 'MyS3cr3t!'
    }


    verifyUser(input, function (err, user){
        expect(getFnName(this).toBe('verifyUserCb'));
        if (err) {
            console.error(err);
            return err;
        }
        console.log('verifyUser response', user);

        getRoles(user.id, function (err, roles){
            expect(getFnName(this).toBe('getRolesCb'));
            if (err) {
                console.error(err);
                return err;
            }
            if (roles === 'read'){
                listResults(user.id, function (err, results){
                    expect(getFnName(this).toBe('listResultsCb'));
                    if (err) {
                        console.error(err);
                        return err;
                    }
                    console.log('listResults', results);
                    expect(results).toEqual({
                        status: 200,
                        items: [101,202,303]
                    })
                    return results;
                })
            } else {
                return new Error('access denied');
            }
        })
    });
})

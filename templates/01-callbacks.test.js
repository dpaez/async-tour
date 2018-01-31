/** utility fns **/
function getFnName(fn) {
    var f = typeof fn == 'function';
    var s = f && ((fn.name && ['', fn.name]) || fn.toString().match(/function ([^\(]+)/));
    return (!f && 'not a function') || (s && s[1] || 'anonymous');
}

function verifyUser(options, cb){
    setTimeout(cb(null, { name:'pepe', id:5 }), 2000);
}

function getRoles(options, cb){
    setTimeout(cb(null, { permissions: ['read'] }), 1000);
}

function listResults(options, cb){
    setTimeout(cb(null, ['result1', 'result2', 'result3']), 1500);
}
/** END utility fns  */

test('evitar funciones anonimas: dale un nombre', () => {
    // WORKSHOP_START
    // Objetivo: crear una función con nombre 'sumar' que retorne la suma de su entrada (x,y).
    // WORKSHOP_END

    // FINAL_START
    function sumar (x,y) {
        return x + y;
    }

    expect(getFnName(sumar)).toBe('sumar');
    // FINAL_END
    // WORKSHOP_START
    expect(getFnName(/* TU_FUNCION  */)).toBe('sumar');
    expect(/* TU_FUNCION(1,2) */).toBe(3);
    // WORKSHOP_END
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

    // FINAL_START
    failedHttp({ url:'http://thecatapi.com/?id=6bd' }, function (err, response){
        if (err){
            expect(err.message).toBe.('failedHttp: bad request');
            return;
        }
        return response;
    });
    // FINAL_END

    // WORKSHOP_START
    // Objetivo: manejar el error en la funcion de callback
    // failHttp es una función que simula un request GET que va a fallar,
    // retornando un objeto de Error.
    failedHttp({ url:'http://thecatapi.com/?id=6bd' }, function (){
        // expect(err.message).toBe.('failedHttp: bad request');
    });
    // WORKSHOP_END
}

test('refactor: nombrar funciones y evitar callback hell', () => {

    // WORKSHOP_START
    // Objetivo: refactorear para mejorar la legibilidad del código y evitar callback hell.
    // WORKSHOP_END
    expect.assertions(4);

    const input = {
        user: 'pepe',
        pwd: 'MyS3cr3t!'
    }

    // FINAL_START
    function verifyUserCb(err, user){
        expect(getFnName(this).toBe('verifyUserCb'));
        if (err) {
            console.error(err);
            return err;
        }

        getRoles(user.id, getRolesCb);
    }
    function getRolesCb(err, roles){
        expect(getFnName(this).toBe('getRolesCb'));
        if (err) {
            console.error(err);
            return err;
        }
        if (roles === 'read'){
            listResults(user.id, listResultsCb);
        } else {
            return new Error('access denied');
        }
    }

    function listResultsCb(err, results){
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
    }

    verifyUser(input, verifyUserCb);
    // FINAL_END

    // WORKSHOP_START
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
            if (roles.permissions.indexOf('read') > -1){
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
    // WORKSHOP_END
})

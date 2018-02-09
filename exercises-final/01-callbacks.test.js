/** utility fns **/
function getFnName(fn) {
    var f = typeof fn == 'function';
    var s = f && ((fn.name && ['', fn.name]) || fn.toString().match(/function ([^\(]+)/));
    return (!f && 'not a function') || (s && s[1] || 'anonymous');
}

function verifyUser(options, cb){
    setTimeout(() => { cb(null, { name:'pepe', id:5 }) }, 2000);
}

function getRoles(options, cb){
    setTimeout(() => { cb(null, { permissions: ['read'] }) }, 1000);
}

function listResults(cb){
    setTimeout(() => { cb(null, {status: 200, items: [101,202,303]}) }, 1500);
}
/** END utility fns  */

test('evitar funciones anonimas: dale un nombre', () => {

    function sumar (x,y) {
        return x + y;
    }
    expect(getFnName(sumar)).toBe('sumar');
    expect(sumar(1,2)).toBe(3);
})

test('error handling: capturar el error cuando usamos callbacks', () => {

    function failedHttp(url, cb) {
        var error = new Error('failedHttp: bad request');
        var response = null;
        cb(error, response);
    }

    expect.assertions(2);

    failedHttp({ url:'http://thecatapi.com/?id=6bd' }, function (err, response){
        if (err){
            expect(err).toBeDefined();
            expect(err.message).toBe('failedHttp: bad request');
            return;
        }
        return response;
    });

})

test('refactor: nombrar funciones y evitar callback hell', (done) => {


    const input = {
        user: 'pepe',
        pwd: 'MyS3cr3t!'
    }

    function verifyUserCb(err, user){
        console.log('verifyUserCb')
        expect(getFnName(verifyUserCb)).toBe('verifyUserCb');
        if (err) {
            console.error(err);
            return err;
        }

        getRoles(user.id, getRolesCb);
    }
    function getRolesCb(err, roles){
        console.log('getRolesCb')
        expect(getFnName(getRolesCb)).toBe('getRolesCb');
        if (err) {
            console.error(err);
            return err;
        }
        if (roles.permissions.includes('read')){
            listResults(listResultsCb);
        } else {
            return new Error('access denied');
        }
    }

    function listResultsCb(err, results){
        console.log('listResultsCb')
        expect(getFnName(listResultsCb)).toBe('listResultsCb');
        if (err) {
            console.error(err);
            return err;
        }
        console.log('listResults', results);
        expect(results).toEqual({
            status: 200,
            items: [101,202,303]
        })
        done();
    }

    verifyUser(input, verifyUserCb);

})

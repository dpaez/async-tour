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

    function sumar (x,y) {
        return x + y;
    }

    expect(getFnName(sumar)).toBe('sumar');
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

    failedHttp({ url:'http://thecatapi.com/?id=6bd' }, function (err, response){
        if (err){
            expect(err.message).toBe.('failedHttp: bad request');
            return;
        }
        return response;
    });

}

test('refactor: nombrar funciones y evitar callback hell', () => {

    expect.assertions(4);

    const input = {
        user: 'pepe',
        pwd: 'MyS3cr3t!'
    }


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

})

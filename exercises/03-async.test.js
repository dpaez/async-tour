/** Utility fns **/

function httpRequest(url, options){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                statusCode: 200,
                payload: { hola: 'mundo' }
            })
        }, 1500);
    });
}

function failedHttpRequest(url, options){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('Server Error'))
        }, 1500);
    });
}

function getValue1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 1000);
    })
}

function getValue2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2);
        }, 1000);
    })
}

function getValue3(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(3);
        }, 1000);
    })
}
/** END Utility fns **/

test('async/await: primeros pasos', async (done) => {

    expect.assertions(2);
    // Objetivo: Escribir nuestra primer funcion asincrona usando async/await.
    // Vamos a wrappear la función httpRequest con una función async/await: asyncHttpRequest.
    function asyncHttpRequest(){
        // ...
    }


    asyncHttpRequest()
        .then(output => {
            expect(output).toBeDefined();
            expect(output.statusCode).toBe(200);
            done();
        });
});

test('async/await: manejar errores', async (done) => {

    expect.assertions(2);

    // Objetivo: manejar errores cuando usamos funciones async/await
    // Usamos la funcion failedHttpRequest que intenta hacer un request pero va a fallar.

    async function requestWrapper() {
        // ...
        expect(error).toBeDefined();
        expect(error.message).toBe('Server Error');
        done();
    }

    requestWrapper();
});


test('async/await: refactor para aumentar concurrencia', async (done) => {

    // Objetivo: identificar y refactorear el sector de nuestro codigo donde
    // estamos haciendo un trabajo lineal y podemos aumentar la concurrencia de tareas.
    // Pista: usar Promise.all()
    expect.assertions(1);

    async function tasker(){

        const tmp1 = await getValue1();
        const tmp2 = await getValue2();
        const tmp3 = await getValue3();
        return tmp1 + tmp2 + tmp3;
    }

    console.time('async/await');
    tasker()
        .then(out => {
            expect(out).toEqual(6);
            console.timeEnd('async/await');
            done();
        });
});

const html = require('choo/html')
const Nav = require('./components/nav');

module.exports = Callbacks2;

function Notes() {
    return html`
        <div>
            <h3>Referencias:</h3>
            <ul class="list pl0">
                <li class="f5 lh-copy bb b--white-30">
                    <span class="pink">⦿</span> Nombre de la función, util para debugging.
                </li>
                <li class="f5 lh-copy bb b--white-30">
                    <span class="red">⦿</span> Manejo de errores, usando la convención de node: "error first"
                </li>
                <li class="f5 lh-copy bb b--white-30">
                    <span class="yellow">⦿</span> retorno del control a la función invocadora con el resultado de la operación asincronica.
                </li>
            </ul>
        </div>
    `
}

function Callbacks2 (state, emitter) {

    return html`
    <main class="">
        ${Nav(state, emitter)}
        <article class="flex items-center vh-75">
            <ul class="list pl0 center">
                <li>
                    <pre class="code bg-black-80 pa4 f4 f3-l center green">
function <span class="pink">doSomethingAsync</span>(params, callbackFn) {
    // async action...
    if (err){
        <span class="red">return callbackFn(err, null);</span>
    }
    ...
    <span class="yellow">callbackFn(null, result);</span>
}
                    </pre>
                </li>
            </ul>
        </article>
    </main>
    `
}

Callbacks2.notes = Notes;
Callbacks2.centered = false;
Callbacks2.backgroundColor = 'bg-dark-blue';
Callbacks2.color = 'washed-red';
Callbacks2.title = 'Async Tour: callbacks';


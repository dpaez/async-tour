const html = require('choo/html')
const Nav = require('./components/nav');

module.exports = Async1;

function Notes() {
    return html`
        <div>
            <h3>Referencias:</h3>
            <ul class="list pl0">
                <li class="f5 lh-copy bb b--white-30">
                La <a class="link gray no-underline underline-hover" rel="noopener noreferrer" target="_blank" href="https://github.com/tc39/ecmascript-asyncawait">propuesta de async/await</a> a ES7
                </li>
                <li class="f5 lh-copy bb b--white-30">
                Similares a <a href="https://en.wikipedia.org/wiki/Coroutine" class="link gray no-underline underline-hover" rel="noopener noreferrer" target="_blank">corutinas</a>.
                </li>
            </ul>
        </div>
    `
}

function Async1(state, emitter) {

    return html`
    <main class="">
        ${Nav(state, emitter)}
        <article class="flex">
            <ul class=" list pl0 f2-l f3 light-gray measure center">
                <li class="pa3 pa4-ns bb b--black-10">
                    Objetivo: Hacer que operaciones asíncronas <i>parezcan</i> síncronas.
                </li>
                <li class="pa3 pa4-ns bb b--black-10">
                    Nueva sintáxis: <code>async</await> & <code>await</code>
                </li>
                <li class="pa3 pa4-ns">
                    <b>¿Cómo se usa?</b> Dentro de una función marcada como <code>async</code> podemos colocar un <code>await</code> delante de una función que retorne una promesa. Cuando haces esto, la ejecución de la función <code>async</code> es pausada hasta que la promesa se resuelve.
                </li>
            </ul>
        </article>
    </main>
    `
}

Async1.notes = Notes;
Async1.centered = false;
Async1.backgroundColor = 'bg-dark-blue';
Async1.color = 'washed-red';
Async1.title = 'Async Tour: async/await';


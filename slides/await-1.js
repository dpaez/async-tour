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
        <article class="flex items-center vh-75">
            <ul class=" list pl0 f1 f3-m light-gray measure measure-wide-l center">
                <li class="pa3 pa4-ns bb b--black-10">
                    Objetivo: Hacer que operaciones asíncronas <i>parezcan</i> síncronas.
                </li>
                <li class="pa3 pa4-ns bb b--black-10">
                    Nueva sintáxis: <code class="pa1 green bg-black-80">async</await> & <code class="pa1 green bg-black-80">await</code>
                </li>
                <li class="pa3 pa4-ns">
                    <b>¿Cómo se usa?</b> Dentro de una función marcada como <code class="pa1 green bg-black-80">async</code> podemos colocar un <code class="pa1 green bg-black-80">await</code> delante de una función que retorne una promesa. <br>
                    Cuando hacemos esto, la ejecución de la función <code class="pa1 green bg-black-80">async</code> es pausada hasta que la promesa se resuelve.
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


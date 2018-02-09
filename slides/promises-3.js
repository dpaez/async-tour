const html = require('choo/html')
const Nav = require('./components/nav');

module.exports = Promises3;

function Notes() {
    return html`
        <div>
            <ul class="list pl0">
                <li class="f5 lh-copy bb b--white-30">
                Recurso: <a href="http://2ality.com/2016/10/understanding-promises.html" class="link gray no-underline underline-hover" rel="noopener noreferrer" target="_blank">
                Entendiendo promesas
                </a>
                </li>
            </ul>
        </div>
    `
}

function Promises3 (state, emitter) {

    return html`
    <main class="">
        ${Nav(state, emitter)}
        <article class="flex flex-column">
            <h3 class="f2-m f-headline-l fw2 mv3">Consideraciones:</h3>
            <ul class="list pl0 f3 f2-l light-gray center">
                <li class="pa3 pa4-ns bb b--black-10">
                    Una promesa se comporta como una función, siempre esperamos un resultado.
                </li>
                <li class="pa3 pa4-ns bb b--black-10">
                   Pensemos en funciones puras como input para las promesas.
                </li>
                <li class="pa3 pa4-ns bb b--black-10">
                   Composición para encapsular y compartir <i>contexto</i>.
                </li>
                <li class="pa3 pa4-ns bb b--black-10">
                    El resultado de una promesa es siempre otra promesa. Pueden encadenarse.
                </li>
                <li class="pa3 pa4-ns">
                    Múltiples <code>catch</code> se resuelven en el orden definido por el programador.
                </li>
            </ul>
        </article>
    </main>
    `
}

Promises3.notes = Notes;
Promises3.centered = false;
Promises3.backgroundColor = 'bg-dark-blue';
Promises3.color = 'washed-red';
Promises3.title = 'Async Tour: promises';


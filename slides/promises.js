const html = require('choo/html')
const Nav = require('./components/nav');

module.exports = Promises;

function Notes() {
    return html`
        <div>
            <ul class="list pl0">
                <li class="f5 lh-copy bb b--white-30">
                    Ver más: <a href="http://www.ecma-international.org/ecma-262/6.0/#sec-promise-objects" class="link gray no-underline underline-hover" rel="noopener noreferrer" target="_blank">
                        Promises spec
                    </a>
                </li>
            </ul>
        </div>
    `
}

function Promises (state, emitter) {

    return html`
    <main class="">
        ${Nav(state, emitter)}
        <article class="flex items-center vh-75">
            <ul class="list pl0 center">
                <li>
                    <pre class="code bg-black-80 pa4 f3 f2-l center green">
<code>var taskPromise = asyncTaskPromise(); // returns a promise
taskPromise
    .<span class="blue">then</span>(onFulfilled) // caso exitoso
    .<span class="red">catch</span>(onRejected) // caso erroneo</code>
                    </pre>
                </li>
            </ul>
        </article>
    </main>
    `
}

Promises.notes = Notes;
Promises.centered = false;
Promises.backgroundColor = 'bg-dark-blue';
Promises.color = 'washed-red';
Promises.title = 'Async Tour: promises';


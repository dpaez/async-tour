const html = require('choo/html')
const Nav = require('./components/nav');

module.exports = Promises2;

function Notes() {
    return html`
        <div>
            <ul class="list pl0">
                <li class="f5 lh-copy bb b--white-30">
                </li>
            </ul>
        </div>
    `
}

function Promises2 (state, emitter) {

    return html`
    <main class="">
        ${Nav(state, emitter)}
        <article class="flex items-center ">
            <ul class="list pl0 center">
                <li>
                    <pre class="code bg-black-80 pa4 f3 f2-l center green">
<code>function getA(){
    return Promise.resolve('A');
}
function getB(){
    return Promise.resolve('B');
}

Promise.all([
    getA(),
    getB()
])
.<span class="yellow">all</span>(function onFulfilledAll(results){ ... })
// <span class="i">all</span> actua como barrera
.<span class="red">catch</span>(function onRejected(err){ ... })
// ante el primer error se ejecuta el catch 
// y termina la ejecución</code>
                </pre>
            </li>
            </ul>
        </article>
    </main>
    `
}

Promises2.centered = false;
Promises2.backgroundColor = 'bg-dark-blue';
Promises2.color = 'washed-red';
Promises2.title = 'Async Tour: promises';


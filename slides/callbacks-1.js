const html = require('choo/html')
const Nav = require('./components/nav');

module.exports = Callbacks;

function Notes() {
    return html`
        <div>
            <ul class="list pl0">
                <li class="f5 lh-copy bb b--white-30">
                    Mas sobre callbacks: <a class="link gray no-underline underline-hover" href="https://github.com/maxogden/art-of-node#callbacks" rel="noopener noreferrer" target="_blank">art of node</a>
                </li>
            </ul>
        </div>
    `
}

function Callbacks (state, emitter) {

    return html`
    <main class="flex flex-wrap">
        ${Nav(state, emitter)}
        <article class="flex items-center center">
            <ul class="list pl0 center">
                <li>
                    <pre class="code bg-black-80 pa2 f3 center green">
function doSomethingAsync(params, callbackFn) {
    // async action...
    if (err){
        return callbackFn(err, null);
    }
    ...
    callbackFn(null, result);
}
                    </pre>
                </li>
            </ul>
        </article>
    </main>
    `
}

Callbacks.notes = Notes;
Callbacks.centered = false;
Callbacks.backgroundColor = 'bg-dark-blue';
Callbacks.color = 'washed-red';
Callbacks.title = 'Async Tour: callbacks';


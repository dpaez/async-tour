const html = require('choo/html')

module.exports = Intro

function Intro (state, emitter) {

    return html`
    <header class="tc ph4">
        <h1 class="f2 f2-m f-headline-l fw2 mv3">
            Async Tour 🛫
        </h1>
        <h2 class="f4 f4-m f2-l fw2 washed-yellow mt0 lh-copy">
            Un recorrido sobre herramientas para manejar operaciones asincrónicas
        </h2>
    </header>
    `
}

Intro.vmiddle = true;
Intro.backgroundColor = 'bg-dark-blue';
Intro.color = 'washed-red';
Intro.title = 'Async Tour';


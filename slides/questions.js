const html = require('choo/html')

module.exports = Questions

function Questions (state, emitter) {

    return html`
    <header class="tc ph4">
        <h1 class="f2 f2-m f1-l fw2 mv3">
            Async Tour 🛬
        </h1>
        <h2 class="f2 fw2 washed-yellow mt0 lh-copy">
            ¿Preguntas?
            <span class="f1 db"> 🤔 </span>
        </h2>
    </header>
    `
}

Questions.vmiddle = true;
Questions.backgroundColor = 'bg-dark-blue';
Questions.color = 'washed-red';
Questions.title = 'Async Tour: Preguntas';


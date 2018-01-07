const html = require('choo/html')
const Nav = require('./components/nav');

module.exports = Callbacks4;

function Notes () {
    return html`
        <div>
            <h3>Algunas conclusiones:</h3>
            <ul class="list pl0">
                <li class="f5 lh-copy bb b--white-30">
                    Nombrar funciones ✅
                </li>
                <li class="f5 lh-copy bb b--white-30">
                    Encapsular comportamientos ✅
                </li>
                <li class="f5 lh-copy bb b--white-30">
                    Desacoplar lógica ❌
                </li>
                <li class="f5 lh-copy bb b--white-30">
                    Mejora en legibilidad ⚠️
                </li>
            </ul>
        </div>
    `
}

function getDemoCode () {
    return html`
<code>function <span class="pink">task2</span>(err, result){
    <span class="red">if (err) return err;</span>
    doAsync3(result2, function(err, result3){
        <span class="red">if (err) return err;</span>
        return result3;
    })
}
function <span class="pink">task1</span>(err, result){
    <span class="red">if (err) return err;</span>
    doAsync2(result, task2)
}

function doAsync1(params, task1)
</code>`
}

function Callbacks4 (state, emitter) {

    return html`
    <main class="">
        ${Nav(state, emitter)}
        <article class="flex">
            <ul class="list pl0 center">
                <li>
                    <pre class="code bg-black-80 pa2 f3 center green">${getDemoCode()}</pre>
                </li>
            </ul>
        </article>
    </main>
    `
}

Callbacks4.notes = Notes;
Callbacks4.centered = false;
Callbacks4.backgroundColor = 'bg-dark-blue';
Callbacks4.color = 'washed-red';
Callbacks4.title = 'Async Tour: callbacks';


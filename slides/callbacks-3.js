const html = require('choo/html')
const Nav = require('./components/nav');

module.exports = Callbacks3;

function Notes () {
    return html`
    <div>
        <ul class="list pl0">
            <li class="f5 lh-copy bb b--white-30">
                Mas sobre <a href="http://callbackhell.com/" class="link gray no-underline underline-hover" rel="noopener noreferrer" target="_blank">Callback hell</a>
            </li>
        </ul>
    </div>
    `
}

function Callbacks3 (state, emitter) {

    return html`
    <main class="">
        ${Nav(state, emitter)}
        <article class="flex items-center vh-75">
            <ul class="list pl0 center">
                <li>
                    <pre class="code bg-black-80 pa4 f4 f3-l center green">
function doAsync1(params, function(err, result){
    <span class="red">if (err) return err;</span>
    doAsync2(result, function(err, result2){
        <span class="red">if (err) return err;</span>
        doAsync3(result2, function(err, result3){
            <span class="red">if (err) return err;</span>
            return result3; 👹
        })
    })
})
                    </pre>
                </li>
            </ul>
        </article>
    </main>
    `
}

Callbacks3.notes = Notes;
Callbacks3.centered = false;
Callbacks3.backgroundColor = 'bg-dark-blue';
Callbacks3.color = 'washed-red';
Callbacks3.title = 'Async Tour: callbacks';


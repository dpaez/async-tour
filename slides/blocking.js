const html = require('choo/html')
const Nav = require('./components/nav');

module.exports = AboutAsyncDemo;

function Notes () {
    return html`
        <div>
            <ul class="list pl0">
                <li class="f5 lh-copy bb b--white-30">
                Ver: <a href="https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/" class="link gray no-underline underline-hover" rel="noopener noreferrer" target="_blank">Tasks, microtasks, queues and schedules</a>
                </li>
                <li class="f5 lh-copy bb b--white-30">
                Ver: <a href="https://www.youtube.com/watch?v=8aGhZQkoFbQ" class="link gray no-underline underline-hover" rel="noopener noreferrer" target="_blank">Philip Roberts: What the heck is the event loop anyway?</a>
                </li>

            </ul>
        </div>
    `
}

function AboutAsyncDemo (state, emitter) {

    if (typeof state.demoCount === 'undefined') state.demoCount = 0;

    function increment () {
        // demo code
        // in real-life projects use a proper store.
        state.demoCount++;
        emitter('render');
    }

    function decrement () {
        // demo code
        // in real-life projects use a proper store.
        state.demoCount--;
        emitter('render');
    }


    function slowTask () {
        function noop () {}
        var i = 0;
        while (i < 10000000000) i+=1
    }

    return html`
    <main class="">
        ${Nav(state, emitter)}
        <article class="flex flex-column dt w-100">
            <h3 class="f2 f-subheadline-l fw2 mv3 dtc v-mid w-50 tl">Bloqueando el event loop</h3>
            <section class="center mt4 dtc v-mid vh-75">
                <div class="pa2">
                    <button onclick=${slowTask} class="f6 f2-l link dim ph3 pv2 mb2 mr3 dib white bg-red">
                        SLOW TASK :(
                    </button>

                    <button onclick=${increment} class="f6 f2-l link dim ph3 pv2 mb2 mr3 dib white bg-mid-gray">
                        +1
                    </button>
                    <button onclick=${decrement} class="f6 f2-l link dim ph3 pv2 mb2 mr3 dib white bg-mid-gray">
                        -1
                    </button>
                </div>
                <div class="">
                    <p class="f2 light-green">Clicks: ${state.demoCount}</p>
                </div>
            </section>
        </article>
    </main>
    `
}

AboutAsyncDemo.notes = Notes;
AboutAsyncDemo.centered = false;
AboutAsyncDemo.backgroundColor = 'bg-dark-blue';
AboutAsyncDemo.color = 'washed-red';
AboutAsyncDemo.title = 'Async Tour: bloqueando el loop';


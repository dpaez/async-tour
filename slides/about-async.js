const html = require('choo/html')
const Nav = require('./components/nav');

module.exports = AboutAsync;

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
                <li class="f5 lh-copy bb b--white-30">
                Ver: <a href="https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/" class="link gray no-underline underline-hover" rel="noopener noreferrer" target="_blank">Node.js: Overview of Blocking vs Non-Blocking</a>
                </li>
            </ul>
        </div>
    `
}

function AboutAsync (state, emitter) {

    return html`
    <main class="">
        ${Nav(state, emitter)}
        <div class="flex items-center">
        <article class="dt w-100">
            <h3 class="f2 f-subheadline-l fw2 mv3 dtc v-mid tc tl-l w-50">
                Concurrencia en JS
                <img src="https://developer.mozilla.org/files/4617/default.svg" class="db center mw-100" alt="event loop según mozilla">
            </h3>
            <ul class="list pl0 f3 f2-l light-gray measure">
                <li class="pa3 pa4-ns bb b--black-10">
                    JS es single-threaded === 1 call stack === 1 <b>tarea</b> a la vez.
                </li>
                <li class="pa3 pa4-ns bb b--black-10">
                    Web APIs son manejadas por el browser engine: múltiples threads.
                </li>
                <li class="pa3 pa4-ns bb b--black-10">
                    Event loop: elige la proxima tarea, criterio: si hay algo en el stack, ejecutarlo, si no, chequear la cola de tareas.
                </li>
                <li class="pa3 pa4-ns bb b--black-10">
                    <i>Micro-tareas</i> se ejecutan luego de las tareas.
                </li>
                <li class="pa3 pa4-ns bb b--black-10">
                    Los callbacks de las promesas son micro-tareas.
                </li>
                <li class="pa3 pa4-ns bb b--black-10">
                    blocking code === código lento en el stack (ie: big loops, network requests)
                </li>
                <li class="pa3 pa4-ns bb b--black-10">
                    ☹️  Si "bloqueamos" el stack es un problema que impacta directamente al usuario.
                </li>
                <li class="pa3 pa4-ns bb b--black-10">
                    Demo. ➡️
                </li>
            </ul>
        </article>
        </div>
    </main>
    `
}

AboutAsync.notes = Notes;
AboutAsync.centered = false;
AboutAsync.backgroundColor = 'bg-dark-blue';
AboutAsync.color = 'washed-red';
AboutAsync.title = 'Async Tour: concurrencia';


const html = require('choo/html');
const css = require('sheetify');
const Nav = require('./components/nav');

module.exports = Tour;

const dashed = css`
    :host .dash {
        background-image: linear-gradient(to right, #999 40%, rgba(255, 255, 255, 0) 20%);
        background-position: top;
        background-size: 10px 1px;
        background-repeat: repeat-x;
        height: 1px;
    }
   `

function Tour (state, emitter) {

    return html`
        <main class=${dashed}>
            <article class="vh-100">
                <div role="img" aria-label="Callbacks" class="vh-100 dt fl w-33" style="background: url(https://images.unsplash.com/photo-1501533123-e62013cabb4f?dpr=1&auto=format&fit=crop&w=551&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D) no-repeat center center; background-size: cover;">
                    <a href="/4" class="dtc v-mid link overflow-hidden">
                        <h2 class="bg-black-70 white-90 f2 f-headline-l pa2 grow-large tc">Callbacks</h2>
                    </a>
                </div>
                <div role="img" aria-label="Promises" class="vh-100 dt fl w-34 " style="background: url(https://images.unsplash.com/photo-1500487003906-9baadc8d610d?dpr=1&auto=format&fit=crop&w=551&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D) no-repeat center center; background-size: cover;">
                    <a href="/9" class="dtc v-mid link overflow-hidden">
                        <h2 class="bg-black-70 white-90 f2 f-headline-l pa2 grow-large tc">Promises</h2>
                    </a>
                </div>
                <div role="img" aria-label="Async/Await" class="vh-100 dt fl w-33" style="background: url(https://images.unsplash.com/photo-1506929562872-bb421503ef21?dpr=1&auto=format&fit=crop&w=551&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D) no-repeat center center; background-size: cover;">
                    <a href="/13" class="dtc v-mid link overflow-hidden">
                        <h2 class="bg-black-70 white-90 f2 f-headline-l pa2 grow-large tc">
                        Async/<br>
                        Await
                        </h2>
                    </a>
                </div>
            </article>
        </main>
    `
}

Tour.paddings = false;
Tour.backgroundColor = 'bg-black-80';
Tour.color = 'washed-red';
Tour.title = 'Le tour';


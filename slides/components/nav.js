var html = require('choo/html')

module.exports = Nav

const HeaderLink = (link) => {
    return html`
        <a class="link dim white dib mr3" href="${link.location}" title=${link.title}>${link.title}</a>
    `
}

function Nav (state, emit) {

    return html`
    <header class="flex justify-between bb w-100 b--white-10">
        <nav class="flex justify-between items-center bb b--white-10 w-100">
          <div class="flex-grow pa3 f2 ">
            <span class="dim white mr3">${state.title ? state.title : 'El tour' }</span>
          </div>
          <a class="f1 grow white-70 hover-white no-underline pa3" href="/0">
            ⛰
          </a>
        </nav>
    </header>
  `
}

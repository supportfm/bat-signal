/** @jsx h */
const { Component, h } = require('preact')

const config = require('../config')

class Header extends Component {
  render (props) {
    let $login
    if (props.userName) {
      $login = (
        <a
          className='no-underline near-black hover-gray inline-flex items-center'
          href='/auth/twitter/logout'
        >
          <span className='f6 ml2'>logout {props.userName}</span>
        </a>
      )
    } else {
      $login = (
        <a
          className='no-underline near-black hover-gray inline-flex items-center'
          href='/auth/twitter'
        >
          <svg className='dib h1 w1' fill='currentColor' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill-rule='evenodd' clip-rule='evenodd' stroke-linejoin='round' stroke-miterlimit='1.414'><path d='M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z' fill-rule='nonzero' /></svg>
          <span className='f6 ml2'>login with twitter</span>
        </a>
      )
    }

    return (
      <header id='header' class='top-0 w-100 bb b--gray'>
        <nav class='border-box w-100 mw8 center pa2'>
          <a class='link near-black hover-gray f3' href='/'>{config.name}</a>
          <div class='fr mt2'>
            {$login}
          </div>
        </nav>
      </header>
    )
  }
}

module.exports = Header

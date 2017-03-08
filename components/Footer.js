/** @jsx h */
const { Component, h } = require('preact')

const Link = require('./Link')

class Footer extends Component {
  render () {
    return (
      <footer id='footer' class='f6 mw8 ph3 mt3 ma-100 center'>
        <p>
          code available on <Link href='https://github.com/dcposch/bat-signal'>github</Link>.
        </p>
      </footer>
    )
  }
}

module.exports = Footer

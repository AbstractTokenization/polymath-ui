import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends Component {
  render () {
    return (
      <div className='pui-footer'>
        <p className='pui-footer-text'>
            &copy; {(new Date().getFullYear())} Polymath
        </p>
        <ul className='pui-footer-links'>
          <li>
            <Link to='https://polymath.network/termsofservice.html' target='_blank'>Terms Of Service</Link>
          </li>
          <li>
            <Link to='https://polymath.network/privacypolicy.html' target='_blank'>Privacy Policy</Link>
          </li>
        </ul>
      </div>
    )
  }
}

import React from 'react'
import InstagramFeed from './InstagramFeed'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Follow me @&nbsp;
      <a href="https://www.instagram.com/chef.kunwar/">chef.kunwar</a>
      <br /> 📞 @ +91-9779948445
    </h2>
    <br />
    <InstagramFeed count="8" />
  </div>
)

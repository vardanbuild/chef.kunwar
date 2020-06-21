import React, { Component } from 'react'
import food1 from './assets/food-1.jpg'
import food2 from './assets/food-2.jpeg'

import './InstagramFeed.css'

// A quick way to get your access token
// https://instagram.pixelunion.net/

export default class InstagramFeed extends Component {
  static defaultProps = {
    accessToken: '1353697840.1677ed0.5a1cbfbc18f84915aa0d9a0bd02bff5a',
    count: 20
  }

  state = {
    mounted: false,
    posts: []
  }

  clearStorage() {
    const lastclear = localStorage.getItem('lastclear'),
      time_now = new Date().getTime()
    // .getTime() returns milliseconds so 1000 * 60 * 60 * 24 = 1 days
    if (time_now - lastclear > 1000 * 60 * 60 * 1) {
      localStorage.clear()
      localStorage.setItem('lastclear', time_now)
    }
  }

  componentDidMount() {
    this.clearStorage()
    if (!this.state.mounted) {
      this.setState({
        mounted: true
      })
    }
  }

  renderLoadingItems = () => (
    <div className="InstagramFeed">
      <img src={food1} style={{ width: '-webkit-fill-available' }} />
      <img src={food2} style={{ width: '-webkit-fill-available' }} />
    </div>
  )

  render() {
    return this.renderLoadingItems()
  }
}

import React, { Component } from 'react'
import TimeAgo from 'react-timeago'
import { mostRecentSmoked } from '../../api/journal_api'

class MostRecentSmoked extends Component {
  constructor (props) {
    super(props)
    this.state = {
      createdAt: null
    }
  }
  componentDidMount () {
    const { msgAlert, user } = this.props
    mostRecentSmoked(user)
      .then(res => {
        console.log('this is res.data: ', res.data.createdAt)
        return res
      })
      .then(res => this.setState({ createdAt: res.data.createdAt }))
      .then(() => msgAlert({
        heading: 'Loaded time since you last smoked successfully',
        message: 'Viewing time',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Could not find when you last smoked',
          message: 'Failed to lead - error is : ' + error.message,
          variant: 'danger'
        })
      })
  }
  render () {
    const { createdAt } = this.state
    const { user } = this.props
    let timeJsx = ''
    if (createdAt) {
      timeJsx = <h3 className="navbar-text mr-2">You last smoked ~<TimeAgo date={createdAt} />!  Keep it up!</h3>
    } else {
      timeJsx = <h3 className="navbar-text mr-2">You last smoked ~<TimeAgo date={user.createdAt} />!  Keep it up!</h3>
    }
    return (
      <div className="row smokedAt">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          <div key={createdAt}>{timeJsx}</div>
        </div>
      </div>
    )
  }
}
export default MostRecentSmoked

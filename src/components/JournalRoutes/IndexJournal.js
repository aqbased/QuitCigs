import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { journalIndex } from '../../api/journal_api'
import Spinner from 'react-bootstrap/Spinner'

class JournalIndex extends Component {
  constructor (props) {
    super(props)
    this.state = {
      journals: []
    }
  }
  componentDidMount () {
    const { msgAlert, user } = this.props
    journalIndex(user)
      .then(res => {
        console.log('this is res.data: ', res.data)
        return res
      })
      .then(res => this.setState({ journals: res.data }))
      .then(() => msgAlert({
        heading: 'Loaded Journal Entry!',
        message: 'All entries ',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Failed to load the entries!',
          message: 'The entries have an error: ' + error.message,
          variant: 'danger'
        })
      })
  }
  render () {
    const { journals } = this.state
    if (!journals) {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">loading...</span>
        </Spinner>
      )
    }
    console.log('this is journals: ', journals)
    const journalJsx = journals.map(journal => (
      <div className="card" key={journal._id}>
        <Link to={`/journal/${journal._id}`} key={journal._id}>
          <div className="card-body">
            <h4 className="card-title">Journal Entry</h4>
            <p className="card-text">{journal.notes.substring(0, 25) + '...'}</p>
            <p className="card-text">Your desire to smoke on this entry was: {journal.desireScale}</p>
            {/* <p className="card-text"><small className="text-muted">Created: {journal.date.substring(0, 10)}</small></p> */}
          </div>
        </Link>
      </div>
    ))
    return (
      <div>
        {journalJsx}
      </div>
    )
  }
}
export default withRouter(JournalIndex)

import React, { Component, Fragment } from 'react'
import { journalShow, journalDelete } from '../../api/journal_api'
import { withRouter, Link, Redirect } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'

class JournalShow extends Component {
  constructor (props) {
    super(props)
    this.state = {
      journal: null,
      deleted: false
    }
  }
  componentDidMount () {
    const { msgAlert, match, user } = this.props
    journalShow(match.params.id, user)
      .then(res => this.setState({ journal: res.data.journal }))
      .then(() => msgAlert({
        heading: 'Loaded journal entry successfully',
        message: 'Viewing journal entry',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Could not load journal entry',
          message: 'Failed to load entry: ' + error.message,
          variant: 'danger'
        })
      })
  }
  deleteJournal = () => {
    const { msgAlert, user, match } = this.props
    journalDelete(match.params.id, user)
      .then(res => {
        this.setState({ deleted: true })
      })
      .then(() => msgAlert({
        heading: 'Deleted Journal Successfully',
        message: 'Journal Deleted',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Failed to delete journal',
          message: 'Could not delete journal with error:' + error.message,
          variant: 'danger'
        })
      })
  }
  render () {
    const { journal, deleted } = this.state
    let journalJsx = ''
    if (deleted) {
      return <Redirect to='/'/>
    } else if (!journal) {
      return (
        <Spinner variant='primary' animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )
    } else if (journal) {
      journalJsx = (
        <Fragment>
          <h3>Your notes for this entry: {journal.notes}</h3>
          <h3>Your desire to smoke for this entry: {journal.desireScale}</h3>
          <h3>The cravings you faced during this entry: {journal.cravings}</h3>
          <button><Link to={'/journal/' + this.props.match.params.id + '/edit/'}>Update Entry</Link></button>
          <button onClick={this.deleteJournal}><Link to={'/'}>Delete</Link></button>
        </Fragment>
      )
    }
    return (
      <div className="row">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          {journalJsx}
        </div>
      </div>
    )
  }
}
export default withRouter(JournalShow)

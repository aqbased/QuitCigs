import React, { Component } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import JournalForm from '../JournalForm/JournalForm'
import { journalUpdate } from '../../api/journal_api'

class JournalUpdate extends Component {
  constructor (props) {
    super(props)
    this.state = {
      journal: {
        desireScale: '',
        hasSmoked: '',
        cravings: '',
        notes: ''
      },
      updated: false
    }
  }
  handleChange = event => {
    event.persist()
    this.setState(state => {
      return {
        journal: { ...state.journal, [event.target.name]: event.target.value }
      }
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    const { user, match, msgAlert } = this.props
    const { journal } = this.state
    journalUpdate(match.params.id, journal, user)
      .then(res => this.setState({ updated: true }))
      .then(() => msgAlert({
        heading: 'Updated Journal Entry Successfully',
        message: 'Updated Journal Entry',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Failed to update journal',
          message: 'Could not update journal with error:' + error.message,
          variant: 'danger'
        })
      })
  }
  render () {
    const { journal, updated } = this.state
    if (updated) {
      return <Redirect to={'/journal'} />
    }
    return (
      <div>
        <h3>Edit Journal Entry</h3>
        <JournalForm
          journal={journal}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    )
  }
}
export default withRouter(JournalUpdate)

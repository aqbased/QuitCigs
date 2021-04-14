import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import JournalForm from '../JournalForm/JournalForm'
import { journalCreate } from '../../api/journal_api'

class JournalCreate extends Component {
  constructor (props) {
    super(props)
    this.state = {
      journal: {
        desireScale: '',
        hasSmoked: '',
        cravings: '',
        notes: ''
      },
      createdJournalId: null
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
    const { user, msgAlert } = this.props
    const { journal } = this.state
    journalCreate(journal, user)
      .then(res => this.setState({ createdJournalId: res.data.journalEntry._id }))
      .then(() => msgAlert({
        heading: 'Created journal entry successfully.',
        message: 'Showing created entry',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Sorry! Failed to create journal entry.',
          message: 'Could not create entry with error:' + error.message,
          variant: 'danger'
        })
      })
  }
  render () {
    const { journal, createdJournalId } = this.state
    if (createdJournalId) {
      return <Redirect to={`/journal/${createdJournalId}`} />
    }
    return (
      <div className='row'>
        <div className='col-sm-10 col-md-8 mx-auto mt-5'>
          <h3>Create Journal Entry</h3>
          <JournalForm
            journal={journal}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
        </div>
      </div>
    )
  }
}
export default JournalCreate

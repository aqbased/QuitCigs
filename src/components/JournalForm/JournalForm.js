import React from 'react'
import { Form, Col } from 'react-bootstrap'

const JournalForm = ({ journal, handleSubmit, handleChange }) => (
  <Form onSubmit={handleSubmit}>
    <div className="form-group">
      <label>Enter a number from 1-10 to represent your desire to smoke.</label>
      <textarea className="form-control"
        placeholder='Type a number 1 - 10.'
        name='desireScale'
        value={journal.desireScale}
        onChange={handleChange}
      />
    </div>
    <div className="form-group">
      <label>Have you smoked since your last journal entry?</label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Yes"
          name="hasSmoked"
          onChange={handleChange}
          value={true}
        />
        <Form.Check
          type="radio"
          label="No"
          name="hasSmoked"
          onChange={handleChange}
          value={false}
        />
      </Col>
    </div>
    {/*  <div className="form-group">
      <label>Type true if you have smoked since your journal entry.  Else type false.</label>
      <Form.Control name='hasSmoked' value={journal.hasSmoked} onChange={handleChange} as="select" className="form-control" id="blog-body-form">
        <option>true</option>
        <option>false</option>
      </Form.Control>
    </div> */}
    <div className="form-group">
      <label>How many cravings per day have you had on average lately?</label>
      <textarea className="form-control" id="blog-body-form"
        placeholder='Type a number for how many cravings.'
        name='cravings'
        value={journal.cravings}
        onChange={handleChange}></textarea>
    </div>
    <div className="form-group">
      <label>Write some notes about your experience since your last entry.</label>
      <textarea className="form-control" id="blog-body-form"
        placeholder='Enter notes in here.'
        name='notes'
        value={journal.notes}
        onChange={handleChange}></textarea>
    </div>
    <button>Submit</button>
  </Form>
)

export default JournalForm

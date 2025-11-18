import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Table, Button, Message, Segment, Header, Radio } from 'semantic-ui-react'
import { useFormState } from '../hooks/useFormState'

function ContactForm() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    contactMethod: 'email'
  })
  const { hasChanges, isDirty, setHasChanges, setIsDirty } = useFormState(formData, {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    contactMethod: 'email'
  })

  const handleChange = (e, { name, value }) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = () => {
    setHasChanges(false)
    setIsDirty(false)
    alert('Contact form submitted! Changes cleared.')
  }

  const handleReset = () => {
    setFormData({ name: '', email: '', phone: '', subject: '', message: '', contactMethod: 'email' })
    setHasChanges(false)
    setIsDirty(false)
  }

  return (
    <Segment>
      <Header as="h2">Contact Form</Header>
      <Button onClick={() => navigate('/')} style={{ marginBottom: '20px' }}>
        ← Back to Home
      </Button>
      
      {hasChanges && (
        <Message warning>
          <Message.Header>Unsaved Changes</Message.Header>
          <p>You have unsaved changes. The beforeunload handler is active.</p>
        </Message>
      )}

      <Form onSubmit={handleSubmit}>
        <Table celled>
          <Table.Body>
            <Table.Row>
              <Table.Cell width={3}><strong>Name</strong></Table.Cell>
              <Table.Cell>
                <Form.Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell><strong>Email</strong></Table.Cell>
              <Table.Cell>
                <Form.Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell><strong>Phone</strong></Table.Cell>
              <Table.Cell>
                <Form.Input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell><strong>Subject</strong></Table.Cell>
              <Table.Cell>
                <Form.Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                />
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell><strong>Preferred Contact Method</strong></Table.Cell>
              <Table.Cell>
                <Form.Group>
                  <Form.Field>
                    <Radio
                      label="Email"
                      name="contactMethod"
                      value="email"
                      checked={formData.contactMethod === 'email'}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Phone"
                      name="contactMethod"
                      value="phone"
                      checked={formData.contactMethod === 'phone'}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Both"
                      name="contactMethod"
                      value="both"
                      checked={formData.contactMethod === 'both'}
                      onChange={handleChange}
                    />
                  </Form.Field>
                </Form.Group>
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell><strong>Message</strong></Table.Cell>
              <Table.Cell>
                <Form.TextArea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  rows={4}
                />
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

        <Button type="submit" primary disabled={!isDirty} style={{ marginTop: '20px' }}>
          Submit
        </Button>
        <Button type="button" onClick={handleReset} disabled={!isDirty} style={{ marginTop: '20px' }}>
          Reset
        </Button>
      </Form>

      <div className="debug-info">
        <p><strong>Debug Info:</strong></p>
        <p>Has Changes: {hasChanges ? 'Yes' : 'No'}</p>
        <p>Is Dirty: {isDirty ? 'Yes' : 'No'}</p>
      </div>
    </Segment>
  )
}

export default ContactForm

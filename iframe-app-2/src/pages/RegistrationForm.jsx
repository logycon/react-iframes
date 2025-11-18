import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Table, Button, Message, Segment, Header, Radio } from 'semantic-ui-react'
import useFormState from '../hooks/useFormState'

function RegistrationForm() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
    agreeToTerms: false,
    subscribeNewsletter: false
  })
  const { hasChanges, isDirty, setHasChanges, setIsDirty } = useFormState(formData, {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
    agreeToTerms: false,
    subscribeNewsletter: false
  })

  const handleChange = (e, { name, value, checked }) => {
    if (name === 'agreeToTerms' || name === 'subscribeNewsletter') {
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSubmit = () => {
    setHasChanges(false)
    setIsDirty(false)
    alert('Registration submitted! Changes cleared.')
  }

  const handleReset = () => {
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: '',
      agreeToTerms: false,
      subscribeNewsletter: false
    })
    setHasChanges(false)
    setIsDirty(false)
  }

  return (
    <Segment>
      <Header as="h2">Registration Form</Header>
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
              <Table.Cell width={3}><strong>Username</strong></Table.Cell>
              <Table.Cell>
                <Form.Input
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Choose a username"
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
              <Table.Cell><strong>Password</strong></Table.Cell>
              <Table.Cell>
                <Form.Input
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                />
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell><strong>Confirm Password</strong></Table.Cell>
              <Table.Cell>
                <Form.Input
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm password"
                />
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell><strong>Role</strong></Table.Cell>
              <Table.Cell>
                <Form.Group>
                  <Form.Field>
                    <Radio
                      label="User"
                      name="role"
                      value="user"
                      checked={formData.role === 'user'}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Admin"
                      name="role"
                      value="admin"
                      checked={formData.role === 'admin'}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Moderator"
                      name="role"
                      value="moderator"
                      checked={formData.role === 'moderator'}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Guest"
                      name="role"
                      value="guest"
                      checked={formData.role === 'guest'}
                      onChange={handleChange}
                    />
                  </Form.Field>
                </Form.Group>
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell><strong>Agree to Terms</strong></Table.Cell>
              <Table.Cell>
                <Form.Checkbox
                  name="agreeToTerms"
                  label="I agree to the terms and conditions"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                />
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell><strong>Newsletter</strong></Table.Cell>
              <Table.Cell>
                <Form.Checkbox
                  name="subscribeNewsletter"
                  label="Subscribe to newsletter"
                  checked={formData.subscribeNewsletter}
                  onChange={handleChange}
                />
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

        <Button type="submit" primary disabled={!isDirty} style={{ marginTop: '20px' }}>
          Register
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

export default RegistrationForm

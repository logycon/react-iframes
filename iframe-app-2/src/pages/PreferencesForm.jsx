import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Table, Button, Message, Segment, Header, Radio } from 'semantic-ui-react'
import useFormState from '../hooks/useFormState'

function PreferencesForm() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    displayName: '',
    timezone: '',
    dateFormat: '',
    currency: '',
    publicProfile: false,
    showEmail: false,
    allowMessages: false,
    twoFactorAuth: false
  })
  const { hasChanges, isDirty, setHasChanges, setIsDirty } = useFormState(formData, {
    displayName: '',
    timezone: '',
    dateFormat: '',
    currency: '',
    publicProfile: false,
    showEmail: false,
    allowMessages: false,
    twoFactorAuth: false
  })

  const handleChange = (e, { name, value, checked }) => {
    if (name === 'publicProfile' || name === 'showEmail' || 
        name === 'allowMessages' || name === 'twoFactorAuth') {
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
    alert('Preferences saved! Changes cleared.')
  }

  const handleReset = () => {
    setFormData({
      displayName: '',
      timezone: '',
      dateFormat: '',
      currency: '',
      publicProfile: false,
      showEmail: false,
      allowMessages: false,
      twoFactorAuth: false
    })
    setHasChanges(false)
    setIsDirty(false)
  }

  return (
    <Segment>
      <Header as="h2">Preferences Form</Header>
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
              <Table.Cell width={3}><strong>Display Name</strong></Table.Cell>
              <Table.Cell>
                <Form.Input
                  name="displayName"
                  value={formData.displayName}
                  onChange={handleChange}
                  placeholder="Enter display name"
                />
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell><strong>Timezone</strong></Table.Cell>
              <Table.Cell>
                <Form.Group>
                  <Form.Field>
                    <Radio
                      label="UTC"
                      name="timezone"
                      value="utc"
                      checked={formData.timezone === 'utc'}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Eastern Time"
                      name="timezone"
                      value="est"
                      checked={formData.timezone === 'est'}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Pacific Time"
                      name="timezone"
                      value="pst"
                      checked={formData.timezone === 'pst'}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Central European Time"
                      name="timezone"
                      value="cet"
                      checked={formData.timezone === 'cet'}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Japan Standard Time"
                      name="timezone"
                      value="jst"
                      checked={formData.timezone === 'jst'}
                      onChange={handleChange}
                    />
                  </Form.Field>
                </Form.Group>
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell><strong>Date Format</strong></Table.Cell>
              <Table.Cell>
                <Form.Group>
                  <Form.Field>
                    <Radio
                      label="MM/DD/YYYY"
                      name="dateFormat"
                      value="mm/dd/yyyy"
                      checked={formData.dateFormat === 'mm/dd/yyyy'}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="DD/MM/YYYY"
                      name="dateFormat"
                      value="dd/mm/yyyy"
                      checked={formData.dateFormat === 'dd/mm/yyyy'}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="YYYY-MM-DD"
                      name="dateFormat"
                      value="yyyy-mm-dd"
                      checked={formData.dateFormat === 'yyyy-mm-dd'}
                      onChange={handleChange}
                    />
                  </Form.Field>
                </Form.Group>
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell><strong>Currency</strong></Table.Cell>
              <Table.Cell>
                <Form.Input
                  name="currency"
                  value={formData.currency}
                  onChange={handleChange}
                  placeholder="USD, EUR, GBP, etc."
                />
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell><strong>Public Profile</strong></Table.Cell>
              <Table.Cell>
                <Form.Checkbox
                  name="publicProfile"
                  label="Make profile public"
                  checked={formData.publicProfile}
                  onChange={handleChange}
                />
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell><strong>Show Email</strong></Table.Cell>
              <Table.Cell>
                <Form.Checkbox
                  name="showEmail"
                  label="Show email on profile"
                  checked={formData.showEmail}
                  onChange={handleChange}
                />
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell><strong>Allow Messages</strong></Table.Cell>
              <Table.Cell>
                <Form.Checkbox
                  name="allowMessages"
                  label="Allow messages from other users"
                  checked={formData.allowMessages}
                  onChange={handleChange}
                />
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell><strong>Two-Factor Auth</strong></Table.Cell>
              <Table.Cell>
                <Form.Checkbox
                  name="twoFactorAuth"
                  label="Enable two-factor authentication"
                  checked={formData.twoFactorAuth}
                  onChange={handleChange}
                />
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

        <Button type="submit" primary disabled={!isDirty} style={{ marginTop: '20px' }}>
          Save Preferences
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

export default PreferencesForm

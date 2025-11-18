import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Table, Button, Message, Segment, Header, Radio } from 'semantic-ui-react'
import { useFormState } from '../hooks/useFormState'

function SettingsForm() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    theme: '',
    language: '',
    notifications: false,
    emailNotifications: false,
    smsNotifications: false,
    autoSave: false,
    apiKey: '',
    apiUrl: '',
    saveFrequency: 'auto'
  })
  const { hasChanges, isDirty, setHasChanges, setIsDirty } = useFormState(formData, {
    theme: '',
    language: '',
    notifications: false,
    emailNotifications: false,
    smsNotifications: false,
    autoSave: false,
    apiKey: '',
    apiUrl: '',
    saveFrequency: 'auto'
  })

  const handleChange = (e, { name, value, checked }) => {
    if (name === 'notifications' || name === 'emailNotifications' || 
        name === 'smsNotifications' || name === 'autoSave') {
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
    alert('Settings saved! Changes cleared.')
  }

  const handleReset = () => {
    setFormData({
      theme: '',
      language: '',
      notifications: false,
      emailNotifications: false,
      smsNotifications: false,
      autoSave: false,
      apiKey: '',
      apiUrl: '',
      saveFrequency: 'auto'
    })
    setHasChanges(false)
    setIsDirty(false)
  }

  return (
    <Segment>
      <Header as="h2">Settings Form</Header>
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
              <Table.Cell width={3}><strong>Theme</strong></Table.Cell>
              <Table.Cell>
                <Form.Group>
                  <Form.Field>
                    <Radio
                      label="Light"
                      name="theme"
                      value="light"
                      checked={formData.theme === 'light'}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Dark"
                      name="theme"
                      value="dark"
                      checked={formData.theme === 'dark'}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Auto"
                      name="theme"
                      value="auto"
                      checked={formData.theme === 'auto'}
                      onChange={handleChange}
                    />
                  </Form.Field>
                </Form.Group>
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell><strong>Language</strong></Table.Cell>
              <Table.Cell>
                <Form.Group>
                  <Form.Field>
                    <Radio
                      label="English"
                      name="language"
                      value="en"
                      checked={formData.language === 'en'}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Spanish"
                      name="language"
                      value="es"
                      checked={formData.language === 'es'}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="French"
                      name="language"
                      value="fr"
                      checked={formData.language === 'fr'}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="German"
                      name="language"
                      value="de"
                      checked={formData.language === 'de'}
                      onChange={handleChange}
                    />
                  </Form.Field>
                </Form.Group>
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell><strong>Save Frequency</strong></Table.Cell>
              <Table.Cell>
                <Form.Group>
                  <Form.Field>
                    <Radio
                      label="Auto"
                      name="saveFrequency"
                      value="auto"
                      checked={formData.saveFrequency === 'auto'}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Manual"
                      name="saveFrequency"
                      value="manual"
                      checked={formData.saveFrequency === 'manual'}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Every 5 minutes"
                      name="saveFrequency"
                      value="5min"
                      checked={formData.saveFrequency === '5min'}
                      onChange={handleChange}
                    />
                  </Form.Field>
                </Form.Group>
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell><strong>Notifications</strong></Table.Cell>
              <Table.Cell>
                <Form.Checkbox
                  name="notifications"
                  label="Enable notifications"
                  checked={formData.notifications}
                  onChange={handleChange}
                />
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell><strong>Email Notifications</strong></Table.Cell>
              <Table.Cell>
                <Form.Checkbox
                  name="emailNotifications"
                  label="Email notifications"
                  checked={formData.emailNotifications}
                  onChange={handleChange}
                />
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell><strong>SMS Notifications</strong></Table.Cell>
              <Table.Cell>
                <Form.Checkbox
                  name="smsNotifications"
                  label="SMS notifications"
                  checked={formData.smsNotifications}
                  onChange={handleChange}
                />
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell><strong>Auto-save</strong></Table.Cell>
              <Table.Cell>
                <Form.Checkbox
                  name="autoSave"
                  label="Auto-save changes"
                  checked={formData.autoSave}
                  onChange={handleChange}
                />
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell><strong>API Key</strong></Table.Cell>
              <Table.Cell>
                <Form.Input
                  name="apiKey"
                  type="password"
                  value={formData.apiKey}
                  onChange={handleChange}
                  placeholder="Enter API key"
                />
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell><strong>API URL</strong></Table.Cell>
              <Table.Cell>
                <Form.Input
                  name="apiUrl"
                  value={formData.apiUrl}
                  onChange={handleChange}
                  placeholder="https://api.example.com"
                />
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

        <Button type="submit" primary disabled={!isDirty} style={{ marginTop: '20px' }}>
          Save Settings
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

export default SettingsForm

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Table, Button, Message, Segment, Header, Radio } from 'semantic-ui-react'
import { useFormState } from '../hooks/useFormState'

function ProfileForm() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    bio: '',
    website: '',
    location: '',
    country: '',
    company: '',
    jobTitle: '',
    visibility: 'public'
  })
  const { hasChanges, isDirty, setHasChanges, setIsDirty } = useFormState(formData, {
    firstName: '',
    lastName: '',
    bio: '',
    website: '',
    location: '',
    country: '',
    company: '',
    jobTitle: '',
    visibility: 'public'
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
    alert('Profile updated! Changes cleared.')
  }

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      bio: '',
      website: '',
      location: '',
      country: '',
      company: '',
      jobTitle: '',
      visibility: 'public'
    })
    setHasChanges(false)
    setIsDirty(false)
  }

  return (
    <Segment>
      <Header as="h2">Profile Form</Header>
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
              <Table.Cell width={3}><strong>First Name</strong></Table.Cell>
              <Table.Cell>
                <Form.Input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                />
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell><strong>Last Name</strong></Table.Cell>
              <Table.Cell>
                <Form.Input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                />
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell><strong>Bio</strong></Table.Cell>
              <Table.Cell>
                <Form.TextArea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  placeholder="Tell us about yourself"
                  rows={4}
                />
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell><strong>Website</strong></Table.Cell>
              <Table.Cell>
                <Form.Input
                  name="website"
                  type="url"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://example.com"
                />
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell><strong>Location</strong></Table.Cell>
              <Table.Cell>
                <Form.Input
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="City, State"
                />
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell><strong>Country</strong></Table.Cell>
              <Table.Cell>
                <Form.Group>
                  <Form.Field>
                    <Radio
                      label="United States"
                      name="country"
                      value="us"
                      checked={formData.country === 'us'}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="United Kingdom"
                      name="country"
                      value="uk"
                      checked={formData.country === 'uk'}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Canada"
                      name="country"
                      value="ca"
                      checked={formData.country === 'ca'}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Australia"
                      name="country"
                      value="au"
                      checked={formData.country === 'au'}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Germany"
                      name="country"
                      value="de"
                      checked={formData.country === 'de'}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="France"
                      name="country"
                      value="fr"
                      checked={formData.country === 'fr'}
                      onChange={handleChange}
                    />
                  </Form.Field>
                </Form.Group>
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell><strong>Company</strong></Table.Cell>
              <Table.Cell>
                <Form.Input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company name"
                />
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell><strong>Job Title</strong></Table.Cell>
              <Table.Cell>
                <Form.Input
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  placeholder="Job title"
                />
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell><strong>Profile Visibility</strong></Table.Cell>
              <Table.Cell>
                <Form.Group>
                  <Form.Field>
                    <Radio
                      label="Public"
                      name="visibility"
                      value="public"
                      checked={formData.visibility === 'public'}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Private"
                      name="visibility"
                      value="private"
                      checked={formData.visibility === 'private'}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Friends Only"
                      name="visibility"
                      value="friends"
                      checked={formData.visibility === 'friends'}
                      onChange={handleChange}
                    />
                  </Form.Field>
                </Form.Group>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

        <Button type="submit" primary disabled={!isDirty} style={{ marginTop: '20px' }}>
          Update Profile
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

export default ProfileForm

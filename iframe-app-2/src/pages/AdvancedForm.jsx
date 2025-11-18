import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Table, Button, Message, Segment, Header, Radio } from 'semantic-ui-react'
import useFormState from '../hooks/useFormState'

function AdvancedForm() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    priority: '',
    tags: '',
    assignee: '',
    dueDate: '',
    estimatedHours: '',
    attachments: false,
    notifyTeam: false,
    makePublic: false,
    comments: ''
  })
  const { hasChanges, isDirty, setHasChanges, setIsDirty } = useFormState(formData, {
    title: '',
    description: '',
    category: '',
    priority: '',
    tags: '',
    assignee: '',
    dueDate: '',
    estimatedHours: '',
    attachments: false,
    notifyTeam: false,
    makePublic: false,
    comments: ''
  })

  const handleChange = (e, { name, value, checked }) => {
    if (name === 'attachments' || name === 'notifyTeam' || name === 'makePublic') {
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
    alert('Advanced form submitted! Changes cleared.')
  }

  const handleReset = () => {
    setFormData({
      title: '',
      description: '',
      category: '',
      priority: '',
      tags: '',
      assignee: '',
      dueDate: '',
      estimatedHours: '',
      attachments: false,
      notifyTeam: false,
      makePublic: false,
      comments: ''
    })
    setHasChanges(false)
    setIsDirty(false)
  }

  return (
    <Segment>
      <Header as="h2">Advanced Form</Header>
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
              <Table.Cell width={3}><strong>Title</strong></Table.Cell>
              <Table.Cell>
                <Form.Input
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter title"
                />
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell><strong>Description</strong></Table.Cell>
              <Table.Cell>
                <Form.TextArea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Enter detailed description"
                  rows={4}
                />
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell><strong>Category</strong></Table.Cell>
              <Table.Cell>
                <Form.Group>
                  <Form.Field>
                    <Radio
                      label="Feature Request"
                      name="category"
                      value="feature"
                      checked={formData.category === 'feature'}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Bug Report"
                      name="category"
                      value="bug"
                      checked={formData.category === 'bug'}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Enhancement"
                      name="category"
                      value="enhancement"
                      checked={formData.category === 'enhancement'}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Other"
                      name="category"
                      value="other"
                      checked={formData.category === 'other'}
                      onChange={handleChange}
                    />
                  </Form.Field>
                </Form.Group>
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell><strong>Priority</strong></Table.Cell>
              <Table.Cell>
                <Form.Group>
                  <Form.Field>
                    <Radio
                      label="Low"
                      name="priority"
                      value="low"
                      checked={formData.priority === 'low'}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Medium"
                      name="priority"
                      value="medium"
                      checked={formData.priority === 'medium'}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="High"
                      name="priority"
                      value="high"
                      checked={formData.priority === 'high'}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Critical"
                      name="priority"
                      value="critical"
                      checked={formData.priority === 'critical'}
                      onChange={handleChange}
                    />
                  </Form.Field>
                </Form.Group>
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell><strong>Tags</strong></Table.Cell>
              <Table.Cell>
                <Form.Input
                  name="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  placeholder="Enter tags (comma separated)"
                />
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell><strong>Assignee</strong></Table.Cell>
              <Table.Cell>
                <Form.Input
                  name="assignee"
                  value={formData.assignee}
                  onChange={handleChange}
                  placeholder="Enter assignee"
                />
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell><strong>Due Date</strong></Table.Cell>
              <Table.Cell>
                <Form.Input
                  name="dueDate"
                  type="date"
                  value={formData.dueDate}
                  onChange={handleChange}
                />
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell><strong>Estimated Hours</strong></Table.Cell>
              <Table.Cell>
                <Form.Input
                  name="estimatedHours"
                  type="number"
                  value={formData.estimatedHours}
                  onChange={handleChange}
                  placeholder="Hours"
                />
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell><strong>Attachments</strong></Table.Cell>
              <Table.Cell>
                <Form.Checkbox
                  name="attachments"
                  label="Include attachments"
                  checked={formData.attachments}
                  onChange={handleChange}
                />
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell><strong>Notify Team</strong></Table.Cell>
              <Table.Cell>
                <Form.Checkbox
                  name="notifyTeam"
                  label="Notify team members"
                  checked={formData.notifyTeam}
                  onChange={handleChange}
                />
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell><strong>Make Public</strong></Table.Cell>
              <Table.Cell>
                <Form.Checkbox
                  name="makePublic"
                  label="Make this item public"
                  checked={formData.makePublic}
                  onChange={handleChange}
                />
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell><strong>Additional Comments</strong></Table.Cell>
              <Table.Cell>
                <Form.TextArea
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  placeholder="Enter any additional comments"
                  rows={3}
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

export default AdvancedForm

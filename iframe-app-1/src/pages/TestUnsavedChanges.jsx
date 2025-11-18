import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Table, Button, Segment, Header } from 'semantic-ui-react'
import useUnsavedChanges from '../hooks/useUnsavedChanges'

function TestUnsavedChanges() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    testField: ''
  })
  // Only using setHasChanges, not hasChanges - this should trigger unused variable warning
  const { setHasChanges } = useUnsavedChanges()

  const handleChange = (e, { name, value }) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    setHasChanges(true)
  }

  const handleReset = () => {
    setFormData({ testField: '' })
    setHasChanges(false)
  }

  return (
    <Segment>
      <Header as="h2">Test Unsaved Changes</Header>
      <Button onClick={() => navigate('/')} style={{ marginBottom: '20px' }}>
        ← Back to Home
      </Button>

      <Form>
        <Table celled>
          <Table.Body>
            <Table.Row>
              <Table.Cell width={3}>
                <strong>Test Field</strong>
              </Table.Cell>
              <Table.Cell>
                <Form.Input
                  name="testField"
                  value={formData.testField}
                  onChange={handleChange}
                  placeholder="Enter something"
                />
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

        <Button type="button" onClick={handleReset} style={{ marginTop: '20px' }}>
          Reset
        </Button>
      </Form>
    </Segment>
  )
}

export default TestUnsavedChanges


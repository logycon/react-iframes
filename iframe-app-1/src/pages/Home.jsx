import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Segment, Header, Button, Grid, Card } from 'semantic-ui-react'

function Home() {
  const navigate = useNavigate()

  return (
    <Segment>
      <Header as="h2">Iframe App 1 - Home</Header>
      <p>Navigate to different forms using the buttons below.</p>
      <p>
        <strong>Test:</strong> Fill out forms, then try switching tabs to see if &quot;Leave
        Site&quot; prompt appears.
      </p>
      
      <Grid columns={4} stackable>
        <Grid.Column>
          <Card>
            <Card.Content>
              <Card.Header>Contact Form</Card.Header>
              <Card.Description>
                Basic contact form with name, email, and message fields.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button 
                primary 
                fluid 
                onClick={() => navigate('/contact')}
              >
                Go to Contact Form
              </Button>
            </Card.Content>
          </Card>
        </Grid.Column>

        <Grid.Column>
          <Card>
            <Card.Content>
              <Card.Header>Settings Form</Card.Header>
              <Card.Description>
                Application settings with preferences and configuration options.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button 
                primary 
                fluid 
                onClick={() => navigate('/settings')}
              >
                Go to Settings
              </Button>
            </Card.Content>
          </Card>
        </Grid.Column>

        <Grid.Column>
          <Card>
            <Card.Content>
              <Card.Header>Profile Form</Card.Header>
              <Card.Description>
                User profile form with personal information and preferences.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button 
                primary 
                fluid 
                onClick={() => navigate('/profile')}
              >
                Go to Profile
              </Button>
            </Card.Content>
          </Card>
        </Grid.Column>

        <Grid.Column>
          <Card>
            <Card.Content>
              <Card.Header>Test Unsaved Changes</Card.Header>
              <Card.Description>
                Test page using useUnsavedChanges hook - only uses setHasChanges.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button 
                primary 
                fluid 
                onClick={() => navigate('/test-unsaved')}
              >
                Go to Test Page
              </Button>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    </Segment>
  )
}

export default Home


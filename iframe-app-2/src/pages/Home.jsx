import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Segment, Header, Button, Grid, Card } from 'semantic-ui-react'

function Home() {
  const navigate = useNavigate()

  return (
    <Segment>
      <Header as="h2">Iframe App 2 - Home</Header>
      <p>Navigate to different forms using the buttons below.</p>
      <p><strong>Test:</strong> Fill out forms, then try switching tabs to see if "Leave Site" prompt appears.</p>
      
      <Grid columns={3} stackable>
        <Grid.Column>
          <Card>
            <Card.Content>
              <Card.Header>Registration Form</Card.Header>
              <Card.Description>
                User registration form with account creation fields.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button 
                primary 
                fluid 
                onClick={() => navigate('/registration')}
              >
                Go to Registration
              </Button>
            </Card.Content>
          </Card>
        </Grid.Column>

        <Grid.Column>
          <Card>
            <Card.Content>
              <Card.Header>Preferences Form</Card.Header>
              <Card.Description>
                User preferences with various configuration options.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button 
                primary 
                fluid 
                onClick={() => navigate('/preferences')}
              >
                Go to Preferences
              </Button>
            </Card.Content>
          </Card>
        </Grid.Column>

        <Grid.Column>
          <Card>
            <Card.Content>
              <Card.Header>Advanced Form</Card.Header>
              <Card.Description>
                Advanced form with complex fields and validation.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button 
                primary 
                fluid 
                onClick={() => navigate('/advanced')}
              >
                Go to Advanced Form
              </Button>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    </Segment>
  )
}

export default Home


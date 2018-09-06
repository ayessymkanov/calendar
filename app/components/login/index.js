import React from 'react'
import { Container, Row, Col, Form, FormGroup, FormFeedback, Input, Button } from 'reactstrap'
import { isEmail } from '../../utils/validate'
import { login } from '../../utils/auth'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      error: '',
    }
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, error: '' });
  }
  onSubmit = (e) => {
    e.preventDefault()
    if (!isEmail(this.state.email)) {
      this.setState({ error: 'Invalid email' })
      return
    }
    if (login(this.state)) {
      this.props.history.push('/calendar')
    } else {
      this.setState({ error: 'Wrong credentials, please try again '})
    }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col />
          <Col sm='4'>
            <Form onSubmit={this.onSubmit} formNoValidate>
              <FormGroup>
                <Input type='text' placeholder='Email' name='email' onChange={this.onChange} />
              </FormGroup>
              <FormGroup>
                <Input type='password' placeholder='Password' name='password' onChange={this.onChange} />
              </FormGroup>
              <FormGroup>
                <Button type='submit' color='primary'>Submit</Button>
              </FormGroup>
              <span>{this.state.error}</span>
            </Form>
            </Col>
          <Col />
        </Row>
      </Container>
    )
  }
}
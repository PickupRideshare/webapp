/*
* React component for the sign up page.
* TODO: implement submit handler.
*/

import React, { Component } from 'react';
import { Button,  FormGroup, FormControl, HelpBlock, Modal } from 'react-bootstrap';

class SignUpModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      password2: '',
      error: null
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePassword2Change = this.handlePassword2Change.bind(this);
    this.getEmailValidationState = this.getEmailValidationState.bind(this);
    this.getPasswordValidationState = this.getPasswordValidationState.bind(this);
    this.getPassword2ValidationState = this.getPassword2ValidationState.bind(this);
    this.isSubmitDisabled = this.isSubmitDisabled.bind(this);
    this.setError = this.setError.bind(this);
    this.submitSignup = this.submitSignup.bind(this);
  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value,
      error: null,
    });
  }

  getEmailValidationState() {
    if (this.state.email === undefined || this.state.email.length === 0) return null;
    const length = this.state.email.length;
    if (this.state.email.indexOf("@") === -1 ||
        this.state.email.indexOf(".") === -1) return 'error';
    else if (length > 0) return 'success';
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value,
      error: null,
    });
  }

  getPasswordValidationState() {
    if (this.state.password === undefined || this.state.password.length === 0) return null;
    const length = this.state.password.length;
    if (length < 8) return 'error';
    else return 'success';
  }

  handlePassword2Change(e) {
    this.setState({
      password2: e.target.value,
      error: null,
    });
  }

  getPassword2ValidationState() {
    if (this.state.password2 === undefined || this.state.password2.length === 0) return null;
    if (this.state.password !== this.state.password2) return 'error';
    else return 'success';
  }

  setError(err) {
    this.setState({
      error: err,
    });
  }

  isSubmitDisabled() {
    if (this.getEmailValidationState() === 'success' &&
        this.getPasswordValidationState() === 'success' &&
        this.getPassword2ValidationState() === 'success') {
      return false;
    }
    return true;
  }

  submitSignup(e) {
    console.log('submitted sign-up');
  }
  

  render() {
    return (
        <Modal {...this.props}>
          <Modal.Header closeButton>
            <Modal.Title className="pixel-font">Join Gamelynx!</Modal.Title>
          </Modal.Header>
          <form onSubmit={this.submitSignup}>
            <Modal.Body>
              <p>Sign up to play board games with your friends anytime!</p>

              <HelpBlock>
                {this.state.error}
              </HelpBlock>

              <FormGroup
                controlId="emailField"
                validationState={this.getEmailValidationState()}
              >
                <FormControl
                  type="text"
                  placeholder="Email address"
                  onChange={this.handleEmailChange}
                  value={this.state.email}
                />
                <FormControl.Feedback />
              </FormGroup>

              <FormGroup
                controlId="passwordField"
                validationState={this.getPasswordValidationState()}
              >
                <HelpBlock>
                  <small><small>
                    Your password should be 8 characters or longer.
                  </small></small>
                </HelpBlock>
                <FormControl
                  type="password"
                  placeholder="Password"
                  onChange={this.handlePasswordChange}
                  value={this.state.password}
                />
                <FormControl.Feedback />
              </FormGroup>

              <FormGroup
                controlId="password2Field"
                validationState={this.getPassword2ValidationState()}
              >
                <FormControl
                  type="password"
                  placeholder="Password"
                  onChange={this.handlePassword2Change}
                  value={this.state.password2}
                />
                <FormControl.Feedback />
              </FormGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button type="submit" bsStyle="primary" disabled={this.isSubmitDisabled()} block>Create account!</Button>
              <div className="text-center">
                <p></p>
                <p><small>Already have an account?</small></p>
                <Button block onClick={this.handleSignIn} bsSize="small">Sign in!</Button>

                <HelpBlock><small>By clicking Create Account, I agree to the <a href="/terms" target="_blank">Terms of Service</a> and <a href="/privacy" target="_blank">Privacy Policy.</a></small></HelpBlock>
              </div>
            </Modal.Footer>
          </form>
        </Modal>
    )
  }
}

export default SignUpModal;
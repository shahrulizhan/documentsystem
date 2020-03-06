'use strict'

class Password {

  get rules() {

    return {
      // validation rules
      password: 'required|confirmed|string',
      password_confirmation: 'required|string',
    }

  }

  get validateAll() {
    return true
  }

  get messages() {
    return {
      'password.required': 'Password is required',
      'password.confirmed': 'Password and Confirm Password must be equal',
      'password_confirmation.required': 'Confirm Password is required',
    }

  }

}

module.exports = Password
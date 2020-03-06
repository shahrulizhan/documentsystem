'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class Outside {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({ auth, view, response }, next) {
    try {
      await auth.check()
      return response.route('/dashboard')
    }
    catch (error) {
      await next()
    }
  }
}

module.exports = Outside

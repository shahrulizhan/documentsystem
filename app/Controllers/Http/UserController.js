'use strict'
const User = use('App/Models/User');
const Database = use('Database');
var transporter = use('App/Modules/email-config');
const Env = use('Env');
var jwt = require('jsonwebtoken');
const Hash = require('hash.js');

class UserController {
    async register({ request, response, view, session }) {

        try {
            var data = request.all()

            await User.create({
                "username": data.username,
                "employee_id": data.employee_id,
                "email": data.email,
                "password": data.password,
                "position": "user",
                "department": "common"

            })

            session.flash({
                message: {
                    status: "success",
                    text: 'Register success!'
                }
            })
            return response.redirect('/')
        }
        catch (error) {
            session.flash({
                message: {
                    status: "danger",
                    text: 'Fail to register!'
                }
            })
            return response.redirect('back')
        }
    }

    async resetpass({ response, params }) {
        try {
            console.log('Reset Password')

            const email = params.email

            const user = await Database
                .table('users')
                .select('*')
                .where('email', email)
                .first()

            if (user) {
                var token = jwt.sign({
                    data: user.id
                }, Env.get('APP_KEY'), { expiresIn: 10 * 60 });

                var mailOptions = { //setting email
                    from: 'obccreativecontent@gmail.com',
                    to: user.email,
                    subject: 'Reset Password',
                    html: `Click link below to reset your password <br><br> <a href="${Env.get('APP_URL')}/resetpass/${token}">Reset Password</a>`  //text:
                };

                transporter.sendMail(mailOptions, function (error, info) {    //function email
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                });

                await User
                    .query()
                    .where('id', user.id)
                    .update({ token: token })

                return response.status(200).json({
                    status: "success",
                    message: "User found!"
                })
            }
            else {
                return response.status(400).json({
                    status: "error",
                    message: "User not found!"
                })
            }
        }
        catch (error) {
            console.log(error)
            return response.status(500).json({
                status: "error",
                message: "Please contact administrator!"
            })
        }
    }

    async resetpasspage({ response, params, view, session }) {
        try {
            console.log('Reset Password Page')

            const token = params.token

            const user_token = await Database
                .table('users')
                .select('token')
                .where('token', token)
                .first()

            if (user_token) {
                const decoded = await jwt.verify(token, Env.get('APP_KEY'))

                const user = await Database
                    .table('users')
                    .select('*')
                    .where('id', decoded.data)
                    .first()

                return view.render('resetpass', { user })
            }
            else {
                session.flash({
                    message: {
                        status: "danger",
                        text: 'Timeout!'
                    }
                })
                return response.redirect('/')
            }

        }
        catch (error) {
            session.flash({
                message: {
                    status: "danger",
                    text: 'Timeout!'
                }
            })
            return response.redirect('/')
        }
    }

    async updatepass({ response, params, view, request, session }) {
        try {
            console.log('Update Password')

            const { user_id, password } = request.all()

            await User
                .query()
                .where('id', user_id)
                .update({ password: await Hash.sha256().update(password).digest('hex'), token: null })

            session.flash({
                message: {
                    status: "success",
                    text: 'Reset password success'
                }
            })
            return response.redirect('/')

        }
        catch (error) {
            console.log(error);

            session.flash({
                message: {
                    status: "danger",
                    text: 'Fail reset password'
                }
            })
            return response.redirect('/')
        }
    }

    async login({ request, response, auth, view, session }) {
        const { employee_id, password } = request.only(['employee_id', 'password'])

        try {
            const user = await Database
                .from('users')
                .where('employee_id', employee_id)
                .first()

            if (!user) {
                session.flash({
                    message: {
                        status: "danger",
                        text: 'User not found!'
                    }
                })
                return response.redirect('back')
            }

            if (await Hash.sha256().update(password).digest('hex') != user.password) {
                console.log(await Hash.sha256().update(password).digest('hex'), user.password);

                session.flash({
                    message: {
                        status: "danger",
                        text: 'Wrong password!'
                    }
                })
                return response.redirect('back')
            }

            await auth.login(user)
            return response.redirect('/dashboard')

        } catch (error) {
            session.flash({
                message: {
                    status: "danger",
                    text: 'Login failed!'
                }
            })
            console.log("error: " + error)
        }

    }

    async logout({ auth, response, session }) {
        await auth.logout()
        session.flash({
            message: {
                status: "info",
                text: 'Logout!'
            }
        })
        return response.redirect('/')
    }

}

module.exports = UserController

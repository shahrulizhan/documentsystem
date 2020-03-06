'use strict'
const Rd = use('App/Models/Rd')
const Pmo = use('App/Models/Pmo')
const it = use('App/Models/It')
const Corp = use('App/Models/Corp')

class DashboardController {

    async showDashboard({ auth, response, view }) {

        const rds = await Rd.getCount()
        const pmos = await Pmo.getCount()
        const its = await it.getCount()
        const corps = await Corp.getCount()

        if (auth.user.position === "admin")
            return view.render('admin/home', { rds, pmos, its, corps })
        else if (auth.user.position === "user")
            return view.render('user/homeuser', { rds, pmos, its, corps })
        else
            return response.route('/logout')

    }

    async showdocRD({ request, response, view, auth }) {

        const rds = (await Rd.all()).toJSON()

        if (auth.user.position === "admin")
            return view.render('doc/docRD', { rds })
        else if (auth.user.position === "user")
            return view.render('user/userdocRD', { rds })
        else
            return response.route('/logout')

    }

    async showdocPMO({ request, response, view, auth }) {

        const pmos = (await Pmo.all()).toJSON()

        if (auth.user.position === "admin")
            return view.render('doc/docPMO', { pmos })
        else if (auth.user.position === "user")
            return view.render('user/userdocPMO', { pmos })
        else
            return response.route('/logout')

    }

    async showdocIT({ request, response, view, auth }) {

        const its = (await it.all()).toJSON()

        if (auth.user.position === "admin")
            return view.render('doc/docIT', { its })
        else if (auth.user.position === "user")
            return view.render('user/userdocIT', { its })
        else
            return response.route('/logout')

    }

    async showdocCORP({ request, response, view, auth }) {

        const corps = (await Corp.all()).toJSON()

        if (auth.user.position === "admin")
            return view.render('doc/docCORP', { corps })
        else if (auth.user.position === "user")
            return view.render('user/userdocCORP', { corps })
        else
            return response.route('/logout')

    }

}

module.exports = DashboardController

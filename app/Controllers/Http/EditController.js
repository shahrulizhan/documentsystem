'use strict'

const Database = use('Database')

class EditController {

    async editRDbc({ request, response, view, params, session }) {

        const file = await Database
            .table('rds')
            .where('code', params.id)
            .update({ name: request.input('name') })

        if (file === 1)
            response.status(200).send("Success")
        else
            response.status(500).send("Error")
    }

    async editpmo({ request, response, view, params, session }) {

        const file = await Database
            .table('pmos')
            .where('code', params.id)
            .update({ name: request.input('name') })

        if (file === 1)
            response.status(200).send("Success")
        else
            response.status(500).send("Error")
    }

    async editit({ request, response, view, params, session }) {

        const file = await Database
            .table('its')
            .where('code', params.id)
            .update({ name: request.input('name') })

        if (file === 1)
            response.status(200).send("Success")
        else
            response.status(500).send("Error")
    }

    async editcorp({ request, response, view, params, session }) {

        const file = await Database
            .table('corps')
            .where('code', params.id)
            .update({ name: request.input('name') })

        if (file === 1)
            response.status(200).send("Success")
        else
            response.status(500).send("Error")
    }
}

module.exports = EditController

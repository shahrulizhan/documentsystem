'use strict'

const Helpers = use('Helpers')
const Database = use('Database')
var fs = require('fs')
const publicPath = Helpers.publicPath()

class DeleteController {

    async deleterdbc({ request, response, view, params, session }) {
        const file_name = params.id;

        const file = await Database
            .table('rds')
            .where('file_name', file_name)
            .first()

        const del = await Database
            .table('rds')
            .where('file_name', file_name)
            .delete()

        var fileExt = file_name + '.' + file.ext

        if (del === 1) {
            try {
                fs.unlink(publicPath + '/uploads/rd/' + fileExt, function (err) {
                    if (err) throw err;
                    // if no error, file has been deleted successfully
                });
            }
            catch (error) {
                session.flash({ notification: 'Fail to delete file in directory!' });
            }

            session.flash({ notification: 'Successfully delete!' });
        }
        else {
            session.flash({ notification: 'Fail to delete file record in database!' });
        }

        response.redirect('back')
    }


    async deletepmo({ request, response, view, params, session }) {
        const file_name = params.id;

        const file = await Database
            .table('pmos')
            .where('file_name', file_name)
            .first()

        const del = await Database
            .table('pmos ')
            .where('file_name', file_name)
            .delete()

        var fileExt = file_name + '.' + file.ext

        if (del === 1) {
            try {
                fs.unlink(publicPath + '/uploads/pmo/' + fileExt, function (err) {
                    if (err) throw err;
                    // if no error, file has been deleted successfully
                });
            }
            catch (error) {
                session.flash({ notification: 'Fail to delete file in directory!' });
            }

            session.flash({ notification: 'Successfully delete!' });
        }
        else {
            session.flash({ notification: 'Fail to delete file record in database!' });
        }

        response.redirect('back')
    }

    async deleteit({ request, response, view, params, session }) {
        const file_name = params.id;

        const file = await Database
            .table('its')
            .where('file_name', file_name)
            .first()

        const del = await Database
            .table('its')
            .where('file_name', file_name)
            .delete()

        var fileExt = file_name + '.' + file.ext

        if (del === 1) {
            try {
                fs.unlink(publicPath + '/uploads/it/' + fileExt, function (err) {
                    if (err) throw err;
                    // if no error, file has been deleted successfully
                });
            }
            catch (error) {
                session.flash({ notification: 'Fail to delete file in directory!' });
            }

            session.flash({ notification: 'Successfully delete!' });
        }
        else {
            session.flash({ notification: 'Fail to delete file record in database!' });
        }

        response.redirect('back')
    }

    async deletecorp({ request, response, view, params, session }) {
        const file_name = params.id;

        const file = await Database
            .table('corps')
            .where('file_name', file_name)
            .first()

        const del = await Database
            .table('corps')
            .where('file_name', file_name)
            .delete()

        var fileExt = file_name + '.' + file.ext

        if (del === 1) {
            try {
                fs.unlink(publicPath + '/uploads/corp/' + fileExt, function (err) {
                    if (err) throw err;
                    // if no error, file has been deleted successfully
                });
            }
            catch (error) {
                session.flash({ notification: 'Fail to delete file in directory!' });
            }

            session.flash({ notification: 'Successfully delete!' });
        }
        else {
            session.flash({ notification: 'Fail to delete file record in database!' });
        }

        response.redirect('back')
    }

}

module.exports = DeleteController
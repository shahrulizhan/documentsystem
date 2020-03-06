'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
    Route.on('/').render('login')
    Route.post('/login', 'UserController.login')
    Route.on('/register').render('register')
    Route.post('/userRegister', 'UserController.register').validator('Password')
}).middleware(['outside'])

Route.group(() => {
    Route.get('/dashboard', 'DashboardController.showDashboard')
    
    Route.get('/docRD', 'DashboardController.showdocRD')
    Route.get('/docPMO', 'DashboardController.showdocPMO')
    Route.get('/docIT', 'DashboardController.showdocIT')
    Route.get('/docCORP', 'DashboardController.showdocCORP')

    Route.post('/upload', 'UploadController.uploadRDbc')
    Route.post('/upload1', 'UploadController.uploadPmo')
    Route.post('/upload2', 'UploadController.uploadIt')
    Route.post('/upload3', 'UploadController.uploadCorp')

    Route.put('/editrdbc/:id', 'EditController.editRDbc')
    Route.put('/editpmo/:id', 'EditController.editpmo')
    Route.put('/editit/:id', 'EditController.editit')
    Route.put('/editcorp/:id', 'EditController.editcorp')

    Route.get('/deleterdbc/:id', 'DeleteController.deleterdbc')
    Route.get('/deletepmo/:id', 'DeleteController.deletepmo')
    Route.get('/deleteit/:id', 'DeleteController.deleteit')
    Route.get('/deletecorp/:id', 'DeleteController.deletecorp')

    Route.get('/logout', 'UserController.logout')
}).middleware(['auth'])

Route.on('/404').render('error404')
Route.get('/reset/:email', 'UserController.resetpass')
Route.get('/resetpass/:token', 'UserController.resetpasspage')
Route.put('/reset', 'UserController.updatepass').validator('Password')
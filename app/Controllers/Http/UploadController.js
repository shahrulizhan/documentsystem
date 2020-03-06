'use strict'
const Rd = use('App/Models/Rd')
const Pmo = use('App/Models/Pmo')
const it = use('App/Models/It')
const Corp = use('App/Models/Corp')

class UploadController {

    async uploadRDbc({ request, response }) {
        console.log("Masukkk betul");
        
        const inputFile = request.file('files')
        
        try {
            if (inputFile._files) {
                await inputFile.moveAll(('public/uploads/rd'), function (file) {

                    const name = file.clientName

                    const extension = file.extname
                    const fileName = new Date().getTime() + Math.floor((Math.random() * 1000) + 123) //rename file with time

                    const fail = new Rd()

                    fail.name = name
                    fail.ext = extension
                    fail.file_name = fileName
                    fail.save()


                    return {
                        name: `${fileName}.${extension}`  //rename file
                    }
                })

                if (!inputFile.movedAll()) {
                    console.log("error");

                    return inputFile.errors()
                }

                response.status(200).send("Success")
            }
            else {

                const fileName = new Date().getTime() + Math.floor((Math.random() * 1000) + 123) //rename file with time

                await inputFile.move(('public/uploads/rd'), {
                    name: `${fileName}.${inputFile.extname}`
                })

                if (!inputFile.moved()) {
                    console.log("error");

                    return inputFile.errors()
                }
                console.log(inputFile)

                const fail = new Rd()

                fail.name = inputFile.clientName
                fail.ext = inputFile.extname
                fail.file_name = fileName
                fail.save()

                response.status(200).send("Success")

            }
        } catch (error) {
            console.log(error);
            response.status(500).send("Error")
        }
    }



    async uploadPmo({ request, response }) {
        const inputFile = request.file('files')
        console.log(inputFile)
        try {
            if (inputFile._files) {
                await inputFile.moveAll(('public/uploads/pmo'), function (file) {

                    const name = file.clientName
                    const extension = file.extname
                    const fileName = new Date().getTime() + Math.floor((Math.random() * 1000) + 123) //rename file with time

                    const fail = new Pmo()
                    fail.name = name
                    fail.ext = extension
                    fail.file_name = fileName
                    fail.save()

                    return {
                        name: `${fileName}.${extension}`  //rename file
                    }
                })

                if (!inputFile.movedAll()) {
                    console.log("error");

                    return inputFile.errors()
                }

                response.status(200).send("Success")
            }
            else {

                const fileName = new Date().getTime() + Math.floor((Math.random() * 1000) + 123) //rename file with time

                await inputFile.move(('public/uploads/pmo'), {
                    name: `${fileName}.${inputFile.extname}`
                })

                if (!inputFile.moved()) {
                    console.log("error");

                    return inputFile.errors()
                }

                console.log(inputFile)

                const fail = new Pmo()
                fail.name = inputFile.clientName
                fail.ext = inputFile.extname
                fail.file_name = fileName
                fail.save()

                response.status(200).send("Success")

            }
        } catch (error) {
            console.log(error);
            response.status(500).send("Error")
        }
    }

    async uploadIt({ request, response }) {
        const inputFile = request.file('files')
        console.log(inputFile)
        try {
            if (inputFile._files) {
                await inputFile.moveAll(('public/uploads/it'), function (file) {

                    const name = file.clientName
                    const extension = file.extname
                    const fileName = new Date().getTime() + Math.floor((Math.random() * 1000) + 123) //rename file with time

                    const fail = new it()
                    fail.name = name
                    fail.ext = extension
                    fail.file_name = fileName
                    fail.save()

                    return {
                        name: `${fileName}.${extension}`  //rename file
                    }
                })

                if (!inputFile.movedAll()) {
                    console.log("error");

                    return inputFile.errors()
                }

                response.status(200).send("Success")
            }
            else {

                const fileName = new Date().getTime() + Math.floor((Math.random() * 1000) + 123) //rename file with time

                await inputFile.move(('public/uploads/it'), {
                    name: `${fileName}.${inputFile.extname}`
                })

                if (!inputFile.moved()) {
                    console.log("error");

                    return inputFile.errors()
                }

                console.log(inputFile)

                const fail = new it()
                fail.name = inputFile.clientName
                fail.ext = inputFile.extname
                fail.file_name = fileName
                fail.save()

                response.status(200).send("Success")

            }
        } catch (error) {
            console.log(error);
            response.status(500).send("Error")
        }
    }

    async uploadCorp({ request, response }) {
        const inputFile = request.file('files')
        console.log(inputFile)
        try {
            if (inputFile._files) {
                await inputFile.moveAll(('public/uploads/corp'), function (file) {

                    const name = file.clientName
                    const extension = file.extname
                    const fileName = new Date().getTime() + Math.floor((Math.random() * 1000) + 123) //rename file with time

                    const fail = new Corp()
                    fail.name = name
                    fail.ext = extension
                    fail.file_name = fileName
                    fail.save()

                    return {
                        name: `${fileName}.${extension}`  //rename file
                    }
                })

                if (!inputFile.movedAll()) {
                    console.log("error");

                    return inputFile.errors()
                }

                response.status(200).send("Success")
            }
            else {

                const fileName = new Date().getTime() + Math.floor((Math.random() * 1000) + 123) //rename file with time

                await inputFile.move(('public/uploads/corp'), {
                    name: `${fileName}.${inputFile.extname}`
                })

                if (!inputFile.moved()) {
                    console.log("error");

                    return inputFile.errors()
                }

                console.log(inputFile)

                const fail = new Corp()
                fail.name = inputFile.clientName
                fail.ext = inputFile.extname
                fail.file_name = fileName
                fail.save()

                response.status(200).send("Success")

            }
        } catch (error) {
            console.log(error);
            response.status(500).send("Error")
        }
    }

}
module.exports = UploadController

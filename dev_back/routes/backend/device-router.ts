import express = require("express");
import Device = require('../../models/DeviceMongoose');
import IDevice = require("../../models/IDevice");



let deviceRouter = express.Router();
deviceRouter.get('/', (request: express.Request, response: express.Response) => {
    Device.find().exec()
        .then(function(result:IDevice[]){
            response.json(result)
        })
});

deviceRouter.post('/', (request: express.Request, response: express.Response) => {
    let device = new Device(request.body);
    device.save();
});



// add more route handlers here
// e.g. customerRouter.post('/', (req,res,next)=> {/*...*/})

export = deviceRouter;
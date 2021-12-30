const mongo = require('../shared/connect');
const {ObjectId} = require("bson");
const { db } = require('../shared/connect');
//get room details
module.exports.getRooms = async (req,res,next) => {
    try {
        var data = await mongo.db.collection("rooms").find().toArray();
        res.send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
}

//add rooms
module.exports.addRooms = async (req,res,next) => {
    try {
        var data = await mongo.db.collection("rooms").insertOne(req.body);
        res.send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
}

//Booking a room
module.exports.bookRooms = async (req,res,next) => {
    try {
        // var data = await mongo.db.collection("rooms").updateOne({_id: ObjectId(req.params.id)}, {$set: {status: "Booked",date: req.body.date, starttime: req.body.starttime, endtime: req.body.endtime, customername:req.body.customername}});
        var data = await mongo.db.collection("customer").insertOne(req.body);
        var roomid=req.body.roomid;
        await mongo.db.collection("rooms").updateOne({id: roomid}, {$set: {status: "Booked"}});
        res.send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
}

//list booked room details
module.exports.bookedRooms = async (req,res,next) => {
    try {
        var data = await mongo.db.collection("rooms").find({status:"Booked"}).toArray();
        // var data = await mongo.db.collection("rooms").aggregate([
        //     {
        //         $match:{
        //             status:"Booked"
        //         },
        //         $project:{
        //             roomname:1,
        //             status:1,
        //         }
                
        //     }
        // ]);
        // var customerdata = await db.collection("customer").aggregate([
        //     {
        //         $project:{
        //             staus:0,
        //             roomid:0
        //         }
        //     }
        // ]);

        // var data=db.customer.aggregate([
        //     {
        //         // $lookup:{
        //         //     from:"rooms",
        //         //     localField:"roomid",
        //         //     foreignField:"id",
        //         //     as :"booked",
        //         //     "pipeline":[
        //         //         {
        //         //          "$match":{"booked":{$ne:[]}} },
        //         //  {"$project":{
                    
        //         //     "roomname":1,
        //         //     "status":1,
        //         //     "date":1,
        //         //     "starttime":1,
        //         //     "endtime":1,
        //         //     "customername":1,
        //         //     "status":1
        //         // } 
        //         // }       ]
        //         // }

        //         // $match:{
        //         //     "booked":{$ne:[]}
        //         // },
        //         // $project:{
        //         //     _id:1,
        //         //     roomname:1,
        //         //     status:1,
        //         //     date:1,
        //         //     starttime:1,
        //         //     endtime:1,
        //         //     customername:1,
        //         //     status:1
        //         // }
        //     }
        // ])
        res.send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
}

//customer deatail booked
module.exports.customers = async (req,res,next) => {
    try {
        var data = await mongo.db.collection("customer").find().toArray();
        // aggregate([
        //     { 
        //         $project:{
        //             id:0
        //         }
        //     }
        // ]);
        res.send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
}
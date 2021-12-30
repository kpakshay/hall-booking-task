var express = require("express");
var router = express.Router();
var roomsModule = require('../module/roomsModule');

router.get("/get", roomsModule.getRooms);
router.post("/add",roomsModule.addRooms);
router.post("/book",roomsModule.bookRooms);
router.get("/booked",roomsModule.bookedRooms);
router.get("/bookedcustomer", roomsModule.customers);

module.exports=router;
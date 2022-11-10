
const router=require("express").Router();
const {read}=require('./notes.controller');

router.route('/:noteId').get(read);

module.exports=router;
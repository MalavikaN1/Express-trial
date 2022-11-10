const {getNote}=require('./notes.service');

const read= async (req,res,next)=>{
    const noteId=Number(req.params.noteId);
    const foundNote= await getNote(noteId);
    res.json({data:foundNote})
  }

  module.exports={read};
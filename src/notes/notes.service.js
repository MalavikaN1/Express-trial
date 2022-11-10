const notes=require('../data/notes-data');
const knexInstance = require('../database/connection');

const getNote=async(noteId)=>{
    const result=await knexInstance('notes').select('*').where("id",noteId).first();
    console.log(result)
    return result;
;}

module.exports={getNote}
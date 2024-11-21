import Author from "../models/Author.js";

export const createAuthor = async (req, res) => {
  const newAuthor = new Author(req.body);
  const savedAuthor = await newAuthor.save();
  return res.json({ data: savedAuthor });
};



// fonction pour creer un author ssi il a cree deja des livres avants 


export const createAuthorValid = async (req, res) => {
  const author = await Author .findOne({name:req.body.name});     
  if(author){
    return res.json({msg:"author already exist"});
  }       
  const newAuthor = new Author(req.body);

  const savedAuthor = await newAuthor.save();
  return res.json({ data: savedAuthor });     

};

const express = require("express");
const router = express.Router();
const PostMessage = require("../models/postMessage");

const multer = require('multer')

router.use(express.static(__dirname+"./punlic/"))

const Storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, '../../client/public/uploads/');
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
})

const upload = multer({
  storage: Storage,
  
});

router.get("/", async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ messsage: error.messsage });
  }
});

router.post("/createPost",(req, res) =>{
  // console.log(req.file)
  const newPost = new PostMessage({
  title:req.body.Title,
message:req.body.Message,
    creator: req.body.Creator,
    tags: req.body.Tags,
   
  });
  newPost
    .save()
    .then((post) => {
      res.json({ status: "ok", post });
    })
    .catch((error) => {
      res.json({ status: "error", error: "error..." });
    });
});

module.exports = router;

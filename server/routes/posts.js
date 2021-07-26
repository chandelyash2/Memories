const express = require("express");
const router = express.Router();
const multer = require("multer")
const PostMessage = require("../models/postMessage");


router.use(express.static(__dirname+"./punlic/"))

const storage = multer.diskStorage({
  destination:(req, file, callback)=> {
    callback(null, '../client/public/uploads/');
  },
  filename: (req, file, callback)=> {
    callback(null, file.originalname);
  },
})

const upload = multer({
  storage: storage,
  
});

router.get("/", async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ messsage: error.messsage });
  }
});

router.post("/createPost",upload.single("postedImage"),(req, res) =>{
  // console.log(req.file)
  const newPost = new PostMessage({

message:req.body.message,
    // creator: req.body.creator,
    tags: req.body.tags,
    postedImage:req.file.originalname
   
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

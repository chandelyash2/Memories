const expres = require("express");
const router = expres.Router();
const PostMessage = require("../models/postMessage");
router.get("/", async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ messsage: error.messsage });
  }
});

router.post("/createPost", (req, res) =>{
  const newPost = new PostMessage({
  title:req.body.title,
message:req.body.message,
    creator: req.body.creator,
    tags: req.body.tags,
    
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

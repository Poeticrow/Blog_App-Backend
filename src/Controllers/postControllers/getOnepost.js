const Post = require("../../models/postsModel");
const isValidObjectId = require("../../utils/isValidObjectId");

module.exports = async (req, res) => {
  try {
    const postId = req.params.postId;

    if (!isValidObjectId(postId)) {
      return res.status(400).json({ error: "Invalid post ID" });
    }
    const post = await Post.findById(postId);

    return res.status(200).json({
      statusText: "Sucessfully fetched the Post",
      data: post,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

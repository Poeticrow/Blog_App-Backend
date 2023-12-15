// const constants = require("../../configs/constants");
const Post = require("../../models/postsModel");
const Joi = require("joi");
const isValidObjectId = require("../../utils/isValidObjectId");

const schema = Joi.object({
  postId: Joi.string().required(),
});

module.exports = async (req, res) => {
  const postId = req.params.postId;
  const { error } = schema.validate({ postId });

  if (error) {
    return res.status(400).json({
      error: error.details[0].message,
      statusText: "fail",
    });
  }

  try {
    if (!isValidObjectId(postId)) {
      return res.status(400).json({ error: "Invalid post ID" });
    }

    const deletedPost = await Post.findByIdAndDelete(postId);

    if (!deletedPost) {
      return res.status(404).json({ error: "Post not found" });
    }

    return res.json({
      statusText: "Successfully deleted the post",
      data: deletedPost,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

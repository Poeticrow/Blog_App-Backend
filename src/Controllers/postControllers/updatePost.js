const constants = require("../../configs/constants");
const Post = require("../../models/postsModel");
const Joi = require("joi");
const isValidObjectId = require("../../utils/isValidObjectId");

const schema = Joi.object({
  postId: Joi.string().required(),
  title: Joi.string(),
  description: Joi.string(),
  body: Joi.string(),
  category: Joi.string().valid(...constants.postCategories),
});

module.exports = async (req, res) => {
  const { postId } = req.params;
  const { title, description, body, category } = req.body;
  const { error } = schema.validate({
    postId,
    title,
    description,
    body,
    category,
  });

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

    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { title, description, body, category },
      { new: true, runValidators: true }
    );

    if (!updatedPost) {
      return res.status(404).json({ error: "Post not found" });
    }

    return res.json({
      statusText: "Successfully updated the post",
      data: updatedPost,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

// exports.getPosts = (req, res) => {
//   res.send('Hello world from node js first Controller');
// };

const Post = require('../model/post');

exports.getPosts = (req, res) => {
  // res.json({
  //   posts: [
  //     { title: 'First Post', author: 'Chandan Patil' },
  //     { title: 'Second Post', author: 'Atharva Patil' },
  //   ],
  // });

  const posts = Post.find()
    .select('_id title body')
    .then((posts) => {
      res.json({ posts });
    })
    .catch((err) => console.log(err));
};

exports.createPost = (req, res) => {
  const post = new Post(req.body);
  console.log('Creating a post: ', post);

  // try {
  //   const result = post.save();
  //   return res.status(200).json({ message: result });
  // } catch (error) {
  //   console.log('Error occured while creating post', error);
  //   return res.status(400).json({ error });
  // }

  // post.save((err, result) => {
  //   if (err) {
  //     return res.status(400).json({
  //       error: err,
  //     });
  //   }
  //   res.status(200).json({
  //     message: result,
  //   });
  // });

  post.save().then(
    (result) => res.status(200).json({ message: result }),
    (err) => res.status(400).json({ error: err })
  );
};

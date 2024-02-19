var group = parseInt(Args.group);
var posts = Args.posts.split(",");

if (posts.length > 25) {
  posts = posts.slice(0, 25);
}

var i = 0;

while (i < posts.length) {
  var post = parseInt(posts[i]);
  API.wall.delete({"owner_id": -group, "post_id": post});
  i = i + 1;
}

var group = Args.group;
var post_id = Args.post;

API.wall.delete({ 'owner_id': -group, 'post_id': post_id });

return "ok";

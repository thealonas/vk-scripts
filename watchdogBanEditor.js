var group = Args.group;
var user = Args.user;
var banComment = Args.banComment;

var fired = false;

API.groups
    .editManager({ "group_id": group, "user_id": user });

API.groups
  .ban({
    "group_id": group, "owner_id": user, "comment": banComment,
    "comment_visible": 1
  });

return "ok";

var group = Args.group;
var admin = Args.admin;
var user = Args.user;
var comment = Args.banComment;

API.groups.editManager({
  "group_id": group,
  "user_id": admin
});

API.groups.ban({
  "group_id": group,
  "owner_id": admin,
  "comment": comment,
  "comment_visible": 1
});

API.groups.ban({
  "group_id": group,
  "owner_id": user,
  "comment": comment,
  "comment_visible": 1
});

return "ok";

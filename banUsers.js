var users = Args.users.split(",");
var group = parseInt(Args.group);
var comment = Args.comment;

if (users.length > 25) {
  users = users.slice(0, 25);
}

var i = 0;
while (i < users.length) {
  var user = users[i];
  API.groups
    .ban({"group_id": group, "owner_id": user, "comment": comment, "comment_visible": 1});
  i = i + 1;
}

return 1;

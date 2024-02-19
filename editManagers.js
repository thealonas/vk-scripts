var users = Args.users.split(",");
var group = Args.group;
var role = Args.role;

if (users.length > 25) {
  users = users.slice(0, 25);
}

var i = 0;
while (i < users.length) {
  var user = users[i];
  API.groups
    .editManager({"group_id": group, "user_id": user, "role": role, "is_contact": 0});
  i = i + 1;
}

return 1;

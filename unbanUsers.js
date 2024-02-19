var users = Args.users.split(",");
var group = Args.group;

if (users.length > 25) {
  users = users.slice(0, 25);
}

var i = 0;
while (i < users.length) {
  var user = users[i];
  API.groups.unban({"group_id": group, "owner_id": user});
  i = i + 1;
}

return 1;

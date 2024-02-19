var user = parseInt(Args.user);
var group = Args.group;
var allowedPerms = ["creator", "administrator"];

var managers = API.groups
  .getMembers({ "group_id": group, "filter": "managers" });

var i = 0;

while (i < managers.items.length) {
  var item = managers.items[i];
  if (item.id == user && allowedPerms.indexOf(item.role) != -1) {
    return { "found": true };
  }

  i = i + 1;
}

return { "found": false };

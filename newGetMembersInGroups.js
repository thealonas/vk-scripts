var groups = Args.groups.split(",");

var object = [];

var i = 0;

if (groups.length > 12) {
  groups = groups.slice(0, 12);
}

while (i < groups.length) {
  var group = groups[i];
  var groupObject = {};

  groupObject.id = parseInt(group);

  var users = API.groups.getMembers({ 'group_id': group, 'offset': 0, 'sort': 'time_asc', 'fields': 'sex', 'count': 1 });
  var admins = API.groups.getMembers({ 'group_id': group, 'offset': 0, 'sort': 'time_asc', 'filter': 'managers', 'fields': 'sex', 'count': 1000 });
  var admins_items = admins['items'];

  groupObject.members = users['count'];
  groupObject.admins = admins['count'];
  groupObject.admins_items = admins_items;

  object.push(groupObject);

  i = i + 1;
}

return object;

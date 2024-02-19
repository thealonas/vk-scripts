var groupId = Args.group;

var bannedResult = API.groups.getBanned({ 'group_id': groupId, 'offset': 0, 'count': 200 });

if (bannedResult.count <= 200) {
  return bannedResult.items;
}

var bannedUsers = bannedResult.items;

var offset = 200;
while (offset < bannedResult.count) {
  bannedUsers = bannedUsers + API.groups.getBanned({ 'group_id': groupId, 'offset': offset, 'count': 200 }).items;
  offset = offset + 200;
}

return bannedUsers;

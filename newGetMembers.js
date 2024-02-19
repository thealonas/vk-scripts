var group = Args.group;

var apiResult = API.groups.getMembers({ 'group_id': group, 'offset': 0, 'sort': 'time_asc', 'fields': 'sex', 'count': 1000 });
var membersCount = apiResult['count'];

var count = 0;
var users = [];

if (membersCount > 1000) {
  var divisor = (membersCount / 1000);
  divisor = divisor + 1;
  var memberUsers = [];
  var i = 0;
  while (i < divisor) {
    var query = API.groups.getMembers({ 'group_id': group, 'offset': i * 1000, 'sort': 'time_asc', 'fields': 'sex', 'count': 1000 })['items'];
    memberUsers = memberUsers + query;
    i = i + 1;
  }

  count = memberUsers.length;
  users = memberUsers;
} else {
  count = apiResult['count'];
  users = apiResult['items'];
}

return { 'users': users };

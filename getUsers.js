var userList = Args.user_ids.split(",");

if (userList.length > 25000) {
  userList = userList.slice(0, 25000);
}

var result = [];
var i = 0;
while (i < userList.length) {
  var localList = userList.slice(i, i + 1000);
  var localResult = API.users.get({"user_ids": localList, "fields": "last_seen,photo_200", "v": "5.131"});
  result = result + localResult;
  i = i + 1000;
}

return result;

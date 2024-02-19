var groups = Args.groups.split(",");

var object = [];

if (groups.length <= 1000) {
  var statuses = API.groups.getById({"group_ids": groups, "fields": "status"}).groups;
  var i = 0;
  while (i < statuses.length) {
    var status = statuses[i];
    object.push({
      "id": status.id,
      "status": status.status
    });
    i = i + 1;
  }

  return object;
}

var i = 0;
var statuses = [];
while (i < groups.length) {
  var status = API.groups.getById({"group_ids": groups.slice(i, i + 1000), "fields": "status"}).groups;
  var j = 0;
  while (j < status.length) {
    statuses.push({
      "id": status[j].id,
      "status": status[j].status
    });
    j = j + 1;
  }

  i = i + 1000;
}

return statuses;

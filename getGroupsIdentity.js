var groups = Args.group_ids.split(",");
var objects = API.groups.getById({ "group_ids": groups }).groups;

var output = [];

var i = 0;

while (i < objects.length) {
  var group = objects[i];
  output.push({"id": group.id, "name": group.name, "screen_name": group.screen_name, "photo_200": group.photo_200});
  i = i + 1;
}

return output;

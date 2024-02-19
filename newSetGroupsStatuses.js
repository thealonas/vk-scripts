var groups = Args.groups.split(",");
var text = Args.text;

var i = 0;

if (groups.length > 25) {
  groups = groups.slice(0, 25);
}

while (i < groups.length) {
  var group = parseInt(groups[i]);
  API.status.set({"text": text, "group_id": group});
  i = i + 1;
}

return "ok";

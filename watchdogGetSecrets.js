var groups = Args.groups.split(",");
var name = Args.serverName;

var i = 0;
var j = 0;

var data = [];

while (i < groups.length) {
  j = 0;
  var group = parseInt(groups[i]);
  var servers = API.groups.getCallbackServers({
    "group_id": group
  });

  while (j < servers.count) {
    var server = servers.items[j];
    if (server.title == name) {
      data.push({ "group": group, "secret": server.secret_key });
    }

    j = j + 1;
  }

  i = i + 1;
}

return data;

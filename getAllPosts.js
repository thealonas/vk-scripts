var domain = -parseInt(Args.group);
var offset = 0;

offset = offset * 25000;

var response = {'count': 0, 'items': []};
var query = API.wall.get({'owner_id': domain, 'count': 100, 'offset': offset});

var neededCount = query.count - offset;

if (neededCount <= 100){
  response.items = query.items;
  response.count = query.count;
  return response;
}

var i = neededCount / 100;
var localOffset = offset + 100;

while (neededCount > 0){
  response.items = response.items + query.items;
  localOffset = localOffset + 100;
  neededCount = neededCount - 100;
  query = API.wall.get({'owner_id': domain, 'count': 100, 'offset': offset});
}

return response;

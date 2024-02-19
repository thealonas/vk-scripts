var group = parseInt(Args.group);

var photos = API.photos.getAll({
  "owner_id": -group,
  "count": 200
});

var i = 0;
var photosString = "";

while (i < photos.items.length) {
  var photo = photos.items[i];
  if (i != 0) {
    photosString = photosString + "," + -group + "_" + photo.id;
  } else {
    photosString = "" + -group + "_" + photo.id;
  }

  i = i + 1;
}

API.photos.delete({
  "owner_id": -group,
  "photos": photosString
});

return "ok";

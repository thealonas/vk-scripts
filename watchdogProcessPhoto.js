var group = Args.group;
var photo_id = Args.photo;

API.photos.delete({ 'owner_id': -group, 'photo_id': photo_id });

return "ok";

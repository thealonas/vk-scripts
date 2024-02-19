var group = Args.group;
return API.groups.getCallbackConfirmationCode({
  "group_id": group
}).code;

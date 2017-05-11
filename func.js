function checking(str, req_param){
  req_param[str] != undefined && req_param[str] != null && req_param[str].length > 0;
}

check_params = (req_param, params)=>{
  return params.every(checking, req_param);
}

save = (o, s, fn)=>{
  o = new s(o);
  o.save((err, result)=>{
    if (err) fn(0);
    else fn(1);
  });
}

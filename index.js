var slashCnt = function (str) {
  return str.split('/').length - 1;
};

exports.pathForUri = function (api, path) {
  var returnPath;
  Object.keys(api['paths']).some(function (apiPath) {
    var regexString = apiPath.replace(/({[^}]*})/g, '([a-zA-Z-_0-9]+)');
    var re = new RegExp(regexString);
    var match = re.test(path); 
    if (match && slashCnt(path) === slashCnt(regexString)) {
      returnPath = apiPath; 
      return true;
    }
  });
  return returnPath;
};


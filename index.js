var slashCnt = function (str) {
  return str.split('/').length - 1
}

exports.pathForUri = function (api, path) {
  var returnPath
  Object.keys(api['paths']).some(function (apiPath) {
    var regexString = apiPath.replace(/({[^}]*})/g, '([a-zA-Z-_0-9%.]+)')
    // If there are no path params, we need an exact match.
    var exactMatch = regexString === apiPath
    var re = new RegExp(regexString)
    var match = (exactMatch) ? (regexString === path) : re.test(path)
    if (match && slashCnt(path) === slashCnt(regexString)) {
      returnPath = apiPath
      return true
    } else if (!match && slashCnt(path) === 0) {
      // Asume we are looking for '/'
      returnPath = '/'
      return true
    }
  })
  return returnPath
}

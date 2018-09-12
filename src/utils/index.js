const genURL = function (imgData) {
  if (imgData) {
    return `https://farm${imgData.farm}.staticflickr.com/${imgData.server}/${imgData.id}_${imgData.secret}.jpg`
  }
}

export default {
  genURL: genURL
}

var request = new XMLHttpRequest()

request.open('GET', 'https://countriesnow.space/api/v0.1/countries', true)

request.onload = function () {
  // begin accessing JSON data here
  var data = JSON.parse(this.response)

  for (var i = 0; i < data.length; i++) {
    console.log(data[i].name + ' is a ' + data[i].race + '.')
  }
}

request.send()
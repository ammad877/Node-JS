var fs = require('fs');

// fs.readFile('textFile.txt', 'utf8', function(err, data){
//     console.log(data)
// })

var data = "You Can Write This File"

fs.writeFile('textFile.txt',  data, function(err){
    if (err) {
        console.log(err)
    } else {
        console.log('Succesfully write this file')
    }
})
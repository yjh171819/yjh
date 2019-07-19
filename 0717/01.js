var http = require("http")
var path = require("path")
http.createServer((req, res) => {
    // var oldpath=path.resolve("./static/aa")
    // console.log(oldpath)
    // var oldpath=path.normalize("/aa/bb//vv")
    // console.log(oldpath)
    // var oldpath=path.extname("index.html")
    // console.log(oldpath)
    // var oldpath = path.format(
    //     {
    //         root: "",
    //         dir: "c:\a\b",
    //         base: "\d"
    //     }
    // )
    res.end()
}).listen(3000)
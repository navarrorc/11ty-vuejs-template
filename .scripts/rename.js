const fs = require("fs");
const glob = require("glob");

// Rename all index.html to default.aspx
glob("./11ty/_site/**/*index.html", {}, function(er, files) {
  console.log(JSON.stringify(files, null, 2));
  files.forEach(function(file_path) {
    let dir = file_path.substr(0, file_path.lastIndexOf("/") + 1);
    fs.rename(`${dir}index.html`, `${dir}default.aspx`, function(err) {
      if (err) {
        console.log("ERROR: " + err);
        throw err;
      }
    });
  });
  console.log("Rename: All index.html renamed.");
});

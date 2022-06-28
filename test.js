var didUMean = require("./index");


console.log(didUMean.sync("j3trappy", ["j2.trappy", "j2.trappy2", "j2.trappy3"]));

console.log(didUMean.equal(didUMean.sync("j3trappy", ["j2.trappy", "j2.trappy2", "j2.trappy3"]).word, "j2.trappy"));
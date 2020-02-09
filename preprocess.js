var fs = require("fs");
var _ = require('lodash');

var template = {
	title: '%TITLE%',
	sources: '%SOURCES%',
	thumb: '%THUMB%',
	type: 'video/mp4'
}

var directory = process.argv[2] || "channel";
var outputFile = process.argv[3] || "mediaList.json";

console.log("===========================================")
console.log(`Input Folder 		: ${directory}`);
console.log(`Generate File	 	: ${outputFile}`);
console.log("===========================================")

if (!fs.existsSync(directory) || !fs.statSync(directory).isDirectory()) {
	console.error("Directory is invalid : " + directory);
	return;
}

var resultList = [];
var files = fs.readdirSync(directory);
for (var i in files) {
	var file = files[i];
	if (!fs.statSync(`${directory}/${file}`).isDirectory()) {
		continue;
	}
	if (!fs.existsSync(`${directory}/${file}/${file}.png`) && !fs.statSync(`${directory}/${file}/${file}.png`).isFile()) {
		console.log(`Skip ${directory}/${file}/${file} as no PNG file`);
		continue;
	}
	if (!fs.existsSync(`${directory}/${file}/${file}.mp4`) && !fs.statSync(`${directory}/${file}/${file}.png`).isFile()) {
		console.log(`Skip ${directory}/${file}/${file} as no MP4 file`);
		continue;
	}

	let title = file.split(/(?=[A-Z|1-9])/).map(x => _.upperFirst(x)).join(" ");
	let sources = `${directory}/${file}/${file}.mp4`;
	let thumb = `${directory}/${file}/${file}.png`;
	console.log(`${_.padEnd(title, 20)} have beed added to the list`)

	let result = JSON.stringify(template).replace("%TITLE%", title).replace("%SOURCES%", sources).replace("%THUMB%", thumb);
	resultList.push(JSON.parse(result));
}

if (resultList.length == 0) {
	console.log(`There is no folder that matches in the ${directory}`);
	return;
}

let output = JSON.stringify({data : resultList}, null, 2);
fs.writeFileSync(outputFile, output, 'utf8');
console.log("Preprocess.sh have completed successfully.")
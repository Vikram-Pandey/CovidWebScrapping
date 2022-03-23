const request=require("request");
const cheerio=require("cheerio");

request("https://www.worldometers.info/coronavirus/",cb);

function cb(err,res,body){
    if(err){
        console.log(err);
    }
    else {
        handleHtml(body);
    }
}

function handleHtml(html){

    let selectorTool=cheerio.load(html);

    let coronaStats=selectorTool(".maincounter-number");

    console.log("Cases"+ selectorTool(coronaStats[0]).text());

    console.log("Deaths"+ selectorTool(coronaStats[1]).text());

    console.log("Recovered"+ selectorTool(coronaStats[2]).text());

}
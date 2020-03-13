const fs = require('fs')

function parseCountries(){
  var data = require('./src/countries')
  var parsedData = []
  for (let [key, value] of Object.entries(data)) {
    parsedData.push([key,value])
  }
  saveFile(parsedData,'countries');
}

function parseCurrencies(){
  var data = require('./src/currencies')
  var parsedData = []
  for (let [key, value] of Object.entries(data)) {
    parsedData.push([value,key])
  }
  saveFile(parsedData,'currencies'); 
}

function parseDays(){
  var data = require('./src/days')
  var parsedData = []
  for (let [key, value] of Object.entries(data)) {
    parsedData.push([value,key])
  }
  saveFile(parsedData,'days'); 
}

function parseLanguages(){
  var data = require('./src/languages')
  var parsedData = []
  for (let [key, value] of Object.entries(data)) {
    parsedData.push([value,key])
  }
  saveFile(parsedData,'languages'); 
}

function parseMonths(){
  var data = require('./src/months')
  var parsedData = []
  for (let [key, value] of Object.entries(data)) {
    parsedData.push([value,key])
  }
  saveFile(parsedData,'months'); 
}

function parseNationalities(){
  var data = require('./src/nationalities')
  var parsedData = []
  for (let [key, value] of Object.entries(data)) {
    parsedData.push([value,key])
  }
  saveFile(parsedData,'nationalities'); 
}

function parseStates(){
  var data = require('./src/states')
  var parsedData = []
  for (let [key, value] of Object.entries(data)) {
    parsedData.push([value,key])
  }
  saveFile(parsedData,'states'); 
}

function parseTimezones(){
  var data = require('./src/timezones')
  var parsedData = []
  for (let [key, value] of Object.entries(data)) {
    parsedData.push([value,key])
  }
  saveFile(parsedData,'timezones'); 
}

function saveFile($data, $fname){
  let pathToJs = `./js/${$fname}.js`
  let pathToPHP = `./php/${$fname}.php`
  let pathToJson = `./json/${$fname}.json`
  var tpl = `module.exports = ${JSON.stringify($data,null,2)}`
  fs.writeFileSync(pathToJs, tpl, 'utf8')
  var tpl = `<?php
$data = ${JSON.stringify($data,null,2)};
?>`
  fs.writeFileSync(pathToPHP, tpl, 'utf8')
  var tpl = `${JSON.stringify($data,null,2)};`
  fs.writeFileSync(pathToJson, tpl, 'utf8')
}

parseCountries()
parseCurrencies()
parseDays()
parseLanguages()
parseMonths()
parseNationalities()
parseStates()
parseTimezones()
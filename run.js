const fs = require('fs')

function parseCountries(){
  let data = require('./src/countries')
  let parsedData = []
  let countriesNameOnly = []
  for (let [key, value] of Object.entries(data)) {
    parsedData.push([key,value])
    countriesNameOnly.push([key])
  }
  saveFile(countriesNameOnly,'countries_only');
  saveFile(parsedData,'countries');
}

function parseCurrencies(){
  let data = require('./src/currencies')
  let parsedData = []
  for (let [key, value] of Object.entries(data)) {
    parsedData.push([value,key])
  }
  saveFile(parsedData,'currencies'); 
}

function parseDays(){
  let data = require('./src/days')
  let parsedData = []
  for (let [key, value] of Object.entries(data)) {
    parsedData.push([value,key])
  }
  saveFile(parsedData,'days'); 
}

function parseLanguages(){
  let data = require('./src/languages')
  let parsedData = []
  for (let [key, value] of Object.entries(data)) {
    parsedData.push([value,key])
  }
  saveFile(parsedData,'languages'); 
}

function parseMonths(){
  let data = require('./src/months')
  let parsedData = []
  for (let [key, value] of Object.entries(data)) {
    parsedData.push([value,key])
  }
  saveFile(parsedData,'months'); 
}

function parseNationalities(){
  let data = require('./src/nationalities')
  let parsedData = []
  for (let [key, value] of Object.entries(data)) {
    parsedData.push([value,key])
  }
  saveFile(parsedData,'nationalities'); 
}

function parseStates(){
  let data = require('./src/states')
  let parsedData = []
  for (let [key, value] of Object.entries(data)) {
    parsedData.push([value,key])
  }
  saveFile(parsedData,'states'); 
}

function parseTimezones(){
  let data = require('./src/timezones')
  let parsedData = []
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
  tpl = `<?php
$data = ${JSON.stringify($data,null,2)};
?>`
  fs.writeFileSync(pathToPHP, tpl, 'utf8')
  tpl = `${JSON.stringify($data,null,2)};`
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
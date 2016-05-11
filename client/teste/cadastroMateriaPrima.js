/**
 * Created by jesus on 11/05/2016.
 */


"use strict";

var webdriver = require('selenium-webdriver');


var browser = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'chrome' }).build();

    browser.get('http://localhost:53547/ProjetoDeEngSoftw/client/views/index.html#/');

    browser.findElement(webdriver.By.name('nomeMateriaPrima')).sendKeys("Tecido de bolinha amarelinha");
    browser.findElement(webdriver.By.name('skuMateriaPrima')).sendKeys("0938098");
    browser.findElement(webdriver.By.name('unidadeMateriaPrima')).sendKeys("KG");
    browser.findElement(webdriver.By.name('observacaoMateriaPrima')).sendKeys("Este Campo não é obrigatorio");
    browser.findElement(webdriver.By.name('btnCadastrarMateriaPrima')).click();


/*
browser.get('http://en.wikipedia.org/wiki/Wiki');

browser.findElements(webdriver.By.css('[href^="/wiki/"]')).then(function(links){
    console.log('Found', links.length, 'Wiki links.' )
    browser.quit();
});




})();
 */
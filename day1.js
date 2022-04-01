"use strict";
exports.__esModule = true;
exports.justCompare = void 0;
//definição de variáveis
var values = {
    numeroUm: 1,
    stringUm: "1",
    numeroDez: 10,
    stringDez: "10",
    numeroTrinta: 30,
    stringTrinta: "30"
};
var debugMaroto = console.log;
//definição de funções
function compareType(x, y) {
    if (typeof x === typeof y)
        return true;
    else
        return false;
}
function compareValue(x, y) {
    if (compareType(x, y)) {
        switch (x == y) {
            case true:
                debugMaroto("Variáveis com tipos e valores iguais");
                break;
            case false:
                debugMaroto("Variáveis com tipos iguais e valores diferentes");
                break;
            default:
                debugMaroto("entrei no default IF de CompareValue");
                break;
        }
    }
    else {
        switch (x == y) {
            case true:
                debugMaroto("Variáveis com tipos diferentes e valores iguais");
                break;
            case false:
                debugMaroto("Variáveis com tipos e valores diferentes");
                break;
            default:
                debugMaroto("entrei no default ELSE de CompareValue");
                break;
        }
    }
}
function justCompare(x, y) {
    compareValue(x, y);
}
exports.justCompare = justCompare;
//chamada de funções
justCompare(values.numeroUm, values.stringUm); // number == string
justCompare(values.numeroUm, values.numeroDez); // number == number
justCompare(values.stringDez, values.numeroTrinta); // string != number
justCompare(values.stringTrinta, values.stringUm); // string != string

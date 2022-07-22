var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
document.addEventListener('DOMContentLoaded', function () {
    var random = getRandomInt(1, 151);
    fetchData(random);
});
var getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};
var fetchData = function (id) { return __awaiter(_this, void 0, void 0, function () {
    var res, data, pokemon, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, fetch("https://pokeapi.co/api/v2/pokemon/".concat(id))];
            case 1:
                res = _a.sent();
                return [4 /*yield*/, res.json()];
            case 2:
                data = _a.sent();
                pokemon = {
                    img: data.sprites.other.dream_world.front_default,
                    nombre: data.name,
                    hp: data.stats[0].base_stat,
                    experiencia: data.base_experience,
                    ataque: data.stats[1].base_stat,
                    especial: data.stats[3].base_stat,
                    defensa: data.stats[2].base_stat
                };
                pintaCard(pokemon);
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.log(error_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var pintaCard = function (pokemon) {
    console.log(pokemon);
    var flex = document.querySelector('.flex');
    var template = document.querySelector('#template-card').content;
    var clone = template.cloneNode(true);
    var fragment = document.createDocumentFragment();
    clone.querySelector('.card-body-img').setAttribute('src', pokemon.img);
    clone.querySelector('.card-body-title').innerHTML = "".concat(pokemon.nombre, "<span>").concat(pokemon.hp, "</span>");
    clone.querySelector(".card-body-text").textContent = pokemon.experiencia + " EXP";
    clone.querySelectorAll(".card-footer-social h3")[0].textContent = pokemon.ataque + " K";
    clone.querySelectorAll(".card-footer-social h3")[1].textContent = pokemon.especial + " K";
    clone.querySelectorAll(".card-footer-social h3")[2].textContent = pokemon.defensa + " K";
    fragment.appendChild(clone);
    flex.appendChild(fragment);
};
function multiplicarInputs(text) {
    var num = text.value;
    var div = '';
    for (var i = 0; i < num; i++) {
        var cont = i + 1;
        div += "<br> Input text " + cont + "<input maxlength='5' name='inputTextMulti[]' size='6' type='text' />&nbsp;";
    }
    document.getElementById("divMultiInputs").innerHTML = div;
}

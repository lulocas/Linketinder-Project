/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./ts/cadastro.ts":
/*!************************!*\
  !*** ./ts/cadastro.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   botaoCadastrar: () => (/* binding */ botaoCadastrar),\n/* harmony export */   cadastrar: () => (/* binding */ cadastrar),\n/* harmony export */   email: () => (/* binding */ email),\n/* harmony export */   nome: () => (/* binding */ nome),\n/* harmony export */   senha: () => (/* binding */ senha),\n/* harmony export */   usuario: () => (/* binding */ usuario)\n/* harmony export */ });\nconst nome = document.getElementById('nome');\nconst email = document.getElementById('email');\nconst senha = document.getElementById('senha');\nconst confirmarSenha = document.getElementById('confirmarSenha');\nlet usuario;\nconst candidatoInput = document.getElementById('candidatoBotao');\nconst empresaInput = document.getElementById('empresaBotao');\nconst botaoCadastrar = document.getElementById('botaoCadastrar');\nfunction cadastrar() {\n    if (senha.value == confirmarSenha.value && nome.value != '' && email.value != '' && senha.value != '') {\n        if (candidatoInput.checked) {\n            usuario = 'candidato';\n            alert(`Usuário ${usuario} cadastrado com sucesso!`);\n            window.location.href = 'edicaoC.html';\n        }\n        else if (empresaInput.checked) {\n            usuario = 'empresa';\n            alert(`Usuário ${usuario} cadastrado com sucesso!`);\n            window.location.href = 'edicaoE.html';\n        }\n        else {\n            alert('Selecione um tipo de usuário!');\n        }\n    }\n    else if (nome.value == '' || email.value == '' || senha.value == '') {\n        alert('Não pode haver campos vazios!');\n    }\n    else if (senha.value != confirmarSenha.value) {\n        alert('As senhas não coincidem!');\n    }\n}\nconsole.log('oi');\n\n\n//# sourceURL=webpack://frontend/./ts/cadastro.ts?");

/***/ }),

/***/ "./ts/candidato.ts":
/*!*************************!*\
  !*** ./ts/candidato.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Candidato: () => (/* binding */ Candidato)\n/* harmony export */ });\nclass Candidato {\n    constructor(nome, email, senha, cpf, idade, estado, cep, descricao, formacao, experiencia, habilidades) {\n        this.nome = nome;\n        this.email = email;\n        this.senha = senha;\n        this.cpf = cpf;\n        this.idade = idade;\n        this.estado = estado;\n        this.cep = cep;\n        this.descricao = descricao;\n        this.formacao = formacao;\n        this.experiencia = experiencia;\n        this.habilidades = habilidades;\n    }\n    getNome() {\n        return this.nome;\n    }\n    getEmail() {\n        return this.email;\n    }\n    getSenha() {\n        return this.senha;\n    }\n    getCpf() {\n        return this.cpf;\n    }\n    getIdade() {\n        return this.idade;\n    }\n    getEstado() {\n        return this.estado;\n    }\n    getCep() {\n        return this.cep;\n    }\n    getDescricao() {\n        return this.descricao;\n    }\n    getFormacao() {\n        return this.formacao;\n    }\n    getExperiencia() {\n        return this.experiencia;\n    }\n    getHabilidades() {\n        return this.habilidades;\n    }\n    setNome(nome) {\n        this.nome = nome;\n    }\n    setEmail(email) {\n        this.email = email;\n    }\n    setSenha(senha) {\n        this.senha = senha;\n    }\n    setCpf(cpf) {\n        this.cpf = cpf;\n    }\n    setIdade(idade) {\n        this.idade = idade;\n    }\n    setEstado(estado) {\n        this.estado = estado;\n    }\n    setCep(cep) {\n        this.cep = cep;\n    }\n    setDescricao(descricao) {\n        this.descricao = descricao;\n    }\n    setFormacao(formacao) {\n        this.formacao = formacao;\n    }\n    setExperiencia(experiencia) {\n        this.experiencia = experiencia;\n    }\n    setHabilidades(habilidades) {\n        this.habilidades = habilidades;\n    }\n}\n\n\n//# sourceURL=webpack://frontend/./ts/candidato.ts?");

/***/ }),

/***/ "./ts/edicao.ts":
/*!**********************!*\
  !*** ./ts/edicao.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   nomeTitulo: () => (/* binding */ nomeTitulo),\n/* harmony export */   salvar: () => (/* binding */ salvar)\n/* harmony export */ });\n/* harmony import */ var _cadastro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cadastro */ \"./ts/cadastro.ts\");\n/* harmony import */ var _candidato__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./candidato */ \"./ts/candidato.ts\");\n\n\nconst cpf = document.getElementById('cpf');\nconst idade = document.getElementById('idade');\nconst estado = document.getElementById('estado');\nconst cep = document.getElementById('cep');\nconst descricao = document.getElementById('descricao');\nconst formacao = document.getElementById('formacao');\nconst experiencia = document.getElementById('experiencia');\nconst habilidades = document.getElementById('habilidades');\nconst botaoSalvar = document.getElementById('botaoSalvar');\nfunction nomeTitulo(nome) {\n    const seuNomeElement = document.getElementById('seuNome');\n    if (seuNomeElement) {\n        seuNomeElement.textContent = nome;\n    }\n    else {\n        console.error('Elemento com ID \"seuNome\" não encontrado.');\n    }\n}\nfunction salvar() {\n    const candidato = new _candidato__WEBPACK_IMPORTED_MODULE_1__.Candidato(_cadastro__WEBPACK_IMPORTED_MODULE_0__.nome.value, _cadastro__WEBPACK_IMPORTED_MODULE_0__.email.value, _cadastro__WEBPACK_IMPORTED_MODULE_0__.senha.value, cpf.value, parseInt(idade.value), estado.value, cep.value, descricao.value, formacao.value, experiencia.value, habilidades.value.split(','));\n    console.log(candidato);\n    alert('Candidato salvo com sucesso!');\n    window.location.href = 'perfilC.html';\n}\n\n\n//# sourceURL=webpack://frontend/./ts/edicao.ts?");

/***/ }),

/***/ "./ts/main.ts":
/*!********************!*\
  !*** ./ts/main.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cadastro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cadastro */ \"./ts/cadastro.ts\");\n/* harmony import */ var _edicao__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edicao */ \"./ts/edicao.ts\");\n\n\nlet candidatos = [];\nconsole.log(\"oi\");\n_cadastro__WEBPACK_IMPORTED_MODULE_0__.botaoCadastrar.addEventListener('click', _cadastro__WEBPACK_IMPORTED_MODULE_0__.cadastrar);\ndocument.addEventListener('DOMContentLoaded', function () {\n    (0,_edicao__WEBPACK_IMPORTED_MODULE_1__.nomeTitulo)(_cadastro__WEBPACK_IMPORTED_MODULE_0__.nome.value);\n});\nconsole.log('oi');\n\n\n//# sourceURL=webpack://frontend/./ts/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./ts/main.ts");
/******/ 	
/******/ })()
;
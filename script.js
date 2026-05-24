"use strict";

// Создаем функцию конструктор

const DomElement = function () {
    this.selector = "";
    this.height = "100";
    this.width = "200";
    this.bg = "red";
    this.fontSize = "20px";

    this.addElement = function (selector) {
        if (selector[0] === ".") {
            let divClass = document.createElement("div");
            let className = "";
            for (let i = 1; i < selector.length; i++) {
                className += selector[i];
            }
            divClass.classList.add(`${className}`);
            divClass.textContent = "Привет, я новый созданный DIV-блок";
            divClass.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; fontSize: ${this.fontSize};`;
            document.body.appendChild(divClass);
        } else if (selector[0] === "#") {
            let paragraphID = document.createElement("p");
            let idName = "";
            for (let i = 1; i < selector.length; i++) {
                idName += selector[i];
            }
            paragraphID.id = `${idName}`;
            paragraphID.textContent = "Привет, я новый созданный параграф";
            paragraphID.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; fontSize: ${this.fontSize};`;
            document.body.appendChild(paragraphID);
        }
    };
};

// Создать объект на основе класса DomElement
const newObj = new DomElement();

// Вызвать его метод, чтобы создать элемент на странице

newObj.addElement(".div-class");
newObj.addElement("#p-id");

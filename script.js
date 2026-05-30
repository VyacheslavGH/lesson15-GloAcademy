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
            divClass.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize};`;
            document.body.appendChild(divClass);
        } else if (selector[0] === "#") {
            let paragraphID = document.createElement("p");
            let idName = "";
            for (let i = 1; i < selector.length; i++) {
                idName += selector[i];
            }
            paragraphID.id = `${idName}`;
            paragraphID.textContent = "Привет, я новый созданный параграф";
            paragraphID.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize};`;
            document.body.appendChild(paragraphID);
        }

        if (selector === "square") {
            document.addEventListener("DOMContentLoaded", () => {
                let squareCreate = document.createElement("div");
                squareCreate.classList.add("square");
                squareCreate.style.cssText = `height: 100px; width: 100px; background-color: orange; position: absolute;`;
                document.body.appendChild(squareCreate);
                let square = document.querySelector(".square");
                let squareCompStyles = window.getComputedStyle(square);
                let topComputedStyles = squareCompStyles.top;
                let leftComputedStyles = squareCompStyles.left;
                let sqTopPx = parseFloat(topComputedStyles);
                let sqLeftPx = parseFloat(leftComputedStyles);
                document.addEventListener("keydown", function (event) {
                    square = document.querySelector(".square");
                    if (event.key === "ArrowUp") {
                        sqTopPx -= 10;
                        square.style.top = `${parseFloat(sqTopPx)}px`;
                    }
                    if (event.key === "ArrowDown") {
                        sqTopPx += 10;
                        square.style.top = `${sqTopPx}px`;
                    }
                    if (event.key === "ArrowLeft") {
                        sqLeftPx -= 10;
                        square.style.left = `${sqLeftPx}px`;
                    }
                    if (event.key === "ArrowRight") {
                        sqLeftPx += 10;
                        square.style.left = `${sqLeftPx}px`;
                    }
                });
            });
        }
    };
};

const newObj = new DomElement();

newObj.addElement(".div-class");
newObj.addElement("#p-id");
newObj.addElement("square");

'use strict';

// Код валидации формы
function validateForm() {
    let args = [].slice.call(arguments);
    let classes = {
        'formId': '',
        'formValidClass': '',
        'formInvalidClass': '',
        'inputErrorClass': ''
    };

    args.forEach((elem) => {
        for(let addClass in elem){
            classes[addClass] = elem[addClass];
        }
    });

    let form = document.querySelector('#' + classes.formId);
    let inputList = Array.from(document.querySelectorAll('#' + classes.formId + ' input'));
    let button = document.querySelector('#' + classes.formId + ' button');

    let addErrorClass = (elem) => { // Добавить класс, если ошибка в input
        elem.classList.add(classes.inputErrorClass);
    };

    function validateElement(elem) {
        if(elem.dataset.hasOwnProperty('required')){ // Проверка на пустое поле
            if(elem.value === ''){
                addErrorClass(elem);
            }
        }

        switch (elem.dataset.validator) {
            case ('letters'): // Проверка на буквы
                elem.value = elem.value.trim();
                if(elem.value.match(/^[a-zа-яё]+$/iu) === null){
                    addErrorClass(elem);
                }
                break;

            case ('number'): // Проверка на цифры
                elem.value = elem.value.trim();
                if(elem.value !== "" && elem.value.match(/^\d+$/iu) === null){
                    addErrorClass(elem);
                }else {
                    const [val, min, max] = [Number(elem.value), Number(elem.dataset.validatorMin), Number(elem.dataset.validatorMax)];
                    if(val < min || val > max){
                        addErrorClass(elem);
                    }
                }
                break;

            case ('regexp'): // Проверка по регулярному выражению
                if(elem.value !== "" && elem.value.match(elem.dataset.validatorPattern) === null){
                    addErrorClass(elem);
                }
        }
    }

    function clearMessage(){ // Очищение сообщений о правильности заполнения формы
        form.classList.remove(classes.formInvalidClass);
        form.classList.remove(classes.formValidClass);
    }

    inputList.forEach(function (elements) { // Действие при потере фокуса
        elements.addEventListener('blur', function () {
            validateElement(this);
        }, true);

        elements.addEventListener('focus', function () { // Действие в фокусе
            //clearMessage(); // Надо бы удалить сообщения, но тогда форма скачет
            if(this.classList.contains(classes.inputErrorClass)){
                this.classList.remove(classes.inputErrorClass);
            }
        }, true);
    });

    button.addEventListener('click', function (event) { // Действие при клике
        clearMessage();
        let isError = false;
        inputList.forEach(function (element) {
            validateElement(element);
            if(element.classList.contains(classes.inputErrorClass)) {
                isError = true;
            }
        });

        event.preventDefault();

        if(isError){
            form.classList.add(classes.formInvalidClass);
        }else {
            form.classList.add(classes.formValidClass);
        }
    });
}
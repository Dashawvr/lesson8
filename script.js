// TASK 1
// - Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

let textarea = document.getElementById('textarea');
let textElement = localStorage.getItem('textarea');

if (textElement) {
    textarea.value = textElement;
}

textarea.oninput = ()=> {
    const value = textarea.value;
    localStorage.setItem('textarea',value);
};
//
//TASK 2
// не зробила
//- Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.


let form = document.getElementsByClassName('form')[0];
let click = document.getElementById('ok');
form.value = localStorage.getItem('form');
if (click) {
    form.value = click;
}
form.oninput = ()=> {
    const value = form.value;
    value.push(form);
    localStorage.setItem('form', JSON.stringify(value));
};




// TASK 3
//I DID the cleaning!!!!
//-Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить"
// и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться
// по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

let area = document.getElementById('area');
let btn = document.getElementById('btn');
btn.onclick= ()=> {
    localStorage.removeItem('area'); area.value=''
};
area.value = localStorage.getItem('area');
area.oninput = () => {
    localStorage.setItem('area', area.value)
};

//TASK 4
// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма,
// в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта
const del = (e,a,f)=> {
    e.remove();
    f.remove();
    localStorage.removeItem(a);
};
const setData= ()=>{
    let form = document.forms.form;
    let elem1 = form.elements.FIO.value;
    let elem2 = form.elements.number.value;
    let elem3 = form.elements.EMail.value;
    let elem4 = form.elements.galera.value;
    let elem5 = form.elements.part.value;
    let elem6 = form.elements.birth.value;
    const data = {
        FIO: elem1,
        number: elem2,
        EMail: elem3,
        galera: elem4,
        part: elem5,
        birth: elem6
    };
    localStorage.setItem(`${data.FIO}`, JSON.stringify(data));
    let newDiv=document.createElement('div');
    newDiv.innerHTML=(`
  <p>Name: ${ data.FIO} </p>
  <p>Number: ${ data.number} </p>
  <p>Mail: ${ data.EMail} </p>
  <p>galera: ${ data.galera} </p>
  <p>Part: ${ data.part} </p>
  <p>BirthDay: ${ data.birth} </p>
  `);
    let btn = document.createElement('button');
    btn.addEventListener('click', function () {
        del(newDiv,elem1,btn)
    });
    btn.label='del';
    document.body.appendChild(newDiv);
    document.body.appendChild(btn);
    newDiv.classList.add('border');
};

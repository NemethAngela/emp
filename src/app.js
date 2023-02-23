
/*
* File: app.js
* Author: Németh Angéla
* Copyright: 2023, Németh Angéla
* Group: Szoft I-2 E
* Date: 2022-02-23
* Github: https://github.com/NemethAngela/
* Licenc: GNU GPL
*/

const tbody = document.querySelector('#tbody');

var empList = [
    { id: 1, name: "Per Lajos", city: "Szeged", salary: 345},
    { id: 2, name: "Para Béla", city: "Szeged", salary: 385},
    { id: 3, name: "Erős Imre", city: "Szolnok", salary: 325},
    { id: 4, name: "Tér Emese", city: "Szeged", salary: 345},
    { id: 5, name: "Ken Irén", city: "Miskolc", salary: 375},
    { id: 6, name: "Csoma Ferenc", city: "Szeged", salary: 395}
];

(function createTable() {
empList.forEach((emp) => {
    console.log(emp.name)

    let tr = document.createElement('tr');

    let tdId = document.createElement('td');
    let tdName = document.createElement('td');
    let tdCity = document.createElement('td');
    let tdSalary = document.createElement('td');

    tdId.textContent = emp.id;
    tdName.textContent = emp.name;
    tdCity.textContent = emp.city;
    tdSalary.textContent = emp.salary;

    tbody.append(tr);
    tr.append(tdId);
    tr.append(tdName);
    tr.append(tdCity);
    tr.append(tdSalary);

});
})();
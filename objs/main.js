"use strict";
const listEmployee = new ListEmployee();
const validation = new Validation();

getLocalStorage();

const btnAdd = document.querySelector("#btnThem");
const btnAddEmployee = document.querySelector("#btnThemNV");
const btnUpdateEmployee = document.querySelector("#btnCapNhat");

function getEle(id) {
  return document.getElementById(id);
}

btnAdd.addEventListener("click", () => {
  getEle("tknv").value = "";

  getEle("tknv").disabled = false;

  getEle("name").value = "";
  getEle("email").value = "";
  getEle("password").value = "";
  getEle("datepicker").value = date;
  getEle("luongCB").value = "";
  getEle("chucvu").value = "";
  getEle("gioLam").value = "";
});

btnUpdateEmployee.addEventListener("click", () => {
  let employee = getInfo();

  listEmployee.updateEmployee(employee);

  createTable(listEmployee.arr);

  setLocalStorage();

  getEle("btnDong").click();
});

function getInfo() {
  const account = getEle("tknv").value;
  const name = getEle("name").value;
  const email = getEle("email").value;
  const password = getEle("password").value;
  const date = getEle("datepicker").value;
  const salary = getEle("luongCB").value;
  const position = getEle("chucvu").value;
  const timeWork = getEle("gioLam").value;

  let isValid = true;

  // Validation
  isValid &=
    validation.checkEmpty(account, "tbTKNV", "Empty. Check, please!") &&
    validation.checkInNumber(account, "tbTKNV", "Number, please") &&
    validation.checkNumber(account, "tbTKNV", "4-6 Keyword, please", 4, 6);

  isValid &=
    validation.checkEmpty(name, "tbTen", "Empty. Check, please!") &&
    validation.checkKeyword(name, "tbTen", "Alphabet, please");

  isValid &=
    validation.checkEmpty(email, "tbEmail", "Empty. Check, please!") &&
    validation.checkEmail(email, "tbEmail", "Email invalid");

  isValid &=
    validation.checkEmpty(password, "tbMatKhau", "Empty. Check, please!") &&
    validation.checkPassword(password, "tbMatKhau", "Password invalid");

  isValid &= validation.checkEmpty(date, "tbNgay", "Empty. Check, please!");

  isValid &=
    validation.checkEmpty(salary, "tbLuongCB", "Empty. Check, please!") &&
    validation.checkNumber(
      salary,
      "tbLuongCB",
      "Salary invalid",
      1000000,
      20000000
    );

  isValid &=
    validation.checkEmpty(timeWork, "tbGiolam", "Empty. Check, please!") &&
    validation.checkNumber(timeWork, "tbGiolam", "Time invalid", 80, 200);

  if (!isValid) return null;

  let employee1 = new Employee(
    account,
    name,
    email,
    password,
    date,
    salary,
    position,
    timeWork
  );

  employee1.sumSalary();

  employee1.classification();

  return employee1;
}

btnAddEmployee.addEventListener("click", () => {
  let employee = getInfo();

  listEmployee.addEmployee(employee);

  createTable(listEmployee.arr);

  setLocalStorage();
});

function createTable(arr) {
  let content = "";
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    content += `
      <tr>
        <td>${item.account}</td>
        <td>${item.name}</td>
        <td>${item.email}</td>
        <td>${item.date}</td>
        <td>${item.position}</td>
        <td>${item.allSalary}</td>
        <td>${item.rating}</td>
        <td>
          <button class="btn btn-warning" data-toggle="modal" data-target="#myModal" onclick="editEM('${item.account}')">Edit</button>
          <button class="btn btn-danger" onclick="deleteEM('${item.account}')">&times;</button>
        </td>
      </tr>
    `;
  }

  getEle("tableDanhSach").innerHTML = content;
}

function deleteEM(account) {
  listEmployee.deleteEmployee(account);
  createTable(listEmployee.arr);
  setLocalStorage();
}

function editEM(account) {
  getEle("header-title").innerHTML = "Edit";
  getEle("btnThemNV").style.display = "none";

  let employee = listEmployee.editEmployee(account);

  if (employee) {
    getEle("tknv").value = employee.account;

    getEle("tknv").disabled = true;

    getEle("name").value = employee.name;
    getEle("email").value = employee.email;
    getEle("password").value = employee.password;
    getEle("datepicker").value = employee.date;
    getEle("luongCB").value = employee.salary;
    getEle("chucvu").value = employee.position;
    getEle("gioLam").value = employee.timeWork;
  }

  console.log(employee);
}

function setLocalStorage() {
  const dataString = JSON.stringify(listEmployee.arr);

  localStorage.setItem("ListEmployee", dataString);
}

function getLocalStorage() {
  const data = localStorage.getItem("ListEmployee");

  if (data) {
    const dataJson = JSON.parse(data);

    listEmployee.arr = dataJson;

    createTable(listEmployee.arr);
  }
}

'use strict';

function Employee(account, name, email, password, date, salary, position, timeWork) {
  this.account = account;
  this.name = name;
  this.email = email;
  this.password = password;
  this.date = date;
  this.salary = salary;
  this.position = position;
  this.timeWork = timeWork;
  this.rating = '';
  this.allSalary = 0;

  this.sumSalary = function () {
    if (this.position === 'Sếp') {
      this.allSalary = this.salary * 3;
    } else if (this.position === 'Trưởng phòng') {
      this.allSalary = this.salary * 2;
    } else if (this.position === 'Nhân viên') {
      this.allSalary = this.salary * 1;
    }
  }

  this.classification  = function () {
    if (this.timeWork >= 192) {
      this.rating = 'Nhân viên xuất sắc'
    } else if (this.timeWork >= 176) {
      this.rating = 'Nhân viên giỏi'
    } else if (this.timeWork >= 160) {
      this.rating = 'Nhân viên khá'
    } else {
      this.rating = 'Nhân viên trung bình'
    }
  }

};
'use strict';

function ListEmployee() {
  this.arr = [];

  // Add
  this.addEmployee = function (em) {
    this.arr.push(em);
  }

  // Find index
  this.findLocationEM = function (account) {
    let index = -1;
    for (let i = 0; i < this.arr.length; i++) {
      let item = this.arr[i];
      if (item.account === account) {
        index = i;
        break;
      }
    }

    return index;
  }

  // Delete
  this.deleteEmployee = function(account) {
    let index = this.findLocationEM(account);

    if (index !== -1) {
      this.arr.splice(index, 1);
    }
  }

  // Edit
  this.editEmployee = function (account) {
    let index = this.findLocationEM(account);

    if (index !== -1) {
      let employee = this.arr[index];
      return employee;
    };

    return null;
  }

  // Update
  this.updateEmployee = function (listEmployee) {
    let index = this.findLocationEM(listEmployee.account);

    if (index !== -1) {
      this.arr[index] = listEmployee;
    }
  }

  // Find
  this.findEmployee = function () {
    
  }

}
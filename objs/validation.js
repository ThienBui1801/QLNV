"use strict";

function Validation() {
  this.checkEmpty = function (value, id, mess) {
    if (value === "") {
      getEle(id).innerHTML = mess;
      getEle(id).style.display = "block";
      return false;
    }

    getEle(id).innerHTML = "";
    getEle(id).style.display = "none";
    return true;
  };

  this.checkKeyword = function (value, id, mess) {
    let keyWord =
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
      "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
      "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
    if (value.match(keyWord)) {
      getEle(id).innerHTML = "";
      getEle(id).style.display = "none";
      return true;
    }

    getEle(id).innerHTML = mess;
    getEle(id).style.display = "block";
    return false;
  };

  this.checkInNumber = function (value, id, mess) {
    let number = /^[0-9]+$/;
    if (value.match(number)) {
      getEle(id).innerHTML = "";
      getEle(id).style.display = "none";
      return true;
    }

    getEle(id).innerHTML = mess;
    getEle(id).style.display = "block";
    return false;
  };

  this.checkNumber = function (value, id, mess, min, max) {
    if (value.trim().length >= min && value.trim().length <= max) {
      getEle(id).innerHTML = "";
      getEle(id).style.display = "none";
      return true;
    }

    getEle(id).innerHTML = mess;
    getEle(id).style.display = "block";
    return false;
  };

  this.checkSalaryAndTime = function (value, id, mess, min, max) {
    if (parseInt(value) >= parseInt(min) || parseInt(value) >= parseInt(max)) {
      getEle(id).innerHTML = "";
      getEle(id).style.display = "none";
      return true;
    }

    getEle(id).innerHTML = mess;
    getEle(id).style.display = "block";
    return false;
  };

  this.checkEmail = function (value, id, mess) {
    let email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (value.match(email)) {
      getEle(id).innerHTML = "";
      getEle(id).style.display = "none";
      return true;
    }

    getEle(id).innerHTML = mess;
    getEle(id).style.display = "block";
    return false;
  };

  this.checkPassword = function (value, id, mess) {
    let passWord =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
    if (value.match(passWord)) {
      getEle(id).innerHTML = "";
      getEle(id).style.display = "none";
      return true;
    }

    getEle(id).innerHTML = mess;
    getEle(id).style.display = "block";
    return false;
  };
}

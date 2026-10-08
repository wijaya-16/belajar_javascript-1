let frstName, lstName, fllName;

// Mencari tombol untuk melakukan event
document.getElementById("btn-merge").onclick = function () {
  frstName = document.getElementById("firstName").value;
  lstName = document.getElementById("lastName").value;
  fllName = ftName + " " + lsName;
  // console.log(flName);

  document.getElementById("full_name").textContent = flName;
};

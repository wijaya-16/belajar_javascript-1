let firstName, lastName, fullName;

// Mencari tombol untuk melakukan event
document.getElementById("btn-merge").onclick = function () {
  ftName = document.getElementById("firstName").value;
  lsName = document.getElementById("lastName").value;
  flName = ftName + " " + lsName;
  // console.log(flName);

  document.getElementById("full_name").textContent = flName;
};

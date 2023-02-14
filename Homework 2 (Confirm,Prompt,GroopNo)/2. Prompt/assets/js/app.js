let yas = prompt("Yasinizi daxil edin!", "18-den asagi qadagandir");
if (yas<18) {
  document.getElementById("demo").innerHTML =
  "Bu sayta girmek ucun yasiniz catmir,boyu gelersen!!!";
}
else{
    document.getElementById("demo").innerHTML =
    "Xos gelmisen qaqas";
}
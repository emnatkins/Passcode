/*
|| Instagram: @emnatkins

|| Codepen: @emnatkins

|| GitHub: @emnatkins
*/
var all_button = document.getElementsByClassName("btn");
var st_1 = document.getElementsByClassName("st-1")[0];
var st_2 = document.getElementsByClassName("st-2")[0];
var st_3 = document.getElementsByClassName("st-3")[0];
var st_4 = document.getElementsByClassName("st-4")[0];

document.getElementsByClassName("remove")[0].addEventListener("click", removeP);
document.getElementsByClassName("clear")[0].addEventListener("click", clearP);

for (item of all_button) {
  item.addEventListener("click", setP);
}

var SetLength = 0;

function setP() {
  switch (SetLength) {
    case 0:
      st_1.classList.add("set");
      SetLength += 1;
      break;
    case 1:
      st_2.classList.add("set");
      SetLength += 1;
      break;
    case 2:
      st_3.classList.add("set");
      SetLength += 1;
      break;
    case 3:
      st_4.classList.add("set");
      SetLength += 1;
      break;
  }
}

function removeP() {
  switch (SetLength) {
    case 1:
      st_1.classList.remove("set");
      SetLength -= 1;
      break;
    case 2:
      st_2.classList.remove("set");
      SetLength -= 1;
      break;
    case 3:
      st_3.classList.remove("set");
      SetLength -= 1;
      break;
    case 4:
      st_4.classList.remove("set");
      SetLength -= 1;
      break;
  }
}

function clearP() {
  st_1.classList.remove("set");
  st_2.classList.remove("set");
  st_3.classList.remove("set");
  st_4.classList.remove("set");
  SetLength = 0;
}
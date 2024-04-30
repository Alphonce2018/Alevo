let myMenu = document.getElementById("my-menu");

function navigationMenu() {
    console.log(myMenu.style.width)
  if (myMenu.style.width === "0px") {
    myMenu.style.width = "250px";
  } else {
    myMenu.style.width = "0px";
  }
}




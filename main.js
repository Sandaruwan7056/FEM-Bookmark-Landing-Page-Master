
const navBar = document.getElementById("mobileNav");
const openBtn = document.getElementById("openNav");
const closeBtn = document.getElementById("closeNav");

openBtn.addEventListener("click", function () {
  navBar.setAttribute("aria-expanded", "true");
})


closeBtn.addEventListener("click", function () {
  navBar.setAttribute("aria-expanded", "false");
})


//tabs toggle

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("button[data-target]");
  const contents = document.querySelectorAll(".tab-content");

  buttons.forEach(button => {
    button.addEventListener("click", () => {

      buttons.forEach(btn => btn.setAttribute("aria-selected", "false"));
      contents.forEach(content => content.classList.remove("active"));


      const target = button.getAttribute("data-target");
      button.setAttribute("aria-selected", "true");
      document.getElementById(target).classList.add("active");
    });
  });
});

//faq

const dropdowns = document.querySelectorAll(".FAQ");


dropdowns.forEach(dropdown => {
  const dropdownIcon = dropdown.querySelector(".dropdown");

  dropdown.addEventListener("toggle", () => {
    if (dropdown.open) {
       dropdownIcon.src ="./images/icon-arrow-red.svg"
       dropdownIcon.classList.add("active")
    } else {
      dropdownIcon.src = "./images/icon-arrow.svg"
      dropdownIcon.classList.remove("active")
    }
  })


});

//email validation

const submitBtn=document.getElementById("submitBtn");
const inputbox=document.getElementById("email");
const errorIcon=document.getElementById("error-icon");


const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

submitBtn.addEventListener("click",()=>{
  event.preventDefault();
  const email=inputbox.value;

  if (validateEmail(email)) {
    inputbox.classList.remove("error")
    errorIcon.classList.remove(".error-icon")
    inputbox.value="";
} else {
  inputbox.classList.add("error")
  errorIcon.classList.add("error-icon")
  inputbox.value="";
  
}

inputbox.addEventListener("input",()=>{
  inputbox.classList.remove("error")
  errorIcon.classList.remove("error-icon")

})
})

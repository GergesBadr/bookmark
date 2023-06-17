// navbar menu
const burgerIcon = document.getElementById("burger-icon"),
  navbar = document.getElementById("navbar");

burgerIcon.addEventListener("click", () => {
  burgerIcon.classList.toggle("active");
  navbar.classList.toggle("active");
});

// shuffle tabs in features section
const shuffleTabs = Array.from(document.querySelectorAll(".shuffle-tab")),
  filterableContent = document.querySelectorAll("#filterable-content > div");

shuffleTabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    // handle clicked tabs UI
    shuffleTabs.forEach((tab) => {
      tab.classList.remove(
        "before:h-[2px]",
        "bg-sky-50",
        "dark:bg-[--soft-blue]"
      );
    });
    e.currentTarget.classList.add(
      "before:h-[2px]",
      "bg-sky-50",
      "dark:bg-[--soft-blue]"
    );
    // show the content which attached to clicked li item
    filterableContent.forEach((el) => {
      el.classList.add("hidden");
      el.classList.remove("flex");
    });
    document.querySelectorAll(e.currentTarget.dataset.pointer).forEach((el) => {
      el.classList.remove("hidden");
      el.classList.add("flex");
    });
  });
});

// FAQ
const questions = Array.from(document.querySelectorAll(".question-holder"));
questions.forEach((q) => {
  q.addEventListener("click", () => {
    q.classList.toggle("active");
  });
});

// Email validation
const emailInput = document.getElementById("email"),
  submitBtn = document.getElementById("submit-btn"),
  contactForm = document.getElementById("contact-form");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let emailValue = emailInput.value.trim();
  if (emailValue === "" || !isEmail(emailValue)) {
    contactForm.classList.add("invalid");
  } else {
    contactForm.classList.remove("invalid");
  }
});

function isEmail(val) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    val
  );
}

// To top btn
const toTopBtn = document.querySelector(".to-top");

toTopBtn.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  if (scrollTop >= 150) {
    toTopBtn.classList.remove("-right-96");
    toTopBtn.classList.add("right-8");
  } else {
    toTopBtn.classList.remove("right-8");
    toTopBtn.classList.add("-right-96");
  }
});

// Dark mode
let toggleMode = document.querySelector(".toggle-dark-mode");

if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  toggleMode.classList.add("active");
  document.body.classList.add("dark");
}

toggleMode.addEventListener("click", () => {
  toggleMode.classList.toggle("active");
  document.body.classList.toggle("dark");
  handleMode();
});

function handleMode() {
  let theme;
  if (document.body.classList.contains("dark")) {
    theme = "dark";
  } else {
    theme = "light";
  }
  localStorage.setItem("pageTheme", theme);
}

if (localStorage.getItem("pageTheme") === "dark") {
  toggleMode.classList.add("active");
  document.body.classList.add("dark");
} else if (localStorage.getItem("pageTheme") === "light") {
  toggleMode.classList.remove("active");
  document.body.classList.remove("dark");
}

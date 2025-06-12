document.addEventListener("DOMContentLoaded", function () {
  // Elements
  const modal = document.getElementById("loginModal");
  const closeModal = document.querySelector(".close");
  const submitLogin = document.getElementById("submitLogin");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");

  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");

  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
  const dropdownMenus = document.querySelectorAll(".dropdown-menu");
  const proceedButton = document.querySelector(".logout-btn");

  const loginSwitch = document.querySelector(".switch input");
  const mobileLogin = document.querySelector(".mobile-login-link");
  const logoutLinks = document.querySelectorAll(".logout-link");

  const logoutModal = document.getElementById("logoutModal");
  const confirmLogout = document.getElementById("confirmLogout");
  const cancelLogout = document.getElementById("cancelLogout");



  // --- Login Modal Functionality ---
  if (loginSwitch) {
    loginSwitch.addEventListener("change", function () {
      modal.classList.toggle("show", this.checked);
    });
  }

  if (mobileLogin) {
    mobileLogin.addEventListener("click", function () {
      modal.classList.add("show");
      if (loginSwitch) loginSwitch.checked = true;
    });
  }

  if (closeModal) {
    closeModal.addEventListener("click", closeLoginModal);
    window.addEventListener("click", function (event) {
      if (event.target === modal) closeLoginModal();
    });
  }

  function closeLoginModal() {
    modal.classList.add("hide");
    modal.addEventListener("animationend", function handler() {
      modal.classList.remove("show", "hide");
      if (loginSwitch) loginSwitch.checked = false;
      modal.removeEventListener("animationend", handler);
    });
  }

  // Submit Login Functionality
  if (submitLogin) {
  submitLogin.addEventListener("click", function (event) {
    event.preventDefault();
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username === "admin" && password === "password") {
      modal.classList.remove("show");
      setTimeout(() => {
        window.location.href = "Admin-Dashboard.html";
      }, 500);
    } else if (username === "programhead" && password === "password") {
      modal.classList.remove("show");
      setTimeout(() => {
        window.location.href = "Program-Head-Dashboard.html";
      }, 500);
    } else if (username === "professor" && password === "password") {
      modal.classList.remove("show");
      setTimeout(() => {
        window.location.href = "Professor-Dashboard.html";
      }, 500);
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });
}


  



  // --- Mobile Menu Toggle ---
  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      navLinks.classList.toggle("show");
    });

    document.addEventListener("click", function (event) {
      if (!menuBtn.contains(event.target) && !navLinks.contains(event.target)) {
        navLinks.classList.remove("show");
      }
    });
  }



  // --- Dropdown Menus ---
  dropdownToggles.forEach((toggle, index) => {
    const menu = dropdownMenus[index];
    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      menu.classList.toggle("show");
    });
  });

  document.addEventListener("click", (event) => {
    dropdownMenus.forEach((menu) => {
      if (!event.target.closest(".dropdown")) {
        menu.classList.remove("show");
      }
    });
  });

  const dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("mouseenter", () => {
      const menu = dropdown.querySelector(".dropdown-menu");
      if (menu) menu.style.display = "block";
    });

    dropdown.addEventListener("mouseleave", () => {
      const menu = dropdown.querySelector(".dropdown-menu");
      if (menu) menu.style.display = "none";
    });
  });

  if (proceedButton) {
    proceedButton.addEventListener("click", () => {
      dropdownMenus.forEach((menu) => menu.classList.remove("show"));
    });
  }



  // --- Accordion Functionality ---
  const accordionButtons = document.querySelectorAll(".accordion-btn");
  accordionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("active");
      const content = button.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null; // collapse
      } else {
        content.style.maxHeight = content.scrollHeight + "px"; // expand
      }
    });
  });


  
  // --- Logout Modal ---
  logoutLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      logoutModal.style.display = "flex";
      logoutModal.classList.remove("hide");
      logoutModal.classList.add("show");
    });
  });

  logoutModal.addEventListener("click", (event) => {
    if (event.target === logoutModal) closeLogoutModal();
  });

  if (confirmLogout) {
    confirmLogout.addEventListener("click", () => {
      sessionStorage.clear();
      localStorage.clear();
      window.location.href = "index.html";
    });
  }

  if (cancelLogout) {
    cancelLogout.addEventListener("click", () => {
      closeLogoutModal();
    });
  }

  function closeLogoutModal() {
    logoutModal.classList.add("hide");
    logoutModal.classList.remove("show");
    logoutModal.addEventListener(
      "animationend",
      function handler() {
        logoutModal.style.display = "none";
        logoutModal.classList.remove("hide");
        logoutModal.removeEventListener("animationend", handler);
      },
      { once: true }
    );
  }
});


// The Library of Custom Reusable Web Components
// This file is the library containing my collection of custom, reusable web components
// that can be used across different parts of the project. These components go beyond what browsers provide,
// allowing for expanded capabilities and functionality in the project.

// The Scroll to Top Button
const scrollToTopBtn = document.createElement("button");
scrollToTopBtn.id = "scrollToTopBtn";
scrollToTopBtn.innerText = "Back to Top";
scrollToTopBtn.className = "scroll-to-top"; // Use CSS class for styling
document.body.appendChild(scrollToTopBtn);

window.addEventListener("scroll", function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.opacity = "1";
    scrollToTopBtn.style.visibility = "visible";
  } else {
    scrollToTopBtn.style.opacity = "0";
    scrollToTopBtn.style.visibility = "hidden";
  }
});

scrollToTopBtn.addEventListener("click", function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});

// The Footer
const footerContainer = document.createElement("div");
footerContainer.id = "footerContainer";
const year = new Date().getFullYear();

function footerContainerF(footerContainer) {
  if (footerContainer != null) {
    footerContainer.innerHTML += `<footer>Copyright © <a href="https://primesolar.github.io/web-developer/">Vladislav Kazantsev</a> ${year}</footer>`;
    document.body.appendChild(footerContainer);

    const donationButton = document.createElement("button");
    donationButton.innerText = "SUPPORT ME";
    donationButton.className = "donation-button"; // Use CSS class for styling
    donationButton.addEventListener("click", function () {
      window.open(
        "https://www.buymeacoffee.com/CocaCola",
        "_blank",
        "noopener noreferrer"
      );
    });

    footerContainer.querySelector("footer").appendChild(donationButton); // Append button to footer
  }
}
footerContainerF(footerContainer);

console.log("components.js is completed");

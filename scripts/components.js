// The Library of Custom Reusable Web Components
// This file is the library containing my collection of custom, reusable web components
// that can be used across different parts of the project. These components go beyond what browsers provide,
// allowing for expanded capabilities and functionality in the project.

// The Print Button
const print = document.querySelector("#print");
if (print) {
  print.innerHTML += `
  <button
    type="button"
    id="print-button"
    onclick="window.print();"
  >
  Print Page
  </button>
`;
}

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

function footerContainerF(footerContainer) {
  if (footerContainer != null) {
    footerContainer.innerHTML += `
    <footer>
      <p id="copyright">Copyright © <a href="https://primesolar.github.io/web-developer/" class="link-primary" rel="noopener noreferrer">Vladislav Kazantsev</a> ${new Date().getFullYear()}</p>
      <a type="button" href="https://www.buymeacoffee.com/CocaCola" id="bmc-button" target="_blank" rel="noopener noreferrer" aria-label="Buy me a coffee" role="button">☕ Buy me a coffee</a>
      <a href="https://www.buymeacoffee.com/CocaCola" id="bmc-arrow" target="_blank" rel="noopener noreferrer" aria-label="Buy me a coffee" role="button">⬇</a>
      <a href="https://www.buymeacoffee.com/CocaCola" id="bmc-link" target="_blank" rel="noopener noreferrer" aria-label="Buy me a coffee" role="button">coff.ee/CocaCola</a>
    </footer>
    `;
    document.body.appendChild(footerContainer);
  }
}
footerContainerF(footerContainer);

console.log("components.js is completed");

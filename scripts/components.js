/*
 * The Library of Custom Reusable Web Components
 * This file is the library containing my collection of custom, reusable web components
 * that can be used across different parts of the project. These components go beyond what browsers provide,
 * allowing for expanded capabilities and functionality in the project.
 *
 * Copyright © Vladislav Kazantsev
 * All rights reserved.
 * This code is the intellectual property of Vladislav Kazantsev.
 * You are welcome to clone the related repository and use the code for exploratory purposes.
 * However, unauthorized reproduction, modification, or redistribution of this code (including cloning of related repository or altering it for activities beyond exploratory use) is strictly prohibited.
 * Code snippets may be shared only when the original author is explicitly credited and a direct link to the original source of the code is provided alongside the code snippet.
 * Sharing the link to the file is permitted, except when directed toward retrieval purposes.
 * Any form of interaction with this file is strictly prohibited when facilitated by the code, except when such interaction is for discussion or exchange purposes with others.
 * This copyright notice applies globally.
 * For inquiries about collaboration, usage outside exploratory purposes, or permissions, please contact: hypervisor7@pm.me
 */

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

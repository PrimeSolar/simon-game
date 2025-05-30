// Set the <html> element `lang` property
const html = document.querySelector("html");
html.lang = "en";

// Set `dir="ltr"` for the <html> element
html.dir = "ltr";

// Set <meta name="viewport" content="width=device-width, initial-scale=1" />
const metaViewport = document.createElement("meta");
metaViewport.name = "viewport";
metaViewport.content = "width=device-width, initial-scale=1";
document.querySelector("head").appendChild(metaViewport);

// Set `title` for the <head> element
const title = document.createElement("title");
title.textContent = "Simon Game";
document.querySelector("head").appendChild(title);

// Insert <link rel="canonical" href="https://primesolar.github.io/simon-game/" />
const linkCanonical = document.createElement("link");
linkCanonical.rel = "canonical";
linkCanonical.href = "https://primesolar.github.io/simon-game/";
document.querySelector("head").appendChild(linkCanonical);

// Insert <link rel="stylesheet" type="text/css" href="styles/style-min.css">
const linkStyle = document.createElement("link");
linkStyle.rel = "stylesheet";
linkStyle.type = "text/css";
linkStyle.href = "styles/style-min.css";
document.querySelector("head").appendChild(linkStyle);
linkStyle.onload = function () {
  document.body.style.display = "flex";
  document.body.style.flexDirection = "column";
};

// Insert <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Pixelify+Sans">
const linkFont = document.createElement("link");
linkFont.rel = "stylesheet";
linkFont.type = "text/css";
linkFont.href = "https://fonts.googleapis.com/css?family=Pixelify+Sans";
document.querySelector("head").appendChild(linkFont);

// Insert <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
const jQuery = document.createElement("script");
jQuery.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js";
document.querySelector("body").appendChild(jQuery);

// Insert <script src="scripts/game-min.js"></script> and <script src="scripts/elements-min.js"></script>
jQuery.onload = function () {
  const gameScript = document.createElement("script");
  gameScript.src = "scripts/game-min.js";
  document.querySelector("body").appendChild(gameScript);
  const script = document.createElement("script");
  script.src = "scripts/elements-min.js";
  document.querySelector("body").appendChild(script);
};

// Insert <link rel="icon" href="pics/logos/favicon.jpg">
const linkImage = document.createElement("link");
linkImage.rel = "icon";
linkImage.href = "assets/images/favicon.jpg";
document.querySelector("head").appendChild(linkImage);

// Set `type="text/javascript"` for all <script> elements for better compatibility
for (let x of document.querySelectorAll("script")) {
  x.type = "text/javascript";
}

// Insert <meta http-equiv="Pragma" content="no-cache">
// var metaPragma = document.createElement("meta");
// metaPragma.httpEquiv = "Pragma";
// metaPragma.content = "no-cache";
// document.querySelector("head").appendChild(metaPragma);

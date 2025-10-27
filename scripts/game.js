/*
 * Script
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

let level = 0;
let userClickedPattern = [];
let gamePattern = [];
const buttonColors = ["red", "blue", "green", "yellow"];
let isGameStarted = false;
setTimeout(function () {
  $("h1").addClass("before after");
}, 2250);

function nextSequence() {
  userClickedPattern = [];
  level++;
  $("h1").text(`Level ${level}`);
  $("h1").removeClass("before after");
  $("h1").css({
    animation: "none",
    "-webkit-animation": "none",
    "-moz-animation": "none",
    "-o-animation": "none",
  });
  $("h1").css({
    animation: "none",
    "-webkit-animation": "none",
    "-moz-animation": "none",
    "-o-animation": "none",
  });
  $(".btn").css({
    animation: "none",
    "-webkit-animation": "none",
    "-moz-animation": "none",
    "-o-animation": "none",
  });

  let randomNumber = Math.floor(Math.random() * buttonColors.length);
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
}

function playSound(name) {
  new Audio(`assets/sounds/${name}.mp3`).play();
}

function animatePress(currentColor) {
  $(`#${currentColor}`).addClass("pressed");
  setTimeout(function () {
    $(`#${currentColor}`).removeClass("pressed");
  }, 100);
}

$(".btn").click(function () {
  if (isGameStarted) {
    let userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    animatePress(userChosenColor);
    playSound(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
  }
});

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(nextSequence, 1000);
    }
  } else {
    $("h1").text("Press Any Key to Restart");
    $("h1").addClass("before after no-animation-delay");
    $("h1").css({
      animation: "pulse 1.5s infinite",
      "-webkit-animation": "pulse 1.5s infinite",
      "-moz-animation": "pulse 1.5s infinite",
      "-o-animation": "pulse 1.5s infinite",
      "animation-delay": "0.75s",
    });
    $(".btn").css({
      animation: "button-glow 1.5s ease-in-out infinite",
      "-webkit-animation": "button-glow 1.5s ease-in-out infinite",
      "-moz-animation": "button-glow 1.5s ease-in-out infinite",
      "-o-animation": "button-glow 1.5s ease-in-out infinite",
    });
    $("body").addClass("try-again");
    setTimeout(function () {
      $("body").removeClass("try-again");
    }, 250);
    new Audio("assets/sounds/wrong.mp3").play();
    restart();
  }
}

function restart() {
  const container = document.querySelector("#container");
  const buttons = document.querySelector(".buttons");
  isGameStarted = false;
  buttons.style.animation = "glitch-effect 1s";
  $(document).one("keypress", function () {
    level = 0;
    userClickedPattern = [];
    gamePattern = [];
    container.style.animation = "";
    buttons.style.animation = "";
    isGameStarted = true;
    nextSequence();
  });
}

$(document).one("keypress", function () {
  isGameStarted = true;
  nextSequence();
});

let backgroundMusic;
let isPlaying = false;
let currentTime = 0;

function toggleBackgroundMusic() {
  if (!isPlaying) {
    startBackgroundMusic();
  } else {
    pauseBackgroundMusic();
  }
  isPlaying = !isPlaying;
}

function startBackgroundMusic() {
  backgroundMusic = new Audio("assets/sounds/background-music.mp3");
  backgroundMusic.loop = true;
  backgroundMusic.volume = 1; // Adjust the volume
  backgroundMusic.currentTime = currentTime; // Resume from the paused position
  backgroundMusic.play();
  updateBackgroundMusicButtonText("Pause Music");
}

function pauseBackgroundMusic() {
  currentTime = backgroundMusic.currentTime; // Store the current playback position
  backgroundMusic.pause();
  updateBackgroundMusicButtonText("Play Music");
}

function updateBackgroundMusicButtonText(text) {
  document.getElementById("backgroundMusicButton").textContent = text;
}

document
  .getElementById("backgroundMusicButton")
  .addEventListener("click", toggleBackgroundMusic);

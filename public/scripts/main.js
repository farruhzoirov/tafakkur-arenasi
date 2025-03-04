"use strict";

const avatarContainer = document.querySelector(".avatar-container");

async function getUserByToken() {
  const response = await fetch("user/get-user-by-token", {
    method: "GET",
    credentials: "include",
  });

  if (response.ok) {
    const user = await response.json();
    const avatar = document.createElement("img");
    avatar.src = user.image;
    avatar.alt = "avatar";
    avatar.className = "rounded-full w-10 h-10";
    avatarContainer.appendChild(avatar);
  } else {
    console.error("Failed to get user by token");
  }
}

getUserByToken().then();

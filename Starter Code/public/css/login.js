document.addEventListener("DOMContentLoaded", function () {
  // Check if the user is logged in (you can use your logic here)
  const loggedIn = false; // Set to true if the user is logged in

  // Get the login button and logout button elements
  const loginButton = document.getElementById("login");
  const logoutButton = document.getElementById("logout");

  // Handle login button click
  loginButton.addEventListener("click", function () {
    // Redirect the user to the login page or show a login modal
    window.location.href = "/login"; // Replace with your login URL
  });

  // Handle logout button click
  logoutButton.addEventListener("click", function () {
    // Perform the logout action (clear session, etc.)
    // For demonstration purposes, we'll simply redirect to the home page
    window.location.href = "/logout";
  });

  // Update the UI based on user login status
  if (loggedIn) {
    // User is logged in, show the logout button
    loginButton.style.display = "none"; // Hide the login button
    logoutButton.style.display = "block"; // Show the logout button
  } else {
    // User is not logged in, show the login button
    loginButton.style.display = "block"; // Show the login button
    logoutButton.style.display = "none"; // Hide the logout button
  }
});

  
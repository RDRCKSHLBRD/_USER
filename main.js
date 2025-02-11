// main.js
document.addEventListener("DOMContentLoaded", () => {
  const createUserBtn = document.getElementById("create-user-btn");
  const mainContent = document.getElementById("main-content");

  if (createUserBtn) {
      createUserBtn.addEventListener("click", () => {
          mainContent.innerHTML = `
              <form id="create-user-form">
                  <h2>Create User</h2>
                  <label for="username">Username:</label>
                  <input type="text" id="username" name="username" required>
                  
                  <label for="password">Password:</label>
                  <input type="password" id="password" name="password" required>
                  
                  <button type="submit">Submit</button>
              </form>
          `;
      });
  }
});

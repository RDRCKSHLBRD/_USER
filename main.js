// main.js

document.addEventListener("DOMContentLoaded", () => {
  const createUserBtn = document.getElementById("create-user-btn");
  const mainContent = document.getElementById("main-content");

  if (createUserBtn) {
    createUserBtn.addEventListener("click", () => {
        mainContent.innerHTML = `
            <form id="create-user-form" class="user-form">
                <h2 class="user-form__title">Create User</h2>
                
                <div class="user-form__field">
                    <label for="username" class="user-form__label">Username:</label>
                    <input type="text" id="username" name="username" class="user-form__input" required>
                </div>
                
                <div class="user-form__field">
                    <label for="password" class="user-form__label">Password:</label>
                    <input type="password" id="password" name="password" class="user-form__input" required>
                </div>
                
                <button type="submit" class="user-form__submit-btn">Submit</button>
            </form>
        `;
    });
  }
});

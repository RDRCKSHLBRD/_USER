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
                    <div class="password-container">
                        <label for="password" class="user-form__label">Password:</label>
                        <div class="password-input-wrapper">
                            <input type="password" id="password" name="password" class="user-form__input" required>
                            <img src="assets/VIEW-ICON.svg" alt="Toggle password visibility" class="password-toggle" id="password-toggle">
                        </div>
                    </div>
                </div>
                
                <button type="submit" class="user-form__submit-btn">Submit</button>
            </form>
        `;

        // Add password toggle functionality
        const passwordToggle = document.getElementById('password-toggle');
        const passwordInput = document.getElementById('password');  

        if (passwordToggle && passwordInput) {
            passwordToggle.addEventListener('click', () => {
                const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
                passwordInput.setAttribute('type', type);
                // Optionally change the icon based on state
                passwordToggle.classList.toggle('visible');
            });
        }
    });
  }
});
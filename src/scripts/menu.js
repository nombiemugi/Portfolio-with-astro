// Get the toggle button and theme icon
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Function to toggle the theme
function toggleTheme() {
  const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
  if (isDarkMode) {
    document.documentElement.setAttribute('data-theme', 'light');
    themeIcon.textContent = '🌙'; // Change icon to moon (light mode)
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeIcon.textContent = '☀️'; // Change icon to sun (dark mode)
  }
  // Save the user's preference in localStorage
  localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
}

// Load the user's preferred theme on page load
function loadTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  themeIcon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
}

// Add event listener to the toggle button
themeToggle.addEventListener('click', toggleTheme);

// Load the theme when the page loads
loadTheme();
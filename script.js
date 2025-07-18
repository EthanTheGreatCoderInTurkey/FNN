// Dark Mode Toggle
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Modal Popup
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close');

window.addEventListener('load', () => {
  setTimeout(() => {
    modal.style.display = 'block';
  }, 3000);
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal if clicked outside
window.onclick = function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};


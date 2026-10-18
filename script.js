const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  menuToggle.textContent = isOpen ? '×' : '☰';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
  menuToggle.textContent = '☰';
}));
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('quote-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const email = 'hello@brightforgestudio.example'; // Replace with your real email before launch.
  const subject = `Website project inquiry — ${form.get('business')}`;
  const body = [
    `Name: ${form.get('name')}`,
    `Business: ${form.get('business')}`,
    `Reply email: ${form.get('email')}`,
    `Service: ${form.get('service')}`,
    `Budget: ${form.get('budget')}`,
    '',
    'Project details:',
    form.get('details') || 'Not provided'
  ].join('\n');
  document.getElementById('form-status').textContent = 'Your email app should open with the inquiry filled in. Review it and press Send to contact us.';
  window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

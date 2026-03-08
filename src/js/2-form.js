let formData = {
  email: '',
  message: ''
};

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');

const STORAGE_KEY = 'feedback-form-state';


const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  try {
    const parsed = JSON.parse(savedData);
   
    formData.email = parsed.email || '';
    formData.message = parsed.message || '';
    emailInput.value = formData.email;
    messageTextarea.value = formData.message;
  } catch (e) {
    console.error('Erorr .json:', e);
  }
}


form.addEventListener('input', (event) => {
  const { name, value } = event.target;
  if (name === 'email' || name === 'message') {
    
    formData[name] = value;

   
    const dataToSave = {
      email: formData.email.trim(),
      message: formData.message.trim()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
  }
});


form.addEventListener('submit', (event) => {
  event.preventDefault();

  
  if (!formData.email.trim() || !formData.message.trim()) {
    alert('Fill please all fields');
    return;
  }

  
  console.log('Form Data:', formData);

  
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData = { email: '', message: '' };
});
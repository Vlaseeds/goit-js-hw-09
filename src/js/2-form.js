
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
    
    formData = { email: parsed.email || '', message: parsed.message || '' };
    emailInput.value = formData.email;
    messageTextarea.value = formData.message;
  } catch (e) {
    console.error('Пиздец, битый JSON в localStorage:', e);
  }
}


form.addEventListener('input', (event) => {
  const { name, value } = event.target;
  
  if (name === 'email' || name === 'message') {
    
    const trimmedValue = value.trim();
    formData[name] = trimmedValue;
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }
});


form.addEventListener('submit', (event) => {
  event.preventDefault(); 

 
  if (!formData.email || !formData.message) {
    alert('Fill please all fields'); 
    return;
  }

 
  console.log('Form Data:', formData);


  localStorage.removeItem(STORAGE_KEY);


  formData = { email: '', message: '' };


  form.reset(); 
  
});
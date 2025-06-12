function openModal(type) {
    const modal = document.getElementById(`${type}Modal`);
    if (type === 'password') {
      modal.style.display = 'flex';
    } else if (type === 'feedback') {
      const feedbackInput = document.getElementById('feedbackInput');
      const feedbackMsg = document.getElementById('feedbackMsg');
      feedbackInput.value = '';
      feedbackMsg.style.display = 'none';
      modal.style.display = 'flex';
    }
  
    modal.onclick = function (event) {
      if (event.target === modal) {
        closeModal(type);
      }
    };
  }
  
  function closeModal(type) {
    const modal = document.getElementById(`${type}Modal`);
    const box = modal.querySelector(`.${type}-modal-box`) || modal.querySelector('.password-modal-box') || modal.querySelector('.feedback-modal-box');
  
    box.style.animation = 'fadeOutModal 0.3s ease forwards';
  
    setTimeout(() => {
      modal.style.display = 'none';
      box.style.animation = 'fadeInModal 0.3s ease forwards';
  
      if (type === 'feedback') {
        document.getElementById('feedbackInput').value = '';
        document.getElementById('feedbackMsg').style.display = 'none';
      } else if (type === 'password') {
        document.getElementById('passwordSuccessMsg').style.display = 'none';
      }
    }, 300);
  }
  
  function scrollToDevices() {
    document.getElementById('devices').scrollIntoView({ behavior: 'smooth' });
  }
  
  function showActivity() {
    document.querySelector('.main-card').style.display = 'none';
    document.getElementById('activityCard').style.display = 'block';
  }
  
  function hideActivity() {
    document.getElementById('activityCard').style.display = 'none';
    document.querySelector('.main-card').style.display = 'flex';
  }
  
  function sendFeedback() {
    const input = document.getElementById('feedbackInput');
    const msg = document.getElementById('feedbackMsg');
  
    if (input.value.trim() !== '') {
      msg.textContent = 'Feedback sent successfully!';
      msg.style.display = 'block';
  
      setTimeout(() => {
        msg.style.display = 'none';
        input.value = '';
        closeModal('feedback');
      }, 1500);
    }
  }
  
  function togglePassword(fieldId, icon) {
    const input = document.getElementById(fieldId);
    if (input.type === 'password') {
      input.type = 'text';
      icon.src = 'icon-eye-off.png';
      icon.setAttribute('alt', 'Hide Password');
    } else {
      input.type = 'password';
      icon.src = 'icon-eye.png';
      icon.setAttribute('alt', 'Show Password');
    }
  }
  
  function submitPassword() {
    const current = document.getElementById('currentPassword').value.trim();
    const newPass = document.getElementById('newPassword').value.trim();
    const confirm = document.getElementById('confirmPassword').value.trim();
    const msg = document.getElementById('passwordSuccessMsg');
  
    if (!current || !newPass || !confirm) {
      msg.style.color = 'red';
      msg.textContent = 'Mali ang password. Please fill all fields.';
      msg.style.display = 'block';
      return;
    }
  
    if (newPass !== confirm) {
      msg.style.color = 'red';
      msg.textContent = 'Password confirmation does not match.';
      msg.style.display = 'block';
      return;
    }
  
    msg.style.color = 'green';
    msg.textContent = 'Password successfully changed';
    msg.style.display = 'block';
  
    setTimeout(() => {
      msg.style.display = 'none';
      closeModal('password');
    }, 1500);
  }
  
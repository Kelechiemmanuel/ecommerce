const popup = document.querySelector('.chat-popup');
const chatBtn = document.querySelector('.chat-btn');
const submitBtn = document.querySelector('.submit');
const chatArea = document.querySelector('.chat-area');
const inputElm = document.querySelector('input');
const emojibtn = document.querySelector('#emoji-btn');
const picker = new EmojiButton();

emojibtn.addEventListener('click', () => {
  picker.togglePicker(emojibtn);
  
});

  picker.on('emoji', emoji => {
    document.querySelector('input').value += emoji;
  });

  chatBtn.addEventListener('click', ()=>{
    popup.classList.toggle('show');
  })
  submitBtn.addEventListener('click', ()=>{
    let userInput = inputElm.value;
    let temp = `<div class="out-msg">
    <span class="my-msg">${userInput}</span>
    <img src="ASSET/IMAGES/download.jpg" class="avatar">
    </div>`;
    chatArea.insertAdjacentHTML("beforeend", temp);
    inputElm.value = '';
  })

  
  let mybutton = document.getElementById("repeat");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
      mybutton.style.display = "block";
  } else {
      mybutton.style.display = "none";
  }
  }
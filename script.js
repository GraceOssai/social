// NOTIFICATION
const menuItem = document.querySelectorAll('.menu-item');
const messageNotification = document.querySelector('#messages-notifications');


// MESSAGES
const mainMessages = document.querySelector('.messages');
const message = mainMessages.querySelectorAll('.messages');
const messageSearch = document.querySelector('#message-search')


// THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
const root = document.querySelector(':root');







// SIDE BAR
// changing the active class on each item when clicked.
const changeActive = () =>{
  menuItem.forEach(item =>{
    item.classList.remove('active')
  })
}

// From our codes below, we found out that all the items automatically gets the active class when clicked but that's not what we want so we went to line 4 and created an arrow function.
// In line 6, we targeted all the items again
// and in line 7, we removed the classList from each of the items
// then we called the changeActive function in line 18.


// MAKING THE MENU-ITEM ACTIVE ON CLICK

  menuItem.forEach(item => {
  item.addEventListener('click', () =>{
    changeActive();
    item.classList.add('active');
    

    // note that we could have as well gone outside this function to 
    // create another event listener separately for the notifications but 
    // since 'item' is for each individual menu-item, then it's only 
    // better to do this here and just say if item does not have the 
    // notification id, it should display "none", but if it has, it 
    // should display block. This also helps us reduce multiple line of codes.
    if(item.id != 'notifications'){
      document.querySelector('.notifications-popup').style.display = 'none';
    } else{
      document.querySelector('.notifications-popup').style.display = 'block';
    };

    // This will hide the notification count
    document.querySelector('.notification-count').style.display = 'none';



    
    // This code below actually worked but because of the multiple functions we want to 
    // execute on this message element, we'll have to create a separate event 
    // listener for this element
    // if(item.id != 'messages-notifications'){
    //   mainMessages.style.boxShadow = 'none';
    // } else{
    //   mainMessages.style.boxShadow = '0 0 2rem var(--color-primary)';
    // }

  })
})




// menuItem.forEach(item => {
//   item.addEventListener('click', () =>{
//     if(item.contains('.menu-item')){
//       item.classList.add('active')
//     } else{
//       item.classList.remove('active');
//     }
//   })
// })
// From the above, we know that a forEach loop has the below syntax
// array.forEach(function(argument))
// it can also be re-written using arrow function...
// array.forEach(argument => {})
// From line 1, we selected all the elements that has the class name of menu-item. 
// We cannot add event listeners to the menuItem directly as this is a variable that covers all the items not an individual item plus the fact that there is no way to click all the items at the same time.
// So in order to target each item, we decided to use a forEach loop. So for each of the item, we added an event listener.
// In line 10, we added a class of "active" to each of the items.




// MESSAGES
// This will add a shadow effect on the messages when the message button is clicked and also remove the the shadow effect after 2seconds. Line 104 will remove the message notification count when the message button is clicked.

messageNotification.addEventListener('click', () =>{
  mainMessages.style.boxShadow = '0 0 2rem var(--color-primary)';
 
  // This will remove the boxShadow after 2 seconds
  setTimeout(() =>{
    mainMessages.style.boxShadow = 'none'
  }, 2000);

  // This will remove the notification count

  // notificationCount.style.display = 'none';
  // The above did not work but the below worked...why? 

  messageNotification.querySelector('.notification-count').style.display = 'none';
})


// SEARCH MESSAGES
    // This will help us to search for messages

    const newFunctionSearch = () =>{
      const val = messageSearch.value.toLowerCase();
      console.log(val)
      message.forEach(chat =>{
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
          chat.style.display = 'flex';
        } else{
          chat.style.display = 'none';
        }
      })
    }

    messageSearch.addEventListener('keyup', newFunctionSearch)





// THEME CUSTOMIZATION

// opens modal
const openThemeModal = () => {
  themeModal.style.display = 'grid'
}

// opens modal
theme.addEventListener('click', openThemeModal)



// The way I opened the modal but had it's limitation such that when I tried to increase or decrease the font sizes, It was difficult.
// closes modal
// themeModal.addEventListener('click', () => {
//   themeModal.style.display = 'none'
// });


// The codes below can also clost the modal and this was the instructor's way to solve the problem.

const closeThemeModal = (e) => {
  if(e.target.classList.contains('customize-theme')){
    themeModal.style.display = 'none'
  }
}

themeModal.addEventListener('click', closeThemeModal);



// this should remove active class from span
const removeSizeSelector = () => {
  fontSizes.forEach(size => {
    size.classList.remove('active');
  })
}



fontSizes.forEach(size => {
  removeSizeSelector();
  let fontSize;
  size.classList.toggle('active');
  
  size.addEventListener('click', () => {
    if(size.classList.contains('font-size-1')){
      fontSize = '10px';
      root.style.setProperty('----sticky-top-left', '5.4rem');
      root.style.setProperty('----sticky-top-right', '5.4rem');
    } else if(size.classList.contains('font-size-2')){
      fontSize = '13px';
      root.style.setProperty('----sticky-top-left', '5.4rem');
      root.style.setProperty('----sticky-top-right', '-7rem');
    } else if(size.classList.contains('font-size-3')){
      fontSize = '16px';
      root.style.setProperty('----sticky-top-left', '-2rem');
      root.style.setProperty('----sticky-top-right', '-17rem');
    } else if(size.classList.contains('font-size-4')){
      fontSize = '19px';
      root.style.setProperty('----sticky-top-left', '-5rem');
      root.style.setProperty('----sticky-top-right', '-25rem');
    } else if(size.classList.contains('font-size-5')){
      fontSize = '22px';
      root.style.setProperty('----sticky-top-left', '-12rem');
      root.style.setProperty('----sticky-top-right', '-35rem');
    }

    document.querySelector('html').style.fontSize = fontSize;
  })
})



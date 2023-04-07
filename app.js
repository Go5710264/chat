const chatWidget = document.querySelector('.chat-widget'); 
const chatWidgetInput = document.getElementById('chat-widget__input');
const chatMessages = document.querySelector('.chat-widget__messages');
const chat = document.querySelector('.chat-widget__messages-container');
let arrLength = 0; 

chatWidget.addEventListener('click', () => { 
    if (!chatWidget.classList.contains('chat-widget_active')) {
        chatWidget.classList.add('chat-widget_active');
    }
}); 

chatWidgetInput.addEventListener('change', () => { 
    
    chatWidgetInput.value = chatWidgetInput.value.trim(); 
    if(chatWidgetInput.value.charAt(0) === '') { 
        return false;
    }

    chatMessages.innerHTML += `
        <div class="message message_client">
            <div class="message__time">${currentDate()}</div>
            <div class="message__text">
                ${chatWidgetInput.value} 
            </div>
        </div>
        <div class="message">
            <div class="message__time">${currentDate()}</div>
            <div class="message__text">${getMessage()}</div>
        </div>
    `;
    arrLength = arrLength + 2;
    chatWidgetInput.value = '';
    chat.scrollTop = chat.scrollHeight;
})

setTimeout(() => { 
    let arrMessages = document.querySelectorAll('.message');
    if(arrLength === arrMessages.length) { 
        
        chatMessages.innerHTML += `
        <div class="message">
            <div class="message__time">${currentDate()}</div>
            <div class="message__text">${getMessage()}</div>
        </div> 
        `;
        arrLength++;
    }
}, 5000); 

getMessage = () => {
    const arrayRobotMessages = [
        'Кто тут?', 
        'Где ваша совесть?', 
        'Все операторы заняты', 
        'Продолжайте покупки', 
        'Добрый день!',
        'Мы обязательно ответим Вам!'
    ];
    let index = Math.floor(Math.random() * arrayRobotMessages.length);

    return arrayRobotMessages[index]; 
}

currentDate = () => { 
    let date = new Date;
    return `${date.getHours()}:${date.getMinutes()}`; 
}

validate = () => {
    txt = '';
    if(!chatWidgetInput.value.checkValidity()){
        txt = 'Необходимо написать символы'
    }
}
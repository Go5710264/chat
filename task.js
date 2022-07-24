const chatWidget = document.querySelector('.chat-widget'); // доступ к виджету
const chatWidgetInput = document.getElementById('chat-widget__input'); // доступ к полю с сообщением
const chatMessages = document.querySelector('.chat-widget__messages'); // доступ к контейнеру в который пушатся сообщения
const chat = document.querySelector('.chat-widget__messages-container'); // доступ к окну чата со скроллом
let arrLength = 0; // количество сообщений.

chatWidget.addEventListener('click', () => { // обработка клика на виджет
    if (!chatWidget.classList.contains('chat-widget_active')) { // если у виджета нет класса chat-widget_active
        chatWidget.classList.add('chat-widget_active'); // добавить класс и раскрыть виджет
    }
}); 

chatWidgetInput.addEventListener('change', () => { // обработка события ввода сообщения 
    
    chatWidgetInput.value = chatWidgetInput.value.trim(); // убрать лишние пробелы 
    if(chatWidgetInput.value.charAt(0) === '') { // если значение строки без символов
        return false; // выйти из функции
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
    chatWidgetInput.value = ''; // очищение строки с сообщением
    chat.scrollTop = chat.scrollHeight; // автоматическая прокрутка окна чата
})

setTimeout(() => { // интервал по автоматической задаче вопроса
    let arrMessages = document.querySelectorAll('.message'); // массив с сообщениями
    if(arrLength === arrMessages.length) { // если arrLength = длинне массива arrMessages
        // тогда добавить сообщение
        chatMessages.innerHTML += `
        <div class="message">
            <div class="message__time">${currentDate()}</div>
            <div class="message__text">${getMessage()}</div>
        </div> 
        `;
        arrLength++; // увеличить переменную на 1
    }
}, 30000); // повторять каждые 30 секунд

getMessage = () => { // генерация сообщения бота
    const arrayRobotMessages = [ // массив из фраз бота
        'Кто тут?', 
        'Где ваша совесть?', 
        'Все операторы заняты', 
        'Продолжайте покупки', 
        'Добрый день!'
    ];
    let index = Math.floor(Math.random() * arrayRobotMessages.length); // универсальный метод для получения случайного элемента массива

    return arrayRobotMessages[index]; // вернуть элемент массива по сгенерированному индексу 
}

currentDate = () => { // генерация времени сообщения
    let date = new Date; // доступ к массиву с датой
    return `${date.getHours()}:${date.getMinutes()}`; // вернуть часы и минуты
}

validate = () => {
    txt = '';
    if(!chatWidgetInput.value.checkValidity()){
        txt = 'Необходимо написать символы'
    }
}
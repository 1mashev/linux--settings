HSerializedBuffer�� EventHandler�� Cursor�� ModTime��   8��EventHandler�� 	UndoStack�� 	RedoStack��   '��TEStack�� Top�� Size   *��Element�� Value�� Next��   B��	TextEvent�� C�� 	EventType Deltas�� Time��   Z��Cursor�� Loc�� LastVisualX CurSelection�� OrigSelection�� Num   ��Loc�� X Y   ��[2]buffer.Loc�� ��  ��[]buffer.Delta�� ��  0��Delta�� Text
 Start�� End��   ��Time��   �e��      �?const { exec } = require('child_process');

// Функция для изменения раскладки клавиатуры
function changeLayout() {
    exec('setxkbmap -query', (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        // Получаем текущую раскладку клавиатуры
        const currentLayout = stdout.match(/layout:\s+(\w+)/)[1];
        if (currentLayout === 'ru') {
            // Изменяем раскладку клавиатуры на английскую
            exec('setxkbmap us', (error, stdout, stderr) => {
                if (error) {
                    console.error(`exec error: ${error}`);
                    return;
                }
                console.log('Раскладка клавиатуры изменена на английскую.');
            });
        }
    });
}

// Ждем 5 секунд и вызываем функцию для изменения раскладки
setTimeout(changeLayout, 5000);
 4     ݢ�Ӆ�h  N N N N  �1// Функция для проверки текущей раскладки клавиатуры
function checkKeyboardLayout() {
    var currentLayout = document.activeElement.value;
    
    // Проверяем, является ли текущая раскладка русской
    if (currentLayout === "ru") {
        // Ждем 5 секунд и меняем раскладку на английскую
        setTimeout(function() {
            // Предположим, что здесь есть код для смены раскладки
            console.log("Раскладка клавиатуры изменена на английскую.");
        }, 5000);
    }
}

// Вызываем функцию проверки каждые 5 секунд
setInterval(checkKeyboardLayout, 5000); N     ݢ�Ҥh       �1// Функция для проверки текущей раскладки клавиатуры
function checkKeyboardLayout() {
    var currentLayout = document.activeElement.value;
    
    // Проверяем, является ли текущая раскладка русской
    if (currentLayout === "ru") {
        // Ждем 5 секунд и меняем раскладку на английскую
        setTimeout(function() {
            // Предположим, что здесь есть код для смены раскладки
            console.log("Раскладка клавиатуры изменена на английскую.");
        }, 5000);
    }
}

// Вызываем функцию проверки каждые 5 секунд
setInterval(checkKeyboardLayout, 5000); N     ݢ�@�h           ݢ�:�h 
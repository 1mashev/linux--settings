HSerializedBuffer�� EventHandler�� Cursor�� ModTime��   8��EventHandler�� 	UndoStack�� 	RedoStack��   '��TEStack�� Top�� Size   *��Element�� Value�� Next��   B��	TextEvent�� C�� 	EventType Deltas�� Time��   Z��Cursor�� Loc�� LastVisualX CurSelection�� OrigSelection�� Num   ��Loc�� X Y   ��[2]buffer.Loc�� ��  ��[]buffer.Delta�� ��  0��Delta�� Text
 Start�� End��   ��Time��   �e��@ @($ ($ ($ ($  s@ B     ݡ��)��h > >($ ($ ($ ($  u> @     ݡ���Y�h @ @($ ($ ($ ($  r> @     ݡ��-_�%h B B($ ($ ($ ($  u@ B     ݡ��Gn�h @ @($ ($ ($ ($  u@ B     ݡ��$�X4h > >($ ($ ($ ($  r> @     ݡ�����h < <($ ($ ($ ($  ,< >     ݡ��d�h : :($ ($ ($ ($  u: <     ݡ��,eb�h 8 8($ ($ ($ ($  r8 :     ݡ��$¿rh : :($ ($ ($ ($  u8 :     ݡ����h < <($ ($ ($ ($  s: <     ݡ�����h > >($ ($ ($ ($  ,< >     ݡ��3a�h @ @($ ($ ($ ($  r> @     ݡ��*�^=h B B($ ($ ($ ($  u@ B     ݡ��!zt.h       ��const { exec } = require('child_process');

// Функция для выполнения команды
function setKeyboardLayout() {
    exec('setxkbmap -layout us,ru', (error, stdout, stderr) => {
        if (error) {
            console.error(`Ошибка при выполнении команды: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Ошибка: ${stderr}`);
            return;
        }
        console.log(`Команда успешно выполнена: ${stdout}`);
    });
}

// Вызов функции для установки раскладки клавиатуры
setKeyboardLayout(); ($     ݡ��5�Yh       %#!/bin/bash

setxkbmap -layout ru,us
      ݡ��5���h                     B    ݡ�� y&Ch 
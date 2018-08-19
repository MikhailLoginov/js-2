# GeekBrains JavaScript-2 Homeworks

## Lesson 2

Меню доработано согласно заданиям. Структура получаемого для формирования меню JSON файла имеет следующий вид:

 * {
 *   li_id : {"href", "name"},
 *   li_id : {"href", "name"},
 *   submenu_ul_id : {
 *     submenu_li_id : {"href", "name"},
 *     ...
 *     }
 *   ...
 * }

Добавлена возможность скрывать и раскрывать подменю, щелкая на них мышью (по умолчанию они у меня для наглядности раскрыты)

При щелчке на пункт меню "Галерея" открывается фотогалерея (3е задание): обрабатывается JSON файл, который должен иметь следующую струтуру:

 * {
 *   pic_id : {
 *     name : "picture name",
 *     small_img : "path/to/small-img.jpg",
 *     full_img : "path/to/full-img.jpg"
 *   },
 *   ...
 * }


 ## Lesson 3

 Везде есть простенький UI с bootstrap, первые два задания - quote.html / quote.js, третье задание - contact-form.html / contact-form.js
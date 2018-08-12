# GeekBrains JavaScript-2 Homeworks

## Кофеварка

### Что сделал:
- для быстровёрстки использовал bootstrap, не имею большого опыта работы с этим инструментом, но всегда привлекала опция быстрой верстки админок или чего-то еще, где нет макета и нужно лишь схематическое / фунциональное отображение; но в итоге по-моему получилось мило)
- ошибки прокидываются из класса во фронт часть и затем выводятся на страницу; все возможные ситуации, которые могут возникнуть через веб интерфейс обработаны, мою кофе машину не так уж и просто поломать! =) моя кофе машина готова к тому, что ее всячески будут испытывать на прочность через веб интерфейс! :)
- естественно всё, что требовалось сделать непосредственно в задании тоже выполнено

##### Посмотреть в инете https://js-2.netlify.com/coffee-machine
##### Репозиторий https://github.com/MikhailLoginov/js-2  (папка lesson-1)

Также хочу добавить некоторые допущения, которыми мы пользовались на уроке, и которые также перешли в мою реализацию:

- слова "кофе закипел" и "кофе готов" используются как синонимы, хотя по-сути в современной кофе машине это не так (кофе начинает течь почти сразу, а нагревание - побочный и очень быстрый для кофе машины процесс)
- соответственно из этого вытекает правило "если отменить приготовление кофе (метод Stop), то ингридиенты не расходуются, ведь мы просто подогрели воду и ничего с ней еще не делали"
- формула времени ожидания кофе естественно тоже символическая, не отображает реальной ситуации, думаю в нашем примере это нормально. я на уроке вообще предлагал символическую формулу использовать, но мы постарались вспомнить физику, чтобы всё было серьезно))) но как показывает практика, по-настоящему всё работет всё же еще иначе

И еще хочу поинтересоваться: выполнять одно задание из двух - это норма, или всё же для получения максимального кредита доверия нужно выполнять оба? Меня если честно это слегка смутило, хотел бы для себя это понять...

## Menu

Не делал GUI, но сделал оба задания из первого урока. Особенности моей реализации:

- метод remove() удаляет видимую часть элемента, при этом сохраняя переменную, которую можно при желании повторно расположить на странице
- многоуровневое меню задаётся у меня таким образом: как второй аргумент мой класс ComplexMenu получает объект, состоящий из элементов MenuItem или элементов ComplexMenu. Элемент MenuItem рендерится как строчка, элемент ComplexMenu - как новое меню, у которого тоже может, соответственно, в качестве аргумента передаваемого при конструкции, приниматься не только MenuItem, а и более вложенные ComplexMenu. Что позволяет добиться вложенности любого уровня
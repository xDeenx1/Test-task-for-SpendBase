Коротко про стан речей:

1. Перший раз працював з MUI поки частково розібрався, не встиг доробити функціонал.
2. Видалення лише частково реалізовано через консоль.
3. ДнД не реалізовано.
4. Хотів прикрутити RTK Query, але забракло часу.
5. Тест кейса нема.

ТЗ Пункт 8. Покращення стосовно швидкодії:
1. Використання RTK Query для роботи зі стейтом та кешуванням запитів на сервер.
2. Для компонентів, що будуть робити запити на сервер зробити спінер на час завантаження данних та зробити ErrorBoundary.
3. Усі компоненти, включно з іконками, зробити lazy для підвантаження за потребою.
4. Для зменшення передачі данних з сервера, полегшення renderTree та забезпечення безпеки данних зробити авторизацію та віддавати з сервера папки лише доступні для перегляду користувачу.
5. Кешувати отриману інформацію за допомогою localStorage чи cookie для зменшення запитів при повторних використаннях.

PS. Імпортував в компоненти цілий React, щоб не підтягувати хуки під час розробки, звичайно, що краще імпортувати тільки потрібні хуки в компонент для зменшення обсягу файлу.





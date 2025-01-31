# EasyTasks
A web-based task management application. Users can add, edit, delete, and mark completed tasks.
│── backend/                # Серверная часть (Spring)
│   ├── src/main/java/com/example/todo/
│   │   ├── controller/     # REST-контроллеры 
│   │   ├── model/          # Классы-сущности (Task.java)
│   │   ├── service/        # Логика приложения (TaskService.java)
│   │   
│   ├── src/main/resources/
│   │   ├── application.properties  # Настройки (БД, порты и т. д.)
│   ├── pom.xml            # Зависимости Maven
│
│── frontend/              # Клиентская часть (React)
│   ├── src/
│   │   ├── components/    # Компоненты React
│   │   │   ├── TaskItem.js
│   │   │   ├── TaskForm.js
│   │   ├── services/      # Запросы к API 
│   │   ├── App.js         # Основной компонент React
│   │   ├── index.js       # Точка входа
│   ├── public/            # Статические файлы (index.html)
│
│── README.md              
│── .gitignore

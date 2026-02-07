# Инструкция по размещению в Git

Это руководство поможет вам разместить мокапы в GitHub/GitLab/Bitbucket для совместной работы команды.

## 📋 Оглавление
- [Подготовка](#подготовка)
- [Вариант 1: GitHub](#вариант-1-github)
- [Вариант 2: GitLab](#вариант-2-gitlab)
- [Вариант 3: Bitbucket](#вариант-3-bitbucket)
- [После размещения](#после-размещения)
- [Работа с GitHub Pages](#работа-с-github-pages)

---

## Подготовка

Убедитесь что у вас установлен Git:

```bash
git --version
```

Если нет, установите:
- **macOS**: `brew install git`
- **Linux**: `sudo apt-get install git` или `sudo yum install git`
- **Windows**: Скачайте с [git-scm.com](https://git-scm.com/)

---

## Вариант 1: GitHub

### Шаг 1: Создайте репозиторий на GitHub

1. Откройте [github.com](https://github.com) и войдите
2. Нажмите "+" → "New repository"
3. Заполните:
   - **Repository name**: `monitor-system-mockups`
   - **Description**: `Интерактивные HTML мокапы системы мониторинга`
   - **Public** или **Private** (на ваш выбор)
   - ❌ НЕ добавляйте README, .gitignore, license (они уже есть)
4. Нажмите "Create repository"

### Шаг 2: Инициализируйте Git локально

```bash
# Перейдите в папку проекта
cd monitor-system-mockups

# Инициализируйте Git (если еще не сделано)
git init

# Добавьте все файлы
git add .

# Создайте первый коммит
git commit -m "Initial commit: добавлены все страницы мокапов v1.0.0"
```

### Шаг 3: Подключите удаленный репозиторий

```bash
# Замените YOUR_USERNAME на ваш username GitHub
git remote add origin https://github.com/YOUR_USERNAME/monitor-system-mockups.git

# Или используйте SSH (если настроен)
git remote add origin git@github.com:YOUR_USERNAME/monitor-system-mockups.git
```

### Шаг 4: Отправьте код

```bash
# Переименуйте ветку в main (если нужно)
git branch -M main

# Отправьте код
git push -u origin main
```

### Шаг 5: Настройте GitHub Pages (опционально)

Чтобы мокапы были доступны онлайн:

1. Перейдите в Settings → Pages
2. Source: Deploy from a branch
3. Branch: `main` → `/root` или `/docs`
4. Нажмите Save

Сайт будет доступен по адресу:
```
https://YOUR_USERNAME.github.io/monitor-system-mockups/
```

**Важно:** Если выбрали `/root`, убедитесь что `index.html` в корне проекта.

---

## Вариант 2: GitLab

### Шаг 1: Создайте проект на GitLab

1. Откройте [gitlab.com](https://gitlab.com) и войдите
2. Нажмите "New project" → "Create blank project"
3. Заполните:
   - **Project name**: `monitor-system-mockups`
   - **Visibility**: Public или Private
   - ❌ Не инициализируйте с README
4. Нажмите "Create project"

### Шаг 2: Инициализируйте и отправьте

```bash
cd monitor-system-mockups
git init
git add .
git commit -m "Initial commit: добавлены все страницы мокапов v1.0.0"

# Замените YOUR_USERNAME и YOUR_PROJECT
git remote add origin https://gitlab.com/YOUR_USERNAME/monitor-system-mockups.git
git branch -M main
git push -u origin main
```

### Шаг 3: Настройте GitLab Pages

Создайте файл `.gitlab-ci.yml`:

```yaml
pages:
  stage: deploy
  script:
    - mkdir .public
    - cp -r * .public
    - mv .public public
  artifacts:
    paths:
      - public
  only:
    - main
```

Сайт будет доступен:
```
https://YOUR_USERNAME.gitlab.io/monitor-system-mockups/
```

---

## Вариант 3: Bitbucket

### Шаг 1: Создайте репозиторий на Bitbucket

1. Откройте [bitbucket.org](https://bitbucket.org) и войдите
2. Нажмите "Create" → "Repository"
3. Заполните детали
4. Нажмите "Create repository"

### Шаг 2: Отправьте код

```bash
cd monitor-system-mockups
git init
git add .
git commit -m "Initial commit: добавлены все страницы мокапов v1.0.0"

git remote add origin https://YOUR_USERNAME@bitbucket.org/YOUR_USERNAME/monitor-system-mockups.git
git branch -M main
git push -u origin main
```

---

## После размещения

### Пригласите команду

**GitHub:**
- Settings → Collaborators → Add people

**GitLab:**
- Project → Members → Invite members

**Bitbucket:**
- Repository settings → User and group access → Add users

### Защитите главную ветку

**GitHub:**
1. Settings → Branches → Add rule
2. Branch name pattern: `main`
3. ✅ Require pull request reviews before merging
4. Save changes

**GitLab:**
1. Settings → Repository → Protected Branches
2. Выберите `main`
3. Настройте права доступа

### Создайте ветки для разработки

```bash
# Создайте ветку develop
git checkout -b develop
git push -u origin develop

# Для новых фич используйте
git checkout -b feature/название-фичи
```

---

## Работа с GitHub Pages

### Базовая настройка

1. Убедитесь что `index.html` в корне или есть в `/docs`
2. Settings → Pages → Source: main branch
3. Выберите root `/` или `/docs`

### С кастомным доменом

1. Добавьте файл `CNAME` в корень:
```
your-domain.com
```

2. Настройте DNS записи у регистратора домена:
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

3. В GitHub Settings → Pages → Custom domain: `your-domain.com`

### Автоматическое развертывание

GitHub Pages автоматически обновляется при каждом push в `main`.

---

## Полезные команды Git

### Ежедневная работа

```bash
# Получить изменения
git pull origin main

# Проверить статус
git status

# Добавить изменения
git add .

# Сохранить изменения
git commit -m "Описание изменений"

# Отправить на сервер
git push origin main
```

### Работа с ветками

```bash
# Создать новую ветку
git checkout -b feature/new-feature

# Переключиться на существующую ветку
git checkout main

# Список всех веток
git branch -a

# Удалить ветку
git branch -d feature/old-feature
```

### Отмена изменений

```bash
# Отменить изменения в файле (до commit)
git checkout -- filename.html

# Отменить последний коммит (сохранить изменения)
git reset --soft HEAD~1

# Отменить последний коммит (удалить изменения)
git reset --hard HEAD~1
```

---

## Структура для командной работы

### Рекомендуемые ветки

```
main (production)
  ↑
develop (основная разработка)
  ↑
feature/* (новые фичи)
hotfix/* (срочные исправления)
```

### Workflow

1. **Новая фича:**
```bash
git checkout develop
git checkout -b feature/add-user-page
# Работайте над фичей
git add .
git commit -m "feat: добавлена страница пользователей"
git push origin feature/add-user-page
# Создайте Pull Request в develop
```

2. **Исправление бага:**
```bash
git checkout develop
git checkout -b fix/broken-navigation
# Исправьте баг
git commit -m "fix: исправлена навигация на странице алертов"
git push origin fix/broken-navigation
# Создайте Pull Request
```

3. **Срочное исправление в production:**
```bash
git checkout main
git checkout -b hotfix/critical-bug
# Исправьте
git commit -m "hotfix: исправлена критическая ошибка в dashboard"
git push origin hotfix/critical-bug
# Создайте Pull Request в main
```

---

## Решение проблем

### Конфликты при merge

```bash
# Получите изменения
git pull origin main

# Если есть конфликты, откройте файлы
# Найдите маркеры <<<<<<< ======= >>>>>>>
# Решите конфликты вручную

# Добавьте решенные файлы
git add .

# Завершите merge
git commit -m "merge: разрешены конфликты"
git push origin main
```

### Случайный commit не в ту ветку

```bash
# Запомните SHA коммита
git log

# Переключитесь на правильную ветку
git checkout correct-branch

# Перенесите коммит
git cherry-pick <commit-sha>

# Вернитесь обратно
git checkout wrong-branch

# Удалите неправильный коммит
git reset --hard HEAD~1
```

### Отмена push

```bash
# ВНИМАНИЕ: используйте только если никто не скачал изменения

# Отмените локально
git reset --hard HEAD~1

# Принудительно отправьте
git push origin main --force
```

---

## Дополнительные ресурсы

- [GitHub Documentation](https://docs.github.com)
- [GitLab Documentation](https://docs.gitlab.com)
- [Git Book на русском](https://git-scm.com/book/ru/v2)
- [GitHub Pages Guide](https://pages.github.com)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)

---

## Поддержка

Если возникли вопросы:
1. Проверьте документацию платформы
2. Посмотрите Issues в репозитории
3. Спросите команду в Slack/Teams
4. Создайте Issue с тегом `question`

**Удачи с размещением проекта!** 🚀

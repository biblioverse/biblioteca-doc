---
title: Dotenv configuration
---

The following properties can be set in a `.env` file in the root of the project:
    
```dotenv
APP_ENV=prod
APP_SECRET=9653a6c476d291323d2db7417c13a814
DATABASE_URL="mysql://db:db@db:3306/db?serverVersion=mariadb-10.3.39&charset=utf8"
MESSENGER_TRANSPORT_DSN=doctrine://default?auto_setup=0
MAILER_DSN=native://default
TYPESENSE_URL=http://typesense:8108
TYPESENSE_KEY=xyz
BOOK_FOLDER_NAMING_FORMAT="{authorFirst}/{author}/{title}/{serie}"
BOOK_FILE_NAMING_FORMAT="{serie}-{serieIndex}-{title}"
KOBO_PROXY_USE_DEV=0
KOBO_PROXY_USE_EVERYWHERE=0
KOBO_PROXY_ENABLED=1
```

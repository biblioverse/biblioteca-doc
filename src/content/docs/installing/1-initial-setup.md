---
title: Initial Setup
---


dc exec biblioteca bin/console doctrine:migration:migrate 

dc exec biblioteca bin/console app:create-admin-user

dc exec biblioteca bin/console typesense:create    
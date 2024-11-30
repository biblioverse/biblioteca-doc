---
title: Themes
---

Biblioteca is configured to be easily themeable.

By default all the template in the `templates` directory are used.

If you create a new theme, 

1. Add your theme in the user form in `src/Form/ProfileType.php`:
   ```php
            ->add('theme', ChoiceType::class, [
                'label' => 'Theme',
                'choices' => [
                    'Default' => 'default',
                    'Dark' => 'dark',
                    'Cool Theme' => 'cool',
                ],
            ])
    ```
2. You can overwrite all the original templates by adding a file with the same structure under your theme directory:
    
    In `templates/themes/<your theme>/<original_folder>/<original_template_name>` you can rewrite the template with your theme markup

    Every time a template is called, it will first check if the template exists in the theme's folder or fall back to the original one

3. Update the CSS asset as necessary.
4. Don't forget to change your theme in the user settings to test it
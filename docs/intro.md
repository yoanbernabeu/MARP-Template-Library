---
sidebar_position: 1
---

# How to use Themes

## The easy way (with VS Code)

The easiest and fastest solution is to use the [Marp for VS Code](https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode) extension.

1. Find your theme in our library ([Dracula](themes/dracula) for example).
2. Copy the url of the CSS file.
3. Add a `.vscode/settings.json` file in your project.
4. Add the following line in your `.vscode/settings.json` file (replace the `Dracula url` with your theme url):

```json
{
    "markdown.marp.themes": [
        "https://raw.githubusercontent.com/dracula/marp/master/dracula/dracula.css"
    ]
}
```
5. Play with your theme.

## The hard way (with Marp CLI)

This solution does not require the use of VS Code, you must have the [Marp CLI](https://github.com/marp-team/marp-cli) on your workstation.

1. Find your theme in our library ([Dracula](themes/dracula) for example).
2. Download the css file from the url of the theme in your project directory.
3. Run the following command in your project directory (replace `dracula.css` with css theme file name):

```bash
# Export in HTML
marp --theme ./dracula.css ./your-slides.md -o your-slides.html

# Export in PDF
marp --theme ./dracula.css ./your-slides.md -o your-slides.pdf
```
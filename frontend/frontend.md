# Frontend

- Write a line why we need a different folder for the frontend. This is cause of the API moudle we chose: The frontend is decoupled from the Dhango backend and interact with it through the API.
- In the first step we will have a self-containerd JS Pong. It will be possible for a player accessing the website to play with another player on the same keyboard.

- Remember mobile first

## CSS and Bootstrap

- Write a line about the way we import it

# Development Helping Tools

## Formatter: Prettier

Prettier is an opinionated code formatter that supports multiple languages. It automatically enforces a consistent style by reformatting your code each time you save a file or run the formatter.

## Linter: ESLint

ESLint is a static code analysis tool for JavaScript and TypeScript. It is highly configurable and supports a wide range of plugins and custom rules.

## Development Server: live-server

live-server is a simple development server with live reloading capability. It can be easily integrated into your Node.js-based projects.

### Installation and Usage

#### Global Installation

Install live-server globally:

```bash
npm install -g live-server
```

Run live-server from your project directory:

```bash
live-server
```

#### Local Installation

Install live-server locally:

```bash
npm install live-server --save-dev
```

Add a script to your `package.json`:

```json
{
  "scripts": {
    "start": "live-server"
  }
}
```

Run live-server using npm:

```bash
npm start
```

### Benefits

- **Live Reloading**: Automatically reloads the browser on file changes.
- **Easy Setup**: Quick and minimal configuration required.
- **IDE-Agnostic**: Can be used with any text editor or IDE.

### Alternative

Without a development server, you would need to manually launch the HTML file in your browser and refresh it each time you make changes. This can be cumbersome and slow down your workflow.

## Summary

Using tools like Prettier, ESLint, and live-server can greatly improve your development experience by ensuring consistent code style, maintaining code quality, and providing a more efficient workflow with live reloading. While not absolutely necessary, these tools can make the development process smoother and more enjoyable.

```

You can copy and paste this Markdown into your project's documentation or share it with your team to explain the benefits and usage of these development helping tools.
```

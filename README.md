
<h1>Boilerplate Vite Twig</h1>

<p>Boilerplate with Twig / Tailwind / SCSS / jQuery / React (can includes)</p>

# Run

  ```
    npm install
  ```

  ```
    npm run dev / yarn dev
  ```

  ```
    npm run build / yarn build
  ```

# Notes

- This boilerplate is designed for rapid prototyping with Twig templates and modern frontend tools.
- If you are using React, ensure to remove `type="module" crossorigin` from script tags and replace it with `async` or `defer` for compatibility.
- After building the project, you can preview the output by navigating to the `dist` folder and running the command:
  ```
  http-server
  ```
  This will start a local server to serve the built files.

# Troubleshooting

  - If you encounter issues with dependencies, try deleting `node_modules` and reinstalling them:
    ```
    rm -rf node_modules
    npm install
    ```
  - Ensure you are using a compatible version of Node.js as specified in the project's `package.json` (if applicable).

# Contribution

  - Feel free to fork this repository and submit pull requests for improvements or bug fixes.
  - Follow the existing code style and structure for consistency.

# Author

  ```
    Zendy
  ```

# Node.js Starter with Express and TypeORM

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

This repository provides a starting point for Node.js projects using Express and TypeORM. It allows you to quickly kickstart a project by providing a basic structure with the necessary dependencies.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

1. Fork this repository by clicking the "Fork" button on the top right corner of this page.
2. Clone your forked repository to your local machine:

```
git clone https://github.com/YOUR_USERNAME/repository-name.git
```

Navigate to the cloned directory:

```
cd repository-name
```

Install the project dependencies:

```
npm install
```

Rename the .env.example file to .env and update the environment variables as needed.

Start the development server:

```
npm run dev
```

This will start the development server using nodemon, allowing you to make changes to the source code and see the updates automatically.

## Project Structure

The basic structure of this project follows this pattern:

```
.
├── src/
│ ├── controllers/
│ ├── entities/
│ ├── interfaces/
│ ├── middlewares/
│ ├── migrations/
│ ├── routes/
│ ├── schemas/
│ ├── services/
│ ├── app.ts
│ ├── data-source.ts
│ ├── error.ts
│ └── server.ts
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

<span style="background-color: #1082C2; color: white; padding: 1px 5px; border-radius: 5px;">**src/controllers**</span> directory contains the application controllers.<br>
<span style="background-color: #1082C2; color: white; padding: 1px 5px; border-radius: 5px;">**src/entities**</span> directory contains the TypeORM entities.<br>
<span style="background-color: #1082C2; color: white; padding: 1px 5px; border-radius: 5px;">**src/interfaces**</span> directory contains the interfaces used in the project.<br>
<span style="background-color: #1082C2; color: white; padding: 1px 5px; border-radius: 5px;">**src/middlewares**</span> directory contains the Express middlewares.<br>
<span style="background-color: #1082C2; color: white; padding: 1px 5px; border-radius: 5px;">**src/migrations**</span> directory contains the TypeORM migrations.<br>
<span style="background-color: #1082C2; color: white; padding: 1px 5px; border-radius: 5px;">**src/routes**</span> directory contains the API route definitions.<br>
<span style="background-color: #1082C2; color: white; padding: 1px 5px; border-radius: 5px;">**src/schemas**</span> directory contains the Zod schemas (if applicable).<br>
<span style="background-color: #1082C2; color: white; padding: 1px 5px; border-radius: 5px;">**src/services**</span> directory contains the business logic services.<br>
<span style="background-color: #1082C2; color: white; padding: 1px 5px; border-radius: 5px;">**src/app.ts**</span> file is responsible for configuring the Express application.<br>
<span style="background-color: #1082C2; color: white; padding: 1px 5px; border-radius: 5px;">**src/data-source.ts**</span> file contains the database connection setup.<br>
<span style="background-color: #1082C2; color: white; padding: 1px 5px; border-radius: 5px;">**src/error.ts**</span> file defines custom error classes.<br>
<span style="background-color: #1082C2; color: white; padding: 1px 5px; border-radius: 5px;">**src/server.ts**</span> file starts the Express server.<br>

Feel free to modify the structure or add additional directories as per your project's requirements.<br>

## Contributing

If you want to contribute to this project, feel free to fork this repository and submit your changes via pull requests. I'll be glad to review and merge your contributions.

## License

This project is licensed under the MIT License.

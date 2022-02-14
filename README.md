# Feed Me App

Feed Me App is a website created with the purpose of gathering data regarding peoples' habits on feeding ducks.
All the data is publicly available and it is going to be used by Duckann Flybird, a famous scientist.

The web application offers the users a form to be filled with information, the past information submitted and saved in the database, and an option to download the data in a .CSV file.

## Clone the repository

First of all, you should clone this repository as follows:

```bash
git clone https://github.com/Dartangnan/duck-feeding-app.git
```

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install the packages.

```bash
npm install concurrently --save
npm run install-all
```

After cloning the repository, enter the new folder and install the NPM packages. It might take a while to install.

## Usage

In order to run the application locally, a .env file needs to be created with the following parameters:

```bash
    DB_KEY=
    DB_USERNAME=
    DB_NAME=
```

After the .env file is created run, the following:

```bash
    npm run all
```

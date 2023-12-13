# Card Project

The Card project is an aesthetic OnePage developed in ReactJS with TypeScript, designed to offer a smooth and pleasant online experience fully responsive. The main goal of this project is to provide a modern and customizable website template for clients. Inspired by the concept of card.pm, a platform offering online cards for its users, this template allows clients to present their information in an elegant and compelling manner.

The OnePage website is easily customizable using props in ReactJS, which allows for easy modification of content, colors, and layouts to suit the needs and preferences of each client. With a strong TypeScript foundation, the project also offers increased robustness and maintainability, making it easier to evolve in the future.

Whether it's for a personal portfolio, a project presentation, or any other use, this Card provides an elegant, modern, and responsive solution to showcase information and captivate visitors.

<p align="center" width="100%">
<img width="33%" src="https://github.com/MarthL/cardma/blob/master/frontend/public/demo.png?raw=true" />
</p>

## Table of Contents

- [About the project](#about-the-project)
  - [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)

## About the project

### Technologies Used

- ReactJS
- TypeScript

## Installation

To install and run this project locally on your machine, follow these steps:

1. Clone this code repository:

```bash
git clone https://github.com/MarthL/cardma.git
```

2. Install project dependencies:

```bash
npm install
```

3. Launch the project locally:

```bash
npm run start
```

The project will be launched on the default port 3000.


## Customization
This project is designed to be easily customizable. You can adjust the project's settings and content using props. Here are some key files and directories you can explore to customize the project:

src/components: This directory contains reusable components of the project.
src/Organisms/Main.tsx: The main file of the application where you can modify the overall layout and structure. To do this, simply adjust the props.

All the Links are fully customizable, you can easily use the component 'LinkCustom' in order to generate your own links and generate your own icons. icon props is linked to Material-icons and take as parameter the name of the icon you want with a url to specify.

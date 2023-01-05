# Front-End Development Guide

This guide is intended for beginners who have no prior experience in front-end development.

### Contents

- [Install NPM](#install-npm)
- [Install Visual Studio Code](#install-visual-studio-code)
- [Install Git](#install-git)
- [Install Github](#install-github)
- [Getting started with Git and GitHub](#getting-started-with-git-and-github)
- [Getting started with React](#getting-started-with-react)
- [Setting up the repository for editing](#setting-up-the-repository-for-editing)
- [Commonly used packages in the repository](#commonly-used-packages-in-the-repository)
  - [Material UI](#material-ui)

## Install NPM
#### What is NPM?
> npm (short for Node Package Manager) is a package manager for JavaScript that comes with Node.js. It allows developers to install and manage packages (libraries, frameworks, and tools) that they can use in their projects. npm is the largest package registry in the world and has thousands of open-source packages available. It is a useful tool for managing dependencies and automating tasks in JavaScript projects.

You can watch this video on Youtube for more information about NPM: [What is NPM, and why do we need it? | Tutorial for beginners](https://www.youtube.com/watch?v=P3aKRdUyr0s)

#### How to install Node.js?
1. Go to the [official Node.js website](https://nodejs.org/) and click on the **"Download"** button.
2. Select the version of Node.js that you want to install and choose the installer for your operating system (Windows, Mac, or Linux).
3. Once the download is complete, open the installer and follow the prompts to complete the installation.
4. After the installation is finished, open a terminal or command prompt and type the following command `node -v` to verify that Node.js is installed. *This command should output the version number of Node.js, indicating that it is installed and working properly.*

## Install Visual Studio Code

If you don't have a source-code editor software then it is recommended to download [Visual Studio Code](https://code.visualstudio.com/).

#### What is Visual Studio Code?
> Visual Studio Code is a free, open-source code editor developed by Microsoft. It is available for Windows, Mac, and Linux, and it is widely used by developers for writing and debugging code. Visual Studio Code features a lightweight, yet powerful, interface that includes syntax highlighting, code completion, and debugging tools. It also offers a wide range of extensions that allow users to customize the editor and add new features. Visual Studio Code is highly customizable and extensible, making it a popular choice for developers of all levels.

After installing the software, you can install extensions. [Guide on How To Install Visual Studio Code Extensions](https://code.visualstudio.com/learn/get-started/extensions) 

#### Recommended list of VS Code extensions:
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) | [Guide](https://www.youtube.com/watch?v=__eiQumLOEo)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) | [Example](https://res.cloudinary.com/practicaldev/image/fetch/s--Ens2WoU2--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://glebbahmutov.com/blog/images/prettier/projectB.gif)
- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag) | [Example](https://raw.githubusercontent.com/formulahendry/vscode-auto-close-tag/492b13866690b3ef54518d8c0ca99754556f78c6/images/usage.gif)
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag) | [Example](https://res.cloudinary.com/practicaldev/image/fetch/s--btV6ZCG6--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://github.com/formulahendry/vscode-auto-rename-tag/raw/HEAD/images/usage.gif)
- [Highlight Matching Tag](https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag) | [Example](https://res.cloudinary.com/practicaldev/image/fetch/s--VsUN0Z0w--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://images2.imgbox.com/71/2a/zIA1XCzK_o.gif)
- [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) | [Example](https://www.youtube.com/watch?v=1tBHgCHyi8A)

There are many more useful extensions available at the [Extension Marketplace](https://code.visualstudio.com/docs/editor/extension-marketplace).

## Install Git

#### What is Git?
> Git is a version control system that tracks changes to files and is commonly used in software development. It allows developers to view the history of changes, revert back to previous versions, and collaborate with others by merging changes. Git is widely used and is an essential tool for developers.

#### How to install Git?
- [Official Git Documentation](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- Youtube: [Git Tutorial 3: How To Install Git](https://www.youtube.com/watch?v=ON5GAXubt_4)

## Install Github

#### What is GitHub?
> GitHub is a web-based platform for hosting and collaborating on software projects. It uses the Git version control system to track changes to code, and it allows multiple developers to work on the same codebase simultaneously. GitHub offers a range of features, such as repositories, issues, pull requests, and wikis, to help developers manage and collaborate on their projects. It is widely used by developers and is free to use for open source projects, with paid plans available for private repositories and other advanced features.

#### How to install Github?
- [Official GitHub Documentation](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/installing-and-authenticating-to-github-desktop/installing-github-desktop)
- Youtube: [How To Install GitHub Desktop For Windows](https://www.youtube.com/watch?v=qtxWg3kOnd0) | [Install GitHub Desktop on a Mac](https://www.youtube.com/watch?v=C0n6O4d0ccw)

## Getting started with Git and GitHub

#### How to use Git and GitHub?
- Youtube: [Git, GitHub, & GitHub Desktop for beginners](https://www.youtube.com/watch?v=8Dd7KRpKeaE)

## Getting started with React

The repository uses [React](https://reactjs.org/) for its development.

#### What is React?
>React is a JavaScript library used for building user interfaces, particularly for single-page applications. It was developed by Facebook and is often used for building mobile applications as well. React allows developers to create reusable components, which are pieces of code representing parts of a user interface, and it utilizes a virtual DOM (Document Object Model) to improve performance. React is known for its flexibility and ease of use, and it has a large developer community.

#### Where to learn about React?
- [Official React documentation](https://reactjs.org/docs/getting-started.html): The official React documentation is a great place to start learning about the library. It includes a tutorial and a reference guide, as well as detailed information about the different features of React.
- [FreeCodeCamp](https://www.freecodecamp.org/): FreeCodeCamp is a non-profit organization that offers a variety of free coding resources, including a course on React. The course includes interactive exercises and video lessons to help you learn the basics of React.
<br/>**Example:** [Learn React JS - Full Course for Beginners - Tutorial 2019](https://www.youtube.com/watch?v=DLX62G4lc44).
- YouTube: There are many YouTube channels that offer tutorials and lessons on React. Some popular options include Traversy Media, The Net Ninja, and LearnCode.academy.
<br/>**Example:** [Learn React In 30 Minutes](https://www.youtube.com/watch?v=hQAHSlTtcmY).
- Full ReactJS Course: [ReactJS Tutorial for Beginners](https://www.youtube.com/playlist?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3).

## Setting up the repository for editing
To set up your local environment, you will need to download or clone the repository from GitHub.

#### How to download or clone a repository from GitHub?
1. Set up an SSH key: [Setting Up SSH Keys for GitHub](https://www.youtube.com/watch?v=8X4u9sca3Io&t=87s) (You don't need to do this if you prefer to download the ZIP file)
2. [How to Code (Download) or Clone Something From GitHub](https://www.youtube.com/watch?v=X5e3xQBeqf8&t=68s)

#### How to start a local environment in Visual Studio Code for editing?
1. Open Visual Studio Code.
2. Click on the `File` menu and select `Open Folder...`.
3. In the dialog that appears, navigate to the folder `weeb3dao-docs` and click `Select Folder`.
4. Click on the `Terminal` menu and select `New Terminal`.
5. Run the command `npm start`.<br/>
This will start the development server and open a new browser window at `http://localhost:3000/`.
6. Make changes to the code in Visual Studio Code and save the file with `Ctrl + S` to see the changes automatically reflected in the browser.

> You can run `yarn start` instead of `npm start` for this repository as the [yarn package](https://www.npmjs.com/package/yarn) has already been installed.

#### What is yarn?
> Yarn is a package manager for Node.js developed by Facebook that offers improved speed and reliability compared to npm. It also includes additional features such as yarn workspaces and yarn resolutions. Yarn is a popular choice among developers for managing dependencies and automating tasks in Node.js projects. You can use the yarn command in place of npm to install packages, run scripts, and perform other tasks in your projects.

## Commonly used packages in the repository
### [Material UI](https://mui.com/)
> Material-UI is a React library for building user interfaces following Google's Material Design guidelines. It provides reusable components and a customizable theme system. It is well-documented and easy to use.
#### Guides for Material UI
- [Add Material UI on your React application | The React UI library | Material UI | React.js](https://www.youtube.com/watch?v=LD4-UTFXtwA)
- [Learn Material UI in One Hour - React Material UI Project Tutorial [2022]](https://www.youtube.com/watch?v=Xoz31I1FuiY)
- Full tutorials for Material UI's components: [React Material UI Tutorial](https://www.youtube.com/playlist?list=PLC3y8-rFHvwh-K9mDlrrcDywl7CeVL2rO)

The majority of the website is built using Material UI's components.

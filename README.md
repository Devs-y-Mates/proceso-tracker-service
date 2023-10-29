<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Devs-y-Mates/proceso-tracker-service">
    <img src="assets/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Match Schedule</h3>

  <p align="center">
    App to organize matches and notify changes
    <br />
    <a href="https://github.com/Devs-y-Mates/proceso-tracker-service"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Devs-y-Mates/proceso-tracker-service">View Demo</a>
    ·
    <a href="https://github.com/Devs-y-Mates/proceso-tracker-service/issues">Report Bug</a>
    ·
    <a href="https://github.com/Devs-y-Mates/proceso-tracker-service/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#code-conduct">Code of Conduct</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


### Built With

* [Nest.js](https://nestjs.org/)
* [Node.js v18.15.0](https://nodejs.org/en) 
* [Typescript](https://www.typescriptlang.org/)
* [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0)


<p align="right">(<a href="#top">back to top</a>)</p>

### Commit and Push Code of Conduct

Welcome to our repository! To maintain clean code and ensure smooth collaborative work, we've established some guidelines for making commits and pushes. Please make sure to follow these recommendations:

1. Small Modification Commits: Try to make commits that address specific and limited modifications. This makes it easier to track changes and review code.
2. Descriptive Commit Messages: Write descriptive but concise commit messages. A good commit message should summarize the purpose of the change. Avoid excessively long messages.
3. Run Local Tests: Our project is set up to run local tests before accepting a commit. Ensure that your code passes the tests and doesn't introduce errors into the existing code.
4. Standard Commit Format: We use the Conventional Commit message format. For more information on this format and how to structure your commit messages, please refer to Conventional Commit.
Example of a conventional commit message:

```
    vbnet

    feat: add new functionality
    fix: fix an issue
    chore: perform maintenance tasks
```
5. Resolve Code Conflicts: Before making a push, make sure your branch is synchronized with the main branch. If there are code conflicts, resolve them before pushing.

Adhering to these commit and push practices contributes to the quality and collaboration in our project. We appreciate your cooperation and commitment to the code of conduct.

Thank you for being part of our team! 😊

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

* node
* npm
* yarn
* docker

### Installation

#### Backend

1. Clone the repo
   ```sh
   git clone https://github.com/Devs-y-Mates/proceso-tracker-service
   ```
2. Install NPM packages
   ```sh
   yarn install
   ```
4. Enter folder `Api` and rename file `.env.example` to `.env`
5. Up api and db in docker
   ```sh
   yarn start:dev
   ```
6. Go to "http://localhost:3000/documentation" to view swagger documentation 


<p align="right">(<a href="#top">back to top</a>)</p>

#### Docker

To set up a MongoDB database and a service in a local container, you can use Docker, which allows you to create and run containers easily. Here are the general steps to achieve this:

1. Start the container for the first time:
   ```sh
   yarn start:dev:clean:solution
   ```
2. Access your service:
After the containers have started successfully, you can access your service via localhost and the port you specified in the configuration file. In the example above, the service will be available at http://localhost:3000/ping.
3. Access the MongoDB database:
ou can access the MongoDB database by running a MongoDB instance in the container and specifying the exposed port. In the example, the MongoDB database will be accessible at mongodb://localhost:27017. You can use a MongoDB administration tool or a client library to connect to the database from your service.


<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png

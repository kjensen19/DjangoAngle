<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<h3 align="center">DjangoAngle</h3>

  <p align="center">
    Todo list with a Django+REST framework and an Angular frontend.
    <br />
    <a href="https://github.com/kjensen19/DjangoAngle"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/kjensen19/DjangoAngle">View Demo</a>
    ·
    <a href="https://github.com/kjensen19/DjangoAngle/issues">Report Bug</a>
    ·
    <a href="https://github.com/kjensen19/DjangoAngle/issues">Request Feature</a>
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
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](todoAngle/DjangoAngleSS.png)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With


* [![Angular][Angular.io]][Angular-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* Django
    * REST framework


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Installation

1. Make sure you have Python (and Node) installed, I prefer to work in a virtual environment:
    Step by step instructions [here](https://medium.com/geekculture/installing-python-3-x-development-environment-on-macos-a64c0141b20c)
2. Clone the repo
   ```sh
   git clone https://github.com/kjensen19/DjangoAngle.git
   ```
3. Install NPM and PIP 
   ```sh
   npm install
   ```
   ```sh
   pip install package
   ```
4. Setup SQL DB (project configured for PostgreSQL) named django_todo
5. Change timezone in settings.py to match your local
6. Setup DB
    ```sh
    $ python manage.py migrate
    ```
7. Start your server
    ```sh
    $ python manage.py runserver 8080
    ```
8. Start Angular
    ```sh
    $ ng serve --port 8081
    ```
9. Visit [localhost:8081](http://localhost:8081/todo)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Basic app is set up to allow the user to create, update, read(see), and delete Tasks. Main page displays a list of all tasks that can be viewed in detail or the individual task can be viewed and modified in a detail page. There is also an Add Todo section which does just that.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Create more than basic Angular styling
- [ ] Implement Priority tags
- [ ] Seperate completed and available tasks and all modification back and forth
    - [ ] Color system for task type/status

See the [open issues](https://github.com/kjensen19/DjangoAngle/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Kyle Jensen - kjensen19@gmail.com

Project Link: [https://github.com/kjensen19/DjangoAngle](https://github.com/kjensen19/DjangoAngle)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/kjensen19/DjangoAngle.svg?style=for-the-badge
[contributors-url]: https://github.com/kjensen19/DjangoAngle/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/kjensen19/DjangoAngle.svg?style=for-the-badge
[forks-url]: https://github.com/kjensen19/DjangoAngle/network/members
[stars-shield]: https://img.shields.io/github/stars/kjensen19/DjangoAngle.svg?style=for-the-badge
[stars-url]: https://github.com/kjensen19/DjangoAngle/stargazers
[issues-shield]: https://img.shields.io/github/issues/kjensen19/DjangoAngle.svg?style=for-the-badge
[issues-url]: https://github.com/kjensen19/DjangoAngle/issues
[license-shield]: https://img.shields.io/github/license/kjensen19/DjangoAngle.svg?style=for-the-badge
[license-url]: https://github.com/kjensen19/DjangoAngle/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/https://www.linkedin.com/in/kyle-jensen-solutions/
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import chellenge images
import horiseon from "../../Assets/images/challenges/1.horiseon.png";
import portfolio from "../../Assets/images/challenges/2.portfolio.png";
import password from "../../Assets/images/challenges/3.password.generator.png";
import quiz from "../../Assets/images/challenges/4.code.quiz.png";
import scheduler from "../../Assets/images/challenges/5.work.day.scheduler.png";
import readme from "../../Assets/images/challenges/9.readme.generator.png";
import profileGen from "../../Assets/images/challenges/10.team.profile.generator.png";
import note from "../../Assets/images/challenges/11.note.taker.png";
import tracker from "../../Assets/images/challenges/12.employee.tracker.png";
import backend from "../../Assets/images/challenges/13.ecommerce.back.end.png";
import techblog from "../../Assets/images/challenges/14.tech.blog.png";
import regex from "../../Assets/images/challenges/17.regex.png";
import social from "../../Assets/images/challenges/18.social.png";
// import group projects
import film from "../../Assets/images/group-projects/1.film.feast.png";
import forum from "../../Assets/images/group-projects/2.the.forum.png";
import zoo from "../../Assets/images/group-projects/3.bootcamp.zoo";
// import module images
import runBuddy from "../../Assets/images/modules/1.2.run.buddy.png";
import robot from "../../Assets/images/modules/3.robot.gladiators.png";
import task from "../../Assets/images/modules/4.taskinator.png";
import proTask from "../../Assets/images/modules/5.taskmaster.pro.png";
import gitDone from "../../Assets/images/modules/6.git.it.done.png";
import portGen from "../../Assets/images/modules/9.portfolio.generator.png";
import anotherRPG from "../../Assets/images/modules/10.jest.another.rpg.png";
import zookeepr from "../../Assets/images/modules/11.zookeepr.png";
import develop from "../../Assets/images/modules/12.u.develop.it.png";
import techNews from "../../Assets/images/modules/13.14.just.tech.news.png";
import pizza from "../../Assets/images/modules/18.pizza.hunt.png";
import foodFest from "../../Assets/images/modules/19.food.festival.png";
import photoPort from "../../Assets/images/modules/20.photo.port.png";
import thoughts from "../../Assets/images/modules/21.deep.thoughts.png";

function Projects() {
    return (
        <Container fluid className="project-section">
            <Container>
                <h1 className="project-heading">
                    My <strong className="blue">Work </strong>
                </h1>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
{/* challenge section */}
                    <p className="project-heading-2">
                        Bootcamp assignments and group projects
                    </p>

                    <Col md={3} className="project-card">
                        <ProjectCard
                            imgPath={horiseon}
                            title="Horiseon"
                            description="Edited cloned code to follow accessibility standards and other requirements."
                            link="https://github.com/debleehall/horiseon"
                        />
                    </Col>
                    <Col md={3} className="project-card">
                        <ProjectCard
                            imgPath={portfolio}
                            title="Portfolio"
                            description="My first portfolio built with HTML and CSS."
                            link="https://github.com/debleehall/portfolio"
                        />
                    </Col>
                    <Col md={3} className="project-card">
                        <ProjectCard
                            imgPath={password}
                            title="Password Generator"
                            description="An application built with JavaScript to generate passwords."
                            link="https://github.com/debleehall/password-generator"
                        />
                    </Col>
                    <Col md={3} className="project-card">
                        <ProjectCard
                            imgPath={quiz}
                            title="Code Quiz"
                            description="A website that quizes you on code knowlege and hkeeps track of high scores."
                            link="https://github.com/debleehall/code-quiz"
                        />
                    </Col>
                    <Col md={3} className="project-card">
                        <ProjectCard
                            imgPath={scheduler}
                            title="Work Day Scheduler"
                            description="A website that helps keep track of daily tasks."
                            link="https://github.com/debleehall/work-day-scheduler"
                        />
                    </Col>
                    <Col md={3} className="project-card">
                        <ProjectCard
                            imgPath={readme}
                            title="README.md Generator"
                            description="An application created to generate a professional README based on a series of questions the user answers in their command line."
                            link="https://github.com/debleehall/readme-generator"
                        />
                    </Col>
                    <Col md={3} className="project-card">
                        <ProjectCard
                            imgPath={profileGen}
                            title="Team Profile Generator"
                            description="The application creates a team profile based on what the user inputd using thr Inquirer module from Node.js and displays the information on a newly created html page."
                            link="https://github.com/debleehall/team-profile-generator"
                        />
                    </Col>
                    <Col md={3} className="project-card">
                        <ProjectCard
                            imgPath={note}
                            title="Note Taker"
                            description="A command-line application that manages a company's employee database, using Node.js, Inquirer, and MySQL."
                            link="https://github.com/debleehall/note-taker"
                        />
                    </Col>
                    <Col md={3} className="project-card">
                        <ProjectCard
                            imgPath={tracker}
                            title="Employee Tracker"
                            description="An application that allows the user to write and save notes. The app uses an Express.js back end and is able to save and retrieve note data from a JSON file."
                            link="https://github.com/debleehall/sql-employee-tracker"
                        />
                    </Col>
                    <Col md={3} className="project-card">
                        <ProjectCard
                            imgPath={backend}
                            title="E-Commerce Backend"
                            description="This app is the backend portion of an E-Commerce website. The app is run with express and also uses MySQL and Sequelize. The SQL database includes tables for products, categories, tags, and product tags. API routes are used to make requests and updates from the database which are joined through Sequelize queries."
                            link="https://github.com/debleehall/e-commerce-back-end"
                        />
                    </Col>
                    <Col md={3} className="project-card">
                        <ProjectCard
                            imgPath={techblog}
                            title="Tech Blog"
                            description="A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. The app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication."
                            link="https://github.com/debleehall/tech-blog"
                        />
                    </Col>
                    <Col md={3} className="project-card">
                        <ProjectCard
                            imgPath={regex}
                            title="Regex Tutorial"
                            description="A regex tutorial."
                            link="https://github.com/debleehall/regex-tutorial"
                        />
                    </Col>
                    <Col md={3} className="project-card">
                        <ProjectCard
                            imgPath={social}
                            title="Social Network Api"
                            description="This is the back-end for a social network web application. Users will be able to share their thoughts, react to friends' thoughts, and create a friend list."
                            link="https://github.com/debleehall/social-network-api"
                        />
                    </Col>
                    <Col md={3} className="project-card">
                        <ProjectCard
                            imgPath={film}
                            title="Group Project 1: Film Feast"
                            description="An api-based web application that generates a suggestion for a movie paired with a dinner."
                            link="https://github.com/gthawkins24/film-feast"
                        />
                    </Col>
                    <Col md={3} className="project-card">
                        <ProjectCard
                            imgPath={forum}
                            title="Group Project 2: The Forum"
                            description="Our web application for The Forum is an interactive, full-stack application that accepts user input and features encryption for user passwords. Our goal is to provide people with a comfortable place to discuss the topics that they are most interested in."
                            link="https://github.com/cmrotruck/the-forum"
                        />
                    </Col>
                    <Col md={3} className="project-card">
                        <ProjectCard
                            imgPath={zoo}
                            title="Group Project 3: Bootcamp Zoo"
                            description="The bootcamp zoo is web application dedicated to animal habits and conservation efforts. We made this because we want to promote animal welfare and affect change."
                            link="https://github.com/cmrotruck/bootcamp-zoo"
                        />
                    </Col>

{/* modules section */}
                    <p className="project-heading-2">
                        Projects I made while following bootcamp lessons.
                    </p>
                    <Col md={3} className="project-card">
                        <ProjectCard
                            imgPath={runBuddy}
                            title="Run Buddy"
                            description="A website that offers fitness training services."
                            link="https://github.com/debleehall/run-buddy"
                        />
                    </Col>

                    <Col md={3} className="project-card">
                        <ProjectCard
                            imgPath={robot}
                            title="Robot Gladiators"
                            description="A site with promts that allow you to have a robot fight."
                            link="https://github.com/debleehall/robot-gladiators"
                        />
                    </Col>

                    <Col md={3} className="project-card">
                        <ProjectCard
                            imgPath={task}
                            title="Taskinator"
                            description="A task-tracker application. Application allows you to create tasks by entering a task name, selecting a type, and clicking an 'Add Task' button. Then you'll be able to organize them into Tasks To Do, Tasks In Progress, and Tasks Completed lists by using the dropdown to change the task status."
                            link="https://github.com/debleehall/taskinator"
                        />
                    </Col>

                    <Col md={3} className="project-card">
                        <ProjectCard
                            imgPath={proTask}
                            title="Taskmaster Pro"
                            description="A task-tracker application."
                            link="https://github.com/debleehall/taskmaster-pro"
                        />
                    </Col>

                    <Col md={3} className="project-card">
                        <ProjectCard
                            imgPath={gitDone}
                            title="Get it Done"
                            description="A web app that will search GitHub for open source projects with open issues and pull requests."
                            link="https://github.com/debleehall/git-it-done"
                        />
                    </Col>

                    <Col md={3} className="project-card">
                        <ProjectCard
                            imgPath={portGen}
                            title="Portfolio Generator"
                            description="A Node.js application that accepts arguments from the command line in order to create an HTML portfolio page."
                            link="https://github.com/debleehall/portfolio-generator"
                        />
                    </Col>
                    <Col md={3} className="project-card">
                        <ProjectCard
                            imgPath={anotherRPG}
                            title="Jest Another RPG"
                            description="A command-line role-playing game (RPG) in which a user battles against a series of enemies whose health and stats can be sustained by a potion."
                            link="https://github.com/debleehall/jest-another-RPG"
                        />
                    </Col>
                    <Col md={3} className="project-card">
                        <ProjectCard
                            imgPath={zookeepr}
                            title="Zookeepr"
                            description="An online catalog for a local zoo."
                            link="https://github.com/debleehall/zookeepr"
                        />
                    </Col>
                    <Col md={3} className="project-card">
                        <ProjectCard
                            imgPath={develop}
                            title="U Develop It"
                            description="This is the back-end of a voting app."
                            link="https://github.com/debleehall/u-develop-it"
                        />
                    </Col>
                    <Col md={3} className="project-card">
                        <ProjectCard
                            imgPath={techNews}
                            title="Just Tech News"
                            description="A practice website like Haker News(https://news.ycombinator.com/). Users posts an article from another source and other users vote or comment on the post."
                            link="https://github.com/debleehall/just-tech-news"
                        />
                    </Col>
                    <Col md={3} className="project-card">
                        <ProjectCard
                            imgPath={pizza}
                            title="Pizza Hunt"
                            description="Users can share and discuss their dream pizza-topping combinations."
                            link="https://github.com/debleehall/pizza-hunt"
                        />
                    </Col>
                    <Col md={3} className="project-card">
                        <ProjectCard
                            imgPath={foodFest}
                            title="Food Festival"
                            description="An app that allows you to view upcoming food events."
                            link="https://github.com/debleehall/food-festival"
                        />
                    </Col>
                    <Col md={3} className="project-card">
                        <ProjectCard
                            imgPath={photoPort}
                            title="Photo Portfolio"
                            description="A React application portfolio for a photographer."
                            link="https://github.com/debleehall/photo-port"
                        />
                    </Col>
                    <Col md={3} className="project-card">
                        <ProjectCard
                            imgPath={thoughts}
                            title="Deep Thoughts"
                            description="A social media application where users can create an account, post their thoughts for others to see, and interact with other users through these thoughts."
                            link="https://github.com/debleehall/deep-thoughts"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;

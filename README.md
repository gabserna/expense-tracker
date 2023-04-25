**React Project**
We’ve made it! We’ve covered as much of React as is possible within the time we had together *sniff*. Now it’s your turn to apply the knowledge you’ve gained to your own project. We have one week to work on the project, then the week after will be polish & presentation. You can do the project alone, but it’s encouraged to partner up & utilize the collaboration to work on separate parts of it using git

# The technical expectations of this project are as follows:
* Demonstrate proficiency in all common React Hooks
* Create multiple purposeful functional components, both stateless and stateful
* Usage of React Context & Reducers to maintain complex state data throughout the app
* Multiple separate pages using React Router and a navigation system to go between them
* Usage of a component library

There are two project ideas I’ll talk about: an image gallery and an expense tracker. The third option is to choose your own project, and I’ll be going over some ideas & APIs you could use to gain inspiration for one. You’re expected to have a project chosen by the end of today, so brainstorm with me!

**Project Idea 2: Expense/Budget tracker**
Build an expense tracker! This app allows the user to increase and decrease their balance by adding transactions, which are a name and an amount. These transactions are then saved and used to calculate a total balance, as well as income/expense numbers. For this project you can useContext & useReducer’s to simplify the data flow. Bonus points for saving & restoring the transactions to the users localStorage.


**Project Idea 2: Expense/Budget tracker**
* crea una aplicación en React para llevar un registro de gastos y presupuesto. Esta aplicación debe permitirle al usuario aumentar y disminuir su saldo agregando transacciones: nombre y cantidad. Estas transacciones deben guardarse y utilizarse para calcular un saldo total, así como ingresos y gastos.

* Para implementar esta funcionalidad, utilizar todos los react hooks mas comunes, tambien usar useContext y useReducer para simplificar el flujo de datos. tambien debe usar múltiples componentes funcionales algunos sin estado y otros con estado.

* También debe contar con varias páginas separadas y un sistema de navegación con React Router. Además, debe poder guardar y restaurar las transacciones en el almacenamiento local del usuario y darle estilo con Bootstrap.

# React Bootstrap
https://react-bootstrap.github.io/components/

npm install react-router-dom@6
npm install bootstrap
npm install react-bootstrap bootstrap

# to deploy in github pages:
1- npm install gh-pages --save-dev
2- npm run build
3- npm run deploy
4- don't gorget to push all commits
after all changes repeat steps: 2, 3 & 4.

make sure to add to package.json:
{
  "name": "expense-tracker",
  "homepage": "https://gabserna.github.io/expense-tracker",
  },
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }



Presentation
I decided to work with the **Expense Tracker App**, because it seemed more visually abstract and I thought was more possible for me to achieve.

1. Project overview
# The goal of the app:
the user should be able to add expenses amounts, and see the currect balance to manage his/her finances under control

# A demo of the app

2. Individual learning.
- Explanation and walkthrough of the source code you worked on and how it relates to the UI. 

# Q: What was my biggest coding hurdle?
- A: I got a lot of pitfalls, I think the biggest challenge was being able to understand correctly the react concepts learned, I had to read a lot of documentation and watch many video tutorials that some did not work for me and many others real good ones with an Indian accent, those guys are amazing!.

# Q: What was your biggest coding accomplishment?
- A: linking the different components and make it work together as one, red screen errors was a nightmare all the time, it was very frustrating that having a single error does not let the app work (or even shows something).


- I also used Prettier extension to make it more readable, and added comments to remember the steps I followed.

- Finally getting a second pair of eyes of Saia helped me to overlook my code and guide me to finish the delete button and all I need to add was the missing style using react-boostrap and ***all done***!!


# My experience with React and GitHub. For each, mentioned whether or not you liked it and why.
It was very confusing in the beginning but as I learned how it works it was easy to implement and to upload and deploy 


# Your experience working on your own. How did you like it and why?
I think doing this by my own was interesting, some days I was very strict with the time spent conding and solving errors, sleeping late night but so satisfied when things were working


# If you had the choice to start the project all over, what would you do differently?

# Q: What could I have done better?
- A: I started working in the style, I think I could leave that for the end, before I feel the pressure of dateline, I can code it a bit more simplified and more visual
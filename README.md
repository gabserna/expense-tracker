**React Project**
We’ve made it! We’ve covered as much of React as is possible within the time we had together *sniff*. Now it’s your turn to apply the knowledge you’ve gained to your own project. We have one week to work on the project, then the week after will be polish & presentation. You can do the project alone, but it’s encouraged to partner up & utilize the collaboration to work on separate parts of it using git

# The technical expectations of this project are as follows:
* Demonstrate proficiency in all common React Hooks
* Create multiple purposeful functional components, both stateless and stateful
* Usage of React Context & Reducers to maintain complex state data throughout the app
* Multiple separate pages using React Router and a navigation system to go between them
* Usage of a component library  **what this means??** (boostrap?)

There are two project ideas I’ll talk about: an image gallery and an expense tracker. The third option is to choose your own project, and I’ll be going over some ideas & APIs you could use to gain inspiration for one. You’re expected to have a project chosen by the end of today, so brainstorm with me!

**Project Idea 2: Expense/Budget tracker**
Build an expense tracker! This app allows the user to increase and decrease their balance by adding transactions, which are a name and an amount. These transactions are then saved and used to calculate a total balance, as well as income/expense numbers. For this project you can useContext & useReducer’s to simplify the data flow. Bonus points for saving & restoring the transactions to the users localStorage.





**Project Idea 2: Expense/Budget tracker**
* crea una aplicación en React para llevar un registro de gastos y presupuesto. Esta aplicación debe permitirle al usuario aumentar y disminuir su saldo agregando transacciones: nombre y cantidad. Estas transacciones deben guardarse y utilizarse para calcular un saldo total, así como ingresos y gastos.

* Para implementar esta funcionalidad, utilizar todos los react hooks mas comunes, tambien usar useContext y useReducer para simplificar el flujo de datos. tambien debe usar múltiples componentes funcionales algunos sin estado y otros con estado.

* También debe contar con varias páginas separadas y un sistema de navegación con React Router. Además, **debe poder guardar y restaurar las transacciones en el almacenamiento local del usuario** y darle estilo con Bootstrap.

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
  },



Presentation
I decided to work with the **Expense Tracker App**, because it seemed more visually abstract and I thought was more possible for me to achieve.

# Q: What challenges did I face?
- A: I think the biggest challenge was being able to understand the concepts of hooks and props, I had to read documentation and watch many video tutorials that some did not work and many others real good ones had an Indian accent.

# Q: What was the most difficult part of the project?
- A: linking the different components so that they can work together, without errors, it was very frustrating that having a single error does not let the app work (or shows something), also using context and reduce is not 100% clear yet in my mind, but enough to not having so many errors.

# Q: What could I have done better?
- A: Maybe my code can be simplified, use less components or make it more attractive, I think that with practice I will be able to learn more

- I also used Prettier extension to make it more readable, and added comments to remember the steps I followed.

Saia helped me to overlook my code and guide me to finish the delete button and all I need to add was the missing style using react-boostrap and ***all done***!!
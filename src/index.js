import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ulContainer = document.querySelector('ul');
const form = document.querySelector("form");
const input = document.querySelector("form > input");

const todos = [
    {text: "Aller faire les courses", done: false }, 
    {text: "Aller faire les resultats cliniques", done: true }, 
]

form.addEventListener('submit', (event) => {
    event.preventDefault(); // on arrete le rechargement de la page
    const todoText = input.value; // je recupère le texte dans la zone de saisie du input
    input.value = ''; // on réinitialise la zone de saisie en la vidant

    const newTodo = {text: todoText, done:false}; // on creer une tache
    todos.push(newTodo); // on ajoute cette nouvelle tache dans la liste des taches todo
    displayTodos();
})

// fonction flechee qui va creer et remplir une balise <li>
const createTodoElement = (todo) => {
    const li = document.createElement('li');
    li.classList.add("d-flex", "align-items-start")
    li.innerHTML = `
        <span class="todo ${todo.done ? 'done' : ''}"></span>
        <p class="w-100">${todo.text}</p>
        <button class="btn btn-primary mx-2">Editer</button>
        <button class="btn btn-danger mx-2">Supprimer</button>
    `

    return li;
}

// fonction flechee qui va afficher la liste des taches, map renvoir un array filter renvoie un array reduce renvoie une valeur
const displayTodos = () => {
    const todosNode = todos.map((todo, index) => {
        return createTodoElement(todo)
    })

    ulContainer.innerHTML = ''
    ulContainer.append(...todosNode)
}

displayTodos();
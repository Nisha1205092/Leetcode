const questionListElement = document.getElementById('question-list');
const baseUrl = 'http://localhost:3000';

const fetchQuestions = async () => {
    try {
        const response = await fetch(`${baseUrl}/questions`);
        const data = await response.json();
        data.forEach(question => {
            const liElement = document.createElement('li');
            liElement.innerHTML = `
                <h3>${question.title}</h3>
                <p>${question.description}</p>
            `;
            questionListElement.appendChild(liElement);
        });
    } catch (error) {
        console.error(error);
    }
};

fetchQuestions();

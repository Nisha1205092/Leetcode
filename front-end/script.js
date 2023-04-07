const baseUrl = 'http://localhost:3000';
const signup = async () => {
    var email = document.getElementById("emailField").value;
    var password = document.getElementById("passwordField").value;
    
    // alert("Signup button clicked! Email: " + email + ", Password: " + password);
    
    // Make a POST request to your Express.js back-end
    try {
        const response = await fetch(`${baseUrl}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        // Handle the response from the back-end
        if (data.success) {
            alert('Signup successful!');
            // Redirect to another page or perform additional actions
        }
    } catch (error) {
        console.error('Error:', error);
        // Handle any errors that occur during the request
    }
}

const login = async () => {
    var email = document.getElementById("emailField").value;
    var password = document.getElementById("passwordField").value;
    // alert("Login button clicked! Email: " + email + ", Password: " + password);
    // Add your login logic here
    
    // Make a POST request to your Express.js back-end
    try {
        const response = await fetch(`${baseUrl}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        // Handle the response from the back-end
        if (data.success) {
            alert('Login successful!');
            // Redirect to another page or perform additional actions
        }
    } catch (error) {
        console.error('Error:', error);
        // Handle any errors that occur during the request
    }
}
import "./authentication.styles.scss";

const Authentication = () => {
    const baseUrl = 'http://localhost:3003';
    const signup = async () => {
        var name = document.getElementById("nameSignup").value;
        var email = document.getElementById("emailSignup").value;
        var password = document.getElementById("passwordSignup").value;

        if (name.trim() === '') {
            alert('Name must be provided');
            return;
        }
        if (email.trim() === '') {
            alert('Email must be provided');
            return;
        }
        if (password.trim() === '') {
            alert('Password must be provided');
            return;
        }
        // alert("Signup button clicked! Email: " + email + ", Password: " + password);

        // Make a POST request to your Express.js back-end
        try {
            const response = await fetch(`${baseUrl}/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            });

            const data = await response.json();

            // Handle the response from the back-end
            if (data.success) {
                alert('Signup successful! Login now!');
                // Reset input fields
                document.getElementById("nameSignup").value = "";
                document.getElementById("emailSignup").value = "";
                document.getElementById("passwordSignup").value = "";
            } else if (data.error === 'UserAlreadyExists') {
                alert('User email already exists');
            } else if (data.error === 'FailedToHashPassword') {
                alert('Failed to hash password');
            }

        } catch (error) {
            alert('some error occurred');
            // Handle any errors that occur during the request
        }
    }

    const login = async () => {
        var email = document.getElementById("emailLogin").value;
        var password = document.getElementById("passwordLogin").value;
        // alert("Login button clicked! Email: " + email + ", Password: " + password);
        // Add your login logic here
        if (email.trim() === '') {
            alert('Email must be provided');
            return;
        }
        if (password.trim() === '') {
            alert('Password must be provided');
            return;
        }
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
                // Reset input fields
                document.getElementById("emailLogin").value = "";
                document.getElementById("passwordLogin").value = "";
            } else if (data.error === 'wrongPassword') {
                alert('Wrong password');
            } else if (data.error === 'wrongEmail') {
                alert('Wrong email');
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle any errors that occur during the request
        }
    }

    return (
        <>
            <div className="container">
                <h2>Login</h2>
                <form id="loginForm">
                    <input type="email" id="emailLogin" placeholder="Email" required />
                    <input type="password" id="passwordLogin" placeholder="Password" required />
                    {/* <input type="submit" value="Login" onclick="login()"> */}
                    <div className="buttons">
                        <button type="button" onClick={login}>Login</button>
                    </div>
                </form>
                <h2>Sign Up</h2>
                <form id="signupForm">
                    <input type="text" id="nameSignup" placeholder="Name" required />
                    <input type="email" id="emailSignup" placeholder="Email" required />
                    <input type="password" id="passwordSignup" placeholder="Password" required />
                    {/* <input type="submit" value="Sign Up" onclick="signup()"> */}
                    <div className="buttons">
                        <button type="button" onClick={signup}>Signup</button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default Authentication;

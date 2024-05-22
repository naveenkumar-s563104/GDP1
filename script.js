    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value; 
        if (username === 'instructor' && password === '12345') {
            window.location.href = 'instructor_dashboard.html';
        } else if (username === 'student' && password === '12345') { 
            window.location.href = 'student_dashboard.html';
        } else {
            alert('Invalid username or password.');
        }
    });

    document.getElementById('instructorLogin').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('username').value = 'instructor';
        document.getElementById('password').value = '12345';
    });

   
    
    function logout() {
        // Implement logout logic here
        window.location.href = 'index.html';
    }



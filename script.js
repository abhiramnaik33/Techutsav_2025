document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.about-section').classList.add('loading');
    
    // Add student-card class to student coordinators
    const studentCards = document.querySelectorAll('.organizer-card:nth-child(n+8)');
    studentCards.forEach(card => {
        card.classList.add('student-card');
    });
    
    // Create student section title
    const studentTitle = document.createElement('div');
    studentTitle.className = 'student-title';
    studentTitle.textContent = 'Student Co-ordinators';
    
    // Insert before the first student card
    if(studentCards.length > 0) {
        studentCards[0].parentNode.insertBefore(studentTitle, studentCards[0]);
    }
    
    // Format phone numbers
    const phoneNumbers = document.querySelectorAll('.organizer-bio:nth-child(4)');
    phoneNumbers.forEach(phone => {
        phone.classList.add('phone-number');
    });
});
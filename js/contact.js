const form = document.querySelector('.contact_form');
const name = document.getElementById('name')
const message = document.getElementById('message')
const subject = document.getElementById('subject');

function sendEmail(e){
    e.preventDefault();
    Email.send({
        SecureToken : "5abc2933-4db6-435f-905d-1d2ab0cef8cd",
        To : 'kubiczek@student.agh.edu.pl',
        From : 'kubiczek@student.agh.edu.pl',
        Subject : subject.value,
        Body : 'Wiadomość od '+name.value+': '+message.value
    }).then(
      message => alert(message)
    );
    return true;
}
<sript src="https://smtpjs.com/v3/smtp.js"></sript>
function sendEmail(){
Email.send({
    Host : "smtp.alasticemail.com",
    Username : "mohamedikaweza@gmail.com",
    Password : "1CDB7C1903AD10C4A4CF0C109D1F881444FD",
    To : 'mohamedikaweza@gmail.com',
    From : document.getElementById("email").value,
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}

function dived()
{
    var mail=document.getElementById("mail").value;
    document.getElementById("name").value = mail.slice(0,mail.indexOf("@"));
    document.getElementById("domain").value = mail.slice(mail.indexOf("@")+1);
}
$(function () {
    $('[data-toggle="popover"]').popover()
  })
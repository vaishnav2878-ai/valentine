function generateLink(){
  let name = document.getElementById("name").value;
  let from = document.getElementById("from").value;
  let msg = document.getElementById("message").value;
  let emoji = document.getElementById("emoji").value;

  let url = `valentine.html?name=${name}&msg=${msg}&emoji=${emoji}`;

  document.getElementById("linkBox").innerHTML =
  `<a href="${url}" target="_blank">${url}</a>`;
}

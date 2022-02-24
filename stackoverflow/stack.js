const apiUrl =
	"https://api.stackexchange.com/2.3/answers?fromdate=1643673600&todate=1645574400&order=desc&sort=activity&site=stackoverflow";

fetch(apiUrl)
	.then((data) => data.json())
	.then((answer) => generateHTML(answer));

var userID = 1;
function generateHTML(data) {
	console.log(data);
	console.log(data.items[userID]);

	const content = `
    <tr>
      <th></th>
      <th>Name</th>
      <th>Image</th>
      <th>Reputation</th>
      <th>License</th>
      <th>Profile Link</th>
    </tr>
    <tr>
      <td>${userID}</td>
      <td>${data.items[userID].owner.display_name}</td>
      <td><img src="${data.items[userID].owner.profile_image}"></td>
      <td>${data.items[userID].owner.reputation}</td>
      <td>${data.items[userID].owner.user_type}</td>
      <td><a href="${data.items[userID].owner.link}" id='profile'>Profile</a></td>
    </tr>
  `;

	document.getElementById("stackUsers").innerHTML = content;
}

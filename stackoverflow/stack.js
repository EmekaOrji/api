const apiUrl = 'https://api.stackexchange.com/2.3/users?page=25&pagesize=100&order=desc&sort=reputation&site=stackoverflow';
fetch(apiUrl)
	.then((data) => data.json())
	.then((answer) => generateHTML(answer));


var userID = 1;
function generateHTML(data) {

  // for (const item in data.items) {
  //   if (Object.hasOwnProperty.call(data.items, item)) {
  //     const e = data.items.indexOf(data.items[item]);
  //     // console.log(e);
  //     console.log(item);
  //   }
  // }
  
  // for (const item of data.items) {
  //   const e = data.items.indexOf(data.items[item]);
  //   // console.log(e);
  //   console.log(item);
  // }

  const tableHead = () => {
    return `
      <tr>
        <th></th>
        <th>Name</th>
        <th>Image</th>
        <th>Reputation</th>
        <th>Approval</th>
        <th>Profile Link</th>
      </tr>
    `;
  }
	const content = (ID) => {
    return `
      <tr>
        <td>${ID}</td>
        <td>${data.items[ID].display_name}</td>
        <td><img src="${data.items[ID].profile_image}"></td>
        <td>${data.items[ID].reputation}</td>
        <td>${data.items[ID].user_type}</td>
        <td><a href="${data.items[ID].link}" id='profile'>Profile</a></td>
      </tr>
    `
  }

  data.items.forEach((e, i) => {
    var userID = i;
    console.log(data.items[userID]);
    const html = `
      ${tableHead()}
      ${content(userID)}
    `;

    document.getElementById("stackUsers").innerHTML = html;
  });
	console.log(data);
	// const html = `
  //   ${tableHead}
  //   ${content(userID)}
  // `;

}

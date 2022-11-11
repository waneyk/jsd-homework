const books = [
    {
      title: "American Gods",
      author: "Neil Gaiman",
      alreadyRead: true,
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/49/American_gods.jpg/220px-American_gods.jpg"
    },
    {
      title: "The Sandman",
      author: "Neil Gaiman",
      alreadyRead: true,
      image: "https://upload.wikimedia.org/wikipedia/en/0/0d/Kindly_Ones.jpg"
    },
    {
      title: "Hogfather",
      author: "Terry Prathcett",
      alreadyRead: false,
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Hogfather-2.jpg/220px-Hogfather-2.jpg"
    },
    {
      title: "The Name Of The Wind",
      author: "Patrick Rothfuss",
      alreadyRead: true,
      image: "https://static.wikia.nocookie.net/nameofthewind/images/0/04/Vindens_namn_1_cover.jpg/revision/latest/scale-to-width-down/250?cb=20150413103411"
    },
    {
      title: "Babel",
      author: "R.F Kuang",
      alreadyRead: false,
      image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1640020283l/59879803._SY475_.jpg"
    }
  ];

 // Populate in Paragraph
  // for (i=0; i<= books.length - 1; i++){
  //   console.log(books[i].title)
  //   let myParagraph = document.createElement("p")
  //   myParagraph.innerText = "Book Title: " + books[i].title + ", Author: " + books[i].title;
    
  //   if (books[i].alreadyRead) {
  //         myParagraph.style.color = 'green';
  //      }
  //      else {
  //       myParagraph.style.color = 'red';
  //       }

  //   document.body.appendChild(myParagraph)
  // } 

//Bonus: Use a ul and li to display the books.

let bookList = document.createElement('ul');

for (i=0; i<= books.length - 1; i++) {
  var bookItem = document.createElement('li');
  var bookDetail = document.createTextNode(books[i].title + ' by ' + books[i].author);
  var bookImgage = document.createElement('img');
  bookImgage.src = books[i].image;
  bookImgage.style.width = "50px";
  bookItem.appendChild(bookImgage);
  bookItem.appendChild(bookDetail);
  if (books[i].alreadyRead) bookItem.style.color = 'green';
  else bookItem.style.color = 'red';
  
  bookList.appendChild(bookItem);
}
document.body.appendChild(bookList);
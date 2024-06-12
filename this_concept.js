// function Hi() {
//   this.hello = 'world'
//   console.log(this);
// }

// new Hi()

// const user = {
//   firstName: 'Rajesh',
//   lastName: 'Bagguva',
//   tags: ['a', 'b', 'c'],
//   printTags: () => {
//     console.log(this);
//   }
// }

// const body  = document.querySelector('body')

// For eventListeners it is points to the element where it is called.
//Below it is pointing to the "body"

// body.addEventListener('click', (e) => {
//   console.log(e.target);
//   console.log(e.currentTarget);
//   console.log(this);
// })

class User {
  constructor() {
    // this.firstName = "Rajesh";
    console.log(this);
  }

  getUser() {
    console.log(this);
  }
}

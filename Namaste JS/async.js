async function getName() {
  return "Hello Rajesh";
}

const dataProimse = getName();

console.log(dataProimse);

dataProimse.then(res => console.log(res))

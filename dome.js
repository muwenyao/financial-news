const originalObj = {
    name: "John",
    age: 30,
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345"
    }
  };
  
  const deepCopy = (obj) => {
    return JSON.parse(JSON.stringify(obj));
  }
  
  const copiedObj = deepCopy(originalObj);
  
  console.log(originalObj); // { name: "John", age: 30, address: { street: "123 Main St", city: "Anytown", state: "CA", zip: "12345" } }
  console.log(copiedObj); // { name: "John", age: 30, address: { street: "123 Main St", city: "Anytown", state: "CA", zip: "12345" } }
  
  // Modify the original object
  originalObj.address.city = "Newtown";
  
  console.log(originalObj); // { name: "John", age: 30, address: { street: "123 Main St", city: "Newtown", state: "CA", zip: "12345" } }
  console.log(copiedObj); // { name: "John", age: 30, address: { street: "123 Main St", city: "Anytown", state: "CA", zip: "12345" } }
  
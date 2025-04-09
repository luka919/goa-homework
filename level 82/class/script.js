const personalData = {
    firstName: "luka",
    lastName: "miqeladze",
    age: 15
  };
  

  localStorage.setItem("personalData", JSON.stringify(personalData));
  

  const storedData = JSON.parse(localStorage.getItem("personalData"));
  

  console.log("age:", storedData.age);
  

  storedData.firstName = "nika";
  

  localStorage.setItem("personalData", JSON.stringify(storedData));
  

  const updatedData = JSON.parse(localStorage.getItem("personalData"));
  console.log("edited data:", updatedData.firstName);
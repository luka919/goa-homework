// Bubbling ნიშნავს იმას, რომ მოვლენა (event) ჯერ ხდება იმ ელემენტზე, სადაც მოხდა ქმედება, და შემდეგ "ბუშტივით ზემოთ ადის" DOM-ის მშობელ ელემენტებამდე.

// Capturing (ან "event capturing phase") ნიშნავს იმას, რომ მოვლენა ჯერ მიმდინარეობს ზემოდან ქვემოთ, ანუ მშობლიდან შვილისკენ, სანამ მიაღწევს იმ ელემენტს, სადაც რეალურად მოხდა ქმედება.

document.getElementById("parent").addEventListener("click", () => {
    alert("div clicked");
  });
  
  document.getElementById("child").addEventListener("click", () => {
    alert("button clicked");
  });

  document.getElementById("parent").addEventListener("click", () => {
    alert("div clicked");
  }, true); 
  
  document.getElementById("child").addEventListener("click", () => {
    alert("button clicked");
  });
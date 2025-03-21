// Event Bubbling არის მეთოდი, სადაც მოვლენის გავრცელება იწყება მიღებული ელემენტიდან (სადაც მოვლენა მოხდა) და შემდეგ გადადის ყველა უფრო მაღლა მდგომ ელემენტზე.
// მაგალითად, თუ ჩვენ გადავატრიალებთ click მოვლენის მოდელს, ეს შეიძლება დაიწყოს კონკრეტული ელემენტიდან, მაგალითად, button-იდან და შემდეგ მოიცვას მისი ყველა მშობელი ელემენტი, რომლებიც იდგებიან თავიანთი მშობლის ელემენტების შიგნით.


// Event Capturing არის პროცესი, როდესაც მოვლენა იწყებს გავრცელებას და შემდეგ ხვდება ელემენტებს ქვემოდან, რომლებიც მიბმული არიან კონკრეტულ ელემენტთან.
// ზოგჯერ შეიძლება იყოს საჭირო, როდესაც გვსურს მოვლენის ადრეული "დაჭერა".


parent = document.getElementById("parent")

// bubling
parent.addEventListener("click", function() {
    console.log("Parent clicked - Bubbling");
});

child = document.getElementById("child")

child.addEventListener("click", function() {
    console.log("Child clicked - Bubbling");
});

// capturing
parent.addEventListener("click", function() {
    console.log("Parent clicked - capturing");
}, true);

child = document.getElementById("child")

child.addEventListener("click", function() {
    console.log("Child clicked - capturing");
}, true);
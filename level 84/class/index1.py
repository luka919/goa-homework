# super-ი ჩვენ იმაში გვჭირდება , რომ როდესაც გვინდა მშობელი ელმენტის properti-ბიც გადმოვიტანოთ და ახალიც შვქმნათ childში


# super-ი იღებს მშობლიდან რაც გვინდა წამოვიღთ და ჩაილდში ჩასვას მშობელს კი გადააგდებს


class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def display_info(self):
        print(f"Name: {self.name}, Age: {self.age}")

class Student(Person):
    def __init__(self, name, age, student_money):
        super().__init__(name, age)  
        self.student_money = student_money  
    
    def display_info(self):
        super().display_info()  
        print(f"student_money: {self.student_money}")


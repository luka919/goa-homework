# multiple inheritance არის როცა ერთი კლასი მემკვიდრეობს რამდენიმე კლასს ერთდროულად.


# multilevel inheritance არის მემკვიდრეობის ტიპი, სადაც ერთი კლასი მემკვიდრეობს მეორე კლასს, ხოლო ის კლასი — მესამე კლასს და ა.ს.შ

# super
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


# multiple inheritance
class Designer:
    def desinging(self):
        print("i am desinging figma")

class programmer:
    def write_code(self):
        print("i wrote code")

class full_stack(Designer, programmer):
    def desinging_programming(self):
        print("i am desinging and writing code") 
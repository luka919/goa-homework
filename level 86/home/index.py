# abstract class  არის ისეთი კლასი, რომელსაც ნამდვილად ვერ გამოიყენებ ობიექტის შესაქმნელად, მაგრამ შეგიძლია მემკვიდრეობით მიიღო და გააგრძელო.
# polymorphism კოდი ხდება უფრო მოქნილი და ხელახლა გამოყენებადი
# შეგიძლია ერთნაირად გამოიძახო მეთოდები, მაგრამ თითო კლასში განსხვავებულად იმუშაოს

# aggregation არის “ერთ ობიექტს შეუძლია შეიცავდეს სხვა ობიექტს, მაგრამ იმ სხვა ობიექტს დამოუკიდებლადაც შეუძლია არსებობა.”

# polymorphism
class Animal:
    def speak(self):
        return "animal speaks"

class Dog(Animal):
    def speak(self):
        return "woh!"

class Cat(Animal):
    def speak(self):
        return "miau!"

class Cow(Animal):
    def speak(self):
        return "muuuuuuuuuuuuuuuuuuuuuuuuuuuuuu"


animals = [Dog(), Cat(), Cow()]

for animal in animals:
    print(animal.speak())

# aggregation
class Engine:
    def __init__(self, type_of_engine):
        self.type_of_engine = type_of_engine

class Car:
    def __init__(self, model, engine):
        self.model = model
        self.engine = engine  

    def start(self):
        print(f"{self.model}  {self.engine.type_of_engine}")

engine = Engine("V8")
car = Car("Mercedes", engine)
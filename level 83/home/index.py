class Motorcycle:
    total_motorcycles = 0

    def __init__(self, brand, model, color, while_color):
        self.brand = brand              
        self.model = model              
        self.color = color              
        self.while_color = while_color
        Motorcycle.total_motorcycles += 1

    def drive(self):
        print(f"you are driving {self.color} {self.brand} {self.model} with {self.while_color} whiles")


moto1 = Motorcycle("bmw", "G310R", "Black", "blue")
moto2 = Motorcycle("Yamaha", "mt_15", "Green", "black")

moto1.drive()
moto2.drive()











class Animal:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def speak(self):
        print("Some animal sound")


class Dog(Animal):
    def __init__(self, name, age, breed):
        Animal.__init__(self, name, age)  
        self.breed = breed

    def speak(self):
        print("Woof!")


class Cat(Animal):
    def __init__(self, name, age, color):
        Animal.__init__(self, name, age)
        self.color = color

    def speak(self):
        print("Meow!")


class Bird(Animal):
    def __init__(self, name, age, species):
        Animal.__init__(self, name, age)
        self.species = species

    def speak(self):
        print("Tweet!")


dog1 = Dog("Max", 5, "Golden Retriever")
cat1 = Cat("Luna", 3, "zetperi")
bird1 = Bird("Kiwi", 1, "parot")

Dog.speak()
Cat.speak()
Bird.speak()


#inheritance არის პროგრამირების კონცეფცია, რომელიც საშუალებას აძლევს ერთ კლასს მიიღოს თვისებები და ფუნქციები მეორე კლასისგან.


# Inheritance გვჭირდება მაშინ, როცა გვსურს გავიზიაროთ კოდი საერთო კლასებიდან, ავიცილოთ გამეორება, და შევქმნათ კოდის მკაფიო სტრუქტურა.
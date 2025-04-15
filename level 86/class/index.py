from abc import ABC, abstractmethod

class Animal(ABC):
    
    @abstractmethod
    def make_sound(self):
        pass  

    def sleep(self):
        print("Sleeping...")

class Dog(Animal):
    def make_sound(self):
        print("Woof!")

my_dog = Dog()
my_dog.make_sound() 
my_dog.sleep()  




class Animal:
    def make_sound(self):
        print("Some generic animal sound")

class Dog(Animal):
    def make_sound(self):
        print("Woof!")

class Cat(Animal):
    def make_sound(self):
        print("Meow!")


def animal_sound(animal):
    animal.make_sound()

dog = Dog()
cat = Cat()

animal_sound(dog)  
animal_sound(cat)


# აბსტრაქტულ კლასშ შეიძლება იყოს ისეთი მეთოდები, რომლებსაც შვილი კლასი აუცილებლად უნდა გააკეთოს.
 
# პოლიმორფიზმი ნიშნავს ერთი და იგივე მეთოდი, სხვადასხვა ქცევით. ანუ ფუნქციები ან მეთოდები მოქმედებენ სხვადასხვა ობიექტებზე, მაგრამ თითოეულ შემთხვევაში შედეგი განსხვავებულია.
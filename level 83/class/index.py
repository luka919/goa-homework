class Car:
    def __init__(self, brand, model, year, color):
        self.brand = brand
        self.model = model
        self.year = year
        self.color = color


    def drive(self):
        print(f"you driving {self.brand}, {self.model}")

    def crashes(self):
        print(f"you crash {self.brand} {self.model} {self.color}")

car1 = Car("mercedec", "gle", 2020, "თეთრი")
car2 = Car("BMW", "m5", 2022, "შავი")
car3 = Car("Tesla", "Model 3", 2023, "წითელი")

car1.drive()
car1.crashes()
car2.drive()
car2.crashes()
car3.drive()
car3.crashes()








class Person:

    total_people = 0

    def __init__(self, name, age, city, work):
        self.name = name
        self.age = age
        self.city = city
        Person.total_people += 1

    def introduce(self):
        print(f"i am {self.name}, {self.age} years, from {self.city}.")


    def work(self):
        print(f"i am {self.work}")
        



person1 = Person("ana", 20, "tbilisi", "programmer")
person2 = Person("nika", 15, "batumi", "police")
person3 = Person("luka", 30, "qutaisi", "firefighter")


person1.work()
person2.work()
person3.work()
person1.introduce()
person2.introduce()
person3.introduce()


# dunder method ეწოდება Python-ში იმ მეთოდებს, რომლებსაც სახელის დასაწყისსა და ბოლოში ორი ქვედა ტირე (underscore) აქვთ. "Dunder" ნიშნავს "double underscore"-ს (ორმაგი ქვედა ტირე) შემოკლებით.

# Instance variables ეწოდება ცვლადებს (მონაცემებს), რომლებიც ეკუთვნის კონკრეტულ ობიექტს 

# Class variables ეწოდება ცვლადებს, რომლებიც ეკუთვნის მთელ კლასს, და არა კონკრეტულ ობიექტს. ანუ ეს ცვლადები გაზიარებულია კლასიდან შექმნილ ყველა ობიექტს შორის.

# Blueprint ინგლისურად ნიშნავს გეგმას, ნახაზს ან პროექტს, რომელიც გამოიყენება რაიმეს შესაქმნელად ან ასაშენებლად.
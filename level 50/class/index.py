print(age)
age = "11"
try:
    print(age)
    print("you print age successfully ")

except NameError:
    print("you have nameError")

age = "7386h7260"
try:
    print(int(age))
    print( "age converted successfully")
except ValueError:
    print("you have valueError")

listn = [1,2,3]

try:
    print(listn[20])
except IndexError:
    print("you have indexError")
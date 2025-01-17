# 1) NameError


try:
    print(name)
    print("you print name successfully ")

except NameError:
    print("you have nameError")





# 2)ValueError


nummber = "29580.689379"
try:
    print(int(nummber))
    print( "nummber converted successfully")
except ValueError:
    print("you have valueError")
# 3) indexError


listn = [1,2,3,5]

try:
    print(listn[178])
except IndexError:
    print("you have indexError")


# 3)
def int1(x):
    y = []
    for i in x:
        y.append(int(i))
    return(sum(y))

print(int1([10, "10"]))
    
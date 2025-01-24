#                               MAP

# 1)
listn = [2, 4, 6, 8, 10]
double_list = list(map(lambda i: i * 2 , listn))
print(double_list)


# 2)
names = ["Alice", "Bob", "Charlie"]
hello_names = list(map(lambda x: "hello" + " " + x, names))
print(hello_names)


# 3)
fruit = ["apple", "banana", "kiwi"]
lengths = list(map(lambda y: len(y),fruit))
print(lengths)


#                                 FILTER

# 1)
nummbers = [-5, 3, -2, 7, 0, 10]
only_positive = list(filter(lambda w: w >= 0,nummbers))
print(only_positive)


# 2)
fruit1 = ["pear", "apple", "peach", "grape"]
not_p = list(filter(lambda l: l[0] == "p", fruit1))
print(not_p)


# 3)
nummber1 = [10, 55, 42, 78, 65, 20]
greater_50 = list(filter(lambda h: h >= 50, nummber1))
print(greater_50)
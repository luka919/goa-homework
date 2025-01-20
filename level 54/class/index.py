# MAPS

# 1)
listn = [1 , 2 , 3 , 4 , 5]
list_squer = list(map(lambda x: x ** 2, listn ))
print(list_squer)

# 2)
celsius = [0 , 20 , 30 , 40]
fahrenheit = list(map(lambda y: (y * 33.8), celsius))
print(fahrenheit)

# 3)
listm = ["hello", "world", "python"]
capitalise = list(map(lambda s: s.capitalize(),listm))
print(capitalise)



# FILTERS
 
# 1)
even_odd = [1, 2, 3, 4, 5, 6, 7, 8]
only_even = list(filter(lambda d: d % 2 == 0,even_odd))
print(only_even)

# 2)
words = ["cat", "house", "tree", "car"]
four_diget = list(filter(lambda r: len(r) >= 4 , words ))
print(four_diget)

# 3)
nummbers = [3, 9, 15, 22, 27, 30]
three = list(filter(lambda h: h % 3 == 0 , nummbers))
print(three)

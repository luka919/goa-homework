# 1) FILTER
nummbers = [49 , 25, 2 ,65, 24]
only_int = list(filter(lambda x: x >= 40, nummbers))
print(only_int)


# 2) MAP
nummbers1 = [2,4,5,47,474,63]
squer_num = list(map(lambda y: y ** 2,nummbers1))
print(squer_num)


# 3) FILTER
str1 = ["luka", "lika", "rusiko"]
end_a = list(filter(lambda i: i.endswith("a") ,str1))
print(end_a)
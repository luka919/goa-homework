def manual_find(s , x):
    n = 0
    for i in s:
        if i == x:
            return n
        else:
            n += 1

print(manual_find("hello world", "o"))

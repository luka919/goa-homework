def manual_min(listn):
    x = listn[0]
    for i in listn:
        if i < x:
            x = i
    
    return x
print(manual_min([2,4,5,1,8,3]))

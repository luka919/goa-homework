def manual_in_keyword(element, collection):
    for i in collection:
        if i == element:
            return True
        else:
            return False

fruits = ['apple', 'banana', 'cherry']

if manual_in_keyword('banana', fruits):
    print("Banana is in the list!")
else:
    print("Banana is not in the list.")
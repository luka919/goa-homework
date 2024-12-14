def manual_in_keyword(element, collection):
    for item in collection:
        if item == element:
            return True
    return False

fruits = ['apple', 'banana', 'cherry']

if manual_in_keyword('banana', fruits):
    print("Banana is in the list!")
else:
    print("Banana is not in the list.")
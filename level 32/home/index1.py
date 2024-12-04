
def manual_swapcase(list):
    swapped_text = ""
    for char in text:
        if char.islower():
            swapped_text += char.upper()
        elif char.isupper():
            swapped_text += char.lower()
        else:
            swapped_text += char
    return swapped_text




text = "HelLo WorlD"
swapped_text = manual_swapcase(text)
print(swapped_text)
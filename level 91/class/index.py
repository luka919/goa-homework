# codewats

def bool_to_word(boolean):
    if boolean == True:
        return "Yes"
    return "No"


def positive_sum(arr):
    return sum(x for x in arr if x > 0)


def repeat_str(repeat, string):
    return repeat * string

def remove_char(s):
    return s[1:-1]

def square_sum(numbers):
    return sum(i ** 2 for i in numbers)

def find_smallest_int(arr1):
    return min(arr1)

def string_to_number(n):
    return int(n)

def high_and_low(numbers):
    nums = list(map(int, numbers.split()))
    return f"{max(nums)} {min(nums)}"

def to_jaden_case(string):
    return " ".join(i.capitalize()for i in string.split())

def get_sum(a,b):
    return sum(range(min(a,b), max(a, b) + 1))

def add_binary(a,b):
    return bin(a + b)[2:]

def find_next_square(sq):
    root = sq ** 0.5
    if root.is_integer():
        return int((root + 1) ** 2)
    return -1

def row_sum_odd_numbers(n):
    return n ** 3
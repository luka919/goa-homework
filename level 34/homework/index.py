def manual_min(arr):

    if not arr:
        return None  
    smallest = arr[0]
    for num in arr:
        if num < smallest:
            smallest = num
        return smallest

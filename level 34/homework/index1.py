def manual_max(arr):
    if not arr:
        return None  
    largest = arr[0]
    for num in arr:
        if num > largest:
            largest = num
    
    return largest

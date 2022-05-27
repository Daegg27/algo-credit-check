def credit_check(inputPara):
    
    str_list = list(inputPara)
    final_sum = 0
    used_number = len(str_list)
    
    
    for prop in str_list:
            if int(prop) * used_number > 9:
                multipled_number = int(prop) * used_number
                multipled_number = str(multipled_number)
                split_num = []
                split_num.append(multipled_number[0])
                split_num.append(multipled_number[1])
                final_sum += int(split_num[0]) + int(split_num[1])
                

    if final_sum % 10 == 0:
        return "The number is valid!"
    else:
        return "The number is invalid!"

   


# print(credit_check("32325939"))
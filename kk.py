# GroupName in LEB2: c09_wed17
# FileName: c09_wed00_students2.py
# member list in the file
# 005 Jackapong Karapinvong
# 009 Nattaphan Pumipak
# 028 Phakaphol Dherachaisuphakij
# 011 Taiyo yamamoto

def main():
    
    student_dict = {}
    
    
    while True:
        first = input("add or search")
        if first =="add":
            check = input("yes or no")
            if check.lower() == "yes":
                id, name, lastname = read_one_student()
                if id in student_dict:
                    continue
                add_student_to_dict(student_dict, id, name, lastname)
        
            else:
                print_students_from_dict(student_dict)
                break
        elif first == 'search':
            search = input('Enter id')
            search(search,student_dict)


def search(id,student_dict):
    if id in student_dict:
        

def print_search(id,student_dict):
    print(student_dict[])

def read_one_student() -> (int, str, str):
# ask the user to input id, name, and lastname
# validate id; must be 67130500XXX
# return id, name, lastname
    print("You input id, name, lastname")

    while True:
        try:
            id = int(input("id : "))
            if 67130500999 > id > 67130500000:
                break
        except ValueError:
            print("Error")
    name = input("name : ")
    lastname = input("lastname : ")
    return id,name,lastname

def add_student_to_dict(students: dict, id: int, name: str, lastname: str):
# add id, name, lastname as a dict into students (list)
    students.update({"id": id, "name": name+" "+lastname})
    
  


def print_students_from_dict(students):
# print each student in students list
    print(students)
    


if __name__ == '__main__':
    main()

def wordPattern():
        """
        :type pattern: str
        :type s: str
        :rtype: bool
        """
        a = "dog"
        b = "cat"
        c = "fish"
        pattern = "abba"
        s = "dog cat cat dog"
        spls = s.split(" ")
        print("Spl s = " , spls)
        arr = []
        for i in range(len(spls)):
            if spls[i] == a:
                spls[i] = "a"
                arr.append(spls[i])
            elif spls[i] == b:
                spls[i] = "b"
                arr.append(spls[i])
            elif spls[i] == c:
                spls[i] = "c"
                arr.append(spls[i])

        for k in range(len(spls)):
            if arr[k] != pattern[k]:
                return False
        return True
print(wordPattern())
                    
    
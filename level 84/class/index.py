class Human:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def introduce(self):
        return f"Hello, my name is {self.name} and I am {self.age} years old."

class Programmer(Human):
    def __init__(self, name, age, language):
        Human.__init__(self, name, age)
        self.language = language
    
    def code(self):
        return f"I am coding in {self.language}."

class Designer(Human):
    def __init__(self, name, age, tool):
        Human.__init__(self, name, age)
        self.tool = tool
    
    def design(self):
        return f"I am desinging using {self.tool}."

class GoaProgrammer(Programmer):
    def __init__(self, name, age, language, framework):
        Programmer.__init__(self, name, age, language)
        self.framework = framework
    
    def advanced_code(self):
        return f"I am developing with {self.framework} in {self.language}."

class GoaDesigner(Designer):
    def __init__(self, name, age, tool, style):
        Designer.__init__(self, name, age, tool)
        self.style = style
    
    def advanced_design(self):
        return f"I create {self.style} desings using {self.tool}."

class Professional(Programmer, Designer):
    def __init__(self, name, age, language, tool):
        Programmer.__init__(self, name, age, language)
        Designer.__init__(self, name, age, tool)
    
    def full_stack(self):
        return f"I can both code in {self.language} and desing using {self.tool}."
    
    h = Human("nika", 21)
    p = Programmer("luka", 11, "python")
    d = Designer("Nika", 28, "photoshop")
    gp = GoaProgrammer("data", 21, "JavaScript", "React")
    gd = GoaDesigner("kote", 11, "photoshop", "photoshop") 



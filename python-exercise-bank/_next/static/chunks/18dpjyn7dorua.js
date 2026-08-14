(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,5121,e=>{"use strict";var t=e.i(26691),n=e.i(52106);let s=["全部题目","语言基本规则","变量","字符串","数字","列表"],r=[{id:1,section:"语言基本规则",type:"选择题",level:"入门",title:"识别规范的缩进",prompt:"下面哪种做法最符合 Python 的缩进规范？\n\nA. 同一代码块中混用 Tab 和空格\nB. 同一代码块统一使用 4 个空格\nC. 缩进空格数可以随意变化\nD. Python 不依赖缩进表示代码块",answer:`# 正确答案：B
# Python 使用缩进表示代码块。
# 建议统一使用 4 个空格，并避免混用 Tab 与空格。`},{id:2,section:"语言基本规则",type:"填空题",level:"入门",title:"让两次输出保持在同一行",prompt:'补全代码，使输出结果为 Hello Python，且两次 print() 的内容位于同一行。\n\nprint("Hello "，________)\nprint("Python")',answer:`print("Hello ", end="")  # 不在末尾换行
print("Python")

# 输出：Hello Python`},{id:3,section:"变量",type:"编程题",level:"入门",title:"创建个人信息卡",prompt:"分别用变量保存你的姓名、专业和入学年份，然后用 print() 分三行输出。变量名应简短且能说明含义。",answer:`name = "张晓明"          # 姓名使用字符串保存
major = "工商管理"       # 专业使用字符串保存
enrollment_year = 2026   # 年份可以使用整数保存

print("姓名：" + name)
print("专业：" + major)
print("入学年份：" + str(enrollment_year))  # 拼接前转为字符串`},{id:4,section:"变量",type:"编程题",level:"基础",title:"交换两个变量的值",prompt:"已有 a = 12、b = 35。请在不直接重新写入 35 和 12 的情况下交换两个变量的值，并输出交换后的结果。",answer:`a = 12
b = 35

# Python 支持同时给多个变量赋值
a, b = b, a

print(a)  # 35
print(b)  # 12`},{id:5,section:"字符串",type:"编程题",level:"基础",title:"统一姓名的显示格式",prompt:'将字符串 name = "aDa loVELace" 分别以全小写、全大写和单词首字母大写的形式输出。',answer:`name = "aDa loVELace"

print(name.lower())  # 全小写：ada lovelace
print(name.upper())  # 全大写：ADA LOVELACE
print(name.title())  # 单词首字母大写：Ada Lovelace`},{id:6,section:"字符串",type:"编程题",level:"基础",title:"制作课程目录",prompt:"使用制表符 \\t 和换行符 \\n 输出下面的课程目录：\n\n本周内容\n    1. 字符串\n    2. 数字\n    3. 列表",answer:`# \\n 负责换行，\\t 负责缩进
menu = "本周内容\\n\\t1. 字符串\\n\\t2. 数字\\n\\t3. 列表"
print(menu)`},{id:7,section:"字符串",type:"编程题",level:"基础",title:"清理用户输入中的空白",prompt:'给定 username = "  Ming Yue\\n"，分别演示 lstrip()、rstrip() 和 strip() 的效果，并将完全清理后的姓名以首字母大写形式输出。',answer:`username = "  Ming Yue\\n"

print(username.lstrip())  # 只删除左侧空白
print(username.rstrip())  # 只删除右侧空白
print(username.strip())   # 删除两侧空白

clean_name = username.strip().title()
print(clean_name)         # Ming Yue`},{id:8,section:"字符串",type:"编程题",level:"进阶",title:"提取并检查课程代码",prompt:'给定 course = "Python Programming 2026"：输出前 6 个字符、最后 4 个字符，并判断字符串中是否包含 "Python"。',answer:`course = "Python Programming 2026"

print(course[:6])          # Python：索引 0 到 5
print(course[-4:])         # 2026：从倒数第 4 位到末尾
print("Python" in course) # True：成员运算符返回布尔值`},{id:9,section:"数字",type:"编程题",level:"入门",title:"用四种运算得到 8",prompt:"编写四个表达式，分别使用加法、减法、乘法和除法，使结果都为 8。每个结果单独占一行。",answer:`print(5 + 3)   # 加法：8
print(10 - 2)  # 减法：8
print(4 * 2)   # 乘法：8
print(16 / 2)  # 除法：8.0`,note:"提示：Python 的 / 运算结果通常是浮点数，因此最后一行会显示 8.0。"},{id:10,section:"数字",type:"编程题",level:"基础",title:"修复生日祝福程序",prompt:'下面的代码会报类型错误，请修复并输出 Happy 22nd Birthday!\n\nage = 22\nmessage = "Happy " + age + "nd Birthday!"\nprint(message)',answer:`age = 22

# 字符串不能直接与整数拼接，先用 str() 转换
message = "Happy " + str(age) + "nd Birthday!"
print(message)`},{id:11,section:"数字",type:"编程题",level:"基础",title:"完成数字类型转换",prompt:'给定字符串 price = "19.8" 和整数 quantity = 3，将 price 转为浮点数，计算总价并输出。',answer:`price = "19.8"
quantity = 3

# 将数字形式的字符串转为浮点数后才能参与计算
total = float(price) * quantity
print(total)  # 59.4`},{id:12,section:"列表",type:"编程题",level:"基础",title:"更新书单",prompt:'已有 books = ["Python基础", "数据分析", "机器学习"]。将第一本改为 "Python入门"，在末尾添加 "数据可视化"，并在索引 1 的位置插入 "算法设计"，最后输出列表。',answer:`books = ["Python基础", "数据分析", "机器学习"]

books[0] = "Python入门"        # 按索引修改元素
books.append("数据可视化")     # 在末尾添加元素
books.insert(1, "算法设计")    # 在指定索引插入元素

print(books)`},{id:13,section:"列表",type:"编程题",level:"基础",title:"三种方式删除元素",prompt:'已有 tasks = ["预习", "听课", "练习", "复习"]。依次：用 del 删除第一项；用 pop() 删除并保存最后一项；用 remove() 删除 "练习"。输出最终列表和被 pop() 删除的内容。',answer:`tasks = ["预习", "听课", "练习", "复习"]

del tasks[0]                 # 按索引删除，不返回元素
last_task = tasks.pop()       # 删除末尾元素并返回它
tasks.remove("练习")          # 按值删除，不返回元素

print(tasks)                  # ['听课']
print(last_task)              # 复习`},{id:14,section:"列表",type:"编程题",level:"进阶",title:"比较永久排序与临时排序",prompt:'给定 cities = ["Tokyo", "Shanghai", "Berlin", "Paris"]。先按字母顺序临时显示，再显示原列表，最后按字母倒序永久修改原列表并输出。',answer:`cities = ["Tokyo", "Shanghai", "Berlin", "Paris"]

print(sorted(cities))               # 临时排序，不改变原列表
print(cities)                       # 原顺序保持不变

cities.sort(reverse=True)           # 永久修改为字母倒序
print(cities)`},{id:15,section:"列表",type:"编程题",level:"进阶",title:"切片并复制列表",prompt:"给定 scores = [72, 85, 91, 68, 88, 95]。输出前三个成绩和最后两个成绩，再创建一份完整副本 backup。修改原列表的第一个成绩为 100，并证明 backup 没有改变。",answer:`scores = [72, 85, 91, 68, 88, 95]

print(scores[:3])   # 前三个：[72, 85, 91]
print(scores[-2:])  # 后两个：[88, 95]

backup = scores[:]  # 切片产生一个新的列表
scores[0] = 100

print(scores)       # 第一个元素已改变
print(backup)       # 副本仍以 72 开头`},{id:16,section:"语言基本规则",type:"编程题",level:"基础",title:"正确书写跨行表达式",prompt:"将下面三个价格相加并输出总价。请使用圆括号把表达式分成多行书写，不使用反斜杠。价格分别为 19.8、25.5 和 12.0。",answer:`# 圆括号中的表达式可以自然跨行
total = (19.8
         + 25.5
         + 12.0)
print(total)  # 57.3`},{id:17,section:"语言基本规则",type:"编程题",level:"基础",title:"为代码添加清晰注释",prompt:"创建变量 unit_price = 36.5 和 quantity = 4，计算总价并输出。至少添加一条单行注释，说明计算目的。",answer:`unit_price = 36.5
quantity = 4

# 计算购买指定数量商品所需的总金额
total = unit_price * quantity
print(total)  # 146.0`},{id:18,section:"变量",type:"选择题",level:"入门",title:"判断合法的变量名",prompt:"下面哪一个变量名既符合 Python 规则，又具有较好的可读性？\n\nA. 2026score\nB. student score\nC. student_score\nD. print",answer:`# 正确答案：C
student_score = 95

# 变量名不能以数字开头，也不能包含空格。
# print 虽可被赋值，但会覆盖内置函数，应避免使用。`},{id:19,section:"变量",type:"编程题",level:"基础",title:"一次给三个变量赋值",prompt:"使用一行代码分别把课程名 Python、学分 3、是否必修 True 赋给三个变量，并分行输出。",answer:`course, credits, required = "Python", 3, True

print(course)
print(credits)
print(required)`},{id:20,section:"变量",type:"编程题",level:"基础",title:"让多个变量共享初始值",prompt:"使用一行代码让 quiz_1、quiz_2、quiz_3 的初始成绩都为 0，随后把 quiz_2 改为 88，最后输出三个变量。",answer:`quiz_1 = quiz_2 = quiz_3 = 0
quiz_2 = 88

print(quiz_1, quiz_2, quiz_3)  # 0 88 0`},{id:21,section:"字符串",type:"编程题",level:"基础",title:"安全地输出含引号的名言",prompt:'输出：Python\'s motto is "Readability counts." 要求正确选择或组合引号，避免字符串语法错误。',answer:`# 外层使用双引号，单引号可以直接写；内部双引号需要转义
message = "Python's motto is \\"Readability counts.\\""
print(message)`},{id:22,section:"字符串",type:"编程题",level:"基础",title:"拼接完整姓名",prompt:'已有 first_name = "mingyue" 和 last_name = "zhang"。使用字符串拼接得到 "Mingyue Zhang" 并输出。',answer:`first_name = "mingyue"
last_name = "zhang"

full_name = first_name.title() + " " + last_name.title()
print(full_name)  # Mingyue Zhang`},{id:23,section:"字符串",type:"编程题",level:"基础",title:"访问字符串的首尾字符",prompt:'给定 language = "Python"，分别输出第一个字符、最后一个字符和倒数第二个字符。',answer:`language = "Python"

print(language[0])   # P
print(language[-1])  # n
print(language[-2])  # o`},{id:24,section:"字符串",type:"编程题",level:"基础",title:"截取邮箱用户名",prompt:'给定 email = "student@sisu.edu.cn"，已知用户名占前 7 个字符。使用切片输出 student。',answer:`email = "student@sisu.edu.cn"
username = email[:7]  # 从开头截取到索引 7 之前
print(username)       # student`},{id:25,section:"字符串",type:"编程题",level:"基础",title:"检查课程名称中的关键词",prompt:'给定 title = "Introduction to Python Programming"，分别判断其中是否包含 "Python"，以及是否不包含 "Java"。',answer:`title = "Introduction to Python Programming"

print("Python" in title)      # True
print("Java" not in title)    # True`},{id:26,section:"字符串",type:"编程题",level:"基础",title:"使用百分号格式化信息",prompt:'已有 name = "李华"、score = 92、average = 88.5。使用 %s、%d、%f 输出：李华的成绩是92，班级平均分是88.5。',answer:`name = "李华"
score = 92
average = 88.5

message = "%s的成绩是%d，班级平均分是%.1f。" % (name, score, average)
print(message)`},{id:27,section:"数字",type:"选择题",level:"入门",title:"辨认四种数字类型",prompt:'下面哪一组值依次属于 int、float、complex 和 bool？\n\nA. 8、8.0、3+2j、True\nB. 8.0、8、True、3+2j\nC. "8"、8.0、3+2j、False\nD. 8、"8.0"、3+2j、True',answer:`# 正确答案：A
# 8 是整数，8.0 是浮点数，3+2j 是复数，True 是布尔值。`},{id:28,section:"数字",type:"编程题",level:"基础",title:"创建并观察复数",prompt:"分别用 3 + 4j 和 complex(3, 4) 创建两个复数，输出它们，并判断二者是否相等。",answer:`number_1 = 3 + 4j
number_2 = complex(3, 4)

print(number_1)
print(number_2)
print(number_1 == number_2)  # True`},{id:29,section:"数字",type:"编程题",level:"基础",title:"进行连续类型转换",prompt:'给定 text = "18"，先将它转换为整数，再转换为浮点数和复数，分别输出结果。',answer:`text = "18"
integer_number = int(text)
float_number = float(integer_number)
complex_number = complex(integer_number)

print(integer_number)  # 18
print(float_number)    # 18.0
print(complex_number)  # (18+0j)`},{id:30,section:"列表",type:"编程题",level:"基础",title:"访问列表中的首尾元素",prompt:'给定 languages = ["Python", "Java", "C++", "R"]，分别输出第一门和最后一门语言，并组合成一句话。',answer:`languages = ["Python", "Java", "C++", "R"]
first = languages[0]
last = languages[-1]

print("第一门是" + first + "，最后一门是" + last + "。")`},{id:31,section:"列表",type:"编程题",level:"基础",title:"从指定位置弹出元素",prompt:'给定 queue = ["小王", "小李", "小张", "小陈"]，使用 pop() 删除并保存索引 1 的元素，然后输出被删除者和剩余列表。',answer:`queue = ["小王", "小李", "小张", "小陈"]
removed_student = queue.pop(1)

print(removed_student)  # 小李
print(queue)            # ['小王', '小张', '小陈']`},{id:32,section:"列表",type:"编程题",level:"基础",title:"统计并截取列表",prompt:'给定 weeks = ["第1周", "第2周", "第3周", "第4周", "第5周", "第6周"]，输出列表长度，并切片得到第2周到第4周。',answer:`weeks = ["第1周", "第2周", "第3周", "第4周", "第5周", "第6周"]

print(len(weeks))  # 6
print(weeks[1:4])  # ['第2周', '第3周', '第4周']`},{id:33,section:"数字",type:"编程题",level:"进阶",title:"读取并转换用户输入",prompt:"让用户输入商品单价和数量，将输入转换为合适的数字类型，再计算并输出总价。",answer:`price = float(input("请输入商品单价："))  # input() 返回字符串
quantity = int(input("请输入购买数量："))

total = price * quantity
print(total)`,extension:!0,resources:[{label:"Python 官方文档：input()",url:"https://docs.python.org/3/library/functions.html#input"}]},{id:34,section:"字符串",type:"编程题",level:"进阶",title:"使用 f-string 制作成绩消息",prompt:'已有 name = "李华" 和 score = 92，使用 f-string 输出“李华的成绩是92分”。',answer:`name = "李华"
score = 92

# 在字符串前加 f，并在花括号中写变量或表达式
print(f"{name}的成绩是{score}分")`,extension:!0,resources:[{label:"Python 官方教程：格式化字符串字面值",url:"https://docs.python.org/3/tutorial/inputoutput.html#formatted-string-literals"}]},{id:35,section:"字符串",type:"编程题",level:"进阶",title:"控制浮点数显示精度",prompt:"给定 total = 59.4，使用 f-string 将其显示为两位小数，输出“应付金额：59.40元”。",answer:`total = 59.4

# :.2f 表示以浮点数格式保留两位小数
print(f"应付金额：{total:.2f}元")`,extension:!0,resources:[{label:"Python 官方教程：输出格式化",url:"https://docs.python.org/3/tutorial/inputoutput.html#fancier-output-formatting"}]},{id:36,section:"列表",type:"编程题",level:"进阶",title:"使用带步长的切片",prompt:"给定 numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]，用切片分别取得所有偶数位置的元素，并生成倒序列表。",answer:`numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

print(numbers[::2])   # [0, 2, 4, 6, 8]
print(numbers[::-1])  # 从后向前取值，得到倒序列表`,extension:!0,resources:[{label:"Python 官方文档：序列与扩展切片",url:"https://docs.python.org/3/library/stdtypes.html#common-sequence-operations"}]},{id:37,section:"列表",type:"编程题",level:"进阶",title:"用列表推导式计算平方",prompt:"使用列表推导式，根据 numbers = [1, 2, 3, 4, 5] 创建一个包含各数字平方的新列表。",answer:`numbers = [1, 2, 3, 4, 5]

# 列表推导式把循环与新列表创建写在一个表达式中
squares = [number ** 2 for number in numbers]
print(squares)  # [1, 4, 9, 16, 25]`,extension:!0,resources:[{label:"Python 官方教程：列表推导式",url:"https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions"}]},{id:38,section:"列表",type:"编程题",level:"进阶",title:"使用 enumerate() 添加序号",prompt:'给定 courses = ["Python", "数据库", "算法"]，使用 enumerate() 从 1 开始为每门课程编号并逐行输出。',answer:`courses = ["Python", "数据库", "算法"]

for number, course in enumerate(courses, start=1):
    print(number, course)`,extension:!0,resources:[{label:"Python 官方文档：enumerate()",url:"https://docs.python.org/3/library/functions.html#enumerate"}]},{id:39,section:"列表",type:"编程题",level:"进阶",title:"使用 zip() 配对两个列表",prompt:'给定 names = ["小王", "小李", "小张"] 和 scores = [88, 92, 85]，使用 zip() 将姓名与成绩逐一配对并输出。',answer:`names = ["小王", "小李", "小张"]
scores = [88, 92, 85]

for name, score in zip(names, scores):
    print(name, score)`,extension:!0,resources:[{label:"Python 官方文档：zip()",url:"https://docs.python.org/3/library/functions.html#zip"}]},{id:40,section:"列表",type:"编程题",level:"进阶",title:"理解浅复制与嵌套列表",prompt:'给定 original = [["Python", 90], ["数据库", 85]]，使用 copy() 创建副本。修改副本中第一个内层列表的成绩后，观察原列表是否变化，并解释原因。',answer:`original = [["Python", 90], ["数据库", 85]]
backup = original.copy()  # 只复制外层列表

backup[0][1] = 100
print(original)  # [['Python', 100], ['数据库', 85]]
print(backup)

# 浅复制后的两个外层列表仍引用相同的内层列表。
# 若需要完全独立的嵌套对象，可继续学习 copy.deepcopy()。`,extension:!0,resources:[{label:"Python 官方文档：浅复制与深复制",url:"https://docs.python.org/3/library/copy.html"}]}];e.s(["default",0,function(){let[e,i]=(0,n.useState)("全部题目"),[l,a]=(0,n.useState)(""),[o,p]=(0,n.useState)([]),c=(0,n.useMemo)(()=>{let t=l.trim().toLowerCase();return r.filter(n=>{let s="全部题目"===e||n.section===e,r=!t||`${n.title} ${n.prompt} ${n.section}`.toLowerCase().includes(t);return s&&r})},[e,l]);return(0,t.jsxs)("main",{children:[(0,t.jsxs)("header",{className:"site-header",children:[(0,t.jsxs)("a",{className:"brand",href:"#top","aria-label":"Python 习题库首页",children:[(0,t.jsx)("span",{className:"brand-mark",children:"Py"}),(0,t.jsxs)("span",{children:[(0,t.jsx)("strong",{children:"Python 习题库"}),(0,t.jsx)("small",{children:"张明月《Python程序设计》课程"})]})]}),(0,t.jsxs)("nav",{"aria-label":"页面导航",children:[(0,t.jsx)("a",{href:"../",children:"题库入口"}),(0,t.jsx)("a",{href:"#questions",children:"开始练习"}),(0,t.jsx)("a",{href:"#about",children:"使用说明"}),(0,t.jsx)("a",{href:"https://mingyue-z.github.io/",children:"教师主页 ↗"})]})]}),(0,t.jsxs)("section",{className:"hero",id:"top",children:[(0,t.jsxs)("div",{className:"hero-copy",children:[(0,t.jsx)("p",{className:"eyebrow",children:"第 02 讲 · 变量与基础数据类型"}),(0,t.jsxs)("h1",{children:["把每一个概念，",(0,t.jsx)("br",{}),"写成",(0,t.jsx)("span",{children:"可以运行的代码。"})]}),(0,t.jsx)("p",{className:"intro",children:"本习题库来自张明月《Python程序设计》课程。从变量命名到列表切片，40 道循序渐进的练习，帮助你把课堂知识真正用起来；最后 8 题为课外拓展。"}),(0,t.jsxs)("div",{className:"hero-actions",children:[(0,t.jsxs)("a",{className:"primary",href:"#questions",children:["开始练习 ",(0,t.jsx)("span",{children:"→"})]}),(0,t.jsx)("span",{className:"time",children:"约 45 分钟 · 无需登录"})]})]}),(0,t.jsxs)("div",{className:"code-window","aria-label":"Python 代码示例",children:[(0,t.jsxs)("div",{className:"window-bar",children:[(0,t.jsx)("i",{}),(0,t.jsx)("i",{}),(0,t.jsx)("i",{}),(0,t.jsx)("span",{children:"practice.py"})]}),(0,t.jsx)("pre",{children:(0,t.jsxs)("code",{children:[(0,t.jsx)("b",{children:"topics"})," = [",(0,t.jsx)("em",{children:'"变量"'}),", ",(0,t.jsx)("em",{children:'"字符串"'}),", ",(0,t.jsx)("em",{children:'"数字"'}),", ",(0,t.jsx)("em",{children:'"列表"'}),"]",`

`,(0,t.jsx)("span",{children:"# 从理解走向实践"}),`
`,"today = topics[",(0,t.jsx)("b",{children:"0"}),"]",`
`,"print(",(0,t.jsxs)("em",{children:['f"今天练习：',"{today}",'"']}),")",`

`,(0,t.jsx)("span",{children:"# 输出：今天练习：变量"})]})}),(0,t.jsx)("div",{className:"code-decoration",children:"01"})]})]}),(0,t.jsxs)("section",{className:"content",id:"questions",children:[(0,t.jsx)("aside",{children:(0,t.jsxs)("div",{className:"aside-sticky",children:[(0,t.jsx)("p",{className:"aside-label",children:"课程内容"}),(0,t.jsx)("div",{className:"section-list",children:s.map(n=>{let s="全部题目"===n?r.length:r.filter(e=>e.section===n).length;return(0,t.jsxs)("button",{className:e===n?"active":"",onClick:()=>i(n),children:[(0,t.jsx)("span",{children:n}),(0,t.jsx)("b",{children:s})]},n)})}),(0,t.jsxs)("div",{className:"progress-card",children:[(0,t.jsx)("span",{children:"本讲练习"}),(0,t.jsxs)("strong",{children:[r.length," ",(0,t.jsx)("small",{children:"道题"})]}),(0,t.jsx)("p",{children:"建议先独立完成，再查看参考答案。"})]})]})}),(0,t.jsxs)("div",{className:"question-area",children:[(0,t.jsxs)("div",{className:"question-toolbar",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"eyebrow",children:"练习列表"}),(0,t.jsx)("h2",{children:e}),(0,t.jsxs)("span",{children:["共 ",c.length," 道题"]})]}),(0,t.jsxs)("label",{className:"search",children:[(0,t.jsx)("span",{children:"⌕"}),(0,t.jsx)("input",{value:l,onChange:e=>a(e.target.value),placeholder:"搜索题目或知识点","aria-label":"搜索题目"})]})]}),(0,t.jsxs)("div",{className:"question-list",children:[c.map(e=>{let n=o.includes(e.id);return(0,t.jsxs)("article",{className:`question-card ${n?"is-open":""}`,children:[(0,t.jsx)("div",{className:"question-number",children:String(e.id).padStart(2,"0")}),(0,t.jsxs)("div",{className:"question-body",children:[(0,t.jsxs)("div",{className:"tags",children:[(0,t.jsx)("span",{children:e.section}),(0,t.jsx)("span",{children:e.type}),(0,t.jsx)("span",{className:`level ${e.level}`,children:e.level})]}),(0,t.jsx)("h3",{children:e.title}),(0,t.jsx)("p",{className:"prompt",children:e.prompt}),e.note&&(0,t.jsxs)("p",{className:"hint",children:["提示 · ",e.note]}),e.extension&&(0,t.jsxs)("div",{className:"extension-note",children:[(0,t.jsx)("strong",{children:"拓展题 · 涉及超出本讲授课内容的知识点"}),(0,t.jsx)("span",{children:"建议先完成课内题，再参考官方资料学习。"}),e.resources?.map(e=>(0,t.jsxs)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:[e.label," ↗"]},e.url))]}),(0,t.jsxs)("button",{className:"answer-toggle",onClick:()=>{var t;return t=e.id,void p(e=>e.includes(t)?e.filter(e=>e!==t):[...e,t])},"aria-expanded":n,"aria-controls":`answer-${e.id}`,children:[(0,t.jsx)("span",{className:"eye",children:n?"—":"+"}),n?"收起参考答案":"查看参考答案",(0,t.jsx)("span",{className:"arrow",children:n?"↑":"↓"})]}),(0,t.jsxs)("div",{className:"answer",id:`answer-${e.id}`,hidden:!n,children:[(0,t.jsxs)("div",{className:"answer-heading",children:[(0,t.jsx)("strong",{children:"参考答案"}),(0,t.jsx)("span",{children:"答案不唯一，仅供参考"})]}),(0,t.jsx)("pre",{children:(0,t.jsx)("code",{children:e.answer})})]})]})]},e.id)}),0===c.length&&(0,t.jsxs)("div",{className:"empty",children:[(0,t.jsx)("strong",{children:"没有找到相关题目"}),(0,t.jsx)("p",{children:"换个关键词，或者选择其他课程内容试试。"})]})]})]})]}),(0,t.jsxs)("section",{className:"about",id:"about",children:[(0,t.jsx)("span",{children:"学习建议"}),(0,t.jsx)("h2",{children:"先写，再看；先运行，再修改。"}),(0,t.jsx)("p",{children:"参考答案只是其中一种写法。能够运行、结果正确、容易读懂的代码，都是好答案。"}),(0,t.jsx)("a",{href:"#questions",children:"回到题目 ↑"})]}),(0,t.jsxs)("footer",{children:[(0,t.jsx)("strong",{children:"张明月《Python程序设计》"}),(0,t.jsx)("span",{children:"习题内容依据第 2 讲《变量》整理"}),(0,t.jsx)("a",{href:"https://mingyue-z.github.io/",children:"返回张明月个人主页 ↗"}),(0,t.jsx)("span",{children:"2026 秋"})]})]})}])}]);
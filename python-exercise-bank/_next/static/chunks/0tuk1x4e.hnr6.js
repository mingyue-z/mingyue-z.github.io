(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,31713,e=>{"use strict";var s=e.i(26691),n=e.i(52106);let i=["全部题目","语言基本规则","变量","字符串","数字","列表"],t=[{id:1,section:"语言基本规则",type:"选择题",level:"入门",title:"识别规范的缩进",prompt:"下面哪种做法最符合 Python 的缩进规范？\n\nA. 同一代码块中混用 Tab 和空格\nB. 同一代码块统一使用 4 个空格\nC. 缩进空格数可以随意变化\nD. Python 不依赖缩进表示代码块",answer:`# 正确答案：B
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
print(backup)       # 副本仍以 72 开头`}];e.s(["default",0,function(){let[e,r]=(0,n.useState)("全部题目"),[a,l]=(0,n.useState)(""),[c,o]=(0,n.useState)([]),d=(0,n.useMemo)(()=>{let s=a.trim().toLowerCase();return t.filter(n=>{let i="全部题目"===e||n.section===e,t=!s||`${n.title} ${n.prompt} ${n.section}`.toLowerCase().includes(s);return i&&t})},[e,a]);return(0,s.jsxs)("main",{children:[(0,s.jsxs)("header",{className:"site-header",children:[(0,s.jsxs)("a",{className:"brand",href:"#top","aria-label":"Python 习题库首页",children:[(0,s.jsx)("span",{className:"brand-mark",children:"Py"}),(0,s.jsxs)("span",{children:[(0,s.jsx)("strong",{children:"Python 习题库"}),(0,s.jsx)("small",{children:"张明月《Python程序设计》课程"})]})]}),(0,s.jsxs)("nav",{"aria-label":"页面导航",children:[(0,s.jsx)("a",{href:"#questions",children:"开始练习"}),(0,s.jsx)("a",{href:"#about",children:"使用说明"}),(0,s.jsx)("a",{href:"https://mingyue-z.github.io/",children:"教师主页 ↗"})]})]}),(0,s.jsxs)("section",{className:"hero",id:"top",children:[(0,s.jsxs)("div",{className:"hero-copy",children:[(0,s.jsx)("p",{className:"eyebrow",children:"第 02 讲 · 变量与基础数据类型"}),(0,s.jsxs)("h1",{children:["把每一个概念，",(0,s.jsx)("br",{}),"写成",(0,s.jsx)("span",{children:"可以运行的代码。"})]}),(0,s.jsx)("p",{className:"intro",children:"本习题库来自张明月《Python程序设计》课程。从变量命名到列表切片，15 道循序渐进的练习，帮助你把课堂知识真正用起来。"}),(0,s.jsxs)("div",{className:"hero-actions",children:[(0,s.jsxs)("a",{className:"primary",href:"#questions",children:["开始练习 ",(0,s.jsx)("span",{children:"→"})]}),(0,s.jsx)("span",{className:"time",children:"约 45 分钟 · 无需登录"})]})]}),(0,s.jsxs)("div",{className:"code-window","aria-label":"Python 代码示例",children:[(0,s.jsxs)("div",{className:"window-bar",children:[(0,s.jsx)("i",{}),(0,s.jsx)("i",{}),(0,s.jsx)("i",{}),(0,s.jsx)("span",{children:"practice.py"})]}),(0,s.jsx)("pre",{children:(0,s.jsxs)("code",{children:[(0,s.jsx)("b",{children:"topics"})," = [",(0,s.jsx)("em",{children:'"变量"'}),", ",(0,s.jsx)("em",{children:'"字符串"'}),", ",(0,s.jsx)("em",{children:'"数字"'}),", ",(0,s.jsx)("em",{children:'"列表"'}),"]",`

`,(0,s.jsx)("span",{children:"# 从理解走向实践"}),`
`,"today = topics[",(0,s.jsx)("b",{children:"0"}),"]",`
`,"print(",(0,s.jsxs)("em",{children:['f"今天练习：',"{today}",'"']}),")",`

`,(0,s.jsx)("span",{children:"# 输出：今天练习：变量"})]})}),(0,s.jsx)("div",{className:"code-decoration",children:"01"})]})]}),(0,s.jsxs)("section",{className:"content",id:"questions",children:[(0,s.jsx)("aside",{children:(0,s.jsxs)("div",{className:"aside-sticky",children:[(0,s.jsx)("p",{className:"aside-label",children:"课程内容"}),(0,s.jsx)("div",{className:"section-list",children:i.map(n=>{let i="全部题目"===n?t.length:t.filter(e=>e.section===n).length;return(0,s.jsxs)("button",{className:e===n?"active":"",onClick:()=>r(n),children:[(0,s.jsx)("span",{children:n}),(0,s.jsx)("b",{children:i})]},n)})}),(0,s.jsxs)("div",{className:"progress-card",children:[(0,s.jsx)("span",{children:"本讲练习"}),(0,s.jsxs)("strong",{children:[t.length," ",(0,s.jsx)("small",{children:"道题"})]}),(0,s.jsx)("p",{children:"建议先独立完成，再查看参考答案。"})]})]})}),(0,s.jsxs)("div",{className:"question-area",children:[(0,s.jsxs)("div",{className:"question-toolbar",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"eyebrow",children:"练习列表"}),(0,s.jsx)("h2",{children:e}),(0,s.jsxs)("span",{children:["共 ",d.length," 道题"]})]}),(0,s.jsxs)("label",{className:"search",children:[(0,s.jsx)("span",{children:"⌕"}),(0,s.jsx)("input",{value:a,onChange:e=>l(e.target.value),placeholder:"搜索题目或知识点","aria-label":"搜索题目"})]})]}),(0,s.jsxs)("div",{className:"question-list",children:[d.map(e=>{let n=c.includes(e.id);return(0,s.jsxs)("article",{className:`question-card ${n?"is-open":""}`,children:[(0,s.jsx)("div",{className:"question-number",children:String(e.id).padStart(2,"0")}),(0,s.jsxs)("div",{className:"question-body",children:[(0,s.jsxs)("div",{className:"tags",children:[(0,s.jsx)("span",{children:e.section}),(0,s.jsx)("span",{children:e.type}),(0,s.jsx)("span",{className:`level ${e.level}`,children:e.level})]}),(0,s.jsx)("h3",{children:e.title}),(0,s.jsx)("p",{className:"prompt",children:e.prompt}),e.note&&(0,s.jsxs)("p",{className:"hint",children:["提示 · ",e.note]}),(0,s.jsxs)("button",{className:"answer-toggle",onClick:()=>{var s;return s=e.id,void o(e=>e.includes(s)?e.filter(e=>e!==s):[...e,s])},"aria-expanded":n,"aria-controls":`answer-${e.id}`,children:[(0,s.jsx)("span",{className:"eye",children:n?"—":"+"}),n?"收起参考答案":"查看参考答案",(0,s.jsx)("span",{className:"arrow",children:n?"↑":"↓"})]}),(0,s.jsxs)("div",{className:"answer",id:`answer-${e.id}`,hidden:!n,children:[(0,s.jsxs)("div",{className:"answer-heading",children:[(0,s.jsx)("strong",{children:"参考答案"}),(0,s.jsx)("span",{children:"答案不唯一，仅供参考"})]}),(0,s.jsx)("pre",{children:(0,s.jsx)("code",{children:e.answer})})]})]})]},e.id)}),0===d.length&&(0,s.jsxs)("div",{className:"empty",children:[(0,s.jsx)("strong",{children:"没有找到相关题目"}),(0,s.jsx)("p",{children:"换个关键词，或者选择其他课程内容试试。"})]})]})]})]}),(0,s.jsxs)("section",{className:"about",id:"about",children:[(0,s.jsx)("span",{children:"学习建议"}),(0,s.jsx)("h2",{children:"先写，再看；先运行，再修改。"}),(0,s.jsx)("p",{children:"参考答案只是其中一种写法。能够运行、结果正确、容易读懂的代码，都是好答案。"}),(0,s.jsx)("a",{href:"#questions",children:"回到题目 ↑"})]}),(0,s.jsxs)("footer",{children:[(0,s.jsx)("strong",{children:"张明月《Python程序设计》"}),(0,s.jsx)("span",{children:"习题内容依据第 2 讲《变量》整理"}),(0,s.jsx)("a",{href:"https://mingyue-z.github.io/",children:"返回张明月个人主页 ↗"}),(0,s.jsx)("span",{children:"2026 秋"})]})]})}])}]);
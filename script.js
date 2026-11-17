
/* =================================
   STUDENT LOGIN
================================= */

const correctRoll = "24JNA33010";
const correctName = "B. SNEHA";

document.getElementById("loginForm")
.addEventListener("submit", function(e) {

  e.preventDefault();

  const roll = document.getElementById("roll")
    .value.trim().toUpperCase();

  const name = document.getElementById("studentName")
    .value.trim().toUpperCase();

  const error = document.getElementById("error");

  if (roll === correctRoll && name === correctName) {

    document.getElementById("loginPage").style.display = "none";

    document.getElementById("website").style.display = "block";

    showPage("about");

  } else {

    error.textContent = "Invalid Roll Number or Student Name!";
    error.style.color = "red";

  }

});


/* =================================
   PAGE NAVIGATION
================================= */

function showPage(pageId) {

  document.querySelectorAll(".page").forEach(page => {
    page.hidden = true;
  });

  const selectedPage = document.getElementById(pageId);

  if (selectedPage) {
    selectedPage.hidden = false;
    window.scrollTo(0, 0);
  }

}


/* =================================
   LOGOUT
================================= */

function logout() {

  document.getElementById("website").style.display = "none";

  document.getElementById("loginPage").style.display = "flex";

  document.getElementById("loginForm").reset();

  document.getElementById("error").textContent = "";

  document.getElementById("roll").focus();

}


/* =================================
   PROGRAMMING LESSONS
================================= */

const skills = {

html: {
 title: "HTML - HyperText Markup Language",
 topics: [

 ["Introduction to HTML",
 "HTML is used to create the structure of web pages. It tells the browser how content should be organized.",
 "<!DOCTYPE html>\n<html>\n<body>\n<h1>Hello Sneha</h1>\n</body>\n</html>",
 "HTML is the foundation of website development."],

 ["HTML Headings",
 "HTML provides six heading tags. H1 is the largest and H6 is the smallest.",
 "<h1>Main Heading</h1>\n<h2>Sub Heading</h2>\n<h3>Third Heading</h3>",
 "Used for titles and subtitles."],

 ["Paragraph",
 "The P tag is used to display text in paragraph form.",
 "<p>My name is B. Sneha.</p>",
 "Used for descriptions and content."],

 ["HTML Links",
 "The anchor tag creates hyperlinks to other pages or websites.",
 '<a href="https://example.com">Visit Website</a>',
 "Used for website navigation."],

 ["HTML Images",
 "The IMG tag displays images on a webpage. The alt attribute describes the image.",
 '<img src="photo.jpg" alt="My Photo" width="200">',
 "Used for displaying profile and project images."],

 ["HTML Lists",
 "HTML provides ordered lists and unordered lists to display items.",
 "<ul>\n<li>HTML</li>\n<li>CSS</li>\n</ul>",
 "Used to show lists of skills and information."],

 ["HTML Tables",
 "Tables arrange information in rows and columns using table, tr, th and td.",
 "<table>\n<tr><th>Name</th></tr>\n<tr><td>Sneha</td></tr>\n</table>",
 "Used for displaying marks and student records."],

 ["HTML Forms",
 "Forms collect user input such as names, email addresses and messages.",
 '<form>\n<input type="text" placeholder="Name">\n<button>Submit</button>\n</form>',
 "Used for registration and login forms."],

 ["HTML Semantic Tags",
 "Semantic tags describe the meaning of page sections.",
 "<header>Header</header>\n<nav>Menu</nav>\n<main>Content</main>\n<footer>Footer</footer>",
 "Used to create well-organized webpages."]
 ]
},

css: {
 title: "CSS - Cascading Style Sheets",
 topics: [

 ["Introduction to CSS",
 "CSS is used to style HTML elements and improve website appearance.",
 "body {\n background-color: lavender;\n color: purple;\n}",
 "Used to design attractive websites."],

 ["CSS Selectors",
 "Selectors identify HTML elements that need styling.",
 "h1 {\n color: blue;\n}",
 "Used to apply styles to specific elements."],

 ["CSS Colors",
 "CSS supports named colors, HEX, RGB and HSL values.",
 "p {\n color: #7043c3;\n}",
 "Used to change text and background colors."],

 ["CSS Background",
 "Background properties set colors or images behind elements.",
 "body {\n background: lightblue;\n}",
 "Used to design page backgrounds."],

 ["Margin and Padding",
 "Margin creates space outside an element. Padding creates space inside an element.",
 "div {\n margin: 20px;\n padding: 15px;\n}",
 "Used to control spacing."],

 ["CSS Borders",
 "Borders create outlines around HTML elements.",
 "div {\n border: 2px solid purple;\n border-radius: 10px;\n}",
 "Used to style cards and boxes."],

 ["CSS Flexbox",
 "Flexbox arranges elements in rows or columns.",
 ".container {\n display: flex;\n justify-content: center;\n gap: 15px;\n}",
 "Used for navigation bars and layouts."],

 ["CSS Grid",
 "Grid organizes elements into rows and columns.",
 ".container {\n display: grid;\n grid-template-columns: repeat(2,1fr);\n}",
 "Used for project and skill cards."],

 ["Responsive Design",
 "Responsive design makes websites work on mobile, tablet and desktop.",
 "@media(max-width:600px) {\n body { font-size: 14px; }\n}",
 "Used to create mobile-friendly websites."]
 ]
},

java: {
 title: "JAVA - Programming Language",
 topics: [

 ["Introduction to Java",
 "Java is a high-level, object-oriented programming language.",
 'class Main {\n public static void main(String[] args) {\n System.out.println("Hello Sneha");\n }\n}',
 "Used in software, enterprise applications and Android development."],

 ["Variables",
 "Variables store information in memory.",
 "int age = 20;\nString name = \"Sneha\";",
 "Used to store student details and calculations."],

 ["Data Types",
 "Data types specify the kind of value a variable can store.",
 "int number = 10;\ndouble price = 20.5;\nchar grade = 'A';\nboolean result = true;",
 "Used to store different types of information."],

 ["Operators",
 "Operators perform mathematical, comparison and logical operations.",
 "int a = 10;\nint b = 20;\nint sum = a + b;",
 "Used for calculations."],

 ["If Else",
 "If and else statements execute different code depending on conditions.",
 "int age = 20;\nif(age >= 18) {\n System.out.println(\"Adult\");\n} else {\n System.out.println(\"Minor\");\n}",
 "Used for decision-making."],

 ["Loops",
 "Loops repeat instructions until a condition is no longer satisfied.",
 "for(int i=1; i<=5; i++) {\n System.out.println(i);\n}",
 "Used for repeated operations."],

 ["Arrays",
 "Arrays store multiple values of the same data type.",
 "int[] marks = {80,90,95};\nSystem.out.println(marks[0]);",
 "Used for storing multiple student marks."],

 ["Methods",
 "Methods are reusable blocks of code that perform a particular task.",
 "static void greet() {\n System.out.println(\"Hello\");\n}",
 "Used to organize programs."],

 ["Classes and Objects",
 "A class is a blueprint. An object is an instance of a class.",
 "class Student {\n String name = \"Sneha\";\n}",
 "Used in object-oriented programming."],

 ["Inheritance",
 "Inheritance allows a class to reuse properties and methods of another class.",
 "class Animal { }\nclass Dog extends Animal { }",
 "Used for code reuse."]
 ]
},

javascript: {
 title: "JAVASCRIPT - Web Programming",
 topics: [

 ["Introduction to JavaScript",
 "JavaScript adds dynamic behavior and interactivity to webpages.",
 'console.log("Hello Sneha");',
 "Used for interactive websites."],

 ["Variables",
 "Let and const are used to declare variables.",
 "let name = 'Sneha';\nconst age = 20;",
 "Used to store information."],

 ["Data Types",
 "JavaScript supports strings, numbers, booleans, objects and more.",
 "let name = 'Sneha';\nlet age = 20;\nlet active = true;",
 "Used to represent different values."],

 ["Operators",
 "Operators perform calculations and comparisons.",
 "let total = 10 + 20;\nconsole.log(total);",
 "Used for calculations."],

 ["Conditions",
 "If and else statements execute code depending on conditions.",
 "if(age >= 18) {\n console.log('Adult');\n} else {\n console.log('Minor');\n}",
 "Used to make decisions."],

 ["Loops",
 "Loops execute code repeatedly.",
 "for(let i=1; i<=5; i++) {\n console.log(i);\n}",
 "Used to repeat tasks."],

 ["Functions",
 "Functions are reusable blocks of code.",
 "function greet() {\n console.log('Hello Sneha');\n}\ngreet();",
 "Used to organize code."],

 ["Arrays",
 "Arrays store multiple values in a single variable.",
 "let skills = ['HTML','CSS','Java'];\nconsole.log(skills[0]);",
 "Used to store lists of data."],

 ["DOM Manipulation",
 "DOM allows JavaScript to read and modify HTML elements.",
 "document.querySelector('h1').textContent = 'Welcome';",
 "Used to update webpages dynamically."],

 ["Events",
 "Events respond to user actions such as clicking a button.",
 "button.addEventListener('click', function() {\n alert('Hello Sneha');\n});",
 "Used for interactive buttons and forms."]
 ]
},

python: {
 title: "PYTHON - Programming Language",
 topics: [

 ["Introduction to Python",
 "Python is a beginner-friendly language used in automation, data science, AI and machine learning.",
 'print("Hello Sneha")',
 "Used extensively in AI and ML."],

 ["Variables",
 "Variables store information that can be used later.",
 "name = 'Sneha'\nage = 20",
 "Used to store data."],

 ["Data Types",
 "Python supports integers, floats, strings and booleans.",
 "age = 20\nprice = 10.5\nname = 'Sneha'\nactive = True",
 "Used to represent different values."],

 ["Operators",
 "Operators perform mathematical and logical operations.",
 "a = 10\nb = 20\nprint(a + b)",
 "Used in calculations."],

 ["If Else",
 "Conditional statements execute code based on conditions.",
 "age = 20\nif age >= 18:\n    print('Adult')\nelse:\n    print('Minor')",
 "Used for decision-making."],

 ["Loops",
 "Loops repeat a set of instructions.",
 "for i in range(1,6):\n    print(i)",
 "Used to repeat operations."],

 ["Lists",
 "Lists store multiple values and can be modified.",
 "skills = ['HTML','CSS','Python']\nprint(skills[0])",
 "Used for storing collections."],

 ["Tuples",
 "Tuples store ordered values that cannot be changed.",
 "numbers = (10,20,30)\nprint(numbers)",
 "Used for fixed collections."],

 ["Dictionaries",
 "Dictionaries store information in key-value pairs.",
 "student = {\n 'name':'Sneha',\n 'branch':'AIML'\n}",
 "Used to store structured information."],

 ["Functions",
 "Functions are reusable blocks of code.",
 "def greet():\n    print('Hello Sneha')\ngreet()",
 "Used to avoid repeating code."],

 ["Object Oriented Programming",
 "OOP organizes programs using classes and objects.",
 "class Student:\n    def greet(self):\n        print('Hello')",
 "Used to organize larger applications."],

 ["NumPy and Pandas",
 "NumPy is used for numerical computing. Pandas is used for data analysis.",
 "import numpy as np\nimport pandas as pd",
 "Important libraries for AI and ML."]
 ]
}

};


/* =================================
   SHOW SKILL TOPICS
================================= */

function showSkill(language) {

  const data = skills[language];

  const area = document.getElementById("skillContent");

  area.innerHTML = "";

  const heading = document.createElement("h2");
  heading.textContent = data.title;
  area.appendChild(heading);

  const intro = document.createElement("p");
  intro.textContent =
    "Learn each topic with explanation, example code and practical usage.";
  area.appendChild(intro);

  data.topics.forEach((topic,index) => {

    const box = document.createElement("div");
    box.className = "topic";

    const title = document.createElement("h3");
    title.textContent = (index+1) + ". " + topic[0];

    const explanation = document.createElement("p");
    explanation.textContent = "Explanation: " + topic[1];

    const codeTitle = document.createElement("b");
    codeTitle.textContent = "Example Code:";

    const code = document.createElement("pre");
    code.textContent = topic[2];

    const usage = document.createElement("p");
    usage.textContent = "Real-time Usage: " + topic[3];

    box.append(title, explanation, codeTitle, code, usage);

    area.appendChild(box);

  });

  area.scrollIntoView({behavior:"smooth", block:"start"});

}


/* =================================
   CONTACT FORM DEMO
================================= */

document.getElementById("contactForm")
.addEventListener("submit", function(e) {

  e.preventDefault();

  document.getElementById("contactMessage").textContent =
    "Thank you! Your message form is ready. Connect an email service to receive messages.";

  this.reset();

});

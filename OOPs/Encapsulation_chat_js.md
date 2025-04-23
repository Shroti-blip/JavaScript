
---

### 🌟 **What is Encapsulation?**

Encapsulation is one of the core principles of **Object-Oriented Programming (OOP)**.  
It means **bundling** the data (variables) and the methods (functions) that operate on the data into a single unit — usually an **object** — and **restricting direct access** to some of the object's components.

You do this to:
- **Protect** the data
- **Control** how it's modified
- Keep your code **clean** and **secure**

---

### 👀 Real-Life Analogy:
Think of a **capsule** — it contains medicine inside, but you don’t open it up. You just consume it the way it’s designed to be taken. Similarly, in encapsulation, internal details are hidden, and only what’s needed is exposed.

---

### 🧪 Encapsulation in JavaScript — How?

In JS, we achieve encapsulation using:
1. **Closures**
2. **Private class fields** (modern ES6+)
3. **Getters & Setters**

---

### 1. **Using Closures (Function Scope)**
```js
function Person(name, age) {
  let _age = age;  // private variable

  this.name = name;

  this.getAge = function() {
    return _age;
  };

  this.setAge = function(newAge) {
    if (newAge > 0) {
      _age = newAge;
    }
  };
}

const person1 = new Person("Elara", 20);
console.log(person1.getAge());   // 20
person1.setAge(21);
console.log(person1.getAge());   // 21
```
🧠 `_age` can't be accessed directly — only through the methods.

---

### 2. **Using Private Fields in Classes (ES2020+)**
```js
class Person {
  #age; // private field

  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }

  getAge() {
    return this.#age;
  }

  setAge(newAge) {
    if (newAge > 0) this.#age = newAge;
  }
}

const p = new Person("Elara", 20);
console.log(p.getAge()); // 20
p.setAge(22);
console.log(p.getAge()); // 22
// console.log(p.#age); ❌ Error: Private field
```

---

### 3. **Using Getters & Setters**
```js
class Student {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (newName.length > 0) {
      this._name = newName;
    }
  }
}

const s = new Student("Muksan");
console.log(s.name); // Muksan
s.name = "Elara";
console.log(s.name); // Elara
```

---

### ✨ Why Use Encapsulation?
- **Prevents accidental changes** to data
- Makes your code **easier to debug and maintain**
- Promotes **modularity** and **reusability**

---


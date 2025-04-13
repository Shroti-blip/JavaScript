
---

### ✅ In simple words:

> **Every HTML element becomes an object in the DOM**,  
> and **we can perform operations** (read, change, delete, add) on those objects **at runtime using JavaScript.**

---

### 📚 For example:

In your HTML:

```html
<h1 id="title">Welcome</h1>
```

In the DOM (once the page loads), this becomes a JS object:

```js
let heading = document.getElementById("title");
```

Now `heading` is an **object** that represents your `<h1>` tag, and you can do things like:

- `heading.textContent = "Hello, Elara!";` → Changes the text
- `heading.style.color = "blue";` → Changes the color
- `heading.classList.add("fancy");` → Adds a CSS class
- `heading.remove();` → Deletes the element from the page

---

### 🔁 Runtime = After the page loads

JavaScript reads the DOM after your page loads, so you can update the page **without refreshing**, based on user interaction, time, API response, etc.



> **“In the DOM, every element in HTML is treated as an object that can be accessed and manipulated using JavaScript at runtime.”**

---


### Real Life Examples of DOM Usage:


 To-Do App: Add tasks, mark them complete, delete them.

Weather App: Show data from API and update DOM with temperature, humidity, etc.

Form Validation: Alert users when fields are empty or invalid.

Dark Mode: Toggle background and text colors.

Interactive Menus, Modals, Sliders, Carousels, etc.






###  Purpose of the DOM
### Purpose	                             Description
Dynamic Content	                       Change page content without reloading.
User Interaction	                   Respond to clicks, typing, etc.
Animation & Effects	                   Move elements, change styles, fade in/out, etc.
Validation	                           Check form inputs before submission.
Communication	                       Update UI based on API data.


### Important DOM Methods and Properties.

### Method/Property	                                Use
getElementById()	                          Get element by ID
getElementsByClassName()	                  Get all elements with a class
querySelector()	                              Get the first matching element
querySelectorAll()	                          Get all matching elements
innerHTML	                                  Get/set HTML inside an element
textContent	                                  Get/set plain text
style	                                      Access inline styles
classList	                                  Add/remove/toggle CSS classes
setAttribute()	                              Change attributes like href, src
createElement()                               Make new HTML elements
appendChild()	                              Add elements to the DOM
removeChild()	                              Remove elements
addEventListener()	                           Attach events like click, keydown



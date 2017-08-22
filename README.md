# Wysiwyg

Basics of Project

* Create an array of objects that represents famous people.
* Create a text input in your DOM.
* Beneath that, create a container, block element in your DOM.
* Create a DOM element for each of the objects inside the container. Style your person elements however you like.
* For every even numbered element, have a light yellow background.
* For every odd numbered element, have a light blue background.
* Each element's DOM structure should be as shown below.
* When you click on one of the person elements, a dotted border should appear around it.
* When you click on one of the person elements, the text input should immediately gain focus so that you can start typing.
* When there is a highlighted person element, and you begin typing in the input box, the person's biography should be immediately bound to what you are typing, letter by letter.
* When you press the enter/return key when typing in the input field, then the content of the input field should immediately be blank.




#Here's some code!

```for (var i = 0; i < cards.length; i++) {
        cards[i].style.border = "solid black 1px";
    }

    if (e.target.classList.contains("personCard")) {
        e.target.style.border = "dotted 2px";
        selectedCard = e.target.childNodes[3].childNodes[0]
    } else if (e.target.classList.contains("child")) {
        e.target.parentNode.style.border = "dotted 2px";
        selectedCard = e.target.parentNode.childNodes[3].childNodes[0]
    } else if (e.target.classList.contains("grandChild")) {
        e.target.parentNode.parentNode.style.border = "dotted 2px";
        selectedCard = e.target.parentNode.parentNode.childNodes[3].childNodes[0]
    };
    document.getElementById("text").focus();
}
```

![Screen Shot of Project](https://github.com/Matthensley777/wysiwygE6/blob/master/images/Screen%20Shot%202017-08-21%20at%206.57.02%20PM.png)

### How to Download Project
Copy Link
![From Wysiwyg Page](https://github.com/Matthensley777/wysiwygE6/blob/master/images/Screen%20Shot%202017-08-19%20at%201.30.29%20PM.png)

![Past into terminal (git clone)](https://github.com/Matthensley777/wysiwygE6/blob/master/images/Screen%20Shot%202017-08-19%20at%201.31.07%20PM.png)


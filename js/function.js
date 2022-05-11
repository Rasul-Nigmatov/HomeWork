//functionni ishga tushurish

const getElement = function(elName, className,textContent) {
    const createElement = document.createElement(elName);
    createElement.className = className;

    if (textContent) {
        textContent = textContent;
    }

    return createElement;
}


const appendChildren = function(parentElement, children) {
    for (let i = 0; i < children.length; i++) {
        parentElement.append(children[i])
    }


    return appendChildren;
}

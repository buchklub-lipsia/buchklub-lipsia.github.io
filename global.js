function hamburgerToggle() {
    const nav = document.getElementById("navlinks");
    if (nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
}

function getSiblingByClass(e, className) {
    const siblings = e.parentElement.children;
    for (const sibling of siblings) {
        if (sibling.classList.contains(className)) {
            return sibling;
        }
    }
}

const colls = document.getElementsByClassName("collapser");
for (let i = 0; i < colls.length; i++) {
    const coll = colls[i];
    coll.innerHTML = "&blacktriangleright; " + coll.innerHTML;
    coll.nextElementSibling.style.display = "none";
    coll.addEventListener("click", function() {
        this.classList.toggle("active");
        const content = this.nextElementSibling;
        if (content.style.display === "block") {
            this.innerHTML = "&blacktriangleright;" + this.innerHTML.substring(1);
            content.style.display = "none";
        } else {
            this.innerHTML = "&blacktriangledown;" + this.innerHTML.substring(1);
            content.style.display = "block";
        }
    });
}
const readMoreThreshold = 100;
const quotes = document.getElementsByTagName("blockquote");
const MORE = "... Mehr anzeigen";
const LESS = " (Weniger anzeigen)";
for (let i = 0; i < quotes.length; i++) {
    const e = quotes[i];
    if (e.innerHTML.length >= readMoreThreshold) {
        e.innerHTML = e.innerHTML.substring(0, readMoreThreshold)
            + '<span class="more">' + MORE + '</span><span class="more-content" style="display:none;">'
            + e.innerHTML.substring(readMoreThreshold)
            + '</span><span class="less" style="display:none;">' + LESS + '</span>';
    }
}

const more = document.getElementsByClassName("more");
for (let i = 0; i < more.length; i++) {
    const e = more[i];
    e.addEventListener("click", function() {
        const content = getSiblingByClass(this, "more-content");
        content.style.display = "inline";
        getSiblingByClass(this, "less").style.display = "inline";
        this.style.display = "none";
    });
}

const less = document.getElementsByClassName("less");
for (let i = 0; i < less.length; i++) {
    const e = less[i];
    e.addEventListener("click", function() {
        const content = getSiblingByClass(this, "more-content");
        content.style.display = "none";
        getSiblingByClass(this, "more").style.display = "inline";
        this.style.display = "none";
    });
}

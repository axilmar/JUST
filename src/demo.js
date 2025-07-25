import { Router, Route, navigate } from "./Router.js";
import { div } from "./div.js";

const a = (link, text) => {
    const result = document.createElement("a");
    result.href = link;
    result.append(text);
    return result;
}

const nav = (...children) => {
    const result = document.createElement("nav");
    result.append(...children);
    return result;
}

const ol = (...children) => {
    const result = document.createElement("ol");
    result.append(...children);
    return result;
}

const li = (...children) => {
    const result = document.createElement("li");
    result.append(...children);
    return result;
}

const n = nav(
    a("/dashboard", "Dashboard"),
    " | ",
    a("/products", "Products"),
    " | ",
    a("/user", "User")
);

document.body.append(n);

const productList = ol(
    li(a("/products/1", "Product1")),
    li(a("/products/2", "Product2")),
    li(a("/products/3", "Product3"))
);

document.body.append(productList);

const product1 = div({id:"product1"}, "product1");
const product2 = div({id:"product2"}, "product2");
const product3 = div({id:"product3"}, "product3");
document.body.append(product1, product2, product3);

document.body.append(a("http://www.wikipedia.org/", "wikipedia"));
document.body.append(" | ");
document.body.append(a("/bar/foo1", "/bar/foo1"));
document.body.append(" | ");
document.body.append(a("/bar/foo2", "/bar/foo2"));
document.body.append(" | ");
document.body.append(a("/foo1", "/foo1"));
document.body.append(" | ");
document.body.append(a("/foo2", "/foo2"));
document.body.append(" | ");
document.body.append(a("/", "/"));

const hideProducts = () => {
    product1.style.display = "none";
    product2.style.display = "none";
    product3.style.display = "none";
}

const showProduct = (product) => {
    hideProducts();
    product.style.display = "block";
}

Router(
    Route("/dashboard", () => { console.log("Selected dashboard at " + new Date()); productList.style.display = "none"; hideProducts();}),
    Route("/products", () => { console.log("Selected products at " + new Date()); productList.style.display = "block"; hideProducts();},
        Route("/:productId", (params) => { console.log(`Selected product ${params.productId} at ${new Date().toString()}`); showProduct(document.querySelector(`#product${params.productId}`)); })),
    Route("/user", () => { console.log("Selected user at " + new Date()); productList.style.display = "none"; hideProducts();}),
    Route(/\/bar\/.+/, () => { console.log("invalid route /bar/.+"); navigate("/"); }),
    Route("/.+", () => { console.log("invalid route /.+"); navigate("/"); }),
    Route("/", () => navigate("/dashboard"))
);

const div2 = document.createElement("div");
div2.className = "class1";
div2.className = " class2";
console.log(div2.className);

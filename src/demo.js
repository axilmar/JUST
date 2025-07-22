import { Router, Route, navigate } from "./Router.js";

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
    li(a("/products/product1", "Product1")),
    li(a("/products/product2", "Product2")),
    li(a("/products/product3", "Product3"))
);

document.body.append(productList);

Router(
    Route("/dashboard", () => { console.log("Selected dashboard at " + new Date()); productList.style.display = "none"; }),
    Route("/products", () => { console.log("Selected products at " + new Date()); productList.style.display = "block"; },
        Route("/product1", () => { console.log("Selected product1 at " + new Date()); }),
        Route("/product2", () => { console.log("Selected product2 at " + new Date()); }),
        Route("/product3", () => { console.log("Selected product3 at " + new Date()); })),
    Route("/user", () => { console.log("Selected user at " + new Date()); productList.style.display = "none"; }),
    Route("/", () => navigate("/dashboard")),
);

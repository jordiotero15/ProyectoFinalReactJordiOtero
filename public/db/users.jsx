export let userDb = [{
    id: 1,
    user: "Admin",
    email: "jordiotero15@gmail.com",
    pass: "admin123",
}];

JSON.parse(localStorage.getItem("users")) || localStorage.setItem("users", JSON.stringify(userDb));
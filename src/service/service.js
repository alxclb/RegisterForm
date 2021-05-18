export function getRegistrationLabels(){
    return fetch("http://localhost:8000/registrationLabels").then(data=>data.json());
}

export default function createUser(data) {
    fetch("http://localhost:8000/createUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => console.log(data));
}

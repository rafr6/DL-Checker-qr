
const data = {
    "DK0897294CH0874": {
        name: "Ajharul Islam",
        dob: "05 Aug 1997",
        blood: "B+",
        father: "Abul Kalam Azad",
        issue: "01 Jan 2021",
        validity: "01 Jan 2031",
        licence: "DK0897294CH0874",
        authority: "BRTA Dhaka",
        address: "Rajshahi, Bangladesh",
        class: "Light Motor Vehicle (LMV)",
        photo: "profile.jpg"
    }
};

function getParam(key) {
    const params = new URLSearchParams(window.location.search);
    return params.get(key);
}

window.onload = () => {
    const licenceNo = getParam("licence");
    const details = data[licenceNo];
    if (details) {
        document.getElementById("licence-details").style.display = "block";
        document.getElementById("name").textContent = details.name;
        document.getElementById("dob").textContent = details.dob;
        document.getElementById("blood").textContent = details.blood;
        document.getElementById("father").textContent = details.father;
        document.getElementById("issue").textContent = details.issue;
        document.getElementById("validity").textContent = details.validity;
        document.getElementById("licence").textContent = details.licence;
        document.getElementById("authority").textContent = details.authority;
        document.getElementById("address").textContent = details.address;
        document.getElementById("class").textContent = details.class;
        document.getElementById("photo").src = details.photo;
    } else {
        document.getElementById("not-found").style.display = "block";
    }
};

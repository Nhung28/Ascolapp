// const data = {
//     leo: {
//         displayName: 'Leo',
//         dobFrom: '1/1',
//         dobTo: '2/2',
//         characteristics: [
//             'Character 1',
//             'Character 2',
//             '...',
//         ],
//         matchWithOther: {
//             leo: {
//                 matchPoint
//             }
//         }
//     }
// }

const name1El = document.getElementById("name1");
const name2El = document.getElementById("name2");
const dob1El = document.getElementById("dob1");
const dob21El = document.getElementById("dob2");
const gender1Male = document.getElementById("gender1-male");
const gender1Female = document.getElementById("gender1-female");
const gender2Male = document.getElementById("gender2-male");
const gender2Female = document.getElementById("gender2-female");

const submitBtn = document.getElementById("submit-btn");

const elementsToListenChanges = [
  name1El,
  name2El,
  dob1El,
  dob21El,
  gender1Female,
  gender1Male,
  gender2Female,
  gender2Male,
];

const formData = {};

const handleChange = (field, value) => {
  formData[field] = value;
};

for (let i = 0; i < elementsToListenChanges.length; i++) {
  const element = elementsToListenChanges[i];
  if (element.type === "text") {
    element.addEventListener("keyup", () => {
      handleChange(element.id, element.value);
    });
  }
  if (element.type === "date") {
    element.addEventListener("change", () => {
      handleChange(element.id, element.value);
    });
  }
  if (element.type === "radio") {
    element.addEventListener("click", () => {
      handleChange(element.name, element.value);
    });
  }
}

submitBtn.addEventListener("click", () => {
  if (Object.keys(formData).length === 6) {
    localStorage.setItem("formData", JSON.stringify(formData));
    window.location = "./results.html";
  }
});

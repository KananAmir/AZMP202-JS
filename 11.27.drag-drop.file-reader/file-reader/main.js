const fileInput = document.querySelector("#file");
const text = document.querySelector(".text");

const profilePictureInput = document.querySelector("#profile-pic");
const profilePicture = document.querySelector(".profile");

fileInput.addEventListener("change", function (event) {
  //   console.log(event);
  const file = event.target.files[0];

  //   console.log(file);

  if (file && file.type === "text/plain") {
    const reader = new FileReader();
    reader.readAsText(file);

    reader.onload = function () {
      // console.log(reader.result);

      text.textContent = reader.result;
    };

    reader.onerror = function () {
      console.log(reader.error);
    };
  } else {
    alert("yalnız text file seçməlisiniz!");
  }
});

// profilePictureInput.addEventListener("change", function (e) {
//   const file = e.target.files[0];
//   //   console.log(file);

//   if (file && file.type.startsWith("image")) {
//     const reader = new FileReader();

//     reader.readAsDataURL(file);

//     reader.onload = function () {
//       console.log(reader.result);

//       profilePicture.src = reader.result;
//       //   profilePicture.setAttribute("src", reader.result);
//     };
//     reader.onerror = function () {
//       console.log(reader.error);
//     };
//   } else {
//     alert("yalnız image seçə bilərsiz!");
//   }
// });
profilePictureInput.addEventListener("change", function (e) {
  const files = e.target.files;
  //   console.log(file);

  console.log(files);

  if (files.length > 0) {
    for (const file of files) {
      const trElem = document.createElement("tr");
      const tdImage = document.createElement("td");
      const tdFileName = document.createElement("td");
      const tdFileSize = document.createElement("td");
      const tdRemove = document.createElement("td");
      const removeBtn = document.createElement("button");

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        tdImage.innerHTML = `<img src="${reader.result}" style="width: 100px"/>`;
      };
      reader.onerror = function () {
        console.log(reader.error);
      };

      tdFileName.textContent = file.name;
      tdFileSize.textContent = file.size;

      removeBtn.textContent = "remove";

      removeBtn.addEventListener("click", function () {
        this.closest("tr").remove();
      });
      tdRemove.append(removeBtn);

      trElem.append(tdImage, tdFileName, tdFileSize, tdRemove);
      document.querySelector("tbody").append(trElem);
    }
  } else {
    alert("heç bir file seçilməyib!");
  }
});

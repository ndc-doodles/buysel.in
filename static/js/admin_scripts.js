// document.addEventListener("contextmenu", function(e){
//         e.preventDefault();
//     });

//     document.onkeydown = function(e) {
//         if (e.keyCode == 123) { 
//             return false;
//         }
//         if (e.ctrlKey && e.shiftKey && (e.keyCode == 'I'.charCodeAt(0) ||
//                                         e.keyCode == 'J'.charCodeAt(0) ||
//                                         e.keyCode == 'C'.charCodeAt(0))) {
//             return false;
//         }
//         if (e.ctrlKey && (e.keyCode == 'U'.charCodeAt(0))) { 
//             return false;
//         }
//     };






    const form = document.getElementById('blogForm');
    const tableBody = document.getElementById('blogTableBody');
    const editModal = document.getElementById('editModal');
    const editForm = document.getElementById('editBlogForm');

    let blogData = [];

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const inputs = form.querySelectorAll('input, textarea');
      const newBlog = {
        tag: inputs[0].value,
        date: inputs[1].value,
        shortHeading: inputs[2].value,
        fullHeading: inputs[3].value,
        para1: inputs[4].value,
        para2: inputs[5].value,
        para3: inputs[6].value,
        para4: inputs[7].value,
        image: inputs[8].files[0]?.name || ''
      };
      blogData.push(newBlog);
      renderTable();
      form.reset();
    });

    function renderTable() {
      tableBody.innerHTML = '';
      blogData.forEach((blog, index) => {
        tableBody.innerHTML += `
          <tr class="border-b">
            <td class="px-4 py-2">${blog.tag}</td>
            <td class="px-4 py-2">${blog.date}</td>
            <td class="px-4 py-2">${blog.shortHeading}</td>
            <td class="px-4 py-2">${blog.image}</td>
            <td class="px-4 py-2 space-x-2">
              <button onclick="openAdminBlogEditModal(${index})" class="text-blue-600 underline">Edit</button>
              <button onclick="deleteBlog(${index})" class="text-red-600 underline">Delete</button>
            </td>
          </tr>
        `;
      });
    }

    function openAdminBlogEditModal(index) {
      const blog = blogData[index];
      document.getElementById('editTag').value = blog.tag;
      document.getElementById('editDate').value = blog.date;
      document.getElementById('editShortHeading').value = blog.shortHeading;
      document.getElementById('editFullHeading').value = blog.fullHeading;
      document.getElementById('editPara1').value = blog.para1;
      document.getElementById('editPara2').value = blog.para2;
      document.getElementById('editPara3').value = blog.para3;
      document.getElementById('editPara4').value = blog.para4;

      editForm.onsubmit = function (e) {
        e.preventDefault();
        blogData[index] = {
          tag: document.getElementById('editTag').value,
          date: document.getElementById('editDate').value,
          shortHeading: document.getElementById('editShortHeading').value,
          fullHeading: document.getElementById('editFullHeading').value,
          para1: document.getElementById('editPara1').value,
          para2: document.getElementById('editPara2').value,
          para3: document.getElementById('editPara3').value,
          para4: document.getElementById('editPara4').value,
          image: blog.image // keep existing image name
        };
        closeAdminBlogEditModal();
        renderTable();
      };

      editModal.classList.remove('hidden');
    }

    function closeAdminBlogEditModal() {
      editModal.classList.add('hidden');
    }

    function deleteBlog(index) {
      blogData.splice(index, 1);
      renderTable();
    }












// Add Amenity Field (works for any container)
function addAmenityField(value = "", containerId) {
  const container = document.getElementById(containerId);

  const wrapper = document.createElement("div");
  wrapper.className = "flex items-center space-x-2";

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Enter Amenity";
  input.value = value;
  input.className = "w-full border px-3 py-2 rounded";

  const delBtn = document.createElement("button");
  delBtn.type = "button";
  delBtn.innerHTML = "&#10006;";
  delBtn.className = "text-red-500 hover:text-red-700 text-lg font-bold px-2";
  delBtn.onclick = () => wrapper.remove();

  wrapper.appendChild(input);
  wrapper.appendChild(delBtn);

  container.appendChild(wrapper);
}

// Initialize both containers with one empty field
window.onload = () => {
  if (document.getElementById("modalEditAmenitiesContainer").children.length === 0) {
    addAmenityField("", "modalEditAmenitiesContainer");
  }
  if (document.getElementById("formAmenitiesContainer").children.length === 0) {
    addAmenityField("", "formAmenitiesContainer");
  }
};

// Open Modal + Populate Data
function openAdminPropertyEditModal(button) {
  const row = button.closest("tr");
  const cells = row.querySelectorAll("td");

  // Extract values from table row
  const category = cells[1].innerText;
  const purpose = cells[2].innerText;
  const label = cells[3].innerText;
  const area = cells[4].innerText;
  const sqft = cells[5].innerText;
  const desc = cells[6].innerText;
  const amenitiesText = cells[7].innerText;
  const location = cells[8].innerText;
  const landmark = cells[9].innerText;
  const city = cells[10].innerText;
  const district = cells[11].innerText;
  const price = cells[12].innerText;
  const totalPrice = cells[13].innerText;
  const owner = cells[14].innerText;
  const phone = cells[15].innerText;
  const whatsapp = cells[16].innerText;
  const paid = cells[17].innerText;
  const addedBy = cells[18].innerText;

  // Fill modal inputs
  document.getElementById("editCategory").value = category;
  document.getElementById("editPurpose").value = purpose;
  document.getElementById("editLabel").value = label;
  document.getElementById("editArea").value = area;
  document.getElementById("editSqft").value = sqft;
  document.getElementById("editDesc").value = desc;
  document.getElementById("editLocation").value = location;
  document.getElementById("editLandmark").value = landmark;
  document.getElementById("editCity").value = city;
  document.getElementById("editDistrict").value = district;
  document.getElementById("editPrice").value = price;
  document.getElementById("editTotalPrice").value = totalPrice;
  document.getElementById("editOwner").value = owner;
  document.getElementById("editPhone").value = phone;
  document.getElementById("editWhatsappNumber").value = whatsapp;
  document.getElementById("editPaid").value = paid;
  document.getElementById("editAddedBy").value = addedBy;

  // Populate amenities
  const container = document.getElementById("modalEditAmenitiesContainer");
  container.innerHTML = ""; // clear previous
  if (amenitiesText.trim() !== "") {
    amenitiesText.split(",").forEach(a => {
      if(a.trim() !== "") addAmenityField(a.trim(), "modalEditAmenitiesContainer");
    });
  } else {
    addAmenityField("", "modalEditAmenitiesContainer"); // at least one field
  }

  // Show modal
  document.getElementById("editModal").classList.remove("hidden");
}

// Close Modal
function closeAdminPropertyEditModal() {
  document.getElementById("editModal").classList.add("hidden");
}

// Initialize modal with one amenity field
window.onload = () => {
  if (document.getElementById("modalEditAmenitiesContainer").children.length === 0) {
    addAmenityField("", "modalEditAmenitiesContainer");
  }
};





function addAgentAmenityField(type = "modal", value = "") {
  const containerId =
    type === "modal" ? "editAmenitiesContainer" : "agentFormAmenitiesContainer";
  const container = document.getElementById(containerId);
  if (!container) return;

  const wrapper = document.createElement("div");
  wrapper.className = "flex items-center space-x-2";

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Enter Amenity";
  input.value = value;
  input.className = "w-full border px-3 py-2 rounded";

  const delBtn = document.createElement("button");
  delBtn.type = "button";
  delBtn.innerHTML = "&#10006;";
  delBtn.className = "text-red-500 hover:text-red-700 text-lg font-bold px-2";
  delBtn.onclick = () => wrapper.remove();

  wrapper.appendChild(input);
  wrapper.appendChild(delBtn);
  container.appendChild(wrapper);
}

window.onload = () => {
  const formContainer = document.getElementById("agentFormAmenitiesContainer");
  if (formContainer && formContainer.children.length === 0) addAgentAmenityField("form");
};


function openAgentPropertyEditModal(button) {
  const row = button.closest("tr");
  const cells = row.querySelectorAll("td");

  const category   = cells[1].innerText;
  const purpose    = cells[2].innerText;
  const label      = cells[3].innerText;
  const area       = cells[4].innerText;
  const sqft       = cells[5].innerText;
  const desc       = cells[6].innerText;
  const amenitiesText = cells[7].innerText;
  const location   = cells[8].innerText;
  const landmark   = cells[9].innerText;
  const city       = cells[10].innerText;
  const district   = cells[11].innerText;
  const price      = cells[12].innerText;
  const totalPrice = cells[13].innerText;
  const phone      = cells[14].innerText;
  const whatsapp   = cells[15].innerText;
  const pinCode    = cells[16].innerText;
  const duration   = cells[17] ? cells[17].innerText : "";

  // Fill modal fields
  document.getElementById("editCategory").value = category;
  document.getElementById("editPurpose").value = purpose;
  document.getElementById("editLabel").value = label;
  document.getElementById("editArea").value = area;
  document.getElementById("editSqft").value = sqft;
  document.getElementById("editDesc").value = desc;
  document.getElementById("editLocation").value = location;
  document.getElementById("editLandmark").value = landmark;
  document.getElementById("editCity").value = city;
  document.getElementById("editDistrict").value = district;
  document.getElementById("editPrice").value = price;
  document.getElementById("editTotalPrice").value = totalPrice;
  document.getElementById("editPhone").value = phone;
  document.getElementById("editWhatsappNumber").value = whatsapp;
  document.getElementById("editPinCode").value = pinCode;
  document.getElementById("editDuration").value = duration;

  // Amenities
  const container = document.getElementById("editAmenitiesContainer");
  container.innerHTML = "";
  const amenities = amenitiesText.split(",");
  if (amenitiesText.trim() !== "" && amenities.length > 0) {
    amenities.forEach((a) => {
      if (a.trim() !== "") addAgentAmenityField("modal", a.trim());
    });
  } else {
    addAgentAmenityField("modal");
  }

  // Show modal
  document.getElementById("editModal").classList.remove("hidden");
}


function closeAgentPropertyEditModal() {
  document.getElementById("editModal").classList.add("hidden");
}

window.onload = () => {
  const formContainer = document.getElementById("editAmenitiesContainerForm");
  if (formContainer && formContainer.children.length === 0) addAgentAmenityField("form");
};












// agent profile



  function openAgentProfileEditModal(name) {
    document.getElementById('editModal').classList.remove('hidden');
    document.querySelector('input[name="name"]').value = name; 
  }

  function closeAgentProfileEditModal() {
    document.getElementById('editModal').classList.add('hidden');
  }


// premiumagent
   function openPremiumAgentProfileEditModal(agentName) {
    document.getElementById('editModal').classList.remove('hidden');
    // Populate form (add real logic here if pulling data dynamically)
    const form = document.getElementById('editAgentForm');
    form.name.value = agentName;
  }

  function closePremiumAgentProfileEditModal() {
    document.getElementById('editModal').classList.add('hidden');
  }
  function previewAgentImage(event) {
    const reader = new FileReader();
    reader.onload = function () {
      document.getElementById('agentPreviewImage').src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  }




    function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('-translate-x-full');
  }




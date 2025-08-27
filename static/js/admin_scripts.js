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






  let currentRow = null; 

  function openAdminBlogEditModal(row) {
    currentRow = row; 

  
    document.getElementById("editHeading1").value = row.cells[0].innerText;
    document.getElementById("editHeading2").value = row.cells[1].innerText;
    document.getElementById("editDate").value = row.cells[2].innerText;
    document.getElementById("editParagraph1").value = row.cells[0].innerText; 
    document.getElementById("editParagraph2").value = row.cells[1].innerText;

    const img = row.querySelector("td img").src;
    document.getElementById("editImagePreview").src = img;

    document.getElementById("editModal").classList.remove("hidden");
  }

  function closeAdminBlogEditModal() {
    document.getElementById("editModal").classList.add("hidden");
  }

  document.getElementById("editImageFile").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        document.getElementById("editImagePreview").src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });

  document.getElementById("editBlogForm").addEventListener("submit", function(e) {
    e.preventDefault();
    if (!currentRow) return;

    currentRow.cells[0].innerText = document.getElementById("editHeading1").value;
    currentRow.cells[1].innerText = document.getElementById("editHeading2").value;
    currentRow.cells[2].innerText = document.getElementById("editDate").value;

    const imgPreview = document.getElementById("editImagePreview").src;
    currentRow.querySelector("td img").src = imgPreview;

    closeAdminBlogEditModal();
  });

  function deleteRow(row) {
    row.remove();
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

// Initialize amenity containers once DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("modalEditAmenitiesContainer")?.children.length === 0) {
    addAmenityField("", "modalEditAmenitiesContainer");
  }
  if (document.getElementById("formAmenitiesContainer")?.children.length === 0) {
    addAmenityField("", "formAmenitiesContainer");
  }
});

// Open Modal + Populate Data
function openAdminPropertyEditModal(button) {
  const row = button.closest("tr");
  const cells = row.querySelectorAll("td");

  // Extract values from table row
  const category = cells[1].innerText.trim();
  const purpose = cells[2].innerText.trim();
  const label = cells[3].innerText.trim();
  const area = cells[4].innerText.trim();
  const sqft = cells[5].innerText.trim();
  const desc = cells[6].innerText.trim();
  const amenitiesText = cells[7].innerText.trim();
  const location = cells[8].innerText.trim();
  const landmark = cells[9].innerText.trim();
  const city = cells[10].innerText.trim();
  const district = cells[11].innerText.trim();
  const price = cells[12].innerText.trim();
  const totalPrice = cells[13].innerText.trim();
  const owner = cells[14].innerText.trim();
  const phone = cells[15].innerText.trim();
  const whatsapp = cells[16].innerText.trim();
  const paid = cells[17].innerText.trim();
  const addedBy = cells[18].innerText.trim();
  const duration = cells[19].innerText.trim(); // ✅ added duration

  // Fill modal inputs (make sure IDs exist in HTML!)
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
  document.getElementById("editDuration").value = duration;

  // Populate amenities
  const container = document.getElementById("modalEditAmenitiesContainer");
  container.innerHTML = ""; // clear previous
  if (amenitiesText) {
    amenitiesText.split(",").forEach(a => {
      if (a.trim() !== "") addAmenityField(a.trim(), "modalEditAmenitiesContainer");
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
    // You can also prefill the form here if needed
    document.getElementById('editModal').classList.remove('hidden');
  }

  function closeAgentProfileEditModal() {
    document.getElementById('editModal').classList.add('hidden');
  }

  // Optional: Preview image
  function previewAgentImage(event) {
    const preview = document.getElementById('agentPreviewImage');
    preview.src = URL.createObjectURL(event.target.files[0]);
  }






   function openPremiumAgentProfileEditModal(agentName) {
    document.getElementById('editModal').classList.remove('hidden');
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




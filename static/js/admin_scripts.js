
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












  function createAmenityRow(name, value = "", isEdit = false) {
    const container = document.getElementById(isEdit ? "editAmenitiesContainer" : "amenitiesContainer");
    const div = document.createElement("div");
    div.classList.add("flex", "gap-2");

    div.innerHTML = `
      <input type="text" name="${name}" class="flex-1 border px-3 py-2 rounded" placeholder="Amenity" value="${value}">
      <button type="button" class="add-btn bg-[#8bc83f] text-white px-3 rounded hover:bg-[#76a62f]">+</button>
      <button type="button" class="remove-btn bg-red-500 text-white px-3 rounded hover:bg-red-600">-</button>
    `;

    // Add event listeners to buttons
    div.querySelector(".add-btn").addEventListener("click", () => {
      createAmenityRow(name, "", isEdit);
    });

    div.querySelector(".remove-btn").addEventListener("click", () => {
      div.remove();
    });

    container.appendChild(div);
  }

  // Initial row for Add Property form
  window.addEventListener("DOMContentLoaded", () => {
    createAmenityRow("amenities[]");
  });

  // Edit Modal Amenity Row Setup
  function openAdminPropertyEditModal() {
    const container = document.getElementById("editAmenitiesContainer");
    container.innerHTML = ""; // Clear previous

    // Example amenities (replace with real data if needed)
    const amenities = ["Parking", "Gym"];

    amenities.forEach((value) => {
      createAmenityRow("editAmenities[]", value, true);
    });

    // Other fields
    document.getElementById('editCategory').value = "House";
    document.getElementById('editPurpose').value = "Sale";
    document.getElementById('editArea').value = "1500 sq.ft";
    document.getElementById('editSqft').value = "1500";
    document.getElementById('editDesc').value = "Spacious family house.";
    document.getElementById('editPrice').value = "₹50,00,000";
    document.getElementById('editOwner').value = "John Doe";
    document.getElementById('editPhone').value = "9876543210";
    document.getElementById('editLocation').value = "Downtown";
    document.getElementById('editPin').value = "123456";
    document.getElementById('editLandmark').value = "Near Mall";
    document.getElementById('editPaid').value = "Yes";
    document.getElementById('editAddedBy').value = "Admin";

    document.getElementById('editModal').classList.remove('hidden');
  }

  function closeAdminPropertyEditModal() {
    document.getElementById('editModal').classList.add('hidden');
  }









  function createAmenityRow(name, value = "", isEdit = false) {
    const container = document.getElementById(isEdit ? "editAmenitiesContainer" : "amenitiesContainer");
    const div = document.createElement("div");
    div.classList.add("flex", "gap-2");

    div.innerHTML = `
      <input type="text" name="${name}" class="flex-1 border px-3 py-2 rounded" placeholder="Amenity" value="${value}">
      <button type="button" class="add-btn bg-[#8bc83f] text-white px-3 rounded hover:bg-[#76a62f]">+</button>
      <button type="button" class="remove-btn bg-red-500 text-white px-3 rounded hover:bg-red-600">-</button>
    `;

    // Add event listeners to buttons
    div.querySelector(".add-btn").addEventListener("click", () => {
      createAmenityRow(name, "", isEdit);
    });

    div.querySelector(".remove-btn").addEventListener("click", () => {
      div.remove();
    });

    container.appendChild(div);
  }

  // Initial row for Add Property form
  window.addEventListener("DOMContentLoaded", () => {
    createAmenityRow("amenities[]");
  });
function openAgentPropertyEditModal() {
  const container = document.getElementById("editAmenitiesContainer");
  container.innerHTML = ""; // Clear previous

  const amenities = ["Parking", "Gym"]; // Sample data
  amenities.forEach((value) => {
    createAmenityRow("editAmenities[]", value, true);
  });

  // Populate other fields
  document.getElementById('editCategory').value = "House";
  document.getElementById('editPurpose').value = "Sale";
  document.getElementById('editArea').value = "1500 sq.ft";
  document.getElementById('editSqft').value = "1500";
  document.getElementById('editDesc').value = "Spacious family house.";
  document.getElementById('editPrice').value = "₹50,00,000";
  document.getElementById('editOwner').value = "John Doe";
  document.getElementById('editPhone').value = "9876543210";
  document.getElementById('editLocation').value = "Downtown";
  document.getElementById('editPin').value = "123456";
  document.getElementById('editLandmark').value = "Near Mall";
  document.getElementById('editPaid').value = "Yes";

  // 💥 REMOVE this line because the field is commented out
  // document.getElementById('editAddedBy').value = "Admin";

  document.getElementById('editModal').classList.remove('hidden');
}


  function closeAgentPropertyEditModal() {
    document.getElementById('editModal').classList.add('hidden');
  }








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
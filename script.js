function handleEdit() {
    // Ambil nilai dari section profile
    const nama = document.getElementById("nama").textContent;
    const role = document.getElementById("role").textContent;
    const availibility = document.getElementById("availibility").textContent;
    const usia = document.getElementById("usia").textContent;
    const lokasi = document.getElementById("lokasi").textContent;
    const pengalaman = document.getElementById("pengalaman").textContent;
    const email = document.getElementById("email").textContent;
  
    // Set nilai-nilai tersebut ke dalam form
    document.getElementById("form-nama").value = nama;
    document.getElementById("form-role").value = role;
    document.getElementById("form-availibility").value = availibility;
    document.getElementById("form-usia").value = usia;
    document.getElementById("form-lokasi").value = lokasi;
    document.getElementById("form-pengalaman").value = pengalaman;
    document.getElementById("form-email").value = email;
  
    // Tampilkan form
    document.getElementById("section-form").style.display = "";
    document.getElementById("section-profile").style.display = "none";
  }

  function handleResume() {
    document.getElementById("section-form").style.display = "none";
    document.getElementById("section-profile").style.display = "";
  }

  function handleSubmit(event) {
    event.preventDefault()

    // get values
    const nama = document.getElementById("form-nama").value;
    const role = document.getElementById("form-role").value;
    const availibility = document.getElementById("form-availibility").value;
    const usia = document.getElementById("form-usia").value;
    const lokasi = document.getElementById("form-lokasi").value;
    const pengalaman = document.getElementById("form-pengalaman").value;
    const email = document.getElementById("form-email").value;

    // set values to profile section
    document.getElementById("nama").textContent = nama;
    document.getElementById("role").textContent = role;
    document.getElementById("availibility").textContent = availibility;
    document.getElementById("usia").textContent = usia;
    document.getElementById("lokasi").textContent = lokasi;
    document.getElementById("pengalaman").textContent = pengalaman;
    document.getElementById("email").textContent = email;

    // save to localStorage
    localStorage.setItem('profile', JSON.stringify({
      nama, role, availibility, usia, lokasi, pengalaman, email
    }));

    // hide form and show profile
    document.getElementById("section-form").style.display = "none";
    document.getElementById("section-profile").style.display = "";
  }

  // Load from localStorage if available
  window.onload = function() {
    const savedProfile = localStorage.getItem('profile');
    if (savedProfile) {
      const { nama, role, availibility, usia, lokasi, pengalaman, email } = JSON.parse(savedProfile);
      document.getElementById("nama").textContent = nama;
      document.getElementById("role").textContent = role;
      document.getElementById("availibility").textContent = availibility;
      document.getElementById("usia").textContent = usia;
      document.getElementById("lokasi").textContent = lokasi;
      document.getElementById("pengalaman").textContent = pengalaman;
      document.getElementById("email").textContent = email;
    }
  }

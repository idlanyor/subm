document.addEventListener('DOMContentLoaded', () => {
  const openModalBtn = document.getElementById('openModalBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const tambahDataForm = document.getElementById('tambahDataForm');
  const iKode = document.getElementById('kode');
  const iNamaMatkul = document.getElementById('nama');
  const iDosen = document.getElementById('dosen');
  const iHari = document.getElementById('hari');
  const iJam = document.getElementById('jam');
  const iProdi = document.getElementById('prodi');
  const errorAlert = document.getElementById('errorAlert');
  const tambahDataModal = document.getElementById('modal-js-example');

  openModalBtn.addEventListener('click', () => {
    tambahDataModal.classList.add('is-active');
  });

  closeModalBtn.addEventListener('click', () => {
    tambahDataModal.classList.remove('is-active');
    errorAlert.style.display = 'none';
  });

  tambahDataForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const kode = iKode.value.trim();
    const matkul = iNamaMatkul.value.trim();
    const dosen = iDosen.value.trim();
    const hari = iHari.value.trim();
    const jam = iJam.value.trim();
    const prodi = iProdi.value.trim();

    if (!kode || !matkul || !dosen || !hari || !jam || !prodi) {
      errorAlert.innerText = 'Isi semua field dengan benar.';
      errorAlert.style.display = 'block';
      return;
    }

    errorAlert.style.display = 'none';

    // ... (code for fetching and writing ./data/dataMatkul.json)
    // Baca file ./data/dataMatkul.json jika ada
    let dataMatkul = [];
    try {
      const response = await fetch('./data/dataMatkul.json');
      if (response.ok) {
        dataMatkul = await response.json();
      }
    } catch (error) {
      console.error('Error reading ./data/dataMatkul.json:', error);
    }

    // Tambahkan data baru
    dataMatkul.push({ kode, matkul, dosen, hari, jam, prodi });

    // Tulis kembali ke file ./data/dataMatkul.json
    try {
      await fetch('./data/dataMatkul.json', {
        method: 'POST', // Atau POST jika metode PUT tidak diizinkan
        body: JSON.stringify(dataMatkul),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.error('Error writing ./data/dataMatkul.json:', error);
    }

    // Reset form and close modal
    tambahDataForm.reset();
    tambahDataModal.classList.remove('is-active');

  });
  (document.querySelectorAll('.notification .delete') || []).forEach(($delete) => {
    const $notification = $delete.parentNode;

    $delete.addEventListener('click', () => {
      $notification.parentNode.removeChild($notification);
    });
  });
  /// Functions to open and close a modal
  function openModal($el) {
    $el.classList.add('is-active');
  }

  function closeModal($el) {
    $el.classList.remove('is-active');
  }

  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
      closeAllModals();
    }
  });
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach(el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });

});
window.addEventListener("scroll", animate)
window.addEventListener("load", animate)
function animate() {
  let sections = document.querySelectorAll("section")
  let navlinks = document.querySelectorAll('nav ul li a')
  sections.forEach(sec => {
    const sectionActionLevel = sec.getBoundingClientRect().top
    if (sectionActionLevel < 300) {
      navlinks.forEach(lnk => {
        lnk.classList.remove("colored")
        lnk.classList.add("first-color")
        const target = lnk.getAttribute("href").replace("#", "")
        if (target === sec.id) {
          lnk.classList.remove("first-color")
          lnk.classList.add("colored")
        }
      })
    }
  })

  let navBar = document.querySelector(".nav-container")
  if (navBar) {
    const navBarActionLevel = navBar.getBoundingClientRect().top
    if (navBarActionLevel < -47) navBar.classList.add("sticky")
    if (navBarActionLevel > 0) navBar.classList.remove("sticky")
  }

  let hexWrapper = document.querySelectorAll(".hex-holder")
  hexWrapper.forEach(el => {
    const hexWrapperActionLevel = el.getBoundingClientRect().top
    if (hexWrapperActionLevel < (window.innerHeight / 2)) {
      el.classList.add("anim")
      el.nextElementSibling.classList.add("anim") // Anime the next Element (Description Div)
    }
  })

  let myCard = document.querySelector(".my-card")
  if (myCard) {
    const myCardActionLevel = myCard.getBoundingClientRect().top
    if (myCardActionLevel < 450) {
      myCard.classList.add("anim")
    }
  }

  let skills = document.querySelector(".skills")
  if (skills) {
    let barLevel = document.querySelectorAll(".bar-level")
    const skillsActionLevel = skills.getBoundingClientRect().top
    if (skillsActionLevel < 450) {
      skills.classList.add("anim")
      barLevel.forEach(el => el.classList.add("anim"))
    }
  }

  let titles = document.querySelectorAll("h2")
  titles.forEach(el => {
    const titleActionLevel = el.getBoundingClientRect().top
    if (titleActionLevel < (window.innerHeight / 2)) {
      el.classList.add("anim")
    }
  })

  let projectsUl = document.querySelector(".projects-links")
  if (projectsUl) {
    let project = document.querySelectorAll(".project")
    const projectsUlLevel = projectsUl.getBoundingClientRect().top
    if (projectsUlLevel < (window.innerHeight / 2)) {
      projectsUl.classList.add("anim")
      project.forEach(elem => {
        elem.classList.add("anim")
      });
    }
  }

  let contactQuestion = document.querySelector(".question")
  if (contactQuestion) {
    const questionActionLevel = contactQuestion.getBoundingClientRect().top
    if (questionActionLevel < 450) {
      contactQuestion.classList.add("anim")
    }
  }

  let formInputs = document.querySelector(".form-inputs")
  if (formInputs) {
    const formActionLevel = formInputs.getBoundingClientRect().top
    if (formActionLevel < 550) {
      formInputs.classList.add("anim")
    }
  }
}

// Anime Nav Burger Link
let navToggler = document.querySelector(".nav-toggler")
navToggler.onclick = function () {
  let nav = document.querySelector("nav")
  let spans = navToggler.querySelectorAll("SPAN")

  nav.classList.toggle("triger");
  spans.forEach(sp => sp.classList.toggle('triger'))
}

const contacForm = document.querySelector('form[name="questionsForm"]')
contacForm.onsubmit = () => {
  const contactNameInput = document.querySelector('input[name="name"]').value
  const contactEmailInput = document.querySelector('input[name="email"]').value
  const contactMsgInput = document.querySelector('textarea[name="comments"]').value

  // Name Validiation
  const nameTemplate = /^[A-Za-zÁÉÍÓÚáéíóúñÑ]+(?:[\s'A-Za-zÁÉÍÓÚáéíóúñÑ.-]+)*$/i
  if (!validateField(contactNameInput, "Nombre", nameTemplate)) return false

  // Email Validiation
  const emailTemplate = /^\w+([.-]?\w+)*@\w+([-_]?\w+)*(\.\w{2,})+$/i
  if (!validateField(contactEmailInput, "E-mail", emailTemplate)) return false

  // Message Validiation
  if (!validateField(contactMsgInput, "Mensaje")) return false

  // All tests passed
  return true

  function validateField(val, inputName, tamplate) {
    const test = tamplate ? tamplate.test(val) : true
    if ((val === '') || (test === false)) {
      alert("Ingresá un " + inputName + " válido.")
      return false
    }
    return true
  }
}

const themeToggle = document.querySelector('.theme-toggle')
const savedTheme = localStorage.getItem('theme')
if (savedTheme === 'dark') document.body.classList.add('dark')

function updateThemeIcon(isDark) {
  themeToggle.innerHTML = isDark ? '<i class="iconoir-sun-light"></i>' : '<i class="iconoir-half-moon"></i>'
  themeToggle.setAttribute('aria-label', isDark ? 'Cambiar a claro' : 'Cambiar a oscuro')
}

themeToggle.onclick = () => {
  document.body.classList.toggle('dark')
  const isDark = document.body.classList.contains('dark')
  localStorage.setItem('theme', isDark ? 'dark' : 'light')
  updateThemeIcon(isDark)
}
// set initial icon state
updateThemeIcon(document.body.classList.contains('dark'))

const filters = document.querySelectorAll('.projects-links a[data-filter]')
const liBg = document.querySelector('.projects-links .li-bg')
const cards = document.querySelectorAll('.projects-grid .project-card')

// Dynamic Background Logic
function updateLiBg(targetLink) {
  if (!liBg || !targetLink) return;

  const parentLi = targetLink.parentElement;
  const ul = parentLi.parentElement;

  // Get coordinates relative to the UL
  const ulRect = ul.getBoundingClientRect();
  const liRect = parentLi.getBoundingClientRect();

  const left = liRect.left - ulRect.left;
  const top = liRect.top - ulRect.top;

  liBg.style.width = `${liRect.width}px`;
  liBg.style.height = `${liRect.height}px`;
  liBg.style.transform = `translate(${left}px, ${top}px)`;
  liBg.style.opacity = '0.7'; // Show it
}

// Initial Position
const initialActive = document.querySelector('.projects-links a[data-filter="all"]');
if (initialActive) {
  // Wait for layout to settle
  window.addEventListener('load', () => {
    updateLiBg(initialActive);
    initialActive.classList.add('active'); // Ensure text color is set
  });
  // Also try immediately in case load already happened
  setTimeout(() => updateLiBg(initialActive), 100);
}

filters.forEach((f) => {
  f.onclick = (e) => {
    e.preventDefault()

    // Update active class
    filters.forEach(link => link.classList.remove('active'))
    f.classList.add('active')

    // Move background
    updateLiBg(f)

    // Filter Logic
    const key = f.getAttribute('data-filter')
    cards.forEach(card => {
      const techs = (card.getAttribute('data-tech') || '').split(' ')
      const show = key === 'all' ? true : techs.includes(key)
      card.classList.toggle('hide', !show)
    })
  }
})

// Update on resize
window.addEventListener('resize', () => {
  const active = document.querySelector('.projects-links a.active')
  if (active) updateLiBg(active)
})

const modal = document.getElementById('project-modal')
if (modal) {
  const modalTitle = modal.querySelector('.modal-title')
  const modalDesc = modal.querySelector('.modal-desc')
  const modalTechs = modal.querySelector('.modal-techs')
  const modalLink = modal.querySelector('.modal-link')
  const modalClose = modal.querySelector('.modal-close')

  function openModalFromCard(card) {
    const title = card.querySelector('.card-header h4')?.textContent || ''
    const desc = card.getAttribute('data-full-desc') || ''
    const techs = (card.getAttribute('data-tech') || '').split(' ').filter(Boolean)
    const link = card.getAttribute('data-web') || '#'

    modalTitle.textContent = title
    modalDesc.textContent = desc
    modalTechs.innerHTML = techs.map(t => `<span class="chip">${t.toUpperCase()}</span>`).join('')

    if (link && link !== '#') {
      modalLink.setAttribute('href', link)
      modalLink.style.display = 'inline-block'
    } else {
      modalLink.style.display = 'none'
    }

    modal.classList.remove('hidden')
    modal.setAttribute('aria-hidden', 'false')
  }

  function closeModal() {
    modal.classList.add('hidden')
    modal.setAttribute('aria-hidden', 'true')
  }

  document.querySelectorAll('.projects-grid .project-card .action-btn.info').forEach(btn => {
    btn.onclick = (e) => {
      e.preventDefault()
      const card = e.target.closest('.project-card')
      if (card) openModalFromCard(card)
    }
  })

  modalClose.onclick = closeModal
  modal.onclick = (e) => { if (e.target === modal) closeModal() }
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal() })
}


const eduModal = document.getElementById('edu-modal')
if (eduModal) {
  const eduModalTitle = eduModal.querySelector('.modal-title')
  const eduModalDesc = eduModal.querySelector('.modal-desc')
  const eduModalTechs = eduModal.querySelector('.modal-techs')
  const eduModalMods = eduModal.querySelector('.modal-mods')
  const eduModalFrame = eduModal.querySelector('.modal-frame')
  const eduModalClose = eduModal.querySelector('.modal-close')

  function openEduModal(title, href) {
    eduModalTitle.textContent = title || 'Certificado'
    eduModalDesc.textContent = ''
    eduModalTechs.innerHTML = ''
    eduModalMods.innerHTML = ''
    eduModalFrame.setAttribute('src', href)
    eduModalDesc.style.display = 'none'
    eduModalTechs.style.display = 'none'
    eduModalMods.style.display = 'none'
    eduModalFrame.style.display = 'block'
    eduModal.classList.remove('hidden')
    eduModal.setAttribute('aria-hidden', 'false')
  }

  function closeEduModal() {
    eduModal.classList.add('hidden')
    eduModal.setAttribute('aria-hidden', 'true')
    eduModalFrame.setAttribute('src', '')
    eduModalMods.innerHTML = ''
  }

  // No interceptamos .edu-link para que abra en nueva pestaña

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.edu-more')
    if (!btn) return
    e.preventDefault()
    const title = btn.getAttribute('data-title') || 'Detalle'
    const desc = btn.getAttribute('data-desc') || ''
    const techStr = btn.getAttribute('data-techs') || ''
    const techs = techStr.split(',').map(t => t.trim()).filter(Boolean)
    const modsStr = btn.getAttribute('data-mods') || ''
    const mods = modsStr.split(';').map(m => m.trim()).filter(Boolean)
    eduModalTitle.textContent = title
    eduModalDesc.textContent = desc
    eduModalTechs.innerHTML = techs.map(t => `<span class="chip">${t}</span>`).join('')
    eduModalMods.innerHTML = mods.map(m => {
      const [label, href] = m.split('|')
      const safeHref = href || '#'
      return `<a class="edu-mod-link" href="${safeHref}" target="_blank" rel="noopener">${label}</a>`
    }).join('')
    eduModalDesc.style.display = 'block'
    eduModalTechs.style.display = 'block'
    eduModalMods.style.display = 'block'
    eduModalFrame.style.display = 'none'
    eduModal.classList.remove('hidden')
    eduModal.setAttribute('aria-hidden', 'false')
  })

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return
    const btn = e.target.closest('.edu-more')
    if (!btn) return
    e.preventDefault()
    const title = btn.getAttribute('data-title') || 'Detalle'
    const desc = btn.getAttribute('data-desc') || ''
    const techStr = btn.getAttribute('data-techs') || ''
    const techs = techStr.split(',').map(t => t.trim()).filter(Boolean)
    const modsStr = btn.getAttribute('data-mods') || ''
    const mods = modsStr.split(';').map(m => m.trim()).filter(Boolean)
    eduModalTitle.textContent = title
    eduModalDesc.textContent = desc
    eduModalTechs.innerHTML = techs.map(t => `<span class="chip">${t}</span>`).join('')
    eduModalMods.innerHTML = mods.map(m => {
      const [label, href] = m.split('|')
      const safeHref = href || '#'
      return `<a class="edu-mod-link" href="${safeHref}" target="_blank" rel="noopener">${label}</a>`
    }).join('')
    eduModalDesc.style.display = 'block'
    eduModalTechs.style.display = 'block'
    eduModalMods.style.display = 'block'
    eduModalFrame.style.display = 'none'
    eduModal.classList.remove('hidden')
    eduModal.setAttribute('aria-hidden', 'false')
  })

  eduModalClose.onclick = closeEduModal
  eduModal.onclick = (e) => { if (e.target === eduModal) closeEduModal() }
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeEduModal() })
}


// CV Preview Modal
const cvModal = document.getElementById('cv-modal')
if (cvModal) {
  const cvModalClose = cvModal.querySelector('.modal-close')
  const cvModalFrame = cvModal.querySelector('.modal-frame')

  function openCvModal() {
    // Use PDF.js viewer from CDN with the CV.pdf file
    const pdfUrl = encodeURIComponent(window.location.origin + window.location.pathname.replace('index.html', '') + 'CV.pdf')
    cvModalFrame.setAttribute('src', `https://mozilla.github.io/pdf.js/web/viewer.html?file=${pdfUrl}`)
    cvModal.classList.remove('hidden')
    cvModal.setAttribute('aria-hidden', 'false')
  }

  function closeCvModal() {
    cvModal.classList.add('hidden')
    cvModal.setAttribute('aria-hidden', 'true')
    cvModalFrame.setAttribute('src', '')
  }

  const previewCvBtn = document.getElementById('preview-cv-btn')
  if (previewCvBtn) {
    previewCvBtn.onclick = openCvModal
  }

  cvModalClose.onclick = closeCvModal
  cvModal.onclick = (e) => { if (e.target === cvModal) closeCvModal() }
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !cvModal.classList.contains('hidden')) closeCvModal() })
}

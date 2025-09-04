const express = require('express');
const router = express.Router();

// Home page
router.get('/', (req, res) => {
  res.render('pages/home', { 
    title: 'OTM Education | Réussissez à l\'international',
    description: 'Plan your future with OTM Education: expert guidance on admissions, interview preparation, visa assistance, and more. Start your international journey today!'
  });
});

// Pourquoi OTM Education
router.get('/pourquoi-otm-education', (req, res) => {
  res.render('pages/pourquoi-otm-education', {
    title: 'Pourquoi OTM Education | OTM Education',
    description: 'Pourquoi choisir OTM Education : expertise, réseau d\'universités partenaires et accompagnement sur‑mesure.'
  });
});

// Nos Services
router.get('/nos-services', (req, res) => {
  res.render('pages/nos-services', {
    title: 'Nos Services | OTM Education',
    description: 'Découvrez nos services : orientation, admissions, préparation aux tests et entretiens, visa, logement et intégration.'
  });
});

// Contact page
router.get('/contact', (req, res) => {
  res.render('pages/contact', { 
    title: 'Contact | OTM Education',
    description: 'Contactez OTM Education pour toute question sur nos services d\'éducation internationale et commencez votre voyage dès aujourd\'hui.'
  });
});

// Inscription
router.get('/inscription', (req, res) => {
  res.render('pages/inscription', {
    title: 'Inscription | OTM Education',
    description: 'Inscrivez-vous à nos programmes d\'éducation internationale et commencez votre parcours vers le succès.'
  });
});

// FAQ page
router.get('/faq', (req, res) => {
  res.render('pages/faq', {
    title: 'FAQ | OTM Education',
    description: 'Questions fréquentes sur nos services et notre accompagnement pour les études à l\'international.'
  });
});

module.exports = router;

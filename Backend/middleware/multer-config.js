const multer = require('multer');

const MIME_TYPES = {
    'images/jpg': 'jpg',
    'images/jpeg': 'jpg',
    'images/png': 'png'
};


//**Gestion des fichiers envoyé via des requêtes HTTP vers le API**//


// Configuration de multer pour stocker les images dans le dossier 'images'
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'images');
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_');
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + '.' + extension)
  }
});



module.exports = multer({ storage, fileFilter }).single('image');

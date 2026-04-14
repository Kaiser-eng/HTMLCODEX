import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express();
const PORT = process.env.PORT || 3000;

const courses = [
  {
    icon: 'img/icon-1.png',
    trainerImg: 'img/testimonial-3.jpg',
    trainer: 'Paul Flavius',
    date: 'Saturday',
    time: '06.00 - 07.00',
    title: 'Gym Fitness Class',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque tempora illo placeat.',
    delay: '0.2s'
  },
  {
    icon: 'img/icon-2.png',
    trainerImg: 'img/testimonial-3.jpg',
    trainer: 'Paul Flavius',
    date: 'Saturday',
    time: '06.00 - 07.00',
    title: 'Power Lifting Class',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque tempora illo placeat.',
    delay: '0.4s'
  },
  {
    icon: 'img/icon-3.png',
    trainerImg: 'img/testimonial-3.jpg',
    trainer: 'Paul Flavius',
    date: 'Saturday',
    time: '06.00 - 07.00',
    title: 'Body Building Class',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque tempora illo placeat.',
    delay: '0.6s'
  },
  {
    icon: 'img/icon-4.png',
    trainerImg: 'img/testimonial-3.jpg',
    trainer: 'Paul Flavius',
    date: 'Saturday',
    time: '06.00 - 07.00',
    title: 'Aerobics & Skipping Class',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque tempora illo placeat.',
    delay: '0.2s'
  },
  {
    icon: 'img/icon-5.png',
    trainerImg: 'img/testimonial-3.jpg',
    trainer: 'Paul Flavius',
    date: 'Saturday',
    time: '06.00 - 07.00',
    title: 'Cardio Class',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque tempora illo placeat.',
    delay: '0.4s'
  },
  {
    icon: 'img/icon-6.png',
    trainerImg: 'img/testimonial-3.jpg',
    trainer: 'Paul Flavius',
    date: 'Saturday',
    time: '06.00 - 07.00',
    title: 'Yoga Class',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque tempora illo placeat.',
    delay: '0.6s'
  }
];

app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, '/public')));
app.set("views", path.join(__dirname, "views"))

app.get('/', (req, res) => {
  res.render("index", { title: "Fitness - Fitness Website Template", currentPage: 'home', courses });
});

app.get('/about', (req, res) => {
  res.render("about", { title: "About - Fitness", currentPage: 'about' });
});

app.get('/course', (req, res) => {
  res.render("course", { title: "Courses - Fitness", currentPage: 'course', courses });
});

app.get('/team', (req, res) => {
  res.render("team", { title: "Our Team - Fitness", currentPage: 'team' });
});

app.get('/testimonial', (req, res) => {
  res.render("testimonial", { title: "Testimonial - Fitness", currentPage: 'testimonial' });
});

app.get('/contact', (req, res) => {
  res.render("contact", { title: "Contact Us - Fitness", currentPage: 'contact' });
});

app.use((req, res) => {
  res.status(404).render("404");
});


app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
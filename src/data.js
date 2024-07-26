const categories = ['Lower Primary', 'Upper Primary', 'High School', 'Higher Secondary', 'Junior', 'Senior', 'General'];
const sectors =[
  "Elettil",  "Kanthapuram",  "Kizhakkoth",  "Unnikulam",  "Poonoor",  "Thalayad", "Avilora"
];['ELETTIL', 'KANTHAPURAM', 'Perumanna', 'Thathoor', 'Peruvayal', 'Chaththamnagalam', 'Perya', 'Kaniyath'];

const itemsByCategory = {
  'Lower Primary': ['Elocution', 'Madh Song', 'Quiz', 'Story Telling', 'Pencil Drawing', 'Water Color', 'Language Game', 'Reading Ml', 'Reading Arb-Ml', 'Book Test', 'Pencil Drawing G', 'Water Color G', 'Handwriting M G'],
  'Upper Primary': ['Elocution', 'Mappilappattu', 'Story Writing', 'Quiz', 'Story Telling', 'Ganitha Keli', 'Pencil Drawing', 'Water Color', 'Spelling Bee', 'Reading Eng', 'Book Test', 'Pencil Drawing G', 'Water Color G', 'Book Test G', 'Story Writing G'],
  'High School': ['Elocution M', 'Elocution E', 'Mappilappattu', 'Madh Ganam', 'Poem Recitation A', 'Poem Recitation U', 'Story Writing', 'Quiz', 'Poem Making', 'Essay Writing M', 'News Reading', 'Pencil Drawing', 'Water Color', 'Caption Writing', 'Language Game E', 'Book Test', 'Embroidery', 'Pencil Drawing G', 'Water Color G', 'Book Test G', 'Story Writing G', 'Poem Making G'],
  'Higher Secondary': ['Elocution M', 'Mappilappattu', 'Bakthi Ganam', 'Poem Recitation U', 'Story Writing', 'Quiz', 'Poem Making', 'Essay Writing M', 'Essay Writing E', 'News Writing', 'Calligraphy', 'Pencil Drawing', 'Water Color', 'Caption Writing', 'Book Test', 'Calligraphy G', 'Story Writing G', 'Poem Making G', 'Book Test G'],
  'Junior': ['Elocution M', 'Elocution A', 'Elocution E', 'Mappilappattu', 'Reading A', 'Story Writing', 'Quiz', 'Poem Making', 'Essay Writing M', 'Essay Writing A', 'Mudravakya Rachana', 'Madh Gaana Rachana', 'Translatoin A', 'Calligraphy', 'feature Writing', 'Social Text', 'Sahithya Samvadam', 'Hadees Musabaqa', 'Book Test'],
  'Senior': ['Elocution M', 'Elocution U', 'Elocution E', 'Mappilappattu', 'Hamd Urdu', 'Poem Recitaton E', "Musha'ara Alfiya", 'Quiz', 'Poem Making', 'Poem Making E', 'Essay Writing M', 'Essay Writing E', 'Essay Writing U', 'Mudravakya Rachana', 'Madh Gaana Rachana', 'Translatoin E', 'Poster Designing', 'feature Writing', 'Social Text', 'E Poster', 'Survey Tool', 'Digital Illustration', 'Book Test'],
  'General': ['Spot Magazine', 'Daff', 'Arabana', 'Group Song A', 'Group Song B', 'Moulid', 'Qaseeda', 'Viplava Gaanam', 'Chumarezuth', 'Malappatt', 'Risala Quiz', 'Qawali', 'Viplava gaana rachana', 'Mapilappatt Rachana', 'Project', 'Collage', 'Nasheeda', 'Sufi Geetham', 'Family Magazine']
};

const slides = [
'https://res.cloudinary.com/do0mvctrk/image/upload/v1722024459/Screenshot_2023-07-01_22-48-31_z4jexl.png',
'https://res.cloudinary.com/do0mvctrk/image/upload/v1722024457/Screenshot_2023-07-02_09-25-37_pcf8sa.png',
'https://res.cloudinary.com/do0mvctrk/image/upload/v1722024430/Screenshot_2023-07-02_18-31-20_bvjhyo.png',
'https://res.cloudinary.com/do0mvctrk/image/upload/v1722024430/Screenshot_2023-07-02_09-40-18_pa5zxk.png',
'https://res.cloudinary.com/do0mvctrk/image/upload/v1722024428/Screenshot_2023-07-02_21-56-16_eepzal.png'
];
const Gallery=[
  'https://res.cloudinary.com/do0mvctrk/image/upload/v1722025935/WhatsApp_Image_2024-07-23_at_11.38.02_a4e50007_x0mx4v.jpg',
  'https://res.cloudinary.com/do0mvctrk/image/upload/v1722025935/image3_nlxvbo.jpg',
  'https://res.cloudinary.com/do0mvctrk/image/upload/v1722025934/image2_xgkllp.jpg',
  'https://res.cloudinary.com/do0mvctrk/image/upload/v1722025934/image1_papndj.jpg',
  'https://res.cloudinary.com/do0mvctrk/image/upload/v1722025933/image_pnv27d.jpg',
  'https://res.cloudinary.com/do0mvctrk/image/upload/v1722025934/WhatsApp_Image_2024-07-26_at_21.04.13_e62b727e_cawnig.jpg'
]
export {categories,sectors,itemsByCategory ,slides,Gallery}
/**
 * CAROUSEL MANAGER
 * Script para manejar carruseles de imágenes para proyectos
 * Solo es necesario modificar las imágenes en la configuración
 */

// CONFIGURACIÓN DE IMÁGENES POR PROYECTO
// Para agregar un nuevo proyecto, simplemente agregarlo aquí con sus 5 imágenes
const PROJECT_IMAGES = {
  // Proyectos en progreso
  brooklyn: [
    'https://picsum.photos/400/300?random=1',
    'https://picsum.photos/400/300?random=2',
    'https://picsum.photos/400/300?random=3',
    'https://picsum.photos/400/300?random=4',
    'https://picsum.photos/400/300?random=5'
  ],
  pompidou: [
    'https://picsum.photos/400/300?random=6',
    'https://picsum.photos/400/300?random=7',
    'https://picsum.photos/400/300?random=8',
    'https://picsum.photos/400/300?random=9',
    'https://picsum.photos/400/300?random=10'
  ],
  tang: [
    'https://picsum.photos/400/300?random=11',
    'https://picsum.photos/400/300?random=12',
    'https://picsum.photos/400/300?random=13',
    'https://picsum.photos/400/300?random=14',
    'https://picsum.photos/400/300?random=15'
  ],
  ray: [
    'https://picsum.photos/400/300?random=16',
    'https://picsum.photos/400/300?random=17',
    'https://picsum.photos/400/300?random=18',
    'https://picsum.photos/400/300?random=19',
    'https://picsum.photos/400/300?random=20'
  ],
  
  // Proyectos terminados
  library: [
    'https://picsum.photos/400/300?random=21',
    'https://picsum.photos/400/300?random=22',
    'https://picsum.photos/400/300?random=23',
    'https://picsum.photos/400/300?random=24',
    'https://picsum.photos/400/300?random=25'
  ],
  cartier: [
    'https://picsum.photos/400/300?random=26',
    'https://picsum.photos/400/300?random=27',
    'https://picsum.photos/400/300?random=28',
    'https://picsum.photos/400/300?random=29',
    'https://picsum.photos/400/300?random=30'
  ],
  boca: [
    'https://picsum.photos/400/300?random=31',
    'https://picsum.photos/400/300?random=32',
    'https://picsum.photos/400/300?random=33',
    'https://picsum.photos/400/300?random=34',
    'https://picsum.photos/400/300?random=35'
  ],
  galerie: [
    'https://picsum.photos/400/300?random=36',
    'https://picsum.photos/400/300?random=37',
    'https://picsum.photos/400/300?random=38',
    'https://picsum.photos/400/300?random=39',
    'https://picsum.photos/400/300?random=40'
  ],
  fabricated: [
    'https://picsum.photos/400/300?random=41',
    'https://picsum.photos/400/300?random=42',
    'https://picsum.photos/400/300?random=43',
    'https://picsum.photos/400/300?random=44',
    'https://picsum.photos/400/300?random=45'
  ],
  niddo: [
    'https://picsum.photos/400/300?random=46',
    'https://picsum.photos/400/300?random=47',
    'https://picsum.photos/400/300?random=48',
    'https://picsum.photos/400/300?random=49',
    'https://picsum.photos/400/300?random=50'
  ],
  aesop: [
    'https://picsum.photos/400/300?random=51',
    'https://picsum.photos/400/300?random=52',
    'https://picsum.photos/400/300?random=53',
    'https://picsum.photos/400/300?random=54',
    'https://picsum.photos/400/300?random=55'
  ],
  casajulia: [
    'https://picsum.photos/400/300?random=56',
    'https://picsum.photos/400/300?random=57',
    'https://picsum.photos/400/300?random=58',
    'https://picsum.photos/400/300?random=59',
    'https://picsum.photos/400/300?random=60'
  ],
  
  // Objetos
  cube01: [
    'https://picsum.photos/400/300?random=61',
    'https://picsum.photos/400/300?random=62',
    'https://picsum.photos/400/300?random=63',
    'https://picsum.photos/400/300?random=64',
    'https://picsum.photos/400/300?random=65'
  ],
  creekbench: [
    'https://picsum.photos/400/300?random=66',
    'https://picsum.photos/400/300?random
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
    'https://picsum.photos/400/300?random=67',
    'https://picsum.photos/400/300?random=68',
    'https://picsum.photos/400/300?random=69',
    'https://picsum.photos/400/300?random=70'
  ],
  creekchair: [
    'https://picsum.photos/400/300?random=71',
    'https://picsum.photos/400/300?random=72',
    'https://picsum.photos/400/300?random=73',
    'https://picsum.photos/400/300?random=74',
    'https://picsum.photos/400/300?random=75'
  ],
  screen01: [
    'https://picsum.photos/400/300?random=76',
    'https://picsum.photos/400/300?random=77',
    'https://picsum.photos/400/300?random=78',
    'https://picsum.photos/400/300?random=79',
    'https://picsum.photos/400/300?random=80'
  ],
  chair01: [
    'https://picsum.photos/400/300?random=81',
    'https://picsum.photos/400/300?random=82',
    'https://picsum.photos/400/300?random=83',
    'https://picsum.photos/400/300?random=84',
    'https://picsum.photos/400/300?random=85'
  ],
  
  // Publicaciones
  bookhours: [
    'https://picsum.photos/400/300?random=86',
    'https://picsum.photos/400/300?random=87',
    'https://picsum.photos/400/300?random=88',
    'https://picsum.photos/400/300?random=89',
    'https://picsum.photos/400/300?random=90'
  ],
  domestic: [
    'https://picsum.photos/400/300?random=91',
    'https://picsum.photos/400/300?random=92',
    'https://picsum.photos/400/300?random=93',
    'https://picsum.photos/400/300?random=94',
    'https://picsum.photos/400/300?random=95'
  ],
  serpentine: [
    'https://picsum.photos/400/300?random=96',
    'https://picsum.photos/400/300?random=97',
    'https://picsum.photos/400/300?random=98',
    'https://picsum.photos/400/300?random=99',
    'https://picsum.photos/400/300?random=100'
  ],
  tallera: [
    'https://picsum.photos/400/300?random=101',
    'https://picsum.photos/400/300?random=102',
    'https://picsum.photos/400/300?random=103',
    'https://picsum.photos/400/300?random=104',
    'https://picsum.photos/400/300?random=105'
  ]
};

// MANAGER PRINCIPAL DEL CARRUSEL
class CarouselManager {
  constructor() {
    this.carousels = new Map(); // Almacena el estado de cada carrusel
    this.initialized = false;
  }

  // Inicializar todos los carruseles
  init() {
    if (this.initialized) return;
    
    // Buscar todos los carruseles en la página
    const carouselElements = document.querySelectorAll('[data-carousel]');
    
    carouselElements.forEach(element => {
      const carouselId = element.getAttribute('data-carousel');
      this.setupCarousel(carouselId, element);
    });
    
    this.initialized = true;
  }

  // Configurar un carrusel individual
  setupCarousel(carouselId, element) {
    // Extraer el nombre del proyecto del ID del carrusel
    const projectName = carouselId.replace('-hover', '');
    const images = PROJECT_IMAGES[projectName];
    
    if (!images) {
      console.warn(`No se encontraron imágenes para el proyecto: ${projectName}`);
      return;
    }

    // Crear estado del carrusel
    this.carousels.set(carouselId, {
      currentIndex: 0,
      images: images,
      element: element,
      projectName: projectName
    });

    // Cargar imágenes en el elemento
    this.loadImages(carouselId);
  }

  // Cargar imágenes en el carrusel
  loadImages(carouselId) {
    const carousel = this.carousels.get(carouselId);
    if (!carousel) return;

    const { element, images } = carousel;
    
    // Limpiar contenido existente
    element.innerHTML = '';
    
    // Crear imágenes
    images.forEach((imageSrc, index) => {
      const img = document.createElement('img');
      img.src = imageSrc;
      img.alt = `${carousel.projectName} ${index + 1}`;
      img.style.display = index === 0 ? 'block' : 'none';
      element.appendChild(img);
    });

    // Si es el carrusel del modal, crear indicadores
    if (carouselId === 'modal') {
      this.createModalIndicators();
    }
  }

  // Crear indicadores para el modal
  createModalIndicators() {
    const indicatorsContainer = document.getElementById('modal-indicators');
    if (!indicatorsContainer) return;

    const carousel = this.carousels.get('modal');
    if (!carousel) return;

    indicatorsContainer.innerHTML = '';
    
    carousel.images.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.className = `modal-indicator ${index === 0 ? 'active' : ''}`;
      dot.onclick = () => this.goToSlide('modal', index);
      indicatorsContainer.appendChild(dot);
    });
  }

  // Ir al slide anterior
  prev(carouselId) {
    const carousel = this.carousels.get(carouselId);
    if (!carousel) return;

    carousel.currentIndex = (carousel.currentIndex - 1 + carousel.images.length) % carousel.images.length;
    this.updateCarousel(carouselId);
  }

  // Ir al siguiente slide
  next(carouselId) {
    const carousel = this.carousels.get(carouselId);
    if (!carousel) return;

    carousel.currentIndex = (carousel.currentIndex + 1) % carousel.images.length;
    this.updateCarousel(carouselId);
  }

  // Ir a un slide específico
  goToSlide(carouselId, index) {
    const carousel = this.carousels.get(carouselId);
    if (!carousel) return;

    carousel.currentIndex = index;
    this.updateCarousel(carouselId);
  }

  // Actualizar la visualización del carrusel
  updateCarousel(carouselId) {
    const carousel = this.carousels.get(carouselId);
    if (!carousel) return;

    const { element, currentIndex } = carousel;
    const images = element.querySelectorAll('img');
    
    // Ocultar todas las imágenes y mostrar solo la actual
    images.forEach((img, index) => {
      img.style.display = index === currentIndex ? 'block' : 'none';
    });

    // Actualizar indicadores si es el modal
    if (carouselId === 'modal') {
      this.updateModalIndicators(currentIndex);
    }
  }

  // Actualizar indicadores del modal
  updateModalIndicators(activeIndex) {
    const indicators = document.querySelectorAll('.modal-indicator');
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === activeIndex);
    });
  }

  // Configurar el carrusel del modal copiando imágenes de un carrusel hover
  setupModalCarousel(modalCarouselId, sourceCarouselId) {
    const sourceCarousel = this.carousels.get(sourceCarouselId);
    if (!sourceCarousel) return;

    // Crear o actualizar el carrusel del modal
    const modalElement = document.querySelector('[data-carousel="modal"]');
    if (!modalElement) return;

    this.carousels.set(modalCarouselId, {
      currentIndex: 0,
      images: sourceCarousel.images,
      element: modalElement,
      projectName: sourceCarousel.projectName
    });

    this.loadImages(modalCarouselId);
  }
}

// Crear instancia global del manager
const carouselManager = new CarouselManager();

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  carouselManager.init();
});

// Funciones globales para compatibilidad (pueden ser llamadas desde HTML)
function prevHoverSlide(projectId) {
  carouselManager.prev(projectId);
}

function nextHoverSlide(projectId) {
  carouselManager.next(projectId);
}

function prevModalSlide() {
  carouselManager.prev('modal');
}

function nextModalSlide() {
  carouselManager.next('modal');
}
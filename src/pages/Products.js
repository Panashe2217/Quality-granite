import React, { useState } from 'react';
import './Products.css';
import YetAnotherLightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

// Import all images
import img1 from '../tombstones/assets/tombstone-1.jpg';
import img2 from '../tombstones/assets/tombstone-2.jpg';
import img3 from '../tombstones/assets/tombstone-3.jpg';
import img4 from '../tombstones/assets/tombstone-4.jpg';
import img5 from '../tombstones/assets/tombstone-5.jpg';
import img6 from '../tombstones/assets/tombstone-6.jpg';
import img7 from '../tombstones/assets/tombstone-7.jpg';
import img8 from '../tombstones/assets/tombstone-8.jpg';
import img9 from '../tombstones/assets/tombstone-9.jpg';
import img10 from '../tombstones/assets/tombstone-10.jpg';
import img11 from '../tombstones/assets/tombstone-11.jpg';
import img12 from '../tombstones/assets/tombstone-12.jpg';
import img13 from '../tombstones/assets/tombstone-13.jpg';
import img14 from '../tombstones/assets/tombstone-14.jpg';
import img15 from '../tombstones/assets/tombstone-15.jpg';
import img16 from '../tombstones/assets/tombstone-16.jpg';
import img17 from '../tombstones/assets/tombstone-17.jpg';
import img18 from '../tombstones/assets/tombstone-18.jpg';

// Create the images array
const tombstoneImages = [
  img1, img2, img3, img4, img5, img6,
  img7, img8, img9, img10, img11, img12,
  img13, img14, img15, img16, img17, img18
];

const Products = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const productCategories = [
    {
      name: "Classic Tombstones",
      items: [
        { id: 1, name: "Eternal Black", price: "$450", material: "Granite" },
        { id: 2, name: "Pearl White", price: "$520", material: "Granite" },
        { id: 3, name: "Granite Gray", price: "$480", material: "Granite" },
        { id: 4, name: "Midnight Blue", price: "$550", material: "Granite" },
        { id: 5, name: "Autumn Red", price: "$500", material: "Granite" },
        { id: 6, name: "Forest Green", price: "$490", material: "Granite" }
      ]
    },
    {
      name: "Premium Tombstones", 
      items: [
        { id: 7, name: "Royal Marble", price: "$750", material: "Granite" },
        { id: 8, name: "Onyx Black", price: "$800", material: "Granite" },
        { id: 9, name: "Crystal White", price: "$780", material: "Granite" },
        { id: 10, name: "Sapphire Blue", price: "$850", material: "Granite" },
        { id: 11, name: "Emerald Green", price: "$820", material: "Granite" },
        { id: 12, name: "Ruby Red", price: "$830", material: "Granite" }
      ]
    },
    {
      name: "Custom Designs",
      items: [
        { id: 13, name: "Angel Carving", price: "$950", material: "Granite" },
        { id: 14, name: "Cross Design", price: "$900", material: "Granite" },
        { id: 15, name: "Heart Memorial", price: "$880", material: "Granite" },
        { id: 16, name: "Book-shaped", price: "$920", material: "Granite" },
        { id: 17, name: "Obelisk Design", price: "$1000", material: "Granite" },
        { id: 18, name: "Bench Memorial", price: "$1100", material: "Granite" }
      ]
    }
  ];

  const openLightbox = (imageIndex) => {
    setSelectedImage(imageIndex);
    setLightboxOpen(true);
  };

  return (
    <div className="products-page">
{lightboxOpen && (
  <YetAnotherLightbox
    open={lightboxOpen}
    close={() => setLightboxOpen(false)}
    slides={tombstoneImages.map(img => ({ src: img }))}
    index={selectedImage}
    carousel={{
      finite: false
    }}
    controller={{
      closeOnBackdropClick: true
    }}
    render={{
      slide: ({ slide }) => (
        <div style={{ textAlign: 'center' }}>
          <img 
            src={slide.src} 
            alt={`${productCategories[Math.floor(selectedImage/6)].items[selectedImage%6].name}`}
            style={{ maxHeight: '80vh', maxWidth: '90vw' }}
          />
          <div style={{ marginTop: '1rem' }}>
            <h4>{productCategories[Math.floor(selectedImage/6)].items[selectedImage%6].name}</h4>
            <p>Material: {productCategories[Math.floor(selectedImage/6)].items[selectedImage%6].material}</p>
          </div>
        </div>
      )
    }}
  />
)}

      <h1 className="page-title">Our Tombstone Collection</h1>
      
      {productCategories.map((category, catIndex) => (
        <section key={catIndex} className="product-category">
          <h2 className="category-title">{category.name}</h2>
          <div className="products-grid">
            {category.items.map((product, prodIndex) => {
              const imageIndex = catIndex * 6 + prodIndex;
              return (
                <div 
                  key={product.id} 
                  className="product-card"
                >
                  <div 
                    className="product-image-container"
                    onClick={() => openLightbox(imageIndex)}
                  >
                    <img 
                      src={tombstoneImages[imageIndex]} 
                      alt={`${product.name} tombstone`}
                      className="product-image"
                      loading="lazy"
                    />
                    <div className="product-overlay">
                      <button 
                        className="quick-view-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          openLightbox(imageIndex);
                        }}
                      >
                        Full View
                      </button>
                    </div>
                  </div>
                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-material">{product.material}</p>
                    <p className="product-price">{product.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Products;
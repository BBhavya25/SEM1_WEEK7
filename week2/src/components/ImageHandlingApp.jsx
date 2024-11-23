import { useState } from 'react';
// Task 26: Single Image Component
const SingleImageDisplay = () => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Task 26: Basic Image Display</h2>
      <div className="relative bg-gray-100 rounded-lg overflow-hidden">
        <img 
          src="https://th.bing.com/th/id/OIP.UFwwVLUDaKX9b5-fHhzzBwHaFj?w=222&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="Sample display"
          className="max-w-full h-auto rounded-lg shadow-lg"
        />
        <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded text-sm">
        </div>
      </div>
    </div>
  );
};

// Task 27: Multiple Images Component
const MultipleImageDisplay = () => {
  // Replace these paths with your actual image paths
  const imagePaths = [
    'https://th.bing.com/th/id/OIP.376g807DhGB8FXCBx8OMiAHaEK?w=308&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    'https://th.bing.com/th/id/OIP.w_D0EfvyNwQDfu1rhN49UQHaHM?w=184&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    'http://ts3.mm.bing.net/th?id=OIP.HxV79tFMPfBAIo0BBF-sOgHaEy&pid=15.1'
  ];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Task 27: Dynamic Image Grid</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {imagePaths.map((path, index) => (
          <div key={index} className="relative">
            <img
              src={path}
              alt={`Dynamic image ${index + 1}`}
              className="w-full h-auto rounded-lg shadow-md"
            />
            <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded text-sm">
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Task 28: Lazy Loading Images Component
const LazyLoadImages = () => {
  const images = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    src: `https://th.bing.com/th/id/OIP.esdHnlB-eysViOsi0G_x9QHaEo?w=276&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7${200 + i * 50}/https://th.bing.com/th/id/OIP.6lL4MboZ6-ZtULpHuGykaAHaE7?w=258&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7${i + 1}`,
    alt: `Lazy loaded image ${i + 1}`
  }));

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Task 28: Lazy Loaded Images</h2>
      <div className="space-y-4">
        {images.map(({ id, src, alt }) => (
          <div key={id} className="relative">
            <img
              src={src}
              alt={alt}
              loading="lazy"
              className="w-full h-auto rounded-lg shadow-md"
            />
            <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded text-sm">
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Task 29: Background Image Component
const BackgroundImageComponent = () => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Task 29: Background Image</h2>
      {/* Replace backgroundImage url with your image path */}
      <div
        className="relative w-full h-64 rounded-lg shadow-lg flex items-center justify-center text-white text-2xl font-bold"
        style={{
          backgroundImage: 'url("https://th.bing.com/th/id/OIP.Mvcr0QDsGXOx29cSBfXd6AHaE7?w=294&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute top-2 right-2 bg-white text-black px-2 py-1 rounded text-sm">
        </div>
        <p>Content Over Background Image</p>
      </div>
    </div>
  );
};

// Task 30: Theme Based Image Component
const ThemeBasedImage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Replace these with your actual light/dark theme images
  const lightThemeImage = "http://ts4.mm.bing.net/th?id=OIP.WlmqisvBC-xElcHVE1x-0wHaJ4&pid=15.1";
  const darkThemeImage = "https://th.bing.com/th/id/OIP.YJY1WL3L6gam6kAeVswT7QHaJQ?pid=ImgDet&w=184&h=229&c=7&dpr=1.3";

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Task 30: Theme-based Image</h2>
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="px-4 py-2 mb-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        Toggle Theme
      </button>
      <div className={`relative p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <img
          src={isDarkMode ? darkThemeImage : lightThemeImage}
          alt={isDarkMode ? 'Dark theme image' : 'Light theme image'}
          className="w-full h-auto rounded-lg transition-all duration-300"
        />
        <div className="absolute top-6 right-6 bg-white px-2 py-1 rounded text-sm">
          Replace with: /images/{isDarkMode ? 'dark' : 'light'}-theme.jpg
        </div>
      </div>
    </div>
  );
};

const ImageHandlingApp = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <SingleImageDisplay />
      <MultipleImageDisplay />
      <LazyLoadImages />
      <BackgroundImageComponent />
      <ThemeBasedImage />
    </div>
  );
};

export default ImageHandlingApp;
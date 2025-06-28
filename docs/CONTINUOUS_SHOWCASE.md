# Continuous Showcase Component

A smooth, continuous-scrolling showcase component for Next.js applications that supports both local and external images.

## Features

- Continuous smooth scrolling animation
- Support for both local and external images
- Responsive design
- Hover effects with titles and descriptions
- Lazy loading for optimal performance
- Touch-friendly interface
- Automatic image optimization (for local images)

## Usage

```javascript
import ContinuousShowcase from '@/components/sections/ContinuousShowcase';

function YourPage() {
  return (
    <div>
      <ContinuousShowcase />
    </div>
  );
}
```

## Configuration

The component accepts the following configuration through the showcaseImages array:

```javascript
const showcaseImages = [
  {
    url: '/path/to/image.jpg',  // Image path or URL
    title: 'Image Title',       // Title shown on hover
    description: 'Description', // Description shown on hover
    isLocal: true              // true for local images, false for external URLs
  }
];
```

## Animation Settings

The slider uses Swiper.js with the following default settings:

```javascript
{
  slidesPerView: 'auto',
  spaceBetween: 30,
  speed: 8000,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  },
  loop: true,
  loopAdditionalSlides: 4,
  allowTouchMove: false,
  grabCursor: false
}
```

## Styling

The component uses Tailwind CSS for styling:

- Slide width: 500px
- Slide height: 600px
- Background: gray-900
- Hover effects: Gradient overlay with text
- Rounded corners: 2xl
- Spacing between slides: 30px

## Performance Optimization

1. Image Loading:
   - First 6 images are prioritized
   - Remaining images are lazy loaded
   - Local images use Next.js optimization
   - External images use native lazy loading

2. Animation:
   - Hardware-accelerated animations
   - Smooth scrolling with minimal CPU usage
   - Optimized for mobile devices

## Example Implementation

```javascript
const showcaseImages = [
  // Local images
  {
    url: '/testimonials/image1.webp',
    title: 'Local Image',
    description: 'Using Next.js Image optimization',
    isLocal: true
  },
  // External images
  {
    url: 'https://example.com/image.jpg',
    title: 'External Image',
    description: 'Using external URL',
    isLocal: false
  }
];
```

## Best Practices

1. Image Dimensions:
   - Recommended width: 500px
   - Recommended height: 600px
   - Maintain aspect ratio
   - Use WebP format when possible

2. Performance:
   - Optimize images before upload
   - Use appropriate image sizes
   - Enable browser caching
   - Monitor loading times

3. Content:
   - Keep titles concise
   - Descriptions should be 1-2 lines
   - Use high-quality images
   - Ensure text contrast on hover

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Dependencies

- Next.js 13+
- Swiper.js
- Tailwind CSS
- React 18+

## Known Issues

1. Theme Transitions:
   - Some gradient effects may flicker during theme changes
   - Text color transitions need manual handling

2. Mobile Performance:
   - Heavy images may cause lag on low-end devices
   - Consider using lower resolution images for mobile

## Contributing

Feel free to contribute to this component by:
1. Reporting issues
2. Suggesting improvements
3. Creating pull requests
4. Updating documentation

For more detailed information about image handling, see [IMAGE_HANDLING.md](./IMAGE_HANDLING.md) 
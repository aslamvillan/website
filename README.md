# ASLAM VILLAN - Research Scientist Website

A modern, responsive personal website for Dr. ASLAM VILLAN, Research Scientist. Built with clean HTML5, CSS3, and vanilla JavaScript following the provided wireframe designs.

## 🎯 Website Overview

This website features a clean two-column layout with:
- **Left Sidebar**: Fixed navigation with profile information
- **Right Content Area**: Scrollable content sections for different pages
- **Responsive Design**: Adapts to desktop, tablet, and mobile devices

## 📁 File Structure

```
aslam/
├── index.html          # Main HTML structure
├── styles.css          # All CSS styling and responsive design
├── script.js           # JavaScript for navigation and interactions
├── README.md           # This documentation file
├── 1.jpg              # Gallery/Research images
├── 2.jpg              # Gallery/Research images
├── 3.jpg              # Gallery/Research images
├── 4.jpg              # Gallery/Research images
├── 5.jpg              # Gallery/Research images
└── aslam.pptx         # Original wireframe designs
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - runs directly from files

### Installation
1. Download all files to your local directory
2. Open `index.html` in your web browser
3. The website will load with the Gallery section as default

## 🎨 Design Features

### Layout Structure
- **Fixed Left Sidebar (320px)**: Contains name, title, and navigation
- **Vertical Separator**: Thin line dividing the two sections
- **Scrollable Right Content**: Main content area with independent scrolling

### Color Scheme
- **Primary Blue**: `#2563eb` (Navigation active states, buttons)
- **Text Colors**: Various shades of gray for hierarchy
- **Background**: Clean white with subtle gray accents
- **Hover Effects**: Smooth color transitions and subtle shadows

### Typography
- **Font Family**: Inter (Google Fonts) with system font fallbacks
- **Hierarchy**: Clear size and weight variations for readability
- **Responsive**: Scales appropriately across devices

## 📱 Responsive Breakpoints

- **Desktop**: > 768px (Full two-column layout)
- **Tablet**: ≤ 768px (Adjusted spacing, stacked cards)
- **Mobile**: ≤ 640px (Single column, horizontal nav)

## 🧭 Navigation System

### Sections
1. **About**: Personal introduction and background
2. **Research**: Research projects with images and descriptions
3. **Publications**: Academic publications with links
4. **Gallery**: Photo gallery in grid layout (default section)
5. **More**: Contact information and additional resources

### Navigation Features
- **Smooth Transitions**: Fade and slide effects between sections
- **Active State Management**: Visual indication of current section
- **Keyboard Navigation**: Alt + Arrow keys for accessibility
- **URL Hash Updates**: Direct linking to specific sections

## 🛠️ Maintenance Guide

### Updating Content

#### 1. Personal Information
Edit the profile section in `index.html`:
```html
<div class="profile">
    <h1 class="name">ASLAM VILLAN</h1>
    <p class="title">Research Scientist</p>
</div>
```

#### 2. About Section
Update the about content in the About section:
```html
<section id="about" class="content-section hidden">
    <h2 class="section-title">About</h2>
    <div class="about-content">
        <p class="intro-text">Your introduction text here...</p>
        <!-- Add more paragraphs as needed -->
    </div>
</section>
```

#### 3. Research Projects
Add or modify research cards in the Research section:
```html
<div class="research-card">
    <div class="research-image">
        <img src="your-image.jpg" alt="Project Description">
        <div class="image-placeholder" style="display: none;">Image</div>
    </div>
    <div class="research-content">
        <h3 class="research-title">Your Project Title</h3>
        <p class="research-caption">Project description...</p>
        <a href="#" class="read-more">Read more</a>
    </div>
</div>
```

#### 4. Publications
Update publications in the Publications section:
```html
<div class="publication-card">
    <div class="publication-image">
        <img src="publication-image.jpg" alt="Publication">
        <div class="image-placeholder" style="display: none;">Image</div>
    </div>
    <div class="publication-content">
        <h3 class="publication-title">Publication Title</h3>
        <p class="publication-authors">Author names</p>
        <p class="publication-details">Year - Journal name</p>
        <a href="publication-url" class="publication-button" target="_blank">Research Article</a>
    </div>
</div>
```

#### 5. Gallery
Add or modify gallery items:
```html
<div class="gallery-item">
    <div class="gallery-image">
        <img src="gallery-image.jpg" alt="Gallery Description">
        <div class="image-placeholder" style="display: none;">Image</div>
    </div>
    <p class="gallery-caption">Image caption</p>
</div>
```

### Adding Images

1. **Replace existing images**: Simply replace `1.jpg`, `2.jpg`, etc. with your images
2. **Add new images**: Upload new images and update the `src` attributes in HTML
3. **Image requirements**:
   - **Format**: JPG, PNG, or WebP
   - **Size**: Recommended 400x400px for gallery, 200x200px for research/publications
   - **Optimization**: Compress images for web to improve loading speed

### Styling Customizations

#### Color Scheme
Update CSS variables in `styles.css`:
```css
:root {
    --primary-blue: #your-color;
    --text-primary: #your-color;
    /* Modify other colors as needed */
}
```

#### Typography
Change font family or sizes:
```css
:root {
    --font-family: 'Your-Font', sans-serif;
    --font-size-base: 1.1rem; /* Adjust base size */
}
```

#### Layout Adjustments
- **Sidebar width**: Modify `--sidebar-width` in CSS
- **Content spacing**: Adjust `--spacing-*` variables
- **Border radius**: Change `--radius-*` for rounded corners

## 🔧 Technical Details

### Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Performance Features
- **Optimized CSS**: Uses CSS Grid and Flexbox for efficient layouts
- **Image Optimization**: Graceful fallbacks for missing images
- **Smooth Animations**: Hardware-accelerated transitions
- **Debounced Events**: Optimized scroll and resize handlers

### Accessibility Features
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: ARIA labels and live regions
- **Focus Management**: Visible focus indicators
- **Color Contrast**: WCAG AA compliant color combinations

## 📊 Analytics Integration

The website includes hooks for analytics tracking. To integrate with Google Analytics:

1. Add your Google Analytics script to the `<head>` section of `index.html`
2. The JavaScript will automatically track section views and user interactions

## 🐛 Troubleshooting

### Common Issues

#### Images Not Loading
- Check file paths are correct
- Ensure images are in the same directory
- Verify image file formats are supported

#### Navigation Not Working
- Check browser console for JavaScript errors
- Ensure `script.js` is properly linked in HTML
- Verify all section IDs match between HTML and JavaScript

#### Styling Issues
- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
- Check CSS file is properly linked
- Verify CSS syntax is correct

#### Mobile Display Problems
- Test responsive breakpoints
- Check viewport meta tag in HTML
- Verify CSS media queries are working

### Browser Console
Open browser developer tools (F12) to see:
- Navigation logs
- Performance metrics
- Error messages
- Section tracking information

## 🚀 Deployment

### Local Testing
1. Open `index.html` directly in browser
2. Test all navigation links
3. Verify responsive design on different screen sizes
4. Check image loading and placeholder fallbacks

### Web Hosting
1. Upload all files to your web server
2. Ensure all file paths are relative
3. Test the live website
4. Set up analytics if desired

### Recommended Hosting
- **GitHub Pages**: Free hosting for static sites
- **Netlify**: Easy deployment with custom domains
- **Vercel**: Fast global CDN
- **Traditional Web Hosting**: Any provider supporting static files

## 📝 Future Enhancements

### Potential Additions
- **Contact Form**: Add a contact form with backend processing
- **Blog Section**: Add a blog or news section
- **Search Functionality**: Implement site search
- **Dark Mode**: Add theme switching capability
- **Multi-language Support**: Internationalization features
- **CMS Integration**: Connect to a content management system

### Code Improvements
- **Build Process**: Add webpack or similar for optimization
- **CSS Preprocessing**: Use SASS or LESS for better CSS management
- **Image Optimization**: Implement automatic image compression
- **SEO Optimization**: Add meta tags and structured data

## 📞 Support

For technical support or questions about maintaining this website:
1. Check this README for common solutions
2. Review browser console for error messages
3. Test in different browsers and devices
4. Ensure all files are properly uploaded and accessible

## 📄 License

This website template is created for ASLAM VILLAN's personal use. Feel free to modify and customize as needed.

---

**Last Updated**: December 2024  
**Version**: 1.0  
**Author**: Website Developer  
**For**: Dr. ASLAM VILLAN, Research Scientist

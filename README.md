# Cambridge Explorer

![Cambridge Explorer - Philosophy and Physics Guide](https://img.shields.io/badge/Cambridge-Explorer-blue)

A beautiful, interactive guide to philosophical and physics sites in Cambridge, designed to help visitors and locals explore the rich intellectual heritage of one of the world's most important academic cities.

## Features

- 🔍 **Interactive Filtering**: Filter locations by category or search terms
- 🌙 **Dark/Light Mode**: Toggle between dark and light themes
- 🗺️ **Map View**: Visual representation of sites throughout Cambridge
- 🧠 **Philosophy Sites**: Discover locations connected to Wittgenstein, Russell, and other influential philosophers
- ⚛️ **Physics Sites**: Explore places where groundbreaking discoveries like the electron and DNA structure were made
- 📚 **Bookshops**: Find Cambridge's legendary academic and antiquarian bookshops
- 🚶 **Walking Routes**: Pre-planned routes and self-guided tour suggestions

## Technology

This project is built with:

- **Next.js**: For server-side rendering and static site generation
- **TailwindCSS**: For responsive, utility-first styling
- **React**: For interactive UI components
- **Vercel**: For deployment and hosting

## Getting Started

```bash
# Clone the repository
git clone https://github.com/yourusername/cambridge-explorer.git

# Navigate to the project directory
cd cambridge-explorer

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This project is deployed on Vercel. Pushing to the main branch will automatically trigger a new deployment.

## Data Structure

The site data is stored in `data/cambridgeData.js` and follows this structure:

- **Categories**: Define the different types of locations
- **Locations**: Contains detailed information about each site, including:
  - Name and description
  - Category and location
  - Access information
  - Historical significance
  - Detailed notes

## Contributing

Contributions are welcome! If you'd like to add a location, fix an error, or improve the app:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Cambridge University for its rich philosophical and scientific heritage
- The many museums, colleges, and institutions that preserve this history
- The countless philosophers and physicists who made Cambridge their home 
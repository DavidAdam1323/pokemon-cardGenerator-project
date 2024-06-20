# Pokemon Card Generator

This project is a simple web application that generates Pokemon cards dynamically by fetching data from the PokeAPI. Each generated card displays essential details about a randomly selected Pokemon, including its name, HP, attack, defense, speed stats, and type(s).

## Technologies Used

- HTML
- CSS (styles defined in `styles.css`)
- JavaScript (functions defined in `scripts.js`)
- [PokeAPI](https://pokeapi.co/) - RESTful API used for fetching Pokemon data

## Project Structure

```
pokemon-card-generator/
│
├── index.html         # HTML file defining the structure of the web page
├── styles.css         # CSS file containing styles for the project
└── scripts.js         # JavaScript file containing the main logic for the card generation
```

## How It Works

1. **HTML Structure**:

   - The `index.html` file contains the basic structure of the web page. It includes a container (`div.container`) where the Pokemon card (`div#card`) will be displayed along with a 'Generate' button (`button#btn`) to trigger card generation.

2. **Styling**:

   - Styles for the entire application are defined in `styles.css`, including layout, colors, typography, and card appearance.

3. **JavaScript Logic**:

   - The `scripts.js` file handles the dynamic generation of Pokemon cards:
     - **Fetching Data**: Uses the Fetch API to retrieve random Pokemon data from the PokeAPI (`https://pokeapi.co/api/v2/pokemon/`).
     - **Generating Cards**: Dynamically constructs and populates the card with fetched Pokemon data, including stats and types.
     - **Styling Cards**: Applies appropriate styling to match the Pokemon type using predefined colors (`typeColor` object).

4. **Card Generation**:

   - Upon page load and clicking the 'Generate' button, a random Pokemon is fetched and its data is used to generate and display a Pokemon card.

5. **Type Colors**:
   - The `typeColor` object maps Pokemon types to specific colors, enhancing visual distinction and thematic representation on each card.

## Usage

- Open `index.html` in a web browser.
- Click the 'Generate' button to fetch and display a new Pokemon card each time.

## Contributing

Contributions are welcome! Feel free to fork this repository, make improvements, and submit pull requests.

## Credits

- **PokeAPI**: Provides the Pokemon data used in this project.
- **Google Fonts**: Used for the 'Poppins' font family.
- **FontAwesome**: Could be integrated for additional iconography.

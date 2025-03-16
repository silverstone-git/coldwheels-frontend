# Coldwheels

This Vue.js frontend for the ColdWheels project provides a sleek and responsive user interface to manage car listings, user authentication, and image uploads. It works in tandem with the ColdWheels Go server to offer a full-stack solution.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development](#development)
- [Build & Deployment](#build--deployment)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [License](#license)

## Features

- **User Authentication:**  
  - Signup and login routes using JWT stored as cookies.
  - Auth store management using Pinia in `src/stores/authStore.ts`.

- **Theming:**  
  - Multiple themes available (Light, Dark, Cyberpunk, Luxury) using [Daisy UI](https://daisyui.com).
  - Theme selection and persistence using cookies (see `src/stores/theme.ts`).

- **Routing:**  
  - Vue Router manages public routes (Landing, Login, Signup) and protected routes (Dashboard, Car Page) as configured in `src/router/index.ts`.
  - Global route guards ensure authentication is enforced.

- **Components & Views:**  
  - Main layout defined in `src/App.vue`, which includes a navigation bar, dynamic routed content via `<router-view>`, and a toast notification component.
  - Dashboard view (`src/views/Dashboard.vue`) for managing and paginating car listings.
  - Additional views such as Login, Signup, Landing, and CarPage support user interactions and CRUD functionalities.

- **State Management:**  
  - Uses Pinia for authentication (`src/stores/authStore.ts`) and toast notifications (`src/stores/toastStore.ts`).

- **Utilities:**  
  - Axios is used for API calls.
  - Cookies are managed with [vue3-cookies](https://github.com/quantumui/vue3-cookies) for persisting auth tokens and theme preferences.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or above recommended)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)
- A running instance of the [ColdWheels Go server API](https://github.com/silverstone-git/coldwheels-backend)

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/silverstone-git/coldwheels-frontend.git
   cd coldwheels-frontend
   ```

2. **Install Dependencies**

   If you prefer Yarn:

   ```bash
   yarn install
   ```

   Or with npm:

   ```bash
   npm install
   ```

## Development

Run the development server with hot-reloading:

Using npm:

```bash
npm run dev
```

Open your browser and navigate to [http://localhost:8080](http://localhost:8080) (port may vary) to see the app in action.

## Build & Deployment

To compile and minify for production, run:

Using Yarn:

```bash
yarn build
```

Or with npm:

```bash
npm run build
```

The built files will be output to the `/dist` directory. Deploy the contents of this directory to your static hosting provider such as Netlify, Vercel, or another service of your choice.

## Configuration

Environment configuration for the frontend is handled through a `.env` file. Create a file in the project root containing, for example:

Modify according to your URL for a running backend:

```dotenv
VITE_API_BASE_URL=http://localhost:8080/api
```

## Project Structure

Below is an overview of key files and folders in the project:

```
coldwheels-frontend/
├── public/                     # Static assets served directly
├── src/
│   ├── assets/                 # Images, fonts, and style files
│   ├── components/             # Reusable Vue components (if any)
│   ├── lib/                    # Application-specific models and constants
│   ├── router/
│   │   └── index.ts            # Vue Router configuration with route guards
│   ├── stores/
│   │   ├── authStore.ts        # Pinia store for authentication state and actions
│   │   ├── theme.ts            # Pinia store for theming (Light, Dark, Cyberpunk, Luxury)
│   │   └── toastStore.ts       # Pinia store for toast notifications
│   ├── utils/
│   │   └── axios.ts            # Axios instance configuration for API calls
│   ├── views/
│   │   ├── Landing.vue         # Landing page view
│   │   ├── Login.vue           # Login view
│   │   ├── Signup.vue          # Signup view
│   │   ├── Dashboard.vue       # Dashboard view for car listings
│   │   ├── CarPage.vue         # Detailed car view
│   │   ├── Navbar.vue          # Navigation bar component used in App.vue
│   │   ├── Toast.vue           # Toast notifications component
│   │   └── CreateCarFormBody.vue  # Form component for creating a car record
│   ├── App.vue                 # Main application component that sets up the layout, providers, and initializes stores
│   └── main.ts                 # Application entry point
├── .env                        # Environment variables for development (not committed)
├── package.json                # Project metadata and dependencies
└── README.md                   # This README file
```

### Key File Highlights

- **src/App.vue**  
  Sets up the main application structure.  
  - Provides cookies to child components.
  - Initializes the authentication state using `useAuthStore()`.
  - Sets the application's theme via `selectTheme` from `src/stores/theme.ts`.
  - Contains the Navbar and Toast components, as well as a `<router-view>` wrapped in `<Suspense>` for route-level code splitting.

- **src/router/index.ts**  
  Configures routing and global navigation guards that:
  - Redirect unauthenticated users from protected routes to the Login page.
  - Prevent logged-in users from accessing Login or Signup pages.

- **src/stores/theme.ts**  
  Exposes theme selection logic using a reactive variable and persists the selected theme in cookies and as document classes for CSS styling.

- **src/stores/authStore.ts**  
  Manages the authentication state using Pinia and vue3-cookies, including methods to initialize, login, and logout.

- **src/views/Dashboard.vue**  
  A sample protected view that displays the user’s car listings with pagination and invokes child components like Car and CreateCarFormBody for listing and creating cars.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

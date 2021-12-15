Site hosted on Netlify: https://nostalgic-noyce-b6ad86.netlify.app/

This project meets the requirements for DGM 3790:

1. Effectively use conditional logic and JavaScript array methods(e.g. Filter, Map, Reduce, Find) to render large lists.
    Demonstrated on the Home page: https://github.com/annaabbott/makeupFinal/blob/master/src/pages/Home.js
    Category page: https://github.com/annaabbott/makeupFinal/blob/master/src/pages/CategoryPage.js
    Cart page: https://github.com/annaabbott/makeupFinal/blob/master/src/pages/CartPage.js

2. Encapsulate your code as React functional components.

3. Work with command-line tools and NPM to create and manage your project within a real development toolset.

4. Allow communication between components using props and the Context API.
    Demonstrated on the Data Context Provider: https://github.com/annaabbott/makeupFinal/blob/master/src/providers/ProductDataContext.js
    and the Cart Context provider: https://github.com/annaabbott/makeupFinal/blob/master/src/providers/CartContext.js

5. Present a form for user input that provides useful form validation and feedback for at least 3 data input items (e.g. name, password).
    On the Home page ( https://github.com/annaabbott/makeupFinal/blob/master/src/pages/Home.js), choose "Sign Up" on the NavBar (https://github.com/annaabbott/makeupFinal/blob/master/src/components/NavBar.js). The app will send a confirmation link to the email address provided by the user on the sign up page (https://github.com/annaabbott/makeupFinal/blob/master/src/pages/SignUpPage.js). The user may click on the link to sign in. Thereafter, the user may sign in via the "Sign In" option on the NavBar and supplying their name and password on the Sign In page (https://github.com/annaabbott/makeupFinal/blob/master/src/pages/SignInPage.js)

6. Create at least 5 custom components and use them within at least two of your other components.

7. Use a mix of CSS animations and Transition Component transitions to enhance some aspects of your project.
    Demonstrated on the Home page: https://github.com/annaabbott/makeupFinal/blob/master/src/pages/Home.js
    and the Cart page, collapsing when items are removed from cart: https://github.com/annaabbott/makeupFinal/blob/master/src/pages/CartPage.js

8. Connect to a server using Netlify functions and display retrieved data including at least 5 item details (accessed by details route) in your UI.
    Demonstrated in https://github.com/annaabbott/makeupFinal/blob/master/netlify/functions/products.js

9. Provide at least 3 different routes with navigation between them using React Router.
    Demonstrated on: https://github.com/annaabbott/makeupFinal/blob/master/src/App.js

10. Manage your application's general and signup/login Authentication state using Hooks and the Context API.

11. Structure, document, and deploy your final project code according to common industry practices.
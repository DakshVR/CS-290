1. Home Page
  
   1) This page is rendered when the app starts up.
   2) This page includes links to the following 2 pages:
        - Shopping List Page.
        - Store List Page.

2. Shopping List Page
    
    1) This page has an HTML table, which is created via a React component, that shows the data provided in the file items.js
    2) Each row in the HTML table have the following 3 columns
          - Item Name
          - Item Price
          - A React component that provides a control via 2 icons to increment and decrement the quantity of the item.
              - The initial value of the quantity is set to zero.
              - The user will not be able to set the quantity to less than 0 or greater than 10.
    3) This page includes a link to the Home page.
3. Store List Page
    
    1) This page uses a React component to display the data in the file stores.js.
    2) Underneath the store data, the page displays an input control for the user to enter their 5 digit zip code and a button to submit the data.
        - It displays a message with this input control telling the user what they are supposed to enter.
        - When the user clicks the button, the app doesn't submit the form. Instead, the app displays an alert with a message stating what the user had entered.
    3) This page also includes a link to the Home page.



Commands To Run:

1) npm install
2) npm start

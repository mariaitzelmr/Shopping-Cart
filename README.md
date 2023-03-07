# Shopping Cart Project

## Description

-This Shopping cart project presents a screen with an initial set of items, which will be reloaded when you push the Restock button.
-You can add items from the product list to your cart by pressing the "Add item" button of each item.
-Each time you add an item from the product list to the cart, the checkout price will increment according to the price of the selected items. The stock of the selected item in the product list will decrement by one every time you add an item to the cart.
-You can check your cart by pressing the "Cart" button which will display a dropdown with a list of the items picked from the cart. If you want to remove an item from the cart just click the "X" button and it will remove the item, reduce the checkout price accordingly to the price of the item removed and restore an item in the Product List.

cart.jsx is the main .js for the project, components are stored in cartList.js, productList.js, productRestock.js and utils.js

## Install

-Clone the shopping Cart from github
-To build the backend, in the cartDB folder:
    -run *yarn install* to install all the strapi dependencies
    -run *yarn develop* to run the backend with the initial database set for the project.

-To build the frontend, in the shoppingCart folder:
    -run http-server or any server of your choice.
    -Front end will be available at localhost:8080 unless otherwise instructed by console
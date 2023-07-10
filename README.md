# redux-store

E-commerce Platform Refactored Criteria
## Overview
This README document provides an overview of the refactored criteria for an e-commerce platform that uses Redux to manage global state. The refactoring involves replacing the existing Redux implementation with the Context API. This README outlines the key changes made to the application, focusing on the areas of store management, accessing the store, determining state changes, extracting state data, and dispatching actions.

## Refactored Criteria
The following sections describe the changes made to the e-commerce platform:

## Store Management
The app's store is now implemented using the Context API instead of Redux. This change allows for a simpler and more lightweight state management solution.
The Redux provider previously used in the React front end has been replaced with a Context provider that encapsulates the application's state.
## Accessing the Store
The app no longer uses the Redux provider. Instead, it utilizes the Context provider to make the global state accessible to the React components.
By using the Context API, components can consume the state directly without relying on the Redux-specific connect() function.
## Determining State Changes
The app no longer passes reducers to a Redux store. Instead, it uses the Context API, which provides a simplified mechanism for determining changes to the global state.
The state changes are now tracked using the useContext() hook, allowing components to subscribe to specific parts of the state tree and update accordingly.
## Extracting State Data
The app now utilizes the Context API to extract state data from the global store. Components can access the necessary data by consuming the context created by the Context provider.
By leveraging the useContext() hook, the application can easily retrieve the required state data without the need for selectors or mapStateToProps functions.
## Dispatching Actions
The app no longer relies on Redux for dispatching actions. Instead, it utilizes the Context API to manage and dispatch actions to update the global state.
Components can access the dispatch function provided by the Context provider to trigger state changes, similar to how Redux's dispatch function was previously used.
## Conclusion
The refactored e-commerce platform successfully replaces Redux with the Context API for managing global state. The changes outlined in this README demonstrate the migration from Redux to a simpler and more lightweight state management solution. By leveraging the Context API, the application benefits from a streamlined approach to store management, state access, change detection, data extraction, and action dispatching.


```md
 - npm i apollo-server-express
  - npm i graphql
  - npm i @apollo/client
  - npm i @apollo/react-hooks
  ```
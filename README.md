### Updated Roadmap for Vite + React with Redux

#### **1. Initial Setup**
- **Create Vite Project**:
  - Run the following command to set up a new Vite project with React:
    ```bash
    npm create vite@latest my-dashboard
    cd my-dashboard
    npm install
    ```
  
- **Install Dependencies**:
  - Install Redux and React-Redux:
    ```bash
    npm install @reduxjs/toolkit react-redux
    ```
  - Optionally, install `redux-thunk` for asynchronous actions if needed.

#### **2. JSON Structure Design**
- **Categories JSON**: (Same as before)
  ```json
  {
    "categories": [
      {
        "id": "cspm",
        "name": "CSPM Executive Dashboard",
        "widgets": [
          {
            "id": "w1",
            "name": "Widget 1",
            "content": "Random text for widget 1"
          },
          {
            "id": "w2",
            "name": "Widget 2",
            "content": "Random text for widget 2"
          }
        ]
      },
      {
        "id": "security",
        "name": "Security Overview",
        "widgets": []
      }
    ]
  }
  ```

#### **3. Application Layout**
- **App Structure**:
  - Similar to the previous plan, optimized for React and Vite.
  
- **Components**:
  - `CategoryList`: Lists categories.
  - `WidgetList`: Displays widgets for a selected category.
  - `Widget`: Individual widget component.
  - `AddWidgetForm`: Form to add a widget.
  - `SearchBar`: To search widgets.

#### **4. State Management with Redux**
- **Redux Store Setup**:
  - Create a Redux store with slices for categories and widgets.
  - Use `@reduxjs/toolkit` to create slices and actions.

  **Example Redux Setup**:
  ```javascript
  import { configureStore, createSlice } from '@reduxjs/toolkit';

  const initialState = {
    categories: []
  };

  const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
      addCategory: (state, action) => {
        state.categories.push(action.payload);
      },
      addWidget: (state, action) => {
        const { categoryId, widget } = action.payload;
        const category = state.categories.find(cat => cat.id === categoryId);
        if (category) {
          category.widgets.push(widget);
        }
      },
      removeWidget: (state, action) => {
        const { categoryId, widgetId } = action.payload;
        const category = state.categories.find(cat => cat.id === categoryId);
        if (category) {
          category.widgets = category.widgets.filter(widget => widget.id !== widgetId);
        }
      },
      searchWidgets: (state, action) => {
        const query = action.payload;
        return {
          ...state,
          filteredWidgets: state.categories.flatMap(category => 
            category.widgets.filter(widget => widget.name.includes(query))
          )
        };
      }
    }
  });

  export const { addCategory, addWidget, removeWidget, searchWidgets } = categoriesSlice.actions;

  const store = configureStore({
    reducer: {
      categories: categoriesSlice.reducer
    }
  });

  export default store;
  ```

#### **5. Dynamic Widget Management**
- **Add Widget**:
  - Use a modal to add a new widget.
  - Dispatch the `addWidget` action to add it to the relevant category.

- **Remove Widget**:
  - Use the `removeWidget` action to remove a widget from a category.

#### **6. Search Functionality**
- **Search Implementation**:
  - Use the `searchWidgets` action to filter widgets across categories based on user input.

#### **7. Testing**
- **Test Components**: 
  - Use Jest and React Testing Library for unit tests.
- **Redux Testing**: Test Redux slices and actions independently.

#### **8. Documentation**
- **README.md**:
  - Instructions on setting up the project, running it, and running tests.

#### **9. Deployment (Optional)**
- **Host the Application**: Use services like Vercel or Netlify for deployment.

#### **10. Code Submission**
- **GitHub Repository**: Create a public/private repository on GitHub and push your code.
- **Zip File**: Alternatively, package the project in a zip file and share it.

---

### Steps to Locally Run the Application
1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd my-dashboard
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Application**:
   ```bash
   npm run dev
   ```

4. **Running Tests**:
   ```bash
   npm test
   ```

5. **Open in Browser**: Access the application at `http://localhost:5173`.
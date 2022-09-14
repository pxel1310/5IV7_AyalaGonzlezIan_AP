const Storage = () => {
    class StorageTodoAppHelper {
      constructor(storageName, initialValue) {
        let currentStorage = localStorage.getItem(storageName);
        if (!currentStorage) {
          localStorage.setItem(storageName, JSON.stringify(initialValue));
          currentStorage = initialValue;
        } else {
          currentStorage = JSON.parse(currentStorage);
        }
        this._storageName = storageName;
        this._currentValues = currentStorage;
      }

      addItem(newItem) {
        this._currentValues.push(newItem);
        localStorage.setItem(
          this._storageName,
          JSON.stringify(this._currentValues)
        );
      }

      getItem(findFunction) {
        return this._currentValues.find(findFunction);
      }

      updateItem() {
        const itemIndex = this._currentValues.findIndex(findFunction);
        this._currentValues[itemIndex] = {
          ...this._currentValues[itemIndex],
          ...newIndex,
        };
        localStorage.setItem(
          this._storageName,
          JSON.stringify(this._currentValues)
        );
      }

      getItem() {
        return this._currentValues;
      }

      deleteItem(findFunction) {
        this._currentValues.slice(
          this._currentValues.findIndex(findFunction),
          1
        );
        localStorage.setItem(
          this._storageName,
          JSON.stringify(this._currentValues)
        );
      }
    }

    const loadListItemTemplate = () => {
        const templateDomItem = document.getElementById("listItemtemplate")
        const template = templateDomItem.innerHTML.trim()
        templateDomItem.remove()
        return template
    }

    const DOMElements = {
      taskName: document.getElementById("txtTaskName"),
      addButton: document.getElementById("brnAddTask"),
      taskList: document.getElementById("taskList"),
      changeWallpaperButton: document.getElementById("btnChangeWallpaper"),
      editUser: document.getElementById("editUser"),
    };

    const listItemtemplate = loadListItemTemplate();
    const storage = new StorageTodoAppHelper("Storage", []);

    const toggleTask = (domItem) => {
        if(domItem){
            storage.updateItem((item) => item.id === +domItem.id, {
              completed: !domItem.classList.contains("complate")
            });
        }
        if(!domItem.classList.contains("complated")){
            domItem.classList.add("complete")
        }else{
            domItem.classList.remove("complete")
        }
    }

    const deleteTask = (domItem) => {
      if (domItem) {
        storage.deleteItem((item) => item.id === +domItem.id);
      }
      domItem.parentElement.remove();
    }

    const createDOMTaskElement = (task) => {
        const template = document.createElement("li")
        template.innerHTML = listItemtemplate
          .replace("{id}", task.id)
          .replace("{template}", task.value)
          .replace("{completed}", task.completed ? "completed" : "");

          const ourContent = template.firstChild;
          ourContent.childNodes.forEach((child) => {
            if (child.classList?.contains("complete")) {
              child.onclick = () => toggleTask(ourContent);
            }
            if (child.classList?.contains("delete")) {
              child.onclick = () => toggleTask(ourContent);
            }
           
          });
          DOMElements.taskList.append(template);
    }

    const rederTask = () => {
        DOMElements.taskList.innerHTML = storage.getItem()
          ? ""
          : "<li>No hay tareas aun</li>";
        
          storage.getItem().forEach(task => createDOMTaskElement(task))
    }
}
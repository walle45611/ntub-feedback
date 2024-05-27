# ntub-feedback

* 此範本使用方式
  * 本專案是個範本專案可以用於 django-rest-framework 和 react 的搭配 
  * 使用 `conda` 安裝 `venv`
    
    ```
    conda env create -f freeze.yml
    ```

  * 前端 `http://localhost:5173/`
    
    ```bash
        cd frontend
        npm i
        npm run dev
    ```
  * 後端 `http://127.0.0.1:8000/`
    
    ```bash
        cd backend
        python api/manage.py runserver
    ```

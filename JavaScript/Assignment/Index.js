<!DOCTYPE html>
<html>
    <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
        <title>Calculator</title>
    </head>
    <body>
        <div class="container">
            <h1 style="text-align: center">JavaScript Calculator</h1>            <input class="form-control" id="number1" />
            <input class="form-control" id="number2" />
            <button class="btn btn-primary btn-block mb-3 mt-3" id="addButton">
              Add
            </button>
            <div class="alert alert-success">
              Result <span id="resultTextArea"></span>
            </div>
          </div>
      
          <script>
            //Variables
            const number1Input = document.getElementById("number1");
            const number2Input = document.getElementById("number2");
            const addButton = document.getElementById("addButton");
            const resultTextArea = document.getElementById("resultTextArea");
      
            addButton.addEventListener("click", function () {
              const value1 = Number(number1Input.value);
              const value2 = Number(number2Input.value);
              resultTextArea.innerText = value1 + value2;
            });
          </script>
    </body>
</html>
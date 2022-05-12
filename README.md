# Ejemplo carrito de compras con objeto y template

## Todo con finess educativos

Si puedes mejorar el codigo, bienvenido!


```` html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>

<body>
    <main class="container mt-5">
        <div class="row text-center">
            <article class="col-sm-4 mb-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Frutilla &#127827 </h5>
                        <button class="btn btn-outline-primary" data-fruta="frutilla">Agregar</button>
                    </div>
                </div>
            </article>
            <article class="col-sm-4 mb-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Banana &#127820 </h5>
                        <button class="btn btn-outline-primary" data-fruta="banana">Agregar</button>
                    </div>
                </div>
            </article>
            <article class="col-sm-4 mb-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Manzana &#127822 </h5>
                        <button class="btn btn-outline-primary" data-fruta="manzana">Agregar</button>

                    </div>
                </div>
            </article>
        </div>
    </main>

    <section class="container mt-3">
        <ul class="list-group" id="carrito"></ul>
    </section>

    <template id="template">
        <li class="list-group-item d-flex justify-content-between 
        align-items-center">
            <span class="lead">Frutilla</span>
            <span class="badge bg-primary rounded-pill">12</span>
        </li>
    </template>

    <script src="practica.js"></script>
</body>

</html>

````
const express = require('express')
const router = express.Router();
const { data } = require('../data')


router.get('/', (req, res) => {
    let nombres = data.map((articulo) => {
        return articulo.nombre
    })

    res.json(nombres)

})

router.get('/descripcion', (req, res) => {
    let descripcion = data.map((articulo) => {
        return articulo.descripcion

    })
    res.json(descripcion)

})

router.put('/filtro', (req, res) => {
    const seleccion_de_articulos = data.filter(articulo => req.body.id == articulo.id)
    res.json(seleccion_de_articulos)
})

router.put('/searh', (req, res) => {

    let busqueda_nombres = data.filter(articulo => req.body.nombre == articulo.nombre)
    res.json(busqueda_nombres)
})

router.put('/busqueda_precios', (req, res) => {
    let buscar_precios = data.filter(articulo => {

        if (req.body.clave == 0) {
            if (articulo.precio == req.body.precio)
                return true

        }
        if (req.body.clave == 1) {
            if (articulo.precio < req.body.precio)
                return true
        }
        if (req.body.clave == 2) {
            if (articulo.precio > req.body.precio)
                return true
        }
        return false
    })
    res.json(buscar_precios)
})

router.put('/descuento', (req, res) => {
    let descuento_articulo = data.filter(articulo => articulo.precio < req.body.precio)
        .map((articulo) => {
            return { ...articulo, precio: articulo.precio * 0.84, comentario: '' }

        })

    res.json(descuento_articulo)
})

router.put('/buscar', (req, res) => {
    const busqueda = data.filter(articulo => articulo.descripcion.includes('amarillo'))
    res.json(busqueda)

})

router.get('/total_dinero_articulos', (req, res) => {
    const Valor_Inicial= 0
    let dinero_productos = data.map(articulo => articulo.precio).reduce(
        (precio_previo, precio_actual) => precio_previo + precio_actual,
        Valor_Inicial
    )

    res.json(dinero_productos)

})


module.exports = router
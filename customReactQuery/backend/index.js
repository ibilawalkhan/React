import express from 'express'

const app = express()

app.get('/api/products', (req, res) => {
    const products = [
        {
            id: 1,
            name: 'iPhone 12',
            price: 999,
            description: 'The iPhone 12 is a smartphone designed and marketed by Apple Inc.',
            category: 'Electronics'
        },
        {
            id: 2,
            name: 'iPhone 13',
            price: 1200,
            description: 'The iPhone 13 is a smartphone designed and marketed by Apple Inc.',
            category: 'Electronics'
        },
        {
            id: 3,
            name: 'iPhone 14',
            price: 1400,
            description: 'The iPhone 14 is a smartphone designed and marketed by Apple Inc.',
            category: 'Electronics'
        },
        {
            id: 4,
            name: 'iPhone 15',
            price: 1500,
            description: 'The iPhone 15 is a smartphone designed and marketed by Apple Inc.',
            category: 'Electronics'
        },
        {
            id: 5,
            name: 'iPhone 16',
            price: 1600,
            description: 'The iPhone 16 is a smartphone designed and marketed by Apple Inc.',
            category: 'Electronics'
        },
    ]

    if (req.query.search) {
        const filterProducts = products.filter(product => product.name.includes(req.query.search))
        res.send(filterProducts)
        return
    }

    setTimeout(() => {
        res.send(products)
    }, 3000)
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
const generateOrderObject = (buyerName, buyerEmail, buyerPhone, products, total) => {
    return {
        buyer: {
            name: buyerName,
            email: buyerEmail,
            phone: buyerPhone,
        },
        items: products,
        total: total,
        createdAt: new Date().toLocaleString()
    }
}

export default generateOrderObject;

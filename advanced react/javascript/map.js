//Map method to transform list

const data = [
    {
        id: "1",
        title: "Tiramisu",
        description: "The best tiramisu in town",
        image: "cake.png",
        price: "$5.00",
        
    },
    {
        id: "2",
        title: "Lemon Ice Cream",
        description: "Mind blowing taste",
        image: "cake.png",
        price: "$4.50",
        
    },
    {
        id: "3",
        title: "Chocolate mousse",
        description: "Unexplored flavour",
        image: "mousse.png",
        price: "$6.00",
        
    },
];

const topDesserts = data.map(dessert => {
    return {
        content: `${dessert.title} - ${dessert.description}`,
        price: `${dessert.price}`,
    }
})

console.log(topDesserts)
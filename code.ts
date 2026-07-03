interface Item {
    name: string;
    price: number;
    quantity: number;
}

class Cart {

    private _items: Item[] = []; 

    public addItem(item: Item) {
        const cartItem = this._items.find(i => i.name.toLowerCase() === item.name.toLowerCase() )
        if (cartItem) {
            cartItem.quantity ++
            console.log("Item increased in cart")
        } else {
            this._items.push(item);
            console.log("Item added to cart")
        }
    }
    
    public removeItem(item: Item) {
        const cartItem = this._items.find(i => i.name.toLowerCase() === item.name.toLowerCase() )
        if (cartItem) {
            if (cartItem.quantity > 1) {
                cartItem.quantity --
                console.log("Item reduced in cart")
            }else if (cartItem.quantity === 1) {
                this._items = this._items.filter(i => i.name.toLowerCase() !== item.name.toLowerCase())
                console.log("Item removed from cart")
            }
        } else {
            throw new Error("Item not found in cart")
        }
    }
        
    public getTotal(): number {
        const total = this._items.reduce((start, current) => start + (current.price * current.quantity), 0);
        return total
    }

    public sortItem() {
        const 
    }
  
    }

function main() {
    const cart = new Cart();
    cart.addItem({
        name: "Apple",
        price: 1.0,
        quantity: 1
    });
    console.log("Total:", cart.getTotal())

 }

main()
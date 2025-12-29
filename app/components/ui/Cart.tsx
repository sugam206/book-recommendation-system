export default function Cart() {
    return (
        <div className="p-6 bg-amber-50 w-39 rounded-2xl ml-5 ">
            <img src="/images/cart-placeholder.png" alt="Cart" className="w-24 h-24 object-cover" />
            <p className="mt-2">Your cart is empty</p>
        </div>
    );
}
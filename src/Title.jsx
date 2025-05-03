import {
    useState

} from "react";
export default function Title() {

    const [order, setOrder] = useState(0);

    const handleOrderIncrease = () => {
        const count = order + 1;
        return setOrder(count);
    }

    return (
        <div className="text-center">
            <img className="w-96 h-96 border-4 border-fuchsia-400 rounded-2xl" src="/naohe.jpg" alt="excellent cake image" />
            <h1 className="font-extralight text-2xl">Vanilla Fudge</h1>
            <p>Yes Sweetness Overloaded!!</p>
            <section className="border-2 border-lime-400 rounded-xl">

                <h5 className="font-black text-2xl">Order Number: {order}</h5>
                <button onClick={handleOrderIncrease} className="m-3 p-2 bg-fuchsia-700 text-lg text-black font-semibold rounded-3xl hover:bg-amber-200 hover:cursor-pointer">Add</button>
                <button className="m-3 p-2 bg-fuchsia-700 text-lg text-black font-semibold rounded-3xl hover:bg-amber-200 hover:cursor-pointer">Subtract</button>
                <button className="m-3 p-2 bg-fuchsia-700 text-lg text-black font-semibold rounded-3xl hover:bg-amber-200 hover:cursor-pointer">Reset</button>
            </section>
        </div>
    )
}
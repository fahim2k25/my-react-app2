import { Suspense, use } from "react"
import RestUsers from "./RestUsers";

const fetchRestCustomer = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return response.json();
}

export default function Users({ fetchUsers }) {

    const customers = use(fetchUsers);
    const restCustomer = fetchRestCustomer();

    return (
        <div className="border-2 border-amber-600 rounded-3xl m-5">
            <h2 className="font-bold text-2xl">Customers :{customers.length}/{

                <Suspense fallback={<p>Issa Load..</p>}>
                    <RestUsers restCustomer={restCustomer}></RestUsers>
                </Suspense>

            } </h2>
            <p>Waiting in Queue</p>
        </div>
    )
}
import { use } from "react"

export default function RestUsers({ restCustomer }) {
    const restC = use(restCustomer);
    console.log(restC);
    return <span>{restC.length}</span>
}
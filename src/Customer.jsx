export default function Customer({ customer }) {
    const { name, email, phone } = customer
    return (
        <div className="border-2 border-cyan-700 m-2.5 text-teal-200">
            <p>Name: <span className="font-bold text-teal-500">{name}</span></p>
            <p>Email: <span className="font-bold text-teal-500">{email}</span></p>
            <p>Number: <span className="font-bold text-teal-500">{phone}</span></p>
        </div>
    )
}
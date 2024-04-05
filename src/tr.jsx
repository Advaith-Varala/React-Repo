export const Tablerow=(prop)=>{
    console.log(prop);
        const {items}=prop
        console.log(items)
    return (
    <tr>
        <td style={{ border: "1px solid black" }}>{items[0]}</td>
        <td style={{ border: "1px solid black" }}>{items[1]}</td>
        <td style={{ border: "1px solid black" }}>{items[2]}</td>
    </tr>
    )

}

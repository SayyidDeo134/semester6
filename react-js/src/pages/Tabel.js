function Tabel(props) {
    const menus = props.menu;
    const titel = props.titel;
    return (
        <div>
            <h1>{titel}</h1> 
            <table>
                <tr>
                    <th>Menu</th>
                    <th>Harga</th>

                </tr>

                {menus.map((data)=>(
                    <tr key={data.idmenu}>
                        <td>{data.menu}</td>
                        <td>{data.harga}</td>
                    </tr>
                ))}
                
            </table>
        </div>
        
    )
}

export default Tabel

function Listsiswa(props) {
const siswa = props.judul.map((item,i) =>
    <li key={i}>{item}</li>
    )
    return (
        <div>
            {/* <h1>{props.judul[0]}</h1> */}
            <ul>
                {siswa}
            </ul>
        </div>
    )
}

export default Listsiswa

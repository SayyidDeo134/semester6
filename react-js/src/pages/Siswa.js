import Listsiswa from "./Listsiswa"

function Siswa() {
    const nama = ['Joni','Anu','Alam']
    return (
        <div>
           <Listsiswa judul={nama} />
        </div>
    )
}

export default Siswa
